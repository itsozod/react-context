import { useContext } from "react";
import styles from "./Name.module.css";
import { ChangeName } from "../../App";

const Name = () => {
  const [value, setValue] = useContext(ChangeName);

  return (
    <div className={styles.inputContext}>
      <h1>Name Changer</h1>
      <input
        className={styles.nameChanger}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter a text"
      />
    </div>
  );
};

export default Name;
