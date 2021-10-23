import React,{useState,useEffect} from 'react'


import './App.css'
import Navbar from './component/navbar/Navbar'
import List from './component/list/List'
import Map from './component/map/Map'
import axios from "axios";

const App = () => {
  const [places, setPlaces] = useState([])
  const [autocomplete, setAutocomplete] = useState(null);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
  //     setCoords({ lat: latitude, lng: longitude });
  //   });
  // }, []);

  useEffect(() => {
     const filtered = places.filter((place) => Number(place.rating) > rating );
     setFilteredPlaces(filtered);
    
    // setPlaces(filtered);
    console.log(filtered)
  }, [rating]);

  useEffect(() => {
    
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async(position)=> {
       
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        
        setCoords({ lat: position.coords.latitude, lng: position.coords.longitude });
      if(bounds)
      {
        const res=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
  params: {
    bl_latitude: bounds.sw.lat,
    bl_longitude: bounds.sw.lng,
    tr_longitude: bounds.ne.lng,
    tr_latitude: bounds.ne.lat,
   
  },
  headers: {
    'x-rapidapi-key': 'd53cafe20emsh6b86de634209debp13fd47jsn31390864cd50',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
})
setPlaces(res.data.data.filter((place) => place.name && place.num_reviews > 0))
setFilteredPlaces([]);
     setRating('');
// console.log(res.data.data)
setIsLoading(false);
      }

    })
  
}, [type,bounds])

const onLoad = (autoC) => setAutocomplete(autoC);

const onPlaceChanged = () => {
  const lat = autocomplete.getPlace().geometry.location.lat();
  const lng = autocomplete.getPlace().geometry.location.lng();

  setCoords({ lat, lng });
};
// console.log(coords)
// console.log(bounds)
  return (
    <>
    <Navbar
    onPlaceChanged={onPlaceChanged} 
    onLoad={onLoad}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 mx-auto">
      <List
      
      setType={setType}
      places={filteredPlaces.length ? filteredPlaces : places}
      setRating={setRating}
      isLoading={isLoading}
      rating={rating}
      type={type}
      
      />
        </div>
        <div className="col-8 mx-auto p-3">
        <Map
         setBounds={setBounds}
         setCoords={setCoords}
         coords={coords}
         places={filteredPlaces.length ? filteredPlaces : places}
        />
          
        </div>
      </div>
    </div>


    

      
    </>
  )
}

export default App
