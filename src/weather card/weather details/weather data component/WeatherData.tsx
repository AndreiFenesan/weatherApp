import React from "react";
import "./weatherData.css"
import humidityIcon from "./728093.png";
interface weatherDataProps {
    value:string
    icon:string
}
export default function WeatherData ({value,icon}:weatherDataProps):JSX.Element {
    return <div className={"humidity-container"}>
        <img className={"weather-icon"} src={icon}/>
        <h3>{value}</h3>
    </div>
}