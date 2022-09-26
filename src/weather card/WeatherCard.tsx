import React from "react";
import "./weatherCard.css";
import LocationNameAndTime from "./location name and time/LocationNameAndTime";

import WeatherIconAndDescription from "./weather icon and description/WeatherIconAndDescription";
import WeatherDetails from "./weather details/WeatherDetails";

interface WeatherProps {
    locationName:string
    timezone:number
    description:string
    icon:string
    temperature:number
    windSpeed:number
    humidity:number
    pressure:number
}

export default function WeatherCard({windSpeed,humidity,pressure,temperature,icon,timezone,description,locationName}:WeatherProps):JSX.Element {
    return <div className={"weather-card-container"}>
        <LocationNameAndTime locationName={locationName} timezone={timezone}/>
        <div className={"weather-details"}>
            <WeatherIconAndDescription description={description} icon={icon}/>
            <WeatherDetails temperature={Math.round(temperature)} windSpeed={windSpeed} humidity={humidity} pressure={pressure}/>
        </div>
    </div>
}