import React, {useState,useEffect} from 'react'
import numeroRandom from './components/helpers/generatorCountry';
import axios from 'axios';
import CountryCard from './components/CountryCard/CountryCard';
import { json } from 'react-router-dom';

const Paises = () => {
    const [country, setCountry] = useState()
    const [countryCardState, setCountryCardState] = useState();
    let numberCountry = countryCardState ? numeroRandom(countryCardState?.length) : null
    console.log("Country Card State: ", countryCardState);
    console.log("Country: ",country);
    console.log("Numero Random:", numberCountry);
    console.log("--------------------------------------------------------------");

    const getCountry = async ()=> {
        try {
            let data = await fetch(`https://restcountries.com/v3.1/all/`)
            let response = await data.json()
            // const {data} = await axios.get(`https://restcountries.com/v3.1/all/`);
            console.log(response);
            setCountryCardState(response)            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCountry()
    }, [])
    
    useEffect(()=>{
        console.log(countryCardState);
        if (countryCardState) {
            console.log("From useEffect: " ,countryCardState[5]);
            setCountry(countryCardState[5])
        }
    },[countryCardState])

    return (<> 
    {!country
    ? console.log("cargando paises")
    : <CountryCard 
        imagen={country?.flags.png} 
        nombre={country?.name.common} 
        capital={country?.capital} 
        idioma={Object.values(country?.languages)[0]} 
        poblacion={country?.population} 
        moneda={Object.values(country?.currencies)[0].name} 
        simbolo={Object.values(country?.currencies)[0].symbol}
    />
}
  </>
  )
}
export default Paises