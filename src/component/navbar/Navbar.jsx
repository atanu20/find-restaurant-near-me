import React from 'react'
import './Navbar.css'
import { Autocomplete } from '@react-google-maps/api';
const Navbar = ({ onPlaceChanged,onLoad}) => {
    return (
        <>
       
            <div className="travelnav">
                <div className="logo">
                    <h2>NearByPlace</h2>
                </div>
                <div className="search">
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                
            <div class="input-group ">
              <input type="text" class="form-control" placeholder="Search here . . ." />
              <div class="input-group-append">
               
                <button type="submit" class="input-group-text btn"><i class="fa fa-search" aria-hidden="true"></i></button>
              </div>
            </div>
          
          </Autocomplete>
                </div>
            </div>
        </>
    )
}

export default Navbar
