import './Countries.css';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="countries">
            {
                countries.map(country => {
                    return <Country country={country}></Country>
                })
            }
        </div>
    );
};

// function Country (props) {
//     const { name, flags, capital } = props.country;
//     return (
//       <div className="country">
//         <img src={flags.png} alt="" />
//         <h3>{name.common}</h3>
//         <p>{capital}</p>
//       </div>
//     )
//   }

export default Countries;