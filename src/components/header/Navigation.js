import React from "react";
import styles from "./Navigation.module.scss";
import Button from "../UI/button";
import Navdata from '../../data/home/nav.json'
import logo from '../../assets/images/school_logo.png'
// import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
    <nav>
      <ul className={`${styles.mainMenu} d-flex justify-content-center align-items-center`}>
      <li>
          <Link to="#">{Navdata.n1}</Link>
        </li>
      <li>
          <Link to="#">{Navdata.n2}</Link>
        </li>
        <li>
          <Link to="#">{Navdata.n3}</Link>
        </li>
        <li>
          <Link to="#">
          <img src={logo}  alt="slider" width={'100px'} height={'100px'} />
          </Link>
        </li>
        <li>
          <Link to="#">{Navdata.n4}</Link>
        </li>
        <li>
          <Link to="#">{Navdata.n5}</Link>
        </li>
        <li>
          <Link to="#">{Navdata.n6}</Link>
        </li>

      </ul>
      {/* <div className=" admission-btn">
      <button className="admission-btn-rakibul" >Admission</button>
      </div>
      <div className=" login-btn">
      <button className="admission-btn-rakibul" >Login</button>
      </div> */}
      <div className=" admission-btn-default">
      <Button type="link" url="/#" text="Admission" btnStyle="white" />
      </div>
      <div className=" login-btn-default">
      <Button type="link" url="/#" text="Login" btnStyle="white" />
      </div>
      
    </nav>
    
    </>
  );
};

export default Navigation;
