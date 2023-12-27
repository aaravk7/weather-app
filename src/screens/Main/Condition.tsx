import { ReactNode } from "react";

import styles from "./Main.module.css";

interface DetailProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const Condition = ({ icon, title, children }: DetailProps) => {
  return (
    <div className={styles.condition}>
      {icon}
      <div>
        <p>{title}</p>
        <h3>{children}</h3>
      </div>
    </div>
  );
};
export default Condition;
