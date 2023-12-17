import { useState, useEffect } from "react";
import styles from "./Random.module.css";

const Random = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const bySecond = () => {
      setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 1000);
    };
    bySecond();
  }, []);
  return <div className={styles.number}>{number}</div>;
};

export default Random;
