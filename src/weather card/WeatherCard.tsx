import React from "react";
import "./weatherCard.css";
import LocationNameAndTime from "./location name and time/LocationNameAndTime";

import WeatherIconAndDescription from "./weather icon and description/WeatherIconAndDescription";
import WeatherDetails from "./weather details/WeatherDetails";


export default function WeatherCard():JSX.Element {
    return <div className={"weather-card-container"}>
        <LocationNameAndTime/>
        <div className={"weather-details"}>
            <WeatherIconAndDescription/>
            <WeatherDetails/>
        </div>
    </div>
}