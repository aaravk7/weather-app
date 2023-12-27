import { Droplets, GaugeCircle, Thermometer, Wind } from "lucide-react";
import { CurrentWeatherResponse } from "../../api";
import Condition from "./Condition";
import styles from "./Main.module.css";

function AirConditions({ data }: { data: CurrentWeatherResponse }) {
  return (
    <div className={styles["air-conditions"]}>
      <h2>AIR CONDITIONS</h2>
      <div className={styles["air-conditions-grid"]}>
        <Condition
          icon={<Thermometer size={24} color="rgba(239, 239, 243, 0.6)" />}
          title="Feels Like"
        >
          {data.main.feels_like} <sup className="superscript">°C</sup>
        </Condition>
        <Condition
          icon={<Droplets size={24} color="rgba(239, 239, 243, 0.6)" />}
          title="Humidity"
        >
          {data.main.humidity}
        </Condition>
        <Condition
          icon={<GaugeCircle size={24} color="rgba(239, 239, 243, 0.6)" />}
          title="Pressure"
        >
          {data.main.pressure} hPa
        </Condition>
        <Condition
          icon={<Wind size={24} color="rgba(239, 239, 243, 0.6)" />}
          title="Wind"
        >
          {data.wind.deg}° {data.wind.speed}m/s
        </Condition>
      </div>
    </div>
  );
}
export default AirConditions;
