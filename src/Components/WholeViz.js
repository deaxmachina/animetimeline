import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import _ from "lodash";
import dataLoad from "../data/mal_scrape_Jan8_limited.json";
import HeroSection from "./HeroSection";
import AnimeTimeline from "./AnimeTimeline";
import AnimeGraph from "./AnimeGraph";
import Footer from "./Footer";


const WholeViz = () => {

  /// states ///
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null)
  const [selectedYear, setSelectedYear] = useState(2020)
  const [studios, setStudios] = useState(null);

  /// Data load ///

  useEffect(() => {
    
    // transform data into just {year: 2020, number_anime: 800}
    // group the anime by year
    const mygroup = _.groupBy(dataLoad, function(anime){return anime.air_year})
    // transform the data so we end up with objects with year and number of unique anime in that year by mal_id 
    const mygroupData = []
      for (const [year, data] of Object.entries(mygroup)) {
          mygroupData.push({
              year: year,
              number_animes: (_.uniqBy(data, 'mal_id')).length
          })
      }
      // filter to the years that you want
      const filteredCountsList = _.filter(mygroupData, function(o) { 
        return o.year >= 1970 && o.year <= 2020
      });
    setData(filteredCountsList)

    // Get list of studios 
    // 1. add category for list of studios for each anime
    dataLoad.forEach(d => d.studiosList = _.map(d.producers, "name"))
    // 2. get list of studios; flatten it and count by number of appearance 
    const studios = _.map(dataLoad, d => d.studiosList)
    const studiosCounts = _.countBy(_.flatten(studios))
    // 3. sort the studious by number of appearance 
    let sortedStudios = _.chain(studiosCounts).
        map(function(count, studio) {
            return {
                studio: studio,
                count: count
            }
        })
        .sortBy('count')
        .value()
    sortedStudios = _.reverse(sortedStudios)
    setStudios(sortedStudios)
    setAllData(dataLoad)

  }, []);


  return (
    <div id="whole-graph-petalscircles">
      <HeroSection />

      <div className="whole-graph-petalscircles-container">
        <AnimeTimeline
          data={data}
          allData={allData}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <AnimeGraph
          allData={allData}
          selectedYear={selectedYear}
          setAllData={setAllData}
          studios={studios}
        />
      </div>

      <Footer/>
    </div>
  )
};

export default WholeViz;