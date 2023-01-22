import React from 'react';
import './App.css';
import LocationInput from "../LocationInput/LocationInput";
import WeatherCard from "../weather card/WeatherCard";
import FetchError from "../error component/FetchError";
import bgRainImage from "../rain.jpg"
import bgMainImage from "../weatherMainBg.webp"
import bgMistImage from "../mist.jpeg"
import bgSunnyImage from "../sunny.jpg"

interface LocationData {
    locationName: string,
    timezone: number,
    description: string,
    icon: string,
    temperature: number,
    humidity: number,
    pressure: number,
    windSpeed: number,
    mainWeather: string,
}

function App() {
    const [lastIntroducedLocationName, setLastIntroducedLocationName] = React.useState({"name": "", "clickCount": 0});
    const [locationsData, setLocationsData] = React.useState<LocationData[]>([]);

    const [error, setError] = React.useState<Error | null>(null);

    function searchButtonClickHandler(locationName: string): void {
        //sets the introduced value for lastIntroducedLocationName
        if (locationName !== "") {
            setLastIntroducedLocationName(prevState => {
                return {
                    "name": locationName,
                    "clickCount": prevState.clickCount + 1,
                }
            });
        }
    }

    React.useEffect(() => {
        function extractWeatherData(data: any): LocationData {
            console.log(data)
            const locationName: string = data.name;
            const timezone: number = data.timezone;
            const description: string = data.weather[0].description;
            const icon: string = data.weather[0].icon;
            const mainWeather = data.weather[0].main;
            const temperature: number = data.main.temp;
            const humidity: number = data.main.humidity;
            const pressure: number = data.main.pressure;
            const windSpeed: number = data.wind.speed;
            return {locationName, timezone, description, icon, temperature, humidity, pressure, windSpeed, mainWeather};

        }

        function isLocationNameAlreadyDisplayed(locations: LocationData[], locationName: string): boolean {
            //checks if in locations array is any location with name equal to locationName.
            //returns true if there is a location with name locationName and false otherwise.
            return locations.find(location => location.locationName === locationName) !== undefined;
        }

        if (lastIntroducedLocationName.name !== "") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${lastIntroducedLocationName.name}&units=metric&appid=${process.env["REACT_APP_API_KEY"]}`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    const extractedData = extractWeatherData(data);
                    setError(null);
                    setLocationsData(prevState => {
                        if (isLocationNameAlreadyDisplayed(prevState, extractedData.locationName)) {
                            setError(Error("Location already exists"));
                            return [...prevState];
                        }
                        return [extractedData, ...prevState];
                    })
                })
                .catch(error => setError(error))
        }
    }, [lastIntroducedLocationName.clickCount]);

    function deleteCardButtonHandler(locationName: string) {
        //removes from locationsData the location of which name is locationName
        setLocationsData(prevLocationsData => {
            //const indexToDelete = prevLocationsData.findIndex(locationData => locationData.locationName===locationName);
            return prevLocationsData.filter(locationData => locationData.locationName !== locationName);
        })
    }

    //map over locations
    const weatherCards = locationsData.map(locationData => <WeatherCard locationName={locationData.locationName}
                                                                        icon={locationData.icon}
                                                                        pressure={locationData.pressure}
                                                                        timezone={locationData.timezone}
                                                                        humidity={locationData.humidity}
                                                                        windSpeed={locationData.windSpeed}
                                                                        description={locationData.description}
                                                                        temperature={locationData.temperature}
                                                                        deleteCardButtonHandler={() => deleteCardButtonHandler(locationData.locationName)}
                                                                        key={locationData.locationName}
                                                                        mainWeather={locationData.mainWeather.toLocaleLowerCase()}/>);
    let backgroundImage = bgMainImage;
    if (locationsData) {
        if (locationsData[0]) {
            const weather = locationsData[0].mainWeather;
            switch (weather.toLocaleLowerCase()) {
                case "rain":
                    backgroundImage = bgRainImage;
                    break;
                case "drizzle":
                    backgroundImage = bgRainImage;
                    break;
                case "mist":
                    backgroundImage = bgMistImage;
                    break;
                case "clear":
                    backgroundImage = bgSunnyImage;
                    break;
            }
        }
    }
    return (
        <div className={"main-container"} style={{backgroundImage: `url(" ${backgroundImage} ")`}}>
            {error && <FetchError message={error.message}/>}
            <LocationInput searchButtonClickHandler={searchButtonClickHandler}/>
            <div className={"weather-cards-container"}>
                {locationsData.length > 0 && weatherCards}
            </div>
        </div>
    )
}

export default App;
