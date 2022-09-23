import React from 'react';
import './App.css';
import LocationInput from "../LocationInput/LocationInput";
function App() {
    const [lastIntroducedLocationName,setLastIntroducedLocationName] = React.useState("");

    function searchButtonClickHandler(locationName:string):void{
        //sets the introduced value for lastIntroducedLocationName
        if(locationName!==""){
            setLastIntroducedLocationName(locationName);
        }
    }

    React.useEffect(()=>{
        if(lastIntroducedLocationName !== ""){
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${lastIntroducedLocationName}&units=metric&appid=ef875aab8139ba42eefcd69852c22707`;
            fetch(url)
                .then(response => response.json())
                .then(data=>console.log(data))
        }
    },[lastIntroducedLocationName]);
    return(
        <div className={"main-container"}>
            <LocationInput searchButtonClickHandler={searchButtonClickHandler}/>
        </div>
    )
}

export default App;
