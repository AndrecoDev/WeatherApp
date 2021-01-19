import React from "react";
import "./styles.scss";
import Details from "../Details/Details";

export default function Weather({ consolidate, title, location_type }) {
    return (
        <div className="weather" >
            <h3>{title}</h3>
            <h6>{location_type}</h6>
            <Details details={consolidate} />
        </div>
    );
}