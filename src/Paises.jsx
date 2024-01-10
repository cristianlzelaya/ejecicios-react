import React, {useState,useEffect} from 'react'
import numeroRandom from './components/helpers/generatorCountry';
import axios from 'axios';
import CountryCard from './components/CountryCard/CountryCard';
import { json } from 'react-router-dom';

const Paises = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [Country, setCountry] = useState(null)
    const [countryCardState, setCountryCardState] = useState([]);
    const numberCountry = numeroRandom(countryCardState.length)
    
    const getCountry = async ()=> {
        try {
            let data = await fetch(`https://restcountries.com/v3.1/all/`)
            let response = await data.json()
            // const {data} = await axios.get(`https://restcountries.com/v3.1/all/`);
            console.log(response);
            setIsLoading(false)
            console.log(countryCardState);   
            setCountryCardState(response)
        } catch (error) {
            console.log(error);
        }finally {
            setIsLoading(true)
        }
    }
    useEffect(() => {
        getCountry()
    }, [])
    
    useEffect(()=>{
        setCountry(countryCardState[numberCountry])
        console.log(Country);
        
    },[Country])
  return (<> {isLoading
    ? console.log("cargando paises")
    // : console.log("probando")
    : <CountryCard 
        imagen={Country.flags.png} 
        nombre={Country.name.common} 
        capital={Country.capital} 
        idioma={Object.values(Country.languages)[0]} 
        poblacion={Country.population} 
        moneda={Object.values(Country.currencies)[0].name} 
        simbolo={Object.values(Country.currencies)[0].symbol}
    />
}
  </>
  )
}
export default Paises