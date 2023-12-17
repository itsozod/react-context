/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

export const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <h3>{data.title}</h3>
      <img className={styles.card_img} src={data.img} alt={data.title} />
      <p>{data.capital}</p>
      <p>{data.population}</p>
    </div>
  );
};
