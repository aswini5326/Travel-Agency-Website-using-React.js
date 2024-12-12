import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import AboutImg from "../assets/night.jpg"
import Footer from '../Components/Footer/Footer';
import AboutUs from '../Components/About/AboutUs';

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass=".hero-text .hide"
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About;