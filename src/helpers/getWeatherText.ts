import { WeatherInterface } from "../interfaces/weather.interface";

export const getWeatherText = (data: WeatherInterface) => {
  const arr = [
    "С",
    "ССВ",
    "СВ",
    "СВВ",
    "В",
    "ЮВВ",
    "ЮВ",
    "ЮЮВ",
    "Ю",
    "ЮЮЗ",
    "ЮЗ",
    "ЮЗЗ",
    "З",
    "СЗЗ",
    "СЗ",
    "ССЗ",
  ];

  return `
    ${data.main.temp} °C (${data.main.feels_like} °C) | 
    ${Math.round(data.main.pressure * 0.750064)} мм. рт. ст | 
    ${data.wind.speed} м/с ${
    arr[Math.round((data.wind.deg / 22.5 + 0.5) % 16)]
  }`;
};
