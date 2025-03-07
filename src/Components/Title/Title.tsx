
// Title.tsx

import React, { ReactNode, CSSProperties } from "react";
import styles from "./Title.module.css";

interface TitleProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Title: React.FC<TitleProps> = ({
  children,
  style,
}) => {

  const titleStyles: CSSProperties = {
    ...style,
  };

  return (
    <div className={styles.titleContainer} style={titleStyles}>
      <div className={styles.title}>{children}</div>
    </div>
  );
};

export default Title;
