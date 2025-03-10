
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


function Home() {
  const navigate = useNavigate();

  const [chatQuestion, setChatQuestion] = useState("")

  const handleButtonClick = () => {
    navigate('/')
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
