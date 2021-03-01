import React from "react";

const Footer = () => {
  return (
    <div className="whole-graph-petalscircles-footer">  
      <p className="whole-graph-petalscircles-methodology">Methodology</p>
      <ul className="whole-graph-petalscircles-methodology-list">
        <li>
          For each anime, the anime is displayed once, even if it ran over multiple seasons. For long-running anime that means they end up being put in the winter season as it is the first of the year.
        </li>
        <li>
          The colouring of the genres is based on a completely subjective ordering of "seriousness", aiming to give a visual representation of what kind of anime are most popular. 
        </li>
        <li>
          "Popular but low score anime" are defined as anime with number of members who have seen it in the 75th percentile, but with mean score below 6.5/10.
        </li>
      </ul>
      <p className="whole-graph-petalscircles-p">
        Data from 
        <a href="https://myanimelist.net/" target="_blank"> MyAnimeList</a>. 
        I do not own any of the data.
      </p>   
      <p className="whole-graph-petalscircles-p">
        Project as part of 100DaysOfCode with D3.js challenge. Project inspiration: Shirley Wu Front End Masters 
        <a href="https://frontendmasters.com/courses/d3/" target="_blank"> course</a>.
      </p>
      <p className="whole-graph-petalscircles-p">made by  
        <span> Dea Bankova </span>
      </p>
      <p>©2021</p>
    </div>
  )
};

export default Footer;