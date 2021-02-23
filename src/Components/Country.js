import React from 'react';
//import '../components/Coin.css';
import '../Components/Country.css';


const Country = ({ name, alpha3Code, capital, region, flag, demonym }) => {
    return(
        <div className="country-container">
            <div className="country-row">
                <div className="country">
                    <img src={flag} alt="country-flag" className="col-0" />
                    <h1 className="col-1">{name}</h1>
                    <p className="col-2">{alpha3Code}</p>
                    <p className="col-3">{capital}</p>
                    <p className="col-4">{region}</p>
                    <p className="col-5">{demonym}</p>
                   
                </div>
            </div>
        </div>
    )
}

export default Country;