import React from 'react';
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/4.jpg";
import "./Destination.css"
import DestinationData from './DestinationData';


function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours gives you the Opportunity to see a lot, within a time frame.</p>
        <DestinationData
            className="first-des" 
            heading="Taal Volcanno, Batangas"
            text="Taal Volcano, located in Batangas, Philippines, is one of the most captivating and unique geological formations in the world. Known as the world’s smallest active volcano, it sits within a lake called Taal Lake, which itself was formed by ancient volcanic activity. This extraordinary feature creates a 'volcano within a lake within a volcano,' offering breathtaking landscapes that attract nature enthusiasts, geologists, and travelers alike."
            img1={Mountain1}
            img2={Mountain2}
        />
        <DestinationData 
        className="first-des-reverse" 
            heading="Mt. Daguldul, Batangas"
            text="Mt. Daguldul, located in the coastal town of San Juan, Batangas, is a popular destination for nature lovers and adventure enthusiasts. Known for its beginner-friendly trails and lush green landscapes, this mountain offers a perfect escape from the hustle and bustle of city life.

The trek to Mt. Daguldul’s summit takes adventurers through scenic forests, rustic villages, and occasional glimpses of the sparkling coastline. Along the way, trekkers can enjoy refreshing stops at waterfalls, natural pools, and serene beaches. The summit rewards hikers with breathtaking views of Batangas’ rolling hills, verdant landscapes, and the vast expanse of the South China Sea."
            img1={Mountain3}
            img2={Mountain4}
        />
    </div>
  )
}

export default Destination;