export interface ICurrentWeater {
    coord?: Coord;
    weather?: Weather[];
    base?: string;
    main?: Main;
    visibility?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys?: Sys;
    timezone?: number;
    id?: number;
    name?: string;
    cod?: number;
}

export interface Clouds {
    all?: number;
}

export interface Coord {
    lon?: number;
    lat?: number;
}

export interface Main {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
}

export interface Sys {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
}

export interface Weather {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}

export interface Wind {
    speed?: number;
    deg?: number;
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