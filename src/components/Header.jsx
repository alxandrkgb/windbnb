import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Header() {



  return (
    <div class=" flex flex-col md:flex-row justify-between min-h-[10vh] md:items-center px-5 md:px-[90px] pt-[30px]">
      <div class=" mb-[3vh] md:mb-0">
        <img src=".\src\assets\logo.png" alt="logo" />
      </div>

      <div class=" shadow-md border rounded-[8px] flex items-center h-[55px] w-[90vw] md:w-[30vw] ">
        <div class=" w-[50%] h-full border-r-2 flex items-center justify-center">
          <button class="text-zinc-800 text-sm font-normal">Helsinki, Finland </button>
        </div>
        <div class="w-[30%] h-full border-r-2 flex items-center justify-center">
            <button class="text-stone-300 text-sm font-normal">Add guests</button>
              
          </div>
        <div class="w-[20%] h-[55px]">
        <button type="submit" class="flex items-center justify-center h-full w-full p-3" >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#eb5757",}} />
        </button>
        </div>
      </div>
    </div>
);
}