import React from "react";
import "./temperature.css"

interface TemperatureProps {
    temperatureValue: number
}

export default function Temperature({temperatureValue}: TemperatureProps): JSX.Element {
    return <div className={"temperature-container"}>
        <div className={"temperature-text"}>{temperatureValue}<sup className={"temperature-sign"}>°C</sup></div>
    </div>
}