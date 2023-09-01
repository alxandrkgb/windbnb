import { createContext, useState } from "react";
import stays from '../data/stays.json';


export const ApartmentContext = createContext();


export default function ApartmentsContext({children}){
const [currentHomes, setCurrentHomes] = useState(stays);
    
    const updateHomes = (selectedLocation, guest) => {
     const newHomes =  stays.filter((value)=> {
        return value.location  == selectedLocation && value.maxGuests >= guest;
      });

      setCurrentHomes(newHomes);
      return;
    }

    const value = {
        currentHomes,
        updateHomes,
    }

    return   <ApartmentContext.Provider value={value}>
        {children}
    </ApartmentContext.Provider>
}