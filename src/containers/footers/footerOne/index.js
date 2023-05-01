import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { GrFacebookOption} from "react-icons/gr";
import { GrLinkedinOption, GrYoutube} from "react-icons/gr";
import { AiOutlineTwitter} from "react-icons/ai";
import Footerdata from "../../../data/home/footer.json";
import logo from '../../../assets/images/school_logo.png'
import styles from "./Footer.module.scss";


const Footer = ({ footerBg }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area mt-5 ${footerBg === "white" ? styles.footer2 : ""}`}
    >
      <div
        className={`${styles.footerTop} ${
          footerBg === "white" ? "bg--cart-7" : "bg--cart-2"
        }`}
      >
        <div className="container footer-bg">
          <div className="row pl-3 pl-lg-0">
            {/* Start Single Wedget */}
            <div className="col-12  col-lg-3">
              <div className={styles.singleWidget}>
                <div className="d-flex justify-content-center align-items-center">
                <img src={logo}  alt="slider"  />
                </div>
                <div className={styles.content}>
                  <p className="text-lg-center">
                  {Footerdata.cpy1}  &copy; {Footerdata.cpyright} <br/>{Footerdata.cpy2}                 
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-12 mt-5 mt-lg-0 col-lg-3 offset-lg-1 footer-navigation xs__mt--40 d-flex align-items-center flex-column">
              <div className={` ${styles.singleWidget}  `}>
                <h2 className={styles.ftTitle} >{Footerdata.nav}</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to="#">
                      {Footerdata.about}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {Footerdata.admission}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {Footerdata.academics}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {Footerdata.research}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      {Footerdata.contact}
                    </Link>
                  </li>
               
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
     
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                  
      <div className="footer-contact-text">
     
      <h2 className={styles.ftTitle}>{Footerdata.contact}</h2>
               
               <p className="footer-text">{Footerdata.address}</p>
               <span className="footer-text">
               <a className='footer-text' href="mailto:info@yourdomain.com">{Footerdata.email}</a>
                </span><br/>
               <span className="footer-text">
               <a className='footer-text' href="tel://12452456012">{Footerdata.phone} </a>
                </span>
              
               
               <div className={`${styles.ftSocialLink} mt-4`}>
               <ul className={styles.socialIcon}>
                 <li>
                   <Link className='fb-icon' to="#/">
                   <GrFacebookOption/>
                   </Link>
                 </li>
                 <li >
                   <Link className='youtube-icon' to="#/">
                   <GrYoutube/>
                   </Link>
                 </li>
                 <li>
                   <Link className='linkedin-icon' to="#/">
                     <GrLinkedinOption />
                   </Link>
                 </li>
                 <li>
                   <Link className='twitter-icon' to= "#/">
                     <AiOutlineTwitter />
                   </Link>
                 </li>
               </ul>
             </div>
      </div>

              </div>
              
            </div>
            {/* End Single Wedget */}
          </div>
        </div>
      </div>
   
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
        
      >
        <span><i className="fa fa-angle-up" aria-hidden="true"></i></span>
        
       
      </button>
    </footer>
  );
};

Footer.propTypes = {
  footerBg: PropTypes.string
};

export default Footer;
