import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
