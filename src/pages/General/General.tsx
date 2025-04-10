// General.tsx
import { useEffect, useState } from "react";
import { storeInSession, fetchFromSession } from "@/functions/sessionStorageHelpers";

import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import FlexRow from "@/Components/FlexRow";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import ChatList, { ChatItem } from "./ChatList/ChatList";
import Spacer from "@/Components/Spacer";
import { CHAT_ITEMS } from "./constants";
import styles from "./General.module.css";

function General() {
  const [chatItems, setChatItems] = useState<ChatItem[]>([]);
  const [chatQuestion, setChatQuestion] = useState("");

  const exampleQuestions = [
    "Where do I throw out batteries?",
    "How do I recycle metal?",
    "Where can I donate clothes?",
    "What is the nearest bottle depot?",
  ];

  // On mount, retrieve chat items from session storage.
  useEffect(() => {
    const storedChats = fetchFromSession<ChatItem[]>("chatItems");
    if (storedChats) {
      setChatItems(storedChats);
    }
  }, []);

  // Function to add chat items based on the input.
  const handleButtonClick = () => {
    if (!chatQuestion.trim()) return;

    // Wrap the user's question in <p></p>
    const userMessage = `<p>${chatQuestion}</p>`;
    const lowerCaseQuestion = chatQuestion.toLowerCase();
    let selectedItem = CHAT_ITEMS.find((item) => item.id === "InvalidSubject");

    if (lowerCaseQuestion.includes("bottle depot")) {
      selectedItem = CHAT_ITEMS.find((item) => item.id === "BottleDepot");
    } else if (lowerCaseQuestion.includes("clothing donation")) {
      selectedItem = CHAT_ITEMS.find((item) => item.id === "ClothingDonation");
    } else if (lowerCaseQuestion.includes("metal recycling")) {
      selectedItem = CHAT_ITEMS.find((item) => item.id === "MetalRecycling");
    } else if (lowerCaseQuestion.includes("junk removal")) {
      selectedItem = CHAT_ITEMS.find((item) => item.id === "JunkRemoval");
    }

    // Fallback in case selectedItem is undefined (shouldn't happen if constants are correct)
    const responseMessage = selectedItem ? selectedItem.message : "";

    // Create two new chat items:
    const newChatItems: ChatItem[] = [
      {
        id: Date.now().toString() + "-right",
        message: userMessage,
        side: "right",
      },
      {
        id: Date.now().toString() + "-left",
        message: responseMessage,
        side: "left",
      },
    ];

    const updatedChats = [...chatItems, ...newChatItems];
    setChatItems(updatedChats);
    storeInSession("chatItems", updatedChats);
    setChatQuestion(""); // Clear the input after submitting.
    console.log("Chat items updated.");
  };

  // Handle pressing Enter in the TextInput.
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const handleExampleQuestionClick = (question: string) => {
    setChatQuestion(question);
    handleButtonClick();
  };

  return (
    <FlexBackGround style={{ paddingTop: "0px" }}>
      {chatItems.length === 0 ? (
        // Render the empty state layout
        <>
          <FlexRow style={{ flex: "none", padding: "0px" }}>
            <Block style={{ height: "100%", maxWidth: "70%" }}>
              <h2 className={styles.welcomeHeader}>
                Welcome! Here are some questions you can ask:
              </h2>
              <div className={styles.exampleQuestionsList}>
                {exampleQuestions.map((question, index) => (
                  <div className={styles.exampleQuestionsList}>
                    <Button
                      key={index}
                      onClick={() => handleExampleQuestionClick(question)}
                      dark={false}
                    >
                      {question}
                    </Button>
                  </div>
                ))}
              </div>
            </Block>
          </FlexRow>
        </>
      ) : (
        // Render the chat list when there are chat items
        <>
          <ChatList items={chatItems} />
        </>
      )}
      <Spacer height={20} />
      <FlexRow style={{ flex: "none", padding: "0px" }}>
        <Block style={{ height: "100%", maxWidth: "70%" }}>
          <FlexRow style={{ flex: "none", padding: "0px" }}>
            <TextInput
              value={chatQuestion}
              onChange={setChatQuestion}
              onKeyDown={handleKeyDown}
              placeholder="E.g. Where do I throw out batteries?"
              containerStyle={{ minWidth: "100px", height: "100%" }}
              inputStyle={{ height: "100%" }}
              isColored={true}
            />
            <Button
              dark={true}
              onClick={handleButtonClick}
              containerStyle={{ maxWidth: "10%", minWidth: "50px" }}
            >
              Ask
            </Button>
          </FlexRow>
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default General;