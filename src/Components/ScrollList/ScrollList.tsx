
// ScrollList.tsx


import { ReactNode } from "react";
import styles from "./ScrollList.module.css";
import { CSSProperties } from "styled-components";

interface ScrollListProps {
  /** Button content */
  children: ReactNode;
  /** Custom inline styles */
  style?: CSSProperties;
  /** Variant styling; */
  topFade?: Boolean;
  bottomFade?: Boolean;
}

const ScrollList: React.FC<ScrollListProps> = ({
  children,
  style,
  topFade = false,
  bottomFade = false,
}) => {
  let scrollListClassNames = styles.scrollList;
  if (topFade && bottomFade) {
    scrollListClassNames = `${styles.scrollList} ${styles.fullFade}`;
  } else if (topFade && !bottomFade) {
    scrollListClassNames = `${styles.scrollList} ${styles.topFade}`;
  } else if (!topFade && bottomFade) {
    scrollListClassNames = `${styles.scrollList} ${styles.bottomFade}`;
  }

  return (
    <div 
      style={style} 
      className={scrollListClassNames}
    >
      {children}
    </div>
  );
}

export default ScrollList;
