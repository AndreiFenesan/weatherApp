import React from "react";
import "./locationNameAndTime.css"
interface LocationAndTimeProps {
    locationName: string
    timezone:number
}

function getLocalDate(timezone:number) :Date{
    return new Date(new Date().getTime() + timezone * 1000);
}

function getLocalTime(timezone:number) :string{
    const localDate = getLocalDate(timezone);
    const hours = localDate.getHours();
    const minutes = localDate.getMinutes();

    let hoursString,minutesString :string;

    minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    hoursString = hours <10 ? `0${hours}` : `${hours}`;

    return `${hoursString}:${minutesString}`;
}

export default function LocationNameAndTime({locationName,timezone}:LocationAndTimeProps){

    return <div className={"locationName-and-time-container"}>
        <div className={"location-name"}>{locationName}</div>
        <div className={"time"}>{getLocalTime(timezone)}</div>
    </div>;
}