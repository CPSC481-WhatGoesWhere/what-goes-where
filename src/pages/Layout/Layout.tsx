
// Layout.tsx

import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";


const Layout: React.FC = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerRight}>
        <SearchBar />
        <NavLinks />
      </div>
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
  </div>
);

export default Layout;
