import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, capital } = props.country;
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>{capital}</p>
        </div>
    );
};

export default Country;