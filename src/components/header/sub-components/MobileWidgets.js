import React from "react";
import {
  FaPhone,
  FaRegEnvelope
} from "react-icons/fa";

import { GrFacebookOption} from "react-icons/gr";
import { GrLinkedinOption, GrYoutube} from "react-icons/gr";
import { AiOutlineTwitter} from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileWidgets = ({ styles }) => {
  return (
    <div className={styles.offcanvasWidgetArea}>
      <div className={styles.offCanvasContactWidget}>
        <div className={styles.headerContactInfo}>
          <ul className={styles.headerContactInfoList}>
            <li>
              <FaPhone /> <a  href="tel://12452456012">(1245) 2456 012 </a>
            </li>
            <li>
              <FaRegEnvelope />{" "}
              <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className={styles.offCanvasWidgetSocial}>

      <div className={`mt-2`}>
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


      




      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
