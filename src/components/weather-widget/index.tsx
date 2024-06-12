import {
  Button,
  Image,
  Placeholder,
  Skeleton,
  Title,
} from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { WeatherInterface } from "../../interfaces/weather.interface";
import { getWeatherText } from "../../helpers";

interface Props {
  data: WeatherInterface;
  update: Function;
}

export const WeatherWidget: FC<Props> = ({ data, update }) => {
  return (
    <Placeholder
      header={`${data.name} - ${
        data?.weather[0].description.charAt(0).toUpperCase() +
        data?.weather[0].description.slice(1)
      }`}
      description={getWeatherText(data)}
      action={
        <Button size="l" stretched onClick={() => update()}>
          Обновить
        </Button>
      }
    >
      <Title>Текущая погода</Title>
      <Skeleton>
        <Image
          size={96}
          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
          alt={data?.weather[0].description}
        />
      </Skeleton>
    </Placeholder>
  );
};
