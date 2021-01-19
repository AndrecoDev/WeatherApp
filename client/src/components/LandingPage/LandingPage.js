import React, { useState, useEffect } from 'react'
import { URL } from '../../Config';
import { getCities } from '../../helpers/getCities';
import Search from '../Search/Search';
import WeatherList from '../WeatherList/WeatherList';

export default function LandingPage() {
    const url = `${URL}/cities`;
    const [cities, setCities] = useState([]);

    useEffect(() => {
        getCities(url)
            .then(setCities);
    }, [url])

    return (
        <>
            <Search setCities={setCities} />
            <WeatherList cities={cities} />
        </>
    )
}
