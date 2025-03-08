// Layout.tsx

import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import logo from "../../assets/waste-bins-medium.png";
import NavLinks from "./NavLinks";
import { Select } from "antd";
import { SEARCH_OPTIONS } from "./constants";

function Logo() {
  return (
    <NavLink to="/" className={styles.Logo}>
      <img alt={"bins"} src={logo}></img>
      <h1>What Goes Where ?</h1>
    </NavLink>
  );
}

function SearchBar() {
  const [query, setQuery] = React.useState<string>("");
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSelect = (value: string) => {
    navigate(`/item/${value}`);
    setQuery(value);
  };

  return (
    <div className={styles.Search}>
      <Select
        showSearch
        placeholder="Search for an item"
        options={SEARCH_OPTIONS.filter((option) =>
          query
            ? option.value.toLowerCase().includes(query.toLowerCase())
            : false
        )}
        style={{ width: "100%" }}
        value={query || undefined}
        onSearch={handleChange}
        notFoundContent={query ? "No items found" : null}
        onSelect={handleSelect}
        suffixIcon={null}
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© 2025 What Goes Where ?</small>
    </footer>
  );
}

const Layout: React.FC = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <NavLinks />
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
