import { WeatherData } from "@/interfaces/WeatherData";
import { FC } from "react";
import Image from "next/image";
import { getImageByDescription } from "@/services/weather.service";

const WeatherInfoCard: FC<{
  weatherInfo: WeatherData
}> = ({
  weatherInfo
}) => {
  const image = getImageByDescription(weatherInfo.description);

  return (
    <div className="p-6">
      <div className="text-center text-4xl"> {weatherInfo.city} </div>

      <div className="flex justify-center mt-6">
        <Image
          src={image}
          alt="current weather image"
          height={500}
          width={200}
        />
      </div>

      <div className="text-center text-3xl mt-6">{weatherInfo.temperature}</div>
      <div className="text-center mt-4 text-lg">{weatherInfo.description}</div>

      <div className="flex justify-center">
        <div className="rounded-md border border-zinc-400 py-4 mt-6 inline-block max-w-[400px] w-[80%]">
          <div className="grid justify-center grid-cols-[20px_auto] items-center">
            <Image
              src="/img/raindrop.png"
              alt="rain drop"
              width={12}
              height={0}
            />
            <span>Humidity</span>
          </div>
          <div className="text-center text-2xl mt-2"> 65% </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
