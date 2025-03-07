
// FlexBackGround.tsx

import styles from "./FlexBackGround.module.css";
import React, { ReactNode, CSSProperties } from "react";

interface FlexBackGroundProps {
  children: ReactNode;
  style?: CSSProperties;
}

const FlexBackGround: React.FC<FlexBackGroundProps> = ({ 
  children,
  style
}) => {


  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};


export default FlexBackGround;
