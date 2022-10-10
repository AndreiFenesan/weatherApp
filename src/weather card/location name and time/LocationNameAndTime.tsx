import React from "react";
import "./locationNameAndTime.css"
interface LocationAndTimeProps {
    locationName: string
    timezone:number
}

function getLocalDate(timezone:number) :string{
    //returns the local date in ISO format
    const date = new Date(new Date().getTime() + timezone * 1000).toISOString();
    return date;
}

function getLocalTime(timezone:number) :string{
    //returns the current local time of a location based on timezone
    const localDateString = getLocalDate(timezone);//localeDateString is in ISO format
    const time = localDateString.split('T')[1];
    const [hour,minute] = time.split(':');

    return `${hour}:${minute}`;
}

export default function LocationNameAndTime({locationName,timezone}:LocationAndTimeProps){

    return <div className={"locationName-and-time-container"}>
        <div className={"location-name"}>{locationName}</div>
        <div className={"time"}>{getLocalTime(timezone)}</div>
    </div>;
}