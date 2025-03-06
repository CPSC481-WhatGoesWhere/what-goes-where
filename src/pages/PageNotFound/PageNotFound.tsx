
// PageNotFound.tsx

import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import logo from "../../assets/waste-bins-medium.png"


function PageNotFound() {
  return (
    <div className={styles.container}>
      <img alt={'bins'} src={logo}></img>
      <h1>Uh-oh</h1>
      <p>Page not found</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default PageNotFound;
