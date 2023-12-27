import { CurrentWeatherResponse } from "../../api";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
import AirConditions from "./AirConditions";
import CityDetails from "./CityDetails";

interface MainProps {
  url: string;
}

const Main = ({ url }: MainProps) => {
  const response = useFetch<CurrentWeatherResponse>(url);

  if (response.status === "loading") return <Loader />;
  if ("error" in response) return <Error msg={response.error} />;

  const data = response.data;
  localStorage.setItem("search", data.name);
  return (
    <>
      <CityDetails data={data} />
      <AirConditions data={data} />
    </>
  );
};
export default Main;
