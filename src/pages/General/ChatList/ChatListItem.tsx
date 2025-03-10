
// ChatListItem.tsx

import React, { ReactNode } from "react";
import styles from "./ChatList.module.css";

interface ChatListItemProps {
  children: ReactNode;
  side: "left" | "right";
}

const ChatListItem: React.FC<ChatListItemProps> = ({ children, side }) => {
  // If children is a string, assume it contains HTML and render accordingly.
  if (typeof children === "string") {
    return (
      <div className={styles.itemContainer}>
        <div
          className={`${styles.itemSubContainer} ${
            side === "right" ? styles.rightItem : styles.leftItem
          }`}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    );
  }
  
  // Otherwise, render children normally.
  return (
    <div className={styles.itemContainer}>
      <div
        className={`${styles.itemSubContainer} ${
          side === "right" ? styles.rightItem : styles.leftItem
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ChatListItem;
