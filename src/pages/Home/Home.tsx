
// Home.tsx

import Block from "@/Components/Block/Block";
import FlexBackGround from "@/Components/FlexBackGround";
import FlexRow from "@/Components/FlexRow";
// import styles from "./Home.module.css";
import Title from "@/Components/Title/Title";
import TextInput from "@/Components/TextInput/TextInput";
import Button from "@/Components/Button";
import { useState } from "react";


function Home() {

  const [chatQuestion, setChatQuestion] = useState("")

  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Add the ask button functionality added here when we get there.
  };

  return (
    <FlexBackGround>
      <FlexRow style={{minHeight: "50%"}}>
        <Block style={{maxWidth: "60%", height: "90%", gap: "20px"}}>
          <Title>{"Got a question? Ask me anything!"}</Title>
          <TextInput
            value={chatQuestion}
            onChange={setChatQuestion}
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
      <FlexRow>
        <Block style={{maxWidth: "40%", height: "80%"}}>
          Clothing Donation
        </Block>
        <Block style={{maxWidth: "40%", height: "80%"}}>
          Bottle Depot
        </Block>
      </FlexRow>
      <FlexRow>
        <Block style={{maxWidth: "40%", height: "80%"}}>
          Metal Recycling
        </Block>
        <Block style={{maxWidth: "40%", height: "80%"}}>
          Junk Removal
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default Home;
