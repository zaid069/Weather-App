import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] = useState(
        {
        city : "City name",
        feelsLike : " ",
        temp : " ",
        tempMin : " ",
        tempMax : " ",
        humidity : " ",
        Weather : ""
        }
    );

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <div>
            <h2>Weather App by Zaid</h2>
            <SearchBox updateInfo={updateInfo}/> 
            <InfoBox info={weatherInfo}/>

        </div>
    );
}