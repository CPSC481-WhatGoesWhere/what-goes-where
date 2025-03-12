
// ClickableBlock.tsx

import React, { ReactNode } from "react";
import Block from "./Block";
import { CSSProperties } from "styled-components";

interface ClickableBlockProps {
  style?: CSSProperties;
  children: ReactNode;
  onClick: (...args: any[]) => void;
  clickArgs?: any[];
}

const ClickableBlock: React.FC<ClickableBlockProps> = ({
  style,
  children,
  onClick,
  clickArgs,
}) => {

  const handleClick = () => {
    if (clickArgs && clickArgs.length > 0) {
      onClick(...clickArgs);
    } else {
      onClick();
    }
  };

  return (
    <Block 
      style={style}
      asButton={true}
      onClick={handleClick}
    >
      {children}

    </Block>

  )
};

export default ClickableBlock;
