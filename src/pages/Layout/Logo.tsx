
// Logo.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Layout.module.css";
import logo from "../../assets/waste-bins-medium.png";

const Logo: React.FC = () => {
  return (
    <NavLink to="/" className={styles.Logo}>
      <img alt="bins" src={logo} />
      <h1>What Goes Where ?</h1>
    </NavLink>
  );
};

export default Logo;
