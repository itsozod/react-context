import styles from "./Header.module.css";
import { ChangeName } from "../../App";
import { useContext } from "react";
const Header = () => {
  const [value] = useContext(ChangeName);
  return (
    <div className={styles.container}>
      <h2>Header</h2>
      <input
        className={styles.search_input}
        type="search"
        placeholder="Search..."
      />
      <h3>{value}</h3>
    </div>
  );
};

export default Header;
