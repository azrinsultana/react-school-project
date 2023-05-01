import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import HeroSlider from "../containers/hero-sliders/hero-slider-two";


import Whyjoin from "../containers/home/whyjoin/Whyjoin";


import Administration from '../containers/home/administration/Administration';
import Facilities from '../containers/home/facilities/Facilities'
import Upcomingevent from "../containers/home/upcomingevent/Upcomingevent";
import Parallax from '../containers/home/parallax/Parallax'
import News from '../containers/home/news/News'
import MapLocation from "../containers/home/map/MapLocation";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Home page</title>
        <meta
          name="description"
          content="Homepage of event management service."
        />
      </MetaTags>
      <LayoutOne footerBg="white">
      
        
        { <HeroSlider /> }
        
        <Whyjoin></Whyjoin>
        <Parallax></Parallax>
        <Administration></Administration>
    
        <Facilities></Facilities>
        <Upcomingevent></Upcomingevent>
        <News></News>

        {/* <MapLocation></MapLocation> */}
        <MapLocation latitude="47.444" longitude="-122.176" />
        <div>
        
        
      </div>
       
       
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
