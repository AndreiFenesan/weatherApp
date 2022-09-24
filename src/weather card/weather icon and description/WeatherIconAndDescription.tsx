import React from "react";
import "./weatherIconAndDescription.css"
export default function WeatherIconAndDescription() {
    return <div className={"icon-and-description-container"}>
        <img src={"http://openweathermap.org/img/wn/10d@2x.png"} alt={"Weather icon"}/>
        <div className={"weather-description"}>Description</div>
    </div>;
}