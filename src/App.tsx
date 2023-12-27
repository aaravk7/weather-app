import { useState } from "react";
import "./App.css";
import { weatherApiUrl } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import Main from "./screens/Main/Main";

const App = () => {
  const [url, setUrl] = useState(weatherApiUrl);

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
        <Main url={url} />
      </div>
    </div>
  );
};

export default App;
