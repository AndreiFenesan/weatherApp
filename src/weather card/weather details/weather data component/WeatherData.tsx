import React from "react";
import "./weatherData.css"

interface weatherDataProps {
    value: string
    icon: string
}

export default function WeatherData({value, icon}: weatherDataProps): JSX.Element {
    return <div className={"data-container"}>
        <img className={"weather-icon"} src={icon} alt={"weather icon"}/>
        <h3>{value}</h3>
    </div>
}