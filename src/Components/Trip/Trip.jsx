import React from 'react'
import "./Trip.css"
import TripData from './TripData'
import Trip1 from "../../assets/5.jpg"
import Trip2 from "../../assets/8.jpg"
import Trip3 from "../../assets/6.jpg"

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
            <TripData 
               image={Trip1}
               heading="Trip in Indonesia"
               text="Indonesia, the world’s largest archipelago, offers an unforgettable travel experience filled with diverse landscapes, rich cultures, and vibrant traditions. From its pristine beaches to lush jungles and ancient temples, Indonesia is a treasure trove for adventurers, culture enthusiasts, and nature lovers."    
            />
            <TripData 
               image={Trip2}
               heading="Trip in Malaysia"
               text="Begin your journey in Kuala Lumpur, the vibrant capital, known for its iconic Petronas Twin Towers, bustling markets, and cultural landmarks like Batu Caves and Merdeka Square. Explore the historic streets of George Town in Penang, a UNESCO World Heritage Site famous for its colonial architecture and mouthwatering street food."
            />
            <TripData 
               image={Trip3}
               heading="Trip in France"
               text="France, the epitome of romance, culture, and sophistication, is a dream destination for travelers from around the globe. Known for its rich history, world-renowned art, and exquisite cuisine, a trip to France promises unforgettable memories. Begin in Paris, the City of Light, where iconic landmarks like the Eiffel Tower."
            />
        </div>
    </div>
  )
}

export default Trip