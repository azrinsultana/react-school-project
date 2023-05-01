import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ type, url, text, btnStyle }) => {
  if (type === "link") {
    return (
      <Link
        className={`${styles.schoolmgtBtn} ${
          btnStyle === "white" ? styles.schoolmgtBtnWhite : ""
        } ${btnStyle === "light" ? styles.schoolmgtBtnLight : ""}`}
        to={process.env.PUBLIC_URL + url}
      >
        {text}
      </Link>
    );
  }
  if (type === "button") {
    return (
      <button
        className={`${styles.schoolmgtBtn} ${
          btnStyle === "white" ? styles.schoolmgtBtnWhite : ""
        } ${btnStyle === "light" ? styles.schoolmgtBtnLight : ""}`}
      >
        {text}
      </button>
    );
  }
  return "";
};

Button.propTypes = {
  btnStyle: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
};

export default Button;
