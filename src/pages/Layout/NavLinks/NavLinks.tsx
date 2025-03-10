// NavLinks.tsx

import React from "react";
import styles from "./NavLinks.module.css";
import NavLinkItem from "./NavLinkItem";

const NavLinks: React.FC = () => (
  <div className={styles.buttonContainer}>
    <NavLinkItem to="/" label="Home" />
    <NavLinkItem to="/general" label="Question" />
  </div>
);

export default NavLinks;
