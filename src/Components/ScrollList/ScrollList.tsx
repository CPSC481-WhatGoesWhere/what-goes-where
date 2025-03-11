
// ScrollList.tsx


import styles from "./ScrollList.module.css";
import { ButtonProps } from "antd";

const ScrollList: React.FC<ButtonProps> = ({
  children,
  style
}) => {


  return (
    <div style={style} className={`${styles.scrollList}`}>
      {children}
    </div>
  );
}

export default ScrollList;
