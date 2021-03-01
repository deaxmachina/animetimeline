import React from "react";
import _ from "lodash";


const HeroSection = () => {
  return (
    <div id="whole-graph-petalscircles-hero">
      <h1 className="whole-graph-petalscircles-title">A Timeline of Anime</h1>
      <div className="whole-graph-petalscircles-subtitle">
        Explore the evolution of anime over the decades according to the popular anime fan websites <a href="https://myanimelist.net/" target="_blank">MyAnimeList</a>
      </div>

      <div className="whole-graph-petalscircles-instructions">
        <p className="whole-graph-petalscircles-instructions-title">How to read & interact with this visualisation</p>
        <ul className="whole-graph-petalscircles-instructions-list">
          <li><span>Each circle in the graph below the timeline = one anime.</span></li>
          <li><span>Sorted vertically by score (rating). Higher = greater score.</span></li>
          <li><span>The bigger the anime circle, the more members have seen the anime.</span></li>  
          <li><span>Number of constituent circles in each anime circle = number of genres.</span></li>    
          <li><span>General tip: Play around, explore! Most elements can be clicked/and or hovered to reveal more information or filter.</span></li>
        </ul>
      </div>  
      <p className="whole-graph-petalscircles-disclaimer">
        * Best viewed on a laptop/desktop screen.
      </p>
    </div>

  )
}

export default HeroSection;
