import SearchBar from "@/components/SearchBar";
import WeatherInfoCard from "@/components/WeatherInfoCard";
import {
  fetchRecentSearch,
  fetchWeatherInfoByCity,
  getBackgroundColorByDescription,
} from "@/services/weather.service";
import { NextPage } from "next";
import { notFound } from 'next/navigation';

const WeatherInfoPage: NextPage<{
  params: {
    city: string;
  };
}> = async ({ params }) => {
  // TODO handle error when there is an unavailable city
  const city = params.city;
  const weatherInfo = await fetchWeatherInfoByCity(city);

  if (!weatherInfo) {
    notFound();
  }

  const data = await fetchRecentSearch();
  const bgClass = getBackgroundColorByDescription(weatherInfo.description);

  return (
    <div className={`${bgClass} h-screen`}>
      <SearchBar hideTitle={true} weatherData={data} />

      <div className="mt-6 p-6">
        <WeatherInfoCard weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};

export default WeatherInfoPage;
