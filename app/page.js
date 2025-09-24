"use client"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industry from './components/Industry';
import JoinUs from './components/JoinUs';
import Frequent from './components/Frequent';
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Industry/>
    <JoinUs/>
    <Frequent/>
    <Footer/>
    </>
  );
}
