import { WeatherData } from "@/interfaces/WeatherData";
import { FC } from "react";
import WeatherCard from "./WeatherCard";
import Link from "next/link";

export interface WeatherCardListProps {
  weatherDataList: WeatherData[];
}

const WeatherCardList: FC<WeatherCardListProps> = ({ weatherDataList }) => {
  return (
    <div className="px-8 lg:px-[10%] lg:py-[60px]">
      <div> Related Searches </div>

      <div className="grid gap-6 mt-6 lg:grid-cols-3">
        {weatherDataList.map((i) => {
          return (
            <Link key={i.city} href={`/weather-info/${i.city}`}>
              <WeatherCard key={i.city} info={i} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherCardList;
