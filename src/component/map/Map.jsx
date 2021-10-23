import React from 'react'
// import Rating from '@material-ui/lab/Rating';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
const Map = ({setBounds,setCoords,coords,places}) => {
    // AIzaSyBPIqROEQQANIzwOjxCnrmCuDmdFfrZ0yY
    // const coords={lat:51.507351,lng:-0.127758}
    // AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs js 
    return (
        <>
        
        <GoogleMapReact
         bootstrapURLKeys={{ key: 'AIzaSyBPIqROEQQANIzwOjxCnrmCuDmdFfrZ0yY'}}
         defaultCenter={coords}
         center={coords}
         defaultZoom={14}
         margin={[50, 50, 50, 50]}
         options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
         onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
            onChildClick={''}
  
       >
           



       </GoogleMapReact>
            
        </>
    )
}

export default Map
