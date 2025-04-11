// ChatListItem.tsx

import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // Added import
import styles from "./ChatList.module.css";
import Button from "@/Components/Button";

interface ChatListItemProps {
  children: ReactNode;
  side: "left" | "right";
  navigationPath?: string;
  buttonName?: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ children, side, navigationPath, buttonName }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // If children is a string, assume it contains HTML and render accordingly.
  if (typeof children === "string") {
    return (
      <div className={styles.itemContainer}>
        <div
          className={`${styles.itemSubContainer} ${
            side === "right" ? styles.rightItem : styles.leftItem
          }`}
        >
          <div dangerouslySetInnerHTML={{ __html: children }} />
          {navigationPath && buttonName && (
            <Button
              dark={false}
              onClick={() => navigate(navigationPath)} // Updated to use navigate
              containerStyle={{ marginTop: "10px" }}
            >
              {buttonName}
            </Button>
          )}
        </div>
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
        {navigationPath && buttonName && (
          <Button
            dark={true}
            onClick={() => navigate(navigationPath)} // Updated to use navigate
            containerStyle={{ marginTop: "10px" }}
          >
            {buttonName}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;
