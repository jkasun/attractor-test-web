import { WeatherData } from "@/interfaces/WeatherData";
import { NextPage } from "next";
import SearchPageContent from "./page-content";
import { fetchRecentSearch } from "@/services/weather.service";

const Home: NextPage = async () => {
  const data = await fetchRecentSearch();

  return (
    <main>
      <SearchPageContent weatherData={data}/>
    </main>
  );
};

export default Home;
