import { WeatherData } from "@/interfaces/WeatherData";

const apiUrl = process.env.HOST + "/api/weather";

export const fetchWeatherInfoByCity = async (
  city: string
): Promise<WeatherData | null> => {
  const res = await fetch(`${apiUrl}?city=${city}`);

  if (res.status === 404) {
    return null;
  } 

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return res.json();
};

export const fetchRecentSearch = async (): Promise<WeatherData[]> => {
  const res = await fetch(`${apiUrl}/recent`);

  if (!res.ok) {
    throw new Error("Failed to fetch author data");
  }
  return res.json();
};

export const getImageByDescription = (description: string) => {
  switch (description) {
    case "Sunny":
      return "/img/sunny.png";
    case "Partly Cloudy":
      return "/img/partly-cloudy.png";
    case "Cloudy":
      return "/img/cloudy.png";
  }

  return "";
};

export const getBackgroundColorByDescription = (description: string) => {
  switch (description) {
    case "Sunny":
      return "bg-lime-200";
    case "Partly Cloudy":
      return "bg-blue-200";
    case "Cloudy":
      return "bg-indigo-200";
  }

  return "";
};
