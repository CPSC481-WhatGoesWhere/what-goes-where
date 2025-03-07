
// FlexBackGround.tsx

import styles from "./FlexBackGround.module.css";
import React, { ReactNode, CSSProperties } from "react";

interface FlexBackGroundProps {
  children: ReactNode;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  style?: CSSProperties;
}

const FlexBackGround: React.FC<FlexBackGroundProps> = ({ 
  children
}) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};


export default FlexBackGround;
