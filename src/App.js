import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Country from './Components/Country'


function App() {

  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      console.log(res.data);
      setCountry(res.data)
      
    })
    .catch(error => console.log(error))
  },[])

  const handleChange = e => {
    setSearch(e.target.value)
  }



  const filterdCountry = country.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="app">
      <div className="app-search">
        <h1 className="app-text">Search a Country </h1>
        <form>
          <input type="text" placeholder="search" className="country-input" onChange={handleChange} />
        </form>
      </div>
      {filterdCountry.map(country => {
        return(
          <Country 
          key={country.id} 
          name={country.name} 
          alpha3Code={country.alpha3Code} 
          capital={country.capital}
          region={country.region}
          flag={country.flag}
          demonym={country.demonym}
          />

        );
      })}



    </div>
  );
}

export default App;
