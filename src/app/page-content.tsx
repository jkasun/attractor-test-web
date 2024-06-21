"use client";

import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import { WeatherData } from "@/interfaces/WeatherData";
import { FC } from "react";
import { useRouter } from "next/navigation";

const SearchPageContent: FC<{
  weatherData: WeatherData[];
}> = ({ weatherData }) => {
  const router = useRouter();

  const navigateToWeatherInfoPage = (city: string) => {
    console.log("navigate");
    router.push(`/weather-info/${city}`);
  };

  return (
    <div>
      <SearchBar weatherData={weatherData} />

      <div className="px-8 lg:px-[10%] lg:py-[60px]">
        <div> Related Searches </div>

        <div className="grid gap-6 mt-6 lg:grid-cols-3">
          {weatherData.map((i) => {
            return <WeatherCard onClick={() => navigateToWeatherInfoPage(i.city)} key={i.city} info={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPageContent;
