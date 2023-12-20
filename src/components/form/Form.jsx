/* eslint-disable react/prop-types */
import styles from "./Form.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

export const Form = ({ onClick }) => {
  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <FaDeleteLeft className={styles.remove} onClick={onClick} />
        <label>Image:</label>
        <input type="file" accept="image/*" />
        <label>Title:</label>
        <input type="text" name="title" placeholder="Enter country's name" />
        <label>Capital:</label>
        <input type="text" name="capital" placeholder="Enter capital's name " />
        <label>Population:</label>
        <input
          type="text"
          name="population"
          placeholder="Enter population's info"
        />
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};
