
// Block.tsx

import React, { ReactNode, CSSProperties } from "react";
import styles from "./Block.module.css";

interface BlockProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Block: React.FC<BlockProps> = ({
  children,
  style,
}) => {

  return (
    <div className={styles.blockContainer} style={style}>
      {children}
    </div>
  );
};

export default Block;
