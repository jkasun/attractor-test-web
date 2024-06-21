import { WeatherData } from "@/interfaces/WeatherData";
import { FC, useMemo } from "react";
import Image from "next/image";

const WeatherCard: FC<{
  info: WeatherData;
  onClick: () => void;
}> = ({ info, onClick }) => {
  const image = useMemo(() => {
    switch (info.description) {
      case "Sunny":
        return "/img/sunny.png";
      case "Partly Cloudy":
        return "/img/partly-cloudy.png";
      case "Cloudy":
        return "/img/cloudy.png";
    }

    return "";
  }, [info.description]);

  const bgClass = useMemo(() => {
    switch (info.description) {
      case "Sunny":
        return "bg-lime-200";
      case "Partly Cloudy":
        return "bg-blue-200";
      case "Cloudy":
        return "bg-indigo-200";
    }

    return "";
  }, [info.description]);

  return (
    <div role="link" className={`px-8 py-6 rounded-[40px] grid grid-cols-2 cursor-pointer ${bgClass}`} onClick={onClick}>
      <div>
        <div className="text-2xl"> {info.city} </div>
        <div> {info.description} </div>
        <div className="mt-4 text-lg"> {info.temperature} </div>
      </div>
      <div className="flex justify-end">
        <Image src={image} alt="Sun" width={100} height={0} />
      </div>
    </div>
  );
};

export default WeatherCard;
