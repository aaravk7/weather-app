import { InputHTMLAttributes } from "react";
import styles from "./TextField.module.css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const TextField = (props: TextFieldProps) => {
  return <input type="text" className={styles.input} {...props} />;
};
export default TextField;
