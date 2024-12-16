import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import AboutImg from "../assets/night.jpg"
import Footer from '../Components/Footer/Footer';
import SignUp from '../Components/SignUp/SignUp';

function Signup() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="SignUp"
        // btnClass=".hero-text .hide"
      />
      <SignUp />
      <Footer />
    </>
  )
}

export default Signup;