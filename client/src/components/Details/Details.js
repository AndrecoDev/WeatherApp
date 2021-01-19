import React from 'react';
import './styles.scss';

export default function Details({ details }) {
    const url = "https://www.metaweather.com/static/img/weather/";
    const getDay = (date) => {
        let actual = new Date();
        let day = date.slice(8, 10);
        actual.setDate(day);
        let weekday = actual.toLocaleString("default", { weekday: "long" })
        return weekday;
    }

    return (
        <div className="details">
            {
                details.map((item, id) =>
                    <div key={id}>
                        <dl>{getDay(item.applicable_date)}</dl>
                        <dd> <h6>{item.weather_state_name}</h6></dd>
                        <img src={url + item.weather_state_abbr + ".svg"}
                            alt={item.weather_state_name} />
                        <dd><h5>Max: {Math.round(item.max_temp)}°C</h5></dd>
                        <dd><h5>Min: {Math.round(item.min_temp)}°C</h5></dd>
                    </div>

                )
            }
        </div>
    )
}
