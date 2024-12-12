import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Hero from '../Components/Hero/Hero';
import HeroImg from "../assets/Hero.jpg";
import Destination from '../Components/Destination/Destination';
import Trip from '../Components/Trip/Trip';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero"
    heroImg={HeroImg}
    title="Your Journey Your Story"
    text="Choose Your Favorite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination />
    <Trip />
    <Footer />
    </>
  )
}

export default Home;