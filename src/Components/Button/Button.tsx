
// Button.tsx

import React, { ReactNode, CSSProperties } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  /** Button content */
  children: ReactNode;
  /** Custom inline styles for the container */
  containerStyle?: CSSProperties;
  /** Custom inline styles for the button element */
  buttonStyle?: CSSProperties;
  /** Applies the active style */
  active?: boolean;
  /**
   * Variant styling; allowed values:
   * - "left"
   * - "right"
   * - "center"
   */
  alt?: "left" | "right" | "center" | "top" | "bottom";
  /** Callback when the button is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /**
   * Dark mode: if true, the button background will be set to the primary color
   * and the text will be white.
   */
  dark?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  containerStyle,
  buttonStyle,
  active = false,
  alt,
  onClick,
  disabled = false,
  dark = false
}) => {
  let buttonClassName = styles.button;

  if (disabled) {
    buttonClassName += ` ${styles.disabled}`;
  }
  if (active) {
    buttonClassName += ` ${styles.active}`;
  }
  if (dark) {
    buttonClassName += ` ${styles.dark}`;
  }
  if (alt === "left") {
    buttonClassName += ` ${styles.leftButton}`;
  } else if (alt === "right") {
    buttonClassName += ` ${styles.rightButton}`;
  } else if (alt === "center") {
    buttonClassName += ` ${styles.centerButton}`;
  } else if (alt === "top") {
    buttonClassName += ` ${styles.topButton}`;
  } else if (alt === "bottom") {
    buttonClassName += ` ${styles.bottomButton}`;
  }

  return (
    <div className={styles.buttonContainer} style={containerStyle}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={buttonClassName}
        style={buttonStyle}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;