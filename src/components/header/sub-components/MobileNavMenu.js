import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ styles }) => {
  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li className={styles.menuItemHasChildren}>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          
        </li>

        
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>About</Link>
        </li>
        
        
     
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Academics</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Sports & Co-curricular</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Research</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Pages</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Contact</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Admission</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/#"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
