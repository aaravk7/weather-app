import { XCircle } from "lucide-react";
import { startCase } from "../../utils";
import styles from "./Error.module.css";

const Error = ({ msg }: { msg: string }) => {
  return (
    <div className={styles.error}>
      <XCircle size={80} color="#ef5350" />
      <h2>{startCase(msg)}</h2>
    </div>
  );
};
export default Error;
