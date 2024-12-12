import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import AboutImg from "../assets/2.jpg"
import ContactForm from "../Components/Contact/ContactForm";
import Footer from '../Components/Footer/Footer';


function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass=".hero-text .hide"
      />
      <ContactForm/>
      <Footer />
    </>
  )
}

export default Contact;