import PropTypes from "prop-types";
import React from "react";

import { IoIosMenu } from "react-icons/io";

const HeaderBtn = ({ styles }) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add(styles.active);
    document.body.classList.add('fixed-body-position')
  };
  return (
    <div className="header__btn text-right">
      <div className="desktop-button-wrapper d-none d-lg-block">
        {/* <Button type="link" url="/login" text="" btnStyle="white" /> */}
      </div>
      <div className={`${styles.mobileButtonWrapper} d-block d-lg-none`}>
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
};

HeaderBtn.propTypes = {
  styles: PropTypes.object
};

export default HeaderBtn;
