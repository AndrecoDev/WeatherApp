import React, { useState, useEffect } from 'react'
import Snipper from '../Snipper/Snipper';
import Weather from '../Weather/Weather';
import './styles.scss';

function WeatherList({ cities }) {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > cities.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = cities.length - 1
            }
            return index
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > cities.length - 1) {
                    index = 0
                }
                return index
            })
        }, 10000)

        return () => {
            clearInterval(slider);
        }
    })

    return (
        <>
            {
                cities.length === 0 ? <Snipper /> :
                    cities.map((city, id) => {
                        let position = 'nextSlide';
                        if (id === index) {
                            position = 'activeSlide'
                        }
                        if (
                            id === index - 1 ||
                            (index === 0 && id === cities.length - 1)
                        ) {
                            position = 'lastSlide'
                        }
                        return (
                            <article className={position} key={id}>
                                <button className="prev" onClick={prevSlide}>{"<"}</button>
                                <button className="next" onClick={nextSlide}>{">"}</button>
                                <Weather id={id} consolidate={city.consolidated_weather} title={city.title} time={city.time} location_type={city.location_type} />
                            </article>)
                    }
                    )
            }
        </>
    )
}

export default WeatherList
