/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({ data }) => {
  const [details, setDetails] = useState(false);

  const handleView = () => {
    setDetails((prev) => !prev);
  };
  return (
    <div className={styles.card}>
      <h3>{data.title}</h3>
      <img className={styles.card_img} src={data.img} alt={data.title} />
      {details && (
        <>
          <p>{data.capital}</p>
          <p>{data.population}</p>
        </>
      )}
      <button onClick={() => handleView()}>View more</button>
    </div>
  );
};
