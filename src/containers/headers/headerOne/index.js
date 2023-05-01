import React, { useEffect, useState } from "react";

import Navigation from "../../../components/header/Navigation";
import HeaderBtn from "../../../components/header/HeaderBtn";
import MobileMenu from "../../../components/header/MobileMenu";
import styles from "./Header.module.scss";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`${styles.headerArea} ${
        scroll > headerTop ? styles.stick : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* <div className="col-6 col-lg-3">
          
            <Logo />
          </div> */}
          <div className="col-lg-12 col-xl-9 d-none d-lg-block">
            {/* navigation */}
            <Navigation />
          </div>
          {/* header button */}
          <div className="">
            
            <HeaderBtn styles={styles} />
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu styles={styles} />
      </div>
    </header>
  );
};

export default Header;
