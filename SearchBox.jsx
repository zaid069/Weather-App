import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    
        const API_url = "https://api.openweathermap.org/data/2.5/weather";
        const API_key = "fb24f3bd78cf8339c53c22eb604c0ab9";

        let getWeatherInfo = async ()=>{
            try{
                let res = await axios.get(`${API_url}?q=${city}&appid=${API_key}&units=metric`);
                console.log(res.data);
                let result = {
                    city : city,
                    temp : res.data.main.temp,
                    tempMin : res.data.main.temp_min,
                    tempMax : res.data.main.temp_max,
                    humidity : res.data.main.humidity,
                    feelsLike : res.data.main.feels_like,
                    Weather : res.data.weather[0].description
                }
                console.log(result);
                return result;
            }catch(err){
                throw err;
            }
        };
    
    

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch{
            setError(true)
        }
        
    }

    return(
        <div>
            <form  onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /> <br />
                <Button variant="contained"  type='submit'>Submit</Button>
                {error && <p style={{color:"red"}}>No such place Exist</p>}
            </form>
        </div>
    );

}