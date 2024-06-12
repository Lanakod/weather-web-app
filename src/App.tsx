import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { WeatherInterface } from "./interfaces/weather.interface";
import { WeatherWidget } from "./components";
import {
  List,
  Placeholder,
  Section,
  Spinner,
} from "@telegram-apps/telegram-ui";
// °C
function App() {
  const [data, setData] = useState<WeatherInterface | null>(null);
  const updateWeather = useCallback(async () => {
    setData(null);
    const res = await axios.get<WeatherInterface>(
      "https://api.openweathermap.org/data/2.5/weather?lat=48.70805&lon=44.5133&units=metric&lang=ru&exclude=hourly&appid=d5dadd8cefa8601da8b2dc8ade114b5e"
    );
    setTimeout(() => {
      setData(res.data);
    }, 1000);
  }, []);

  useEffect(() => {
    updateWeather();
  }, []);

  return (
    <List>
      <Section header="Weather report">
        {data ? (
          <WeatherWidget data={data} update={updateWeather} />
        ) : (
          <Placeholder header="Получаем текущую погоду">
            <Spinner size="l" />
          </Placeholder>
        )}
      </Section>
    </List>
  );
}

export default App;
