import React from "react";
import "./temperature.css"
export default function Temperature(): JSX.Element {
    return <div className={"temperature-container"}>
        <div className={"temperature-text"}>5  <sup className={"temperature-sign"}>°C</sup></div>
    </div>
}