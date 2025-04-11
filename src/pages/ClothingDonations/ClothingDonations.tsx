import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./ClothingDonations.module.css";
import { CLOTHING_DONATION_CENTERS } from "./constants";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import Button from "@/Components/Button";
import { useNavigate } from "react-router-dom";

function ClothingDonations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const navigate = useNavigate();
  return (
    <FlexBackGround style={{ justifyContent: "flex-start", overflowY: "auto" }}>
      <FlexRow style={{ flex: "none" }}>
        <Block>
          <div className={styles.container}>
            <h1>Clothing Donations</h1>
            <p>
              Fast fashion has led to massive textile waste and pollution, but
              small actions like donating clothes and shopping second-hand can
              make a big difference.<br/> Learn more about disposing of old clothes by clicking the button below.
            </p>
          </div>
          <FlexRow style={{ flex: "none", padding: "0px", justifyContent: "flex-start" }}>
            <Button
              onClick={() => navigate("/item/oldclothes")}
              dark={false}
              containerStyle={{maxWidth: "40%"}}
            >
              Copper Wires
            </Button>
          </FlexRow>
        </Block>
      </FlexRow>
      <FlexRow>
        <Block style={{ height: "100%" }}>
          <LocationsMap
            locations={CLOTHING_DONATION_CENTERS}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default ClothingDonations;
