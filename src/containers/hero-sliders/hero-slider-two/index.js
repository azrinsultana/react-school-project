import React from "react";
import Swiper from "react-id-swiper";
import sliderData from "../../../data/home/sliderData.json";
import HeroSliderTwoSingle from "../../../components/hero-sliders/hero-slider-two";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import styles from "./HeroSliderTwo.module.scss";
import './Style.css'

const HeroSlider = () => {
  const params = {
   
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    renderPrevButton: () => (
      <button
        className={`${styles.swiperButtonPrev} ${styles.htSwiperButtonNav} swiper-button-prev`}
      >
        <IoIosArrowBack />
      </button>
    ),
    renderNextButton: () => (
      <button
        className={`${styles.swiperButtonNext} ${styles.htSwiperButtonNav} swiper-button-next`}
      >
        <IoIosArrowForward />
      </button>
    )
  };
  return (
    <div className={`hero-slider bg-img  ${styles.heroSlider}  ${styles.sliderTwo}`}>
      <div className="slideActivation">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderTwoSingle
                  data={single}
                  key={key}
                  styles={styles}
                  sliderClassName="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
