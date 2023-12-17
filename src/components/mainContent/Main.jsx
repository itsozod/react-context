import styles from "./Main.module.css";
import { useState } from "react";
const Main = () => {
  const [counter, setCounter] = useState(0);
  const [byValue, setByValue] = useState(0);

  const handleDecrease = () => {
    if (counter === 0) {
      return;
    }
    setCounter((prevCounter) => prevCounter - Number(byValue));
  };
  const handleIncrease = () => {
    setCounter((prevCounter) => prevCounter + Number(byValue));
  };

  const handleIncreaseByNum = (e) => {
    setByValue(e.target.value);
  };
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.incre}
          type="number"
          placeholder="Enter a number"
          onChange={(e) => handleIncreaseByNum(e)}
        />
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => handleDecrease()} className={styles.btn_i}>
          Decrease
        </button>
        <p>{counter}</p>
        <button onClick={() => handleIncrease()} className={styles.btn_d}>
          Increase
        </button>
      </div>
    </>
  );
};

export default Main;
