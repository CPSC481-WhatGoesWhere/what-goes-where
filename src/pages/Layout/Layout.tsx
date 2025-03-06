
// Layout.tsx

import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout: React.FC = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>What Goes Where ?</h1>
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>
      <small>© 2025 What Goes Where ?</small>
    </footer>
  </div>
);

export default Layout;
