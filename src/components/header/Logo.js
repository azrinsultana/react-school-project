import React from "react";



const Logo = () => {
  return (
    <div className="logo">
      <span to={process.env.PUBLIC_URL + "/"}>
        <h1 className="text-white">LOGO</h1>
      </span>
    </div>
  );
};

export default Logo;
