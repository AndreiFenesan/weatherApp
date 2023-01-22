import React from "react";
import "./weatherCard.css";
import LocationNameAndTime from "./location name and time/LocationNameAndTime";

import WeatherIconAndDescription from "./weather icon and description/WeatherIconAndDescription";
import WeatherDetails from "./weather details/WeatherDetails";
import DeleteCardButton from "./deleteCardButton/DeleteCardButton";

interface WeatherProps {
    locationName: string
    timezone: number
    description: string
    icon: string
    temperature: number
    windSpeed: number
    humidity: number
    pressure: number
    mainWeather: string
    deleteCardButtonHandler: () => void
}

export interface MyCustomCSS extends React.CSSProperties {
    '--backgroundColor': number;
}

export default function WeatherCard({
                                        windSpeed,
                                        humidity,
                                        pressure,
                                        temperature,
                                        icon,
                                        timezone,
                                        description,
                                        locationName,
                                        deleteCardButtonHandler,
                                        mainWeather,
                                    }: WeatherProps): JSX.Element {


    let backgroundColor = ""
    console.log(mainWeather)
    if (mainWeather === "mist" || mainWeather === "fog") {
        console.log("Here")
        backgroundColor = "linear-gradient(0deg, rgba(184, 185, 180, 0.8) 30%, rgba(102, 108, 104, 0.8) 65%)"
    } else if (mainWeather === "rain" || mainWeather === "clouds") {
        backgroundColor = "linear-gradient(0deg, rgba(125, 159, 176, 0.8) 30%, rgba(22, 124, 143, 0.8) 65%)"
    }

    // @ts-ignore
    return <div className={"weather-card-container"} style={{"--backgroundColor": `${backgroundColor}`}}>
        <LocationNameAndTime locationName={locationName} timezone={timezone}/>
        <DeleteCardButton deleteCardClickHandler={deleteCardButtonHandler}/>
        <div className={"weather-details"}>
            <WeatherIconAndDescription description={description} icon={icon}/>
            <WeatherDetails temperature={Math.round(temperature)} windSpeed={windSpeed} humidity={humidity}
                            pressure={pressure}/>
        </div>
    </div>
}