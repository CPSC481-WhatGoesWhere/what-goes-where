// ChatList.tsx

import React, { CSSProperties, useEffect, useRef } from "react";
import Spacer from "@/Components/Spacer";
import ChatListItem from "./ChatListItem";
import ScrollList from "@/Components/ScrollList";

// Define the type for a single chat item.
export interface ChatItem {
  id: string;
  message: string;
  side: "left" | "right";
  navigationPath?: string;
  buttonName?: string;
}

interface ChatListProps {
  items: ChatItem[];
  style?: CSSProperties;
}

const ChatList: React.FC<ChatListProps> = ({ items, style }) => {
  // Create a ref for a dummy element at the bottom of the chat list.
  const bottomRef = useRef<HTMLDivElement>(null);

  // Whenever items change (or on mount), scroll the dummy element into view.
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items]);

  return (
    <>
      <ScrollList 
        style={style}
        bottomFade={true}
        topFade={true}
      >
        <Spacer height={10} />
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <ChatListItem side={item.side} navigationPath={item.navigationPath} buttonName={item.buttonName}>
              {item.message}
            </ChatListItem>
            <Spacer height={20} />
          </React.Fragment>
        ))}
        {/* Dummy div to mark the bottom of the chat list */}
        <div ref={bottomRef} />
      </ScrollList>
    </>
  );
};

export default ChatList;