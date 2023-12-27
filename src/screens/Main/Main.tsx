import { CurrentWeatherResponse } from "../../api";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { FetchState } from "../../hooks/useFetch";
import AirConditions from "./AirConditions";
import CityDetails from "./CityDetails";

interface MainProps {
  response: FetchState<CurrentWeatherResponse>;
}

const Main = ({ response }: MainProps) => {
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
