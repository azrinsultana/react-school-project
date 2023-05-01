import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";



const Facilitiessingle = ({ data, styles, sliderClass }) => {
  return (
    <div
      className={`col-12 col-sm-6 col-lg-4 ${sliderClass ? sliderClass : ""}`}
    >
      <div className={styles.blog}>
        <div className={`${styles.thumb} facilities-img`}>
          <Link to="#">
            <img
              src={require("./../../../assets/images/" + data.image)}
              alt=""
              width="410px"
            height="220px"
            />
          </Link>
        </div>
       
      </div>
    </div>
  );
};

Facilitiessingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default Facilitiessingle;
