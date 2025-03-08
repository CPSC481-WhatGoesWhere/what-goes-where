// NavLinks.tsx

import React from "react";
import styles from "./NavLinks.module.css";
import NavLinkItem from "./NavLinkItem";

const NavLinks: React.FC = () => (
  <div className={styles.buttonContainer}>
    <NavLinkItem to="/general" label="Question" />
    <NavLinkItem to="/clothing-donations" label="Donate Clothes" />
    <NavLinkItem to="/bottle-depot" label="Bottle Depot" />
    <NavLinkItem to="/metal-disposal" label="Metal Disposal" />
  </div>
);

export default NavLinks;
