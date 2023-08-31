import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLocationDot, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Apartments from './Apartments';


export default function Header() {
  const [showSearchBar, setshowSearchBar] = useState(true);
  const [showOtherSearchBar, setshowOtherSearchBar] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Pick a Location");
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);


  const locationList = () => {
    setshowSearchBar(false);
    setshowOtherSearchBar(true);
    setShowLocationOptions(true);
    setShowGuestOptions(false);
  };

  const guestOptions = () => {
    setshowSearchBar(false);
    setshowOtherSearchBar(true);
    setShowGuestOptions(true);
    setShowLocationOptions(false);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowLocationOptions(true);
  };

  const closeOtherSearchBar = () => {
    setshowOtherSearchBar(false);
    setshowSearchBar(true);
  };

  const handleAdultCountChange = (count) => {
    setAdultCount(count);
    setShowGuestOptions(true);
  };

  const handleChildCountChange = (count) => {
    setChildCount(count);
  };

  const formatGuestButtonText = () => {
    const adultText = adultCount === 1 ? "1 Adult" : `${adultCount} Adults`;
    const childText = childCount === 1 ? "1 Child" : `${childCount} Children`;

    return `${adultText} ${childText}`;
  };

  const searchHomes = () => {
    setshowOtherSearchBar(false);
    setshowSearchBar(true);

    
  };


return ( 
    <div class=" flex flex-col md:flex-row justify-between min-h-[10vh] md:items-center px-5 md:px-[90px] pt-[30px]">
      {showSearchBar && (
      <div class=" mb-[3vh] md:mb-0">
        <img src=".\src\assets\logo.png" alt="logo" />
      </div>
      )}
      {showSearchBar ? (
      <div class=" shadow-md border rounded-[8px] flex items-center h-[55px] w-[90vw] md:w-[30vw] " >
        <div class=" w-[50%] h-full border-r-2 flex items-center justify-center" onClick={locationList}>
          <button class="text-zinc-800 text-sm font-normal" >{selectedLocation}</button>
        </div>

        <div class="w-[30%] h-full border-r-2 flex items-center justify-center" onClick={guestOptions}>
            <button class="text-stone-300 text-sm font-normal">Add guests</button>
        </div>

        <div class="w-[20%] h-[55px]">
        <button type="submit" class="flex items-center justify-center h-full w-full p-3" >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#eb5757",}} />
        </button>
        </div>
      </div>
      ) : null}

      
      {showOtherSearchBar && (
        <div className="md:hidden flex justify-between">
          <h1 className="text-zinc-800 text-base font-bold">Edit your search</h1>
          <button onClick={closeOtherSearchBar}><FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#333333",}} /></button>
          </div>
      )}
      {showOtherSearchBar ? (
        <div className="w-full md:h-[460px] bg-white flex justify-center pt-[70px] h-[500px]">
          <div className="w-[80%] md:h-[60px] bg-white rounded-2xl shadow flex items-center md:flex-row flex-col">
            <div className="md:w-[34%] md:h-full md:border-r-2 flex md:justify-start pl-5 w-full border-b-2 md:border-0" onClick={locationList}>
              <label className="text-zinc-800 text-[9px] font-extrabold pt-3">LOCATIONS</label>
              <button className="ml-[-55px] flex items-center md:pt-5 pt-7 md:pb-2 pb-2">{selectedLocation}</button>
              {showLocationOptions && (
              <div className="absolute md:mt-[80px] mt-[130px] md:ml-[-15px] ml-[-22px] bg-transparent rounded-md shadow-md md:w-[23%] w-[72%]">
                  <button 
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200" 
                    onClick={() => handleLocationClick("Helsinki, Finland")}
                  >
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#4f4f4f",}} /> Helsinki, Finland
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200" 
                    onClick={() => handleLocationClick("Turku, Finland")}
                  >
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#4f4f4f",}} /> Turku, Finland
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200" 
                    onClick={() => handleLocationClick("Olulu, Finland")}
                  >
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#4f4f4f",}} /> Olulu, Finland
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200" 
                    onClick={() => handleLocationClick("Vaasa, Finland")}
                  >
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#4f4f4f",}} /> Vaasa, Finland
                  </button>
                </div>
              )}
            </div>
            <div className="md:w-[34%] md:h-full md:border-r-2 border-b-2 flex justify-start md:pl-5 pl-5 md:border-0 w-full" onClick={guestOptions}>
              <label className="text-zinc-800 text-[9px] font-extrabold pt-3">GUESTS</label>
              <button className="ml-[-35px] flex items-center md:pt-5 pt-7 md:pb-2 pb-2">{formatGuestButtonText()}</button>
              {showGuestOptions && (
                <div className="absolute mt-3 bg-transparent rounded-md shadow-md mt-[80px] md:w-[23%] md:ml-[-15px] ml-[-18px] w-[71%]">
                  <div className="flex px-4 py-2 flex-col">
                    <div>
                      <label className="text-zinc-800 text-sm font-extrabold">Adults</label> <br />
                      <label className="text-zinc-600 text-xs">Ages 13 or above</label>
                    </div>
                    <div className="flex items-center space-x-1 mt-2 gap-2.5">
                      <button 
                        className="w-[23px] h-[23px] rounded border border-zinc-500" 
                        onClick={() => handleAdultCountChange(adultCount - 1)}
                        disabled={adultCount <= 1}
                      >
                        <FontAwesomeIcon icon={faMinus} style={{color: "#828282",}} />
                      </button>
                      <span>{adultCount}</span>
                      <button 
                        className="w-[23px] h-[23px] rounded border border-zinc-500" 
                        onClick={() => handleAdultCountChange(adultCount + 1)}
                      >
                        <FontAwesomeIcon icon={faPlus} style={{color: "#828282",}} />
                      </button>
                    </div>
                  </div>
                  <div className="flex px-4 py-2 border-t flex-col">
                    <div>
                      <label className="text-zinc-800 text-sm font-extrabold">Children</label> <br />
                      <label className="text-zinc-600 text-xs">Ages 2-12</label>
                    </div>
                    <div className="flex items-center space-x-1 mt-2 gap-2.5">
                      <button 
                        className="w-[23px] h-[23px] rounded border border-zinc-500"
                        onClick={() => handleChildCountChange(childCount - 1)}
                        disabled={childCount <= 0}
                      >
                        <FontAwesomeIcon icon={faMinus} style={{color: "#828282",}} />
                      </button>
                      <span>{childCount}</span>
                      <button 
                        className="w-[23px] h-[23px] rounded border border-zinc-500"
                        onClick={() => handleChildCountChange(childCount + 1)}
                      >
                        <FontAwesomeIcon icon={faPlus} style={{color: "#828282",}} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:w-[32%] md:h-full flex justify-center mt-60 md:mt-0 w-full">
              <button className="bg-rose-500 rounded-2xl shadow text-zinc-100 font-bold w-[127px] h-12 md:h-full" onClick={searchHomes}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#f2f2f2"}} /> Search
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
);
}