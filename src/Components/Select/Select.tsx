import styles from "./Select.module.css";

interface SelectProps {
  selectedValue: string | undefined;
  setSelectedValue: (value: string | undefined) => void;
  options: {
    value: string;
    label: string;
  }[];
}

function Select({ selectedValue, setSelectedValue, options }: SelectProps) {
  return (
    <select
      className={styles.container}
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
