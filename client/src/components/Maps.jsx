import React from 'react';
import MapBoxGl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoidHlsZXJ0cnVvbmciLCJhIjoiY2o4MTFxbHN4NHZqMjJxbzN2bjNmMDByOCJ9.mZFEmpCfX5TytPpEujmYmg'
});

const Maps = (props) => {
  return (
  <div>
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      center={[-122.4194, 37.7749]}
      zoom={[12]}
      containerStyle={{
        height: "50vh",
        width: "100vw"
      }}>
        {props.bookmarks.map((bookmark) => {
          return <Popup
            key={bookmark.id}
            coordinates={[bookmark.long, bookmark.lat]}
            offset={[0, -10]}
            anchor='bottom'
            >
            {bookmark.name}
          </Popup>
        })}
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "fast-food-15" }}>

          {props.bookmarks.map((bookmark) => {
              return <Feature 
                        key={bookmark.id} 
                        coordinates={[bookmark.long, bookmark.lat]}
                        onClick={() => props.renderLocation(bookmark)}
                        >
                      </Feature>
            })
          }
          
        </Layer>

    </Map>
  </div>
    );
}

export default Maps;
