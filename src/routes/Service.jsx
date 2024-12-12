import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import  ServiceImg from "../assets/night.jpg"
import Trip from "../Components/Trip/Trip"
import Footer from '../Components/Footer/Footer';


function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass=".hero-text .hide"
      />
      <Trip />
      <Footer />
    </>
  )
}

export default Service;