import SearchBar from "@/components/SearchBar";
import { WeatherData } from "@/interfaces/WeatherData";
import { FC } from "react";
import WeatherCardList from "@/components/WeatherCardList";

const SearchPageContent: FC<{
  weatherData: WeatherData[];
}> = ({ weatherData }) => {
  return (
    <div>
      <SearchBar weatherData={weatherData} />
      <WeatherCardList weatherDataList={weatherData} />
    </div>
  );
};

export default SearchPageContent;
