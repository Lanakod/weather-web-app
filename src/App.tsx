import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { WeatherInterface } from "./interfaces/weather.interface";
// °C
function App() {
  const [data, setData] = useState<WeatherInterface>();
  const arr = useMemo(
    () => [
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
    ],
    []
  );
  useEffect(() => {
    axios
      .get<WeatherInterface>(
        "https://api.openweathermap.org/data/2.5/weather?lat=48.70805&lon=44.5133&units=metric&lang=ru_ru&exclude=hourly&appid=d5dadd8cefa8601da8b2dc8ade114b5e"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col items-center
	justify-center bg-telegram-secondary-white"
    >
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        {data?.weather && (
          <div className="flex flex-col items-center justify-center bg-telegram-secondary-white">
            <span className="text-telegram-black">{data.name}</span>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
              alt={data?.weather[0].main}
            />
            <span>{`${data.main.temp} °C (${data.main.feels_like} °C)`}</span>
            <span>{`${Math.round(
              data.main.pressure * 0.750064
            )} мм. рт. ст`}</span>
            <span>{`${data.wind.speed} м/с ${
              arr[Math.round((data.wind.deg / 22.5 + 0.5) % 16)]
            }`}</span>
          </div>
        )}
      </main>

      <footer
        className="flex h-20 w-full items-center justify-center
	  border-t border-t-telegram-black"
      >
        <a
          className="flex items-center justify-center gap-2 text-telegram-black"
          href="https://github.com/mauriciobraz/next.js-telegram-webapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="text-telegram-link">
            mauriciobraz/next.js-telegram-webapp
          </span>
        </a>
      </footer>
    </div>
  );
}

export default App;
