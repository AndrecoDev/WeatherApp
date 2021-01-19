import React, { useState } from 'react';
import { URL } from '../../Config';
import { getCities } from '../../helpers/getCities';
import './styles.scss';

export default function Search({ setCities }) {
    const [imputCity, setImputCity] = useState('');
    const [city, setCity] = useState({});
    const url = `${URL}/search/?query=${encodeURI(imputCity)}`;

    const handleInputChange = (e) => {
        setImputCity(e.target.value)
    }

    const handleClick = () => {
        setCities(cities => [city, ...cities]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (imputCity.trim().length > 0) {
            getCities(url)
                .then(setCity);
            setImputCity('')
        }
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="search_input"
                    placeholder="Type your City!"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
            </form>
            <div className="search_item">
                {
                    Object.keys(city).length > 0 && <button className="search_item-button" onClick={handleClick}>{city.title} - Click to add</button>
                }
            </div>
        </div>
    )
}
