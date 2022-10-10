import React from "react";
import "./weatherIconAndDescription.css"

interface WeatherIconAndDescriptionProps {
    description: string
    icon: string
}

export default function WeatherIconAndDescription({description, icon}: WeatherIconAndDescriptionProps) {
    return <div className={"icon-and-description-container"}>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={"Weather icon"}/>
        <div className={"weather-description"}>{description}</div>
    </div>;
}