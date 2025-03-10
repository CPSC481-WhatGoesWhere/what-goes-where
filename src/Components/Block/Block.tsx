
// Block.tsx

import React, { ReactNode, CSSProperties } from "react";
import styles from "./Block.module.css";

interface BlockProps {
  children: ReactNode;
  style?: CSSProperties;
  /** When true, renders the Block as a button element. */
  asButton?: boolean;
  /** Optional onClick handler for button usage. */
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = ({
  children,
  style,
  asButton = false,
  onClick,
}) => {
  
  if (asButton) {
    return (
      <button 
        className={`${styles.blockContainer} ${styles.blockButton}`}
        style={style} 
        onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <div className={styles.blockContainer} style={style}>
      {children}
    </div>
  );
};

export default Block;
