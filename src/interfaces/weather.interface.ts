interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WeatherInterface {
  coord: { lon: 44.5133; lat: 48.7081 };
  weather: WeatherInfo[];
  base: "stations";
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
