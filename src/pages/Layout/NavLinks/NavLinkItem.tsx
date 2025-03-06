
// NavLinkItem.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
    }
  >
    {label}
  </NavLink>
);

export default NavLinkItem;
