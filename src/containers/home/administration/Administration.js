import React from 'react'
import Data from '../../../data/home/administrationsection.json'
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import Adicon from '../../../assets/images/author/ad-icon.png'
import './Administration.css'

function Administration() {
  return (
    <>
        <div className='row justify-content-center align-items-center mt-5'>
          
            <div className='col-10 py-5 administration'>
              <div className='mb-sm-2 d-flex flex-column justify-content-center align-items-center'>
              <h2 className='ad'>Administration</h2>
          <img className='text-center ad-img' src={Adicon} alt="administration icon"/> 
         
              </div>
            
          
<div className='row  justify-content-center align-items-center pb-5 px-2 px-md-5'> 
{Data &&
            Data.map((single, key) => {
                return (
                  <div className='col-sm-6 col-md-4 col-lg-3 col-xxl-2 mt-4' key={key}>
                    <div className="card" >
                     <img className="card-img-top" 
                      src={require("../../../assets/images/" + single.image) } 
                      width="115px" height='180px'
                      alt=" " />
                      <div className="card-body p-2">
                        <p className="card-title mt-2 ml-2 name">{single.author}</p>
                       <div className='details'> 
                          <FaGraduationCap className='gra-icon text-secondary'></FaGraduationCap>
                          <span className="card-text">
                          {single.degree}
                          </span><br/>
                        
                          <AiOutlineCalendar className='gra-icon text-secondary'/>
                          <span>
                          {single.experience}</span>
                          </div>
                      </div>
                    </div>
                    
                    </div>
                );
              })}
              
</div>
            </div>


        </div>
    </>
  )}
  export default Administration