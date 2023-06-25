import React from "react";
import Carousel from "nuka-carousel";
import style from "../../styles/Hero.module.css";

export default function HeroCarousel() {
  const slides = [
    { alt: "slide1", image: require("../../img/hero1.jpg") },
    { alt: "slide2", image: require("../../img/hero2.jpg") },
    { alt: "slide3", image: require("../../img/hero3.jpg") },
  ];
  let res = slides.map((slide) => {
    return (
      <img
        className={style.sliderImage}
        src={slide.image}
        alt={slide.alt}
        key={slide.image}
      />
    );
  });

  return (
    <Carousel
      withoutControls={true}
      wrapAround={true}
      autoplay={true}
      autoplayInterval={5000}
    >
      {res}
    </Carousel>
  );
}
