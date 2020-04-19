import React, { useState } from 'react';
import './WeatherPage.scss';

import * as axios from 'axios';
import * as _ from 'lodash';
import { IForcastWeather } from './forecast-weather.interface';
import { ICurrentWeater } from './current-weather.interface';


const apiKey = "8af110219c55ac7762ec012dfc20f17a";
const WeatherPage = () => {
    const [city, setCity] = useState("");
    const [current, setCurrent] = useState<ICurrentWeater>();
    const [forecast, setForecast] = useState<IForcastWeather>();

    const getCurrentWeather = async (city: string = "Tehran") => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        try {
            const resp = await axios.default.get(url)
            const data = resp.data;
            setCurrent(data)
        } catch (error) {
            console.log()
        }

    }

    const getForecastWeather = async (city: string = "Tehran") => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        try {
            const resp = await axios.default.get(url)
            const data = resp.data;
            setForecast(data)
        } catch (error) {
            console.log()
        }
    }

    const getData = async (city: string = "Tehran") => {
        // setCity(city);
        console.log(city)
        await Promise.all([
            getCurrentWeather(city),
            getForecastWeather(city),
        ])

    }
    const [getDataDebounce] = useState<Function>(() => _.debounce(getData, 1500))



    const inputChange = (setter: any) => async (event: { target: { value: any; }; }) => {
        setter(event.target.value)
        await getDataDebounce(event.target.value)
    }
    return (
        <div className="weather-app">
            <div className="weather-banner">
                <div className="banner-image">
                    <img src="https://unsplash.com/photos/vvv60S_Rl-A/download?force=true&w=1920" alt="" />
                </div>

            </div>
            <div className="weather-content">
                <div className="weather-city">
                    <input
                        style={{ fontSize: current ? "xsmall" : "xx-large" }}
                        type="text"
                        value={city}
                        onChange={inputChange(setCity)}
                        placeholder="Enter your city" />
                </div>
                <div className="weather-current">
                    <div className="current-temp">
                        {
                            current ?
                                <>
                                    <h1>{Math.round(current?.main?.temp || 0)}</h1>
                                    <span>O</span>
                                    <strong>C</strong>
                                </> :
                                <></>
                        }
                    </div>

                    <h5><span>{current?.weather ? current.weather[0].main : ""}</span></h5>
                    <p>{current?.weather ? current.weather[0].description : ""}</p>
                </div>
                <div className="weather-future">
                    {forecast ? forecast?.list?.map((item: any) => {
                        return <div key={item.dt} className="future-item">
                            <span style={{ fontSize: "14px" }}>{(() => {
                                const date = new Date(item.dt_txt)
                                return `${date.toDateString() + "  " + date.getHours()}:00 `
                            })()}</span>
                            <h3>{Math.round(item.main.temp)}</h3>
                            <span style={{ fontSize: "16px" }}>{item.weather[0].description}</span>
                        </div>
                    }) : ""}
                </div>
                {/* <div className="weather-history"></div> */}
            </div>
        </div >
    )
}
export default WeatherPage;