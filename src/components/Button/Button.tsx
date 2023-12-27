import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
export default Button;
