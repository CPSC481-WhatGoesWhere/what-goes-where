
// Block.tsx

import React, { ReactNode, CSSProperties } from "react";
import styles from "./Block.module.css";

interface BlockProps {
  children: ReactNode;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  style?: CSSProperties;
}

const Block: React.FC<BlockProps> = ({
  children,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  style,
}) => {

  const blockStyles: CSSProperties = {
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    ...style,
  };

  return (
    <div className={styles.blockContainer} style={blockStyles}>
      {children}
    </div>
  );
};

export default Block;
