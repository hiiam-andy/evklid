import React from "react";
import "../styles/normalize.css";
import "../styles/style.css";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import HowWeWorks from "../components/HowWeWorks/HowWeWorks";
import Questions from "../components/Questions/Questions";
import Footer from "../components//Footer/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowWeWorks />
      <Questions />
      <Footer />
    </>
  );
}
