import React, { useState } from 'react'
import Swiper from "react-id-swiper";
import Event from '../../../assets/images/banner/upcomingevent.jpg'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Title from '../../../data/home/newstitle.json'
import Newsdetails from '../../../data/home/news.json'
import { BsAlarm } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import './News.css'

function News() {
  const [swiper, updateSwiper] = useState(null);
 
  const goNext = () => {
    
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
 
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".news-slider-button-next #nextbtn",
      prevEl: ".news-slider-button-prev"
    },
  
    
  };
  return (
    <>
     <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-10 news'>
          <div className='news-slider-heading'>
            <div className='news-title'>
            <h2 className='ml-1 mt-5 mb-1'>{Title.title}</h2>
            <div className='news-title-border mb-3 ml-1'></div>
            </div>
            <div className='arrow-btn'>
            <span  onClick={goNext}>
              <IoIosArrowBack/>
            </span>
        <span  onClick={goPrev}>
          <IoIosArrowForward/>
        </span>
            </div>
          </div>
        
        
        <div className='row news-slider-row'>
 <Swiper getSwiper={updateSwiper} {...params}>

 
            {Newsdetails &&
              Newsdetails.map((single, key) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1" key={key}>
                       <div className="card" >
                  <img src={Event} alt=" " className='img-fluid news-img'/>
                    <div className="card-body portfolio-text p-2">
                      <h3 className="card-title news-title pl-2 mt-2">{single.title}</h3>
                      <div className='pl-2 '>
                      <span className="icon-link">
                        <span className='mr-1 news-icon'><BsAlarm/></span>{single.Date}</span>
                              <span className="icon-link "><span className='ml-2 mr-1 news-icon'><MdMessage/>
                              </span>{single.message}</span>
                      </div>
                      <p className="card-text news-event-text pl-2 mt-2 mb-1">{single.text}</p>
                      <div className='mt-4 '>
                      <span className='news-btn m-2'>
                        <span className='news-btntext'>READ MORE</span> 
                      
                      </span>
                      </div>
                      
                    </div>
                  </div>
</div>
               
                );
              })}
              
          </Swiper>

          </div>



        </div>
    </div>

    </>
  )}
  export default News