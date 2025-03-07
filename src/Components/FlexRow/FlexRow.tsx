
// FlexRow.tsx

import React, { ReactNode, CSSProperties } from "react";
import styles from "./FlexRow.module.css";

interface FlexRowProps {
  children: ReactNode;
  style?: CSSProperties;
}

const FlexRow: React.FC<FlexRowProps> = ({
  children,
  style,
}) => {

  return (
    <div className={styles.flexRowContainer} style={style}>
      {children}
    </div>
  );
};

export default FlexRow;
