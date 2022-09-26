import React from 'react';
import './App.css';
import LocationInput from "../LocationInput/LocationInput";
import WeatherCard from "../weather card/WeatherCard";
function App() {
    const [lastIntroducedLocationName,setLastIntroducedLocationName] = React.useState("");
    const [locationData,setLocationData] = React.useState(
        {
            locationName:"",
            timezone:0,
            description:"",
            icon:"",
            temperature:0,
            humidity:0,
            pressure:0,
            windSpeed:0,
            });
    function searchButtonClickHandler(locationName:string):void{
        //sets the introduced value for lastIntroducedLocationName
        if(locationName!==""){
            setLastIntroducedLocationName(locationName);
        }
    }

    React.useEffect(()=>{
        function extractWeatherData(data:any){
            const locationName:string = data.name;
            const timezone:number = data.timezone;
            const description:string = data.weather[0].description;
            const icon:string = data.weather[0].icon;
            const temperature:number = data.main.temp;
            const humidity:number = data.main.humidity;
            const pressure:number = data.main.pressure;
            const windSpeed:number = data.wind.speed;
            return {locationName,timezone,description,icon,temperature,humidity,pressure,windSpeed};

        }
        if(lastIntroducedLocationName !== ""){
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${lastIntroducedLocationName}&units=metric&appid=ef875aab8139ba42eefcd69852c22707`;
            fetch(url)
                .then(response => response.json())
                .then(data=>setLocationData(extractWeatherData(data)))
        }
    },[lastIntroducedLocationName]);
    return(
        <div className={"main-container"}>
            <LocationInput searchButtonClickHandler={searchButtonClickHandler}/>
            {locationData.locationName !== "" && <WeatherCard locationName={locationData.locationName}
            icon={locationData.icon}
            pressure={locationData.pressure}
            timezone={locationData.timezone}
            humidity={locationData.humidity}
            windSpeed={locationData.windSpeed}
            description={locationData.description}
            temperature={locationData.temperature}/>}
        </div>
    )
}

export default App;
