// MapComponent.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  // Default location coordinates
  const defaultCenter = {
    lat: 40.7128, // New York latitude
    lng: -74.006, // New York longitude
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "500px" }}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
