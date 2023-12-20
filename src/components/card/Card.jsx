/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { MdDelete } from "react-icons/md";

export const Card = ({ data, children, onClick, onDelete }) => {
  return (
    <div className={styles.card}>
      {/* <MdDelete className={styles.deleteCard} onClick={onDelete} /> */}
      <img className={styles.card_img} src={data.img} alt={data.title} />
      {children}
      <button onClick={onClick} className={styles.requestBtn}>
        View more
      </button>
    </div>
  );
};
