
// General.tsx

import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import FlexRow from "@/Components/FlexRow";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import Button from "@/Components/Button";


function General() {

  const [chatQuestion, setChatQuestion] = useState("")

  const handleButtonClick = () => {
    console.log("Button Clicked!")
  };


  return (
    <FlexBackGround>
      <FlexRow>
        <Block style={{height: "100%"}}>
          <FlexRow>
            Chat Goes Here
          </FlexRow>
          <FlexRow style={{flex: "none"}}>
            <TextInput
              value={chatQuestion}
              onChange={setChatQuestion}
              placeholder="E.g. Where do I throw out batteries?"
              containerStyle={{ maxWidth: "50%", minWidth: "100px" }}
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
