import React from "react";
import "./locationInput.css";
import searchIcon from "../icons8-search-32.png"
interface LocationInputProps {
    searchButtonClickHandler:(locationName:string) => void,
}

export default function LocationInput({searchButtonClickHandler}:LocationInputProps) :JSX.Element {
    const [locationName,setLocationName] = React.useState("");

    function onChangeLocationNameHandler(event:React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        const {value}=event.currentTarget;
        setLocationName(value);
    }

    return(
        <div>
            <form className={"form-container"}>
                <input
                    name={"locationName"}
                    className={"location-input"}
                    type={"text"}
                    placeholder={"Enter location"}
                    value={locationName}
                    onChange={(e) => onChangeLocationNameHandler(e)}
                />
                <button name={"searchButton"} onClick={(e)=>{e.preventDefault();searchButtonClickHandler(locationName)}}  className={"search-button"} > <img alt={"Find Icon"} src={searchIcon}/></button>
            </form>
        </div>
    )
}