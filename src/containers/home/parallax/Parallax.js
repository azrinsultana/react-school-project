import React from 'react'
import { GiTrophyCup } from 'react-icons/gi';
import Parallaxdata from "../../../data/home/parallax.json"
import './Parallax.css'

function Parallax() {

  return (
    <>
     <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-10 parllax '>
            <div className='row justify-content-center align-items-center m-5 p-4 parallax-main'>
            {Parallaxdata &&
            Parallaxdata.map((single, key) => {
                return (
                    
                      <div className='col-12 col-lg-3 d-flex parallax-single' key={key} >
                    <div className='parallax-icon'>
                        <GiTrophyCup/> 
                    </div>
                    <div className='parallax-text-main mt-lg-0 ml-lg-2'>
                    <p className='parallax-number'>{single.number}</p>
                        <p className='parallax-text'>{single.name}</p>
                   
                    </div>
                  
                </div>
                    
                );
              })}


            </div>
        </div>
    </div>
    </>
  )}
  export default Parallax