
// Spacer.tsx

import React from "react";

interface SpacerProps {
  height: number;
}

const Spacer: React.FC<SpacerProps> = ({
  height
}) => {
  
  return (
    <div style={{ height: `${height}px` }}>
      <div></div>
    </div>
  );
};

export default Spacer;
