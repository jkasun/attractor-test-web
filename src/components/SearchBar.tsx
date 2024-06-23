"use client";

import { WeatherData } from "@/interfaces/WeatherData";
import { FC } from "react";
import Image from "next/image";
import WeatherAutocomplete from "./WeatherAutoComplete";
import Link from "next/link";

export interface SearchBarProps {
  weatherData: WeatherData[];
  hideTitle?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ weatherData, hideTitle }) => {
  return (
    <div>
      <div className="bg-white px-8 py-8 lg:bg-zinc-700 lg:text-white lg:px-[10%] lg:py-[60px]">
        <Link href={"/"}>
          <Image
            src="/img/logo.png"
            alt="Attactor Logo"
            width={200}
            height={100}
          />
        </Link>

        {!hideTitle && (
          <div className="text-3xl font-extralight mt-4">
            Search for your city
          </div>
        )}

        <div className={hideTitle ? "mt-4" : ""}>
          <WeatherAutocomplete weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
