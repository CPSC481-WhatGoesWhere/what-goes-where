
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
      <FlexRow>
        <Block style={{maxWidth: "800px", minWidth: "100px", minHeight: "200px", gap: "20px"}}>
          <Title>{"Got a question? Ask me anything!"}</Title>
          <TextInput
            value={chatQuestion}
            onChange={setChatQuestion}
            placeholder="E.g. Where do I throw out batteries?"
          />
          <Button
            dark={true}
            onClick={handleButtonClick}
            containerStyle={{ maxWidth: "200px" }}
          >
            Ask
          </Button>
        </Block>
      </FlexRow>
      <FlexRow>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
        <Block>Block</Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default Home;
