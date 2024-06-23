"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { WeatherData } from "@/interfaces/WeatherData";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface WeatherAutoCompleteProps {
  weatherData: WeatherData[];
}

const WeatherAutocomplete: FC<WeatherAutoCompleteProps> = ({ weatherData }) => {
  const router = useRouter();
  const [items, setItems] = useState<WeatherData[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      setItems(
        weatherData.filter((i) =>
          i.city.toLowerCase().startsWith(searchText.toLowerCase())
        )
      );
    } else {
      setItems(weatherData);
    }
  }, [weatherData, searchText]);

  const navigateToWeatherInfoPage = (city: string) => {
    if (city) {
      router.push(`/weather-info/${city}`);
    }
  };

  return (
    <Autocomplete
      aria-label="Search for a city"
      items={items}
      placeholder="Search for a city"
      className="w-full mt-2"
      onSelectionChange={(city) => navigateToWeatherInfoPage(city as string)}
      inputValue={searchText}
      onInputChange={(value) => {
        setSearchText(value);
      }}
    >
      {(item) => (
        <AutocompleteItem
          textValue={item.city}
          key={item.city}
          className="border-b p-2"
        >
          <div>
            <div className="text-lg"> {item.city}, Australia </div>
            <div className="text-sm mt-2"> {item.temperature} </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default WeatherAutocomplete;
