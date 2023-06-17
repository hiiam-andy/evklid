import React from "react";

import './styles/normalize.css'
import './styles/style.css'

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowWeWorks from "./components/HowWeWorks";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <HowWeWorks/>
    <Questions/>
    <Footer/>
    </>
  );
}

export default App;
