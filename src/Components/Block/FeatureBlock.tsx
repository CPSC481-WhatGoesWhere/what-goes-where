
// FeatureBlock.tsx

import React from "react";
import Block from "./Block";
import { useNavigate } from "react-router-dom";
import styles from "./Block.module.css";

interface FeatureBlockProps {
  title: string;
  destination: string;
  image: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  destination,
  image
}) => {
  const navigate = useNavigate();

  return (
    <Block 
      style={{maxWidth: "40%", height: "80%"}}
      asButton={true}
      onClick={() => navigate(`/${destination}`)}
    >

      <div className={styles.featureBlockContainer}>
        <div className={styles.featureBlockLeftContainer}>
          <img alt="Feature-Image" src={image} />
        </div>
        <div className={styles.featureBlockRightContainer}>
          {title}
        </div>
      </div>

    </Block>

  )
};

export default FeatureBlock;
