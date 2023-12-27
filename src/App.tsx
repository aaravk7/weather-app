import { useState } from "react";
import "./App.css";
import { CurrentWeatherResponse, weatherApiUrl } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import { useFetch } from "./hooks/useFetch";
import Main from "./screens/Main/Main";

const App = () => {
  const [url, setUrl] = useState(weatherApiUrl);
  const response = useFetch<CurrentWeatherResponse>(url);

  const onSearch = (val: string) => {
    setUrl((prev) => {
      const api = new URL(prev);
      api.searchParams.set("q", val);
      return api.toString();
    });
  };

  return (
    <div className="root">
      <div className="container">
        <SearchBar onSearch={onSearch} />
        <Main response={response} />
      </div>
    </div>
  );
};

export default App;
