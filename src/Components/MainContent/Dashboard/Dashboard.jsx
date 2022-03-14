// Import Dependencies
import { Link } from "react-router-dom";
import url from "../../../Navigation/Url";
// Import Styles
import styles from "./Dashboard.module.scss";

// Import React Icons
import { BsFillPlusSquareFill } from "react-icons/bs";
export default function MainContentDashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.head}>
        <h2 className={styles.details}>Dashboard</h2>
      </div>
      <div className={styles.content}>
        <Link to={url.post} className={styles.module}>
          <BsFillPlusSquareFill className={styles.icon} />
          <div className={styles.text}>
            <p className={styles.title}>Create a New Post </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
