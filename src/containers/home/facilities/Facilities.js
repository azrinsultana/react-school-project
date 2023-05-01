import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import Facilitiesimg from '../../../assets/images/banner/facilitiesborderimg.png'
import blogGridData from "../../../data/blog-grid/blog-grid-one.json";
import Facilitiessingle from "./Facilitiessingle";
 import styles from "../../blog-grid/blog-grid-one/BlogGrid.module.scss";
import './Facilities.css'


const Facilities = () => {
  const params = {
    loop: true,
    grabCursor: true,
   
    autoplay: {
      delay: 10000,
      disableOnInteraction: true
    },navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn"
      },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    },
    renderPrevButton: () => (
      <button
        className={`${styles.swiperButtonPrev} ${styles.htSwiperButtonNav} prev-btn`}
      >
        prev
      </button>
    ),
    renderNextButton: () => (
      <button
        className={`${styles.swiperButtonNext} ${styles.htSwiperButtonNav} next-btn`}
      >
       next
      </button>
    )
  };
  
  return (
<>
 <div className="row  justify-content-center align-items-center mt-5">
  <div className="col-10 facilities">
  <div className="row">
          

  <div className="col-12 mt-5">
  
  <SectionTitle text="Facilities & Infrastruture" />
  <p className="text-center title-second mb-0">World Class Academic Infrastructure</p>
  <div className="d-flex justify-content-center mb-3">
    <img src={Facilitiesimg} alt=""/>
  </div>
</div>

        </div>
        <div className="row justify-content-center align-items-center mb-5">
            <div className="col-9">
                <div className="row Facilities-slider">
                <Swiper {...params}>
            {blogGridData &&
              blogGridData.map((single, key) => {
                return (
                  <Facilitiessingle
                    data={single}
                    key={key}
                    styles={styles}
                    sliderClass="swiper-slide"
                  />
                );
              })}
          </Swiper>
                </div>
            </div>

            </div>

</div>
</div>


  
</>
     
    
  );
};

export default Facilities;
