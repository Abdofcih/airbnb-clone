import { useState } from "react";
import MapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResult }) => {
  const [clickedPlace, setClickedPlace] = useState({});
  const longsLats = searchResult.map(({ long, lat }) => {
    return { longitude: long, latitude: lat };
  });
  const center = getCenter(longsLats);
  console.log(clickedPlace);

  return (
    <MapGl
      initialViewState={{
        ...center,
        zoom: 10
      }}
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: "100%", height: "600" }}
      mapStyle="mapbox://styles/abdo98/clajva7ij000514o3nu8q0ebt"
    >
      {searchResult.map((place, index) => {
        const { long, lat } = place;
        return (
          <div key={index} onClick={() => setClickedPlace(place)}>
            <Marker longitude={long} latitude={lat} anchor="bottom">
              <img
                className="cursor-pointer animate-bounce"
                src="/pin.png"
                alt="pin"
                width="50"
              />
            </Marker>
            {/* Popup when marker clicked */}
            {clickedPlace.long === place.long ? (
              <Popup
                closeOnClick={false}
                longitude={long}
                latitude={lat}
                offset={[-5, -60]}
                className="p-2"
              >
                {place.title}
              </Popup>
            ) : null}
          </div>
        );
      })}
    </MapGl>
  );
};

export default Map;
