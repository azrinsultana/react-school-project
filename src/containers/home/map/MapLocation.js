import { PropTypes } from "prop-types";
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import mapIcon from "../../../assets/images/icons/map.png";
import './map.css'

const MapLocation = props => {
  const mapStyles = {
    width: "98%",
    height: "80%"
  };

  return (
    <>
    <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-10 map pb-5 mb-5'>
          <div className='news-slider-heading'>
            <div className='news-title'>
            <h2 className='ml-1 mt-5 mb-1'>Map Location</h2>
            <div className='news-title-border mb-3 ml-1'></div>
            </div>
            
          </div>
          <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${mapIcon}`
        }}
        animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
          </div>
          </div>
    </>
    
  );
};

MapLocation.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"
})(MapLocation);
