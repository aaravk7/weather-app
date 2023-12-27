import { CurrentWeatherResponse } from "../../api";
import { startCase } from "../../utils";
import styles from "./Main.module.css";

function CityDetails({ data }: { data: CurrentWeatherResponse }) {
  return (
    <div className={styles["main"]}>
      <div>
        <div className={styles["main-top"]}>
          <h3>
            {data.name} <sup className="superscript">{data.sys.country}</sup>
          </h3>
          <p>{startCase(data.weather[0].description)}</p>
        </div>
        <h2>
          {data.main.temp} <sup className="superscript">°C</sup>
        </h2>
      </div>
      <img
        style={{
          objectFit: "cover",
          transform: "scale(1.25)",
        }}
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt={`${data.weather[0].main} Icon`}
      />
    </div>
  );
}
export default CityDetails;
