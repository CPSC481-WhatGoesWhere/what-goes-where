// Home.tsx

import Block from "@/Components/Block/Block";
import FlexBackGround from "@/Components/FlexBackGround";
import FlexRow from "@/Components/FlexRow";
// import styles from "./Home.module.css";
import Title from "@/Components/Title/Title";
import TextInput from "@/Components/TextInput/TextInput";
import Button from "@/Components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FeatureBlock from "@/Components/Block/FeatureBlock";
import ClothingDonationIMG from "../../assets/clothing.png";
import BottleDepotIMG from "../../assets/bottles.png";
import MetalRecyclingIMG from "../../assets/metal-money.png";
import JunkRemovalIMG from "../../assets/trash-truck.png";
import { CHAT_ITEMS } from "@/pages/General/constants";
import { ChatItem } from "@/pages/General/ChatList/ChatList";
import { storeInSession } from "@/functions/sessionStorageHelpers";
import { getResponseMessage } from "@/pages/General/responseHelpers";


function Home() {
  const navigate = useNavigate();

  const [chatQuestion, setChatQuestion] = useState("")
  const [chatItems, setChatItems] = useState<ChatItem[]>([]);

  
  // Function to add chat items based on the input.
  const handleButtonClick = () => {
    if (!chatQuestion.trim()) return;

    // Wrap the user's question in <p></p>
    const userMessage = `<p>${chatQuestion}</p>`;
    const { message: responseMessage, navigationPath, buttonName } = getResponseMessage(chatQuestion);

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
        navigationPath: navigationPath ?? undefined,
        buttonName: buttonName ?? undefined,
      },
    ];

    const updatedChats = [...chatItems, ...newChatItems];
    setChatItems(updatedChats);
    storeInSession("chatItems", updatedChats);
    setChatQuestion(""); // Clear the input after submitting.
    console.log("Chat items updated.");
    navigate('/general');
  };

  // Handle pressing Enter in the TextInput.
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <FlexBackGround>
      <FlexRow style={{minHeight: "50%"}}>
        <Block style={{maxWidth: "60%", height: "90%", gap: "20px"}}>
          <Title>{"Got a question? Ask me anything!"}</Title>
          <TextInput
            value={chatQuestion}
            onChange={setChatQuestion}
            onKeyDown={handleKeyDown}
            placeholder="E.g. Where do I throw out batteries?"
          />
          <Button
            dark={true}
            onClick={handleButtonClick}
            containerStyle={{ maxWidth: "50%" }}
          >
            Ask
          </Button>
        </Block>
      </FlexRow>
      <FlexRow style={{gap: "3%"}}>
        <FeatureBlock
          title={"Clothing Donation"}
          destination={"clothing-donations"}
          image={ClothingDonationIMG}
        />
        <FeatureBlock
          title={"Bottle Depot"}
          destination={"bottle-depot"}
          image={BottleDepotIMG}
        />
      </FlexRow>
      <FlexRow style={{gap: "3%"}}>
        <FeatureBlock
          title={"Metal Recycling"}
          destination={"metal-disposal"}
          image={MetalRecyclingIMG}
        />
        <FeatureBlock
          title={"Junk Removal"}
          destination={"junk-removal"}
          image={JunkRemovalIMG}
        />
      </FlexRow>
    </FlexBackGround>
  );
}

export default Home;
