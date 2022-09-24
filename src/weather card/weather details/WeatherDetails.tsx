import React from "react";
import "./weatherDetails.css"
import WeatherData from "./weather data component/WeatherData";
import Temperature from "../temperature component/Temperature";

export default function WeatherDetails() {
    return <div className={"weather-data-container"}>
        <WeatherData value={"30 m/s"} icon={"https://cdn1.iconfinder.com/data/icons/hawcons/32/699847-icon-43-wind-512.png"}/>
        <WeatherData value={"40%"} icon={"https://cdn-icons-png.flaticon.com/512/728/728093.png"}/>
        <WeatherData value={"40 Pa"} icon={"https://icon-library.com/images/pressure-icon-png/pressure-icon-png-7.jpg"}/>
        <Temperature/>
    </div>;
}