import React, { useState } from 'react';
import './WeatherPage.scss';
const WeatherPage = () => {
    const [city, setCity] = useState("");
    const forecast = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1587168000,
                "main": {
                    "temp": 12.58,
                    "feels_like": 9,
                    "temp_min": 12.58,
                    "temp_max": 13.1,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 885,
                    "humidity": 38,
                    "temp_kf": -0.52
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2,
                    "deg": 67
                },
                "rain": {
                    "3h": 0.95
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-18 00:00:00"
            },
            {
                "dt": 1587178800,
                "main": {
                    "temp": 13.14,
                    "feels_like": 9.91,
                    "temp_min": 13.14,
                    "temp_max": 13.53,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 885,
                    "humidity": 36,
                    "temp_kf": -0.39
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 1.46,
                    "deg": 63
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-18 03:00:00"
            },
            {
                "dt": 1587189600,
                "main": {
                    "temp": 15.88,
                    "feels_like": 12.42,
                    "temp_min": 15.88,
                    "temp_max": 16.14,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 886,
                    "humidity": 31,
                    "temp_kf": -0.26
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 1.86,
                    "deg": 166
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-18 06:00:00"
            },
            {
                "dt": 1587200400,
                "main": {
                    "temp": 18.04,
                    "feels_like": 13.65,
                    "temp_min": 18.04,
                    "temp_max": 18.17,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 886,
                    "humidity": 27,
                    "temp_kf": -0.13
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 3.19,
                    "deg": 164
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-18 09:00:00"
            },
            {
                "dt": 1587211200,
                "main": {
                    "temp": 18.97,
                    "feels_like": 14.97,
                    "temp_min": 18.97,
                    "temp_max": 18.97,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 884,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 167
                },
                "rain": {
                    "3h": 0.67
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-18 12:00:00"
            },
            {
                "dt": 1587222000,
                "main": {
                    "temp": 17.72,
                    "feels_like": 14.02,
                    "temp_min": 17.72,
                    "temp_max": 17.72,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 884,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 1.95,
                    "deg": 137
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-18 15:00:00"
            },
            {
                "dt": 1587232800,
                "main": {
                    "temp": 16.67,
                    "feels_like": 13.11,
                    "temp_min": 16.67,
                    "temp_max": 16.67,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 884,
                    "humidity": 27,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 1.78,
                    "deg": 109
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-18 18:00:00"
            },
            {
                "dt": 1587243600,
                "main": {
                    "temp": 15.58,
                    "feels_like": 12.9,
                    "temp_min": 15.58,
                    "temp_max": 15.58,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 883,
                    "humidity": 29,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 0.53,
                    "deg": 116
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-18 21:00:00"
            },
            {
                "dt": 1587254400,
                "main": {
                    "temp": 14.77,
                    "feels_like": 12.21,
                    "temp_min": 14.77,
                    "temp_max": 14.77,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 883,
                    "humidity": 32,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 0.47,
                    "deg": 312
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-19 00:00:00"
            },
            {
                "dt": 1587265200,
                "main": {
                    "temp": 14.89,
                    "feels_like": 12.6,
                    "temp_min": 14.89,
                    "temp_max": 14.89,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 884,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 66
                },
                "wind": {
                    "speed": 0.26,
                    "deg": 242
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-19 03:00:00"
            },
            {
                "dt": 1587276000,
                "main": {
                    "temp": 18.08,
                    "feels_like": 15.55,
                    "temp_min": 18.08,
                    "temp_max": 18.08,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 885,
                    "humidity": 26,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 52
                },
                "wind": {
                    "speed": 0.44,
                    "deg": 223
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-19 06:00:00"
            },
            {
                "dt": 1587286800,
                "main": {
                    "temp": 20.03,
                    "feels_like": 16.26,
                    "temp_min": 20.03,
                    "temp_max": 20.03,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 886,
                    "humidity": 22,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 2.09,
                    "deg": 193
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-19 09:00:00"
            },
            {
                "dt": 1587297600,
                "main": {
                    "temp": 21.08,
                    "feels_like": 16.99,
                    "temp_min": 21.08,
                    "temp_max": 21.08,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 885,
                    "humidity": 20,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 2.48,
                    "deg": 189
                },
                "rain": {
                    "3h": 0.39
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-19 12:00:00"
            },
            {
                "dt": 1587308400,
                "main": {
                    "temp": 19.59,
                    "feels_like": 15.56,
                    "temp_min": 19.59,
                    "temp_max": 19.59,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 885,
                    "humidity": 22,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 41
                },
                "wind": {
                    "speed": 2.4,
                    "deg": 167
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-19 15:00:00"
            },
            {
                "dt": 1587319200,
                "main": {
                    "temp": 18.4,
                    "feels_like": 14.42,
                    "temp_min": 18.4,
                    "temp_max": 18.4,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 885,
                    "humidity": 23,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 2.26,
                    "deg": 153
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-19 18:00:00"
            },
            {
                "dt": 1587330000,
                "main": {
                    "temp": 16.97,
                    "feels_like": 13.2,
                    "temp_min": 16.97,
                    "temp_max": 16.97,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 885,
                    "humidity": 27,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 2.13,
                    "deg": 131
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-19 21:00:00"
            },
            {
                "dt": 1587340800,
                "main": {
                    "temp": 16.05,
                    "feels_like": 12.7,
                    "temp_min": 16.05,
                    "temp_max": 16.05,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 885,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 1.48,
                    "deg": 118
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-20 00:00:00"
            },
            {
                "dt": 1587351600,
                "main": {
                    "temp": 16.35,
                    "feels_like": 12.99,
                    "temp_min": 16.35,
                    "temp_max": 16.35,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 885,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 1.54,
                    "deg": 122
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-20 03:00:00"
            },
            {
                "dt": 1587362400,
                "main": {
                    "temp": 19.87,
                    "feels_like": 15.11,
                    "temp_min": 19.87,
                    "temp_max": 19.87,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 886,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 11
                },
                "wind": {
                    "speed": 3.7,
                    "deg": 143
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-20 06:00:00"
            },
            {
                "dt": 1587373200,
                "main": {
                    "temp": 21.76,
                    "feels_like": 16.96,
                    "temp_min": 21.76,
                    "temp_max": 21.76,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 886,
                    "humidity": 20,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 3.59,
                    "deg": 152
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-20 09:00:00"
            },
            {
                "dt": 1587384000,
                "main": {
                    "temp": 22.6,
                    "feels_like": 18.08,
                    "temp_min": 22.6,
                    "temp_max": 22.6,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 885,
                    "humidity": 18,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 22
                },
                "wind": {
                    "speed": 3.07,
                    "deg": 153
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-20 12:00:00"
            },
            {
                "dt": 1587394800,
                "main": {
                    "temp": 21.17,
                    "feels_like": 17.22,
                    "temp_min": 21.17,
                    "temp_max": 21.17,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 884,
                    "humidity": 20,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.29,
                    "deg": 133
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-20 15:00:00"
            },
            {
                "dt": 1587405600,
                "main": {
                    "temp": 19.65,
                    "feels_like": 15.23,
                    "temp_min": 19.65,
                    "temp_max": 19.65,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 884,
                    "humidity": 22,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 31
                },
                "wind": {
                    "speed": 2.97,
                    "deg": 131
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-20 18:00:00"
            },
            {
                "dt": 1587416400,
                "main": {
                    "temp": 18.59,
                    "feels_like": 15.18,
                    "temp_min": 18.59,
                    "temp_max": 18.59,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 883,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 1.57,
                    "deg": 85
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-20 21:00:00"
            },
            {
                "dt": 1587427200,
                "main": {
                    "temp": 18.32,
                    "feels_like": 15.66,
                    "temp_min": 18.32,
                    "temp_max": 18.32,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 883,
                    "humidity": 26,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 0.66,
                    "deg": 21
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-21 00:00:00"
            },
            {
                "dt": 1587438000,
                "main": {
                    "temp": 18.37,
                    "feels_like": 16.12,
                    "temp_min": 18.37,
                    "temp_max": 18.37,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 884,
                    "humidity": 27,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.18,
                    "deg": 225
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-21 03:00:00"
            },
            {
                "dt": 1587448800,
                "main": {
                    "temp": 19.97,
                    "feels_like": 15.9,
                    "temp_min": 19.97,
                    "temp_max": 19.97,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 885,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.73,
                    "deg": 275
                },
                "rain": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-21 06:00:00"
            },
            {
                "dt": 1587459600,
                "main": {
                    "temp": 22.09,
                    "feels_like": 19.4,
                    "temp_min": 22.09,
                    "temp_max": 22.09,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 886,
                    "humidity": 20,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.63,
                    "deg": 254
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-21 09:00:00"
            },
            {
                "dt": 1587470400,
                "main": {
                    "temp": 23.03,
                    "feels_like": 18.95,
                    "temp_min": 23.03,
                    "temp_max": 23.03,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 885,
                    "humidity": 18,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.5,
                    "deg": 269
                },
                "rain": {
                    "3h": 0.14
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-21 12:00:00"
            },
            {
                "dt": 1587481200,
                "main": {
                    "temp": 22.06,
                    "feels_like": 18.43,
                    "temp_min": 22.06,
                    "temp_max": 22.06,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 885,
                    "humidity": 20,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 247
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-21 15:00:00"
            },
            {
                "dt": 1587492000,
                "main": {
                    "temp": 20.05,
                    "feels_like": 16.8,
                    "temp_min": 20.05,
                    "temp_max": 20.05,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 886,
                    "humidity": 23,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 1.46,
                    "deg": 270
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-21 18:00:00"
            },
            {
                "dt": 1587502800,
                "main": {
                    "temp": 18.65,
                    "feels_like": 15.39,
                    "temp_min": 18.65,
                    "temp_max": 18.65,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 885,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.37,
                    "deg": 292
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-21 21:00:00"
            },
            {
                "dt": 1587513600,
                "main": {
                    "temp": 17.51,
                    "feels_like": 13.68,
                    "temp_min": 17.51,
                    "temp_max": 17.51,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 884,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.11,
                    "deg": 311
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-22 00:00:00"
            },
            {
                "dt": 1587524400,
                "main": {
                    "temp": 18.05,
                    "feels_like": 13.9,
                    "temp_min": 18.05,
                    "temp_max": 18.05,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 885,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.55,
                    "deg": 317
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-22 03:00:00"
            },
            {
                "dt": 1587535200,
                "main": {
                    "temp": 22.33,
                    "feels_like": 18.28,
                    "temp_min": 22.33,
                    "temp_max": 22.33,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 886,
                    "humidity": 17,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 11
                },
                "wind": {
                    "speed": 2.23,
                    "deg": 294
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-22 06:00:00"
            },
            {
                "dt": 1587546000,
                "main": {
                    "temp": 24.58,
                    "feels_like": 19.21,
                    "temp_min": 24.58,
                    "temp_max": 24.58,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 886,
                    "humidity": 14,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 3.99,
                    "deg": 269
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-22 09:00:00"
            },
            {
                "dt": 1587556800,
                "main": {
                    "temp": 25.31,
                    "feels_like": 19.22,
                    "temp_min": 25.31,
                    "temp_max": 25.31,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 884,
                    "humidity": 12,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.81,
                    "deg": 271
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-22 12:00:00"
            },
            {
                "dt": 1587567600,
                "main": {
                    "temp": 23.85,
                    "feels_like": 18.54,
                    "temp_min": 23.85,
                    "temp_max": 23.85,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 884,
                    "humidity": 15,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 3.95,
                    "deg": 273
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-04-22 15:00:00"
            },
            {
                "dt": 1587578400,
                "main": {
                    "temp": 21.56,
                    "feels_like": 17.71,
                    "temp_min": 21.56,
                    "temp_max": 21.56,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 884,
                    "humidity": 19,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 2.08,
                    "deg": 283
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-22 18:00:00"
            },
            {
                "dt": 1587589200,
                "main": {
                    "temp": 19.53,
                    "feels_like": 16.93,
                    "temp_min": 19.53,
                    "temp_max": 19.53,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 883,
                    "humidity": 21,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 0.24,
                    "deg": 299
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-04-22 21:00:00"
            }
        ],
        "city": {
            "id": 112931,
            "name": "Tehran",
            "coord": {
                "lat": 35.6944,
                "lon": 51.4215
            },
            "country": "IR",
            "population": 7153309,
            "timezone": 16200,
            "sunrise": 1587175035,
            "sunset": 1587222571
        }
    }
    const current = {
        "coord": {
            "lon": 51.42,
            "lat": 35.69
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 11.61,
            "feels_like": 9.11,
            "temp_min": 11,
            "temp_max": 12,
            "pressure": 1019,
            "humidity": 66
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.1,
            "deg": 20
        },
        "clouds": {
            "all": 40
        },
        "dt": 1587156256,
        "sys": {
            "type": 1,
            "id": 7464,
            "country": "IR",
            "sunrise": 1587175036,
            "sunset": 1587222572
        },
        "timezone": 16200,
        "id": 112931,
        "name": "Tehran",
        "cod": 200
    }
    const inputChange = (setter: any) => (event: { target: { value: any; }; }) => {
        setter(event.target.value)
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
                        type="text"
                        value={city}
                        onChange={inputChange(setCity)}
                        placeholder="Enter your city" />
                </div>
                <div className="weather-current">
                    <div className="current-temp">
                        <h1>{Math.round(current.main.temp)}</h1>
                        <span>O</span>
                        <strong>C</strong>
                    </div>

                    <h5><span>{current.weather[0].main}</span></h5>
                    <p>{current.weather[0].description}</p>
                </div>
                <div className="weather-future">
                    {forecast.list.map(item => {
                        return <div className="future-item">
                            <span style={{ fontSize: "14px" }}>{(() => {
                                const date = new Date(item.dt_txt)
                                return `${date.toDateString() + "  " + date.getHours()}:00 `
                            })()}</span>
                            <h3>{Math.round(item.main.temp)}</h3>
                            <span style={{ fontSize: "16px" }}>{item.weather[0].description}</span>
                        </div>
                    })}
                </div>
                {/* <div className="weather-history"></div> */}
            </div>
        </div >
    )
}
export default WeatherPage;