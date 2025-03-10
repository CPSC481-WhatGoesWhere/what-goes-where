
// SearchBar.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import styles from "./SearchBar.module.css";
import { SEARCH_OPTIONS } from "./constants"; 

const SearchBar: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSelect = (value: string) => {
    navigate(`/item/${value}`);
    setQuery("");
  };

  return (
    <div className={styles.Search}>
      <Select
        showSearch
        placeholder="Search for an item"
        options={SEARCH_OPTIONS.filter((option) =>
          query
            ? option.value.toLowerCase().includes(query.toLowerCase())
            : true
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
};

export default SearchBar;
