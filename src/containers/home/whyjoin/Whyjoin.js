import React from 'react'
import SectionTitle from '../../../components/UI/section-title/section-title-one';
import Apjimg from '../../../assets/images/client/apj.png'
import Data from '../../../data/home/Welcomesection.json'
import './Whyjoin.css'
function Whyjoin() {
   
  return (
    <>
<div className='row  pt-4 justify-content-center' id='whyus'>
    <div className='col-10 why-join-wrapper mt-5 mb-4 '>
        <div className=''>
            <div className="row">
            <div className='col-sm-12 col-lg-8 title text-center  py-5'>
                {/* <h1>Why Join</h1> */}
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-9 '>
                    <SectionTitle text={Data.title} />
            <p className='mt-3 text-black'>{Data.text}
            </p>
            <img src={Data.signImg} alt="sign-img" />
                    </div>
                </div>
               
            </div>
            
            <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center mb-5 md-mb-0'>   
            <img className='welcome-image' src={Apjimg} alt="apj"/>
            </div>
            </div>
            
        </div>
    </div>

</div>
    </>
  )
}

export default Whyjoin