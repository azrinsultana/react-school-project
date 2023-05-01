import React from 'react'
import Data from '../../../data/home/upcomingevent.json'
import Upcomingdataslider from '../../../data/home/upcomingeventslider.json'
import Swiper from "react-id-swiper";
import Event from '../../../assets/images/banner/upcoming-event.jpg'
import './Upcomingevent.css'

function Upcomingevent() {
  const params = {
   
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
    
  };
  return (
    <>
    <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-10 upcomingevent py-5 px-3'>
    <div className="row upcoming-even-wrapper">
      <div className="col-lg-6">
        <h2>{Data.title1}</h2>
        <div className="event-img">
          <span>{Data.date}</span>
          <img src={Event} className="event-image-img" alt="event-img" />
          <div>
          <div className=' event-img-text p-3'>
            <h3 className='pb-0 mb-0 text-white'>{Data.eventtitle}</h3>
            <div className='border-title-img'>
          </div>
            <p className='mt-3 text-white'>{Data.text}</p>
          </div>
          </div>
    
        </div>
       
      </div>
      <div className="col-lg-6 mt-5 mt-lg-0">
        <h2>{Data.title2}</h2>

        <Swiper {...params}>
    {Upcomingdataslider &&
      Upcomingdataslider.map((single, key) => {
        return (
<div key={key}>


          <div className='row event-list d-flex'>
          <div className='col-3 col-lg-2 event-date'>
          <div className='event-date-color'>
            <div className='d-flex flex-column align-items-center justify-content-center event-border-dash  m-1 '>
              <span className='event-date1'>{single.date}</span>
              <span className='event-date2'>{single.month}</span>
            </div>
          </div>
          </div>
          <div className='col-9 col-lg-10 event-text'>
            <h3 className='pb-0 mb-0'>{single.eventtitle}</h3>
            <div className='border-title'>

    </div>
            <p className='mt-md-3'>{single.text}</p>
          </div>
      </div>

      <div className='d-flex justify-content-center m-3'>
        <div className='border-class'>

        </div>
       </div>

      <div className='row event-list d-flex'>
          <div className='col-3 col-lg-2 event-date'>
          <div className='event-date-color'>
            <div className='d-flex flex-column align-items-center justify-content-center event-border-dash  m-1 '>
              <span className='event-date1'>{single.date}</span>
              <span className='event-date2'>{single.month}</span>
            </div>
          </div>
          </div>
          <div className='col-9 col-lg-10 event-text'>
            <h3 className='pb-0 mb-0'>{single.eventtitle}</h3>
            <div className='border-title'>

    </div>
            <p className='mt-md-3'>{single.text}</p>
          </div>
      </div>
      </div>
        );
      })}
      
    </Swiper> 









 
      </div>
    </div>
  

        </div>
    </div>


    </>
  )}
  export default Upcomingevent