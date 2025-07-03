import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <div className="font-sans">
      <Navbar />
      <Hero />
      <Collections />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}

export default App
