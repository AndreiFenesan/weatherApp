import React from "react";
import "./weatherDetails.css"
import WeatherData from "./weather data component/WeatherData";
import Temperature from "../temperature component/Temperature";

interface WeatherDetailsProps {
    windSpeed:number
    humidity:number
    pressure:number
    temperature:number
}

export default function WeatherDetails({windSpeed,humidity,pressure,temperature}:WeatherDetailsProps) {
    return <div className={"weather-data-container"}>
        <WeatherData value={`${windSpeed} m/s`} icon={"https://cdn1.iconfinder.com/data/icons/hawcons/32/699847-icon-43-wind-512.png"}/>
        <WeatherData value={`${humidity}%`} icon={"https://cdn-icons-png.flaticon.com/512/728/728093.png"}/>
        <WeatherData value={`${pressure} hPa`} icon={"https://cdn-icons-png.flaticon.com/512/5132/5132433.png"}/>
        <Temperature temperatureValue={temperature}/>
    </div>;
}