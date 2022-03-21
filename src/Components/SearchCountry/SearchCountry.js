import React, { useEffect, useState } from 'react';

const SearchCountry = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        const searchText = document.getElementById('search-input').value;
        const url = `https://restcountries.com/v3.1/name/${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div className="countries">
            {
                countries.map(country => {
                    const { name, flags, capital } = country;
                    return <SearchedCountry flag={flags.png} name={name.common} capital={capital}></SearchedCountry>
                })
            }
        </div>
    );
};
function SearchedCountry (props) {
    return (
      <div className="country">
        <img src={props.flag} alt="" />
        <h3>{props.name}</h3>
        <p>{props.capital}</p>
      </div>
    )
  }

export default SearchCountry;