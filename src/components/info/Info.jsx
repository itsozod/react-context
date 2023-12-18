/* eslint-disable react/prop-types */
import styles from "./Info.module.css";
export const Info = ({ details }) => {
  return (
    <div className={styles.infoContainer}>
      <p>Name: {details.title} </p>
      <p>Capital: {details.capital}</p>
      <p>Population: {details.population}</p>
    </div>
  );
};
