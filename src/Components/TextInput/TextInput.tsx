// TextInput.tsx

import React, { CSSProperties, InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  onChange?: (value: string) => void; // Custom onChange expects a string value
}

/**
 * A flexible text input component.
 * Supports all standard `<input>` properties and allows custom
 * styling of both the container and the input element.
 *
 * @example
 * <TextInput
 *   type="text"
 *   value={value}
 *   onChange={handleChange}
 *   placeholder="Enter text..."
 *   containerStyle={{ margin: "20px 0" }}
 *   inputStyle={{ padding: "8px", borderRadius: "4px" }}
 * />
 *
 */
const TextInput: React.FC<TextInputProps> = ({
  containerStyle,
  inputStyle,
  onChange,
  ...inputProps
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.textInputContainer} style={containerStyle}>
      <input
        style={inputStyle}
        onChange={handleChange}
        {...inputProps}
        className={`${styles.input} ${inputProps.className || ""}`}
      />
    </div>
  );
};

export default TextInput;
