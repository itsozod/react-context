/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

export const Card = ({ data, children, onClick }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={data.img} alt={data.title} />
      {children}
      <button onClick={onClick} className={styles.requestBtn}>
        View more
      </button>
    </div>
  );
};
