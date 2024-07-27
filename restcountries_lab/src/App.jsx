import {useEffect, useState } from 'react'
import CountriesComponents from './components/CountriesComponents';
import './App.css'

const App = () => {
  const[countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch ("https://restcountries.com/v3.1/all")
    const data = await response.json();
    setCountries(data);
  }

  const markCountryAsVisited = (country) => {
    const newCountries = [...countries];
    const newVisitedCountries = [...visitedCountries];

    const countryLocation = newCountries.indexOf(country);

    if (countryLocation === -1) {
      return
    }
    // remove country
    newCountries.splice(countryLocation, 1);
    // add new country
    newVisitedCountries.push(country);

    setCountries(newCountries);
    setVisitedCountries(newVisitedCountries); 

  }


  useEffect(() => {
    fetchCountries()
  }, []);


  return (
    <>
      <h1>Country Bucket List</h1>
      <h2>All Countries</h2>
      {countries ? 
      <CountriesComponents 
      countriesData={countries}
      // visitedCountries={visitedCountries}
      // setVisitedCountries={setVisitedCountries}
      handleNewCountry={markCountryAsVisited}
      /> :
      <p>Loading data ...</p>}
      <h3>Visited Countries</h3>
      <CountriesComponents
      countriesData={visitedCountries}
      handleNewCountry={markCountryAsVisited}/>
    </>
  )

}

export default App;
