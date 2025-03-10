import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./ClothingDonations.module.css";
import { CLOTHING_DONATION_CENTERS } from "./constants";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";

function ClothingDonations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  return (
    <FlexBackGround>
      <FlexRow style={{flex: "none"}}>
        <Block>
          <div className={styles.container}>
            <h1>Clothing Donations</h1>
            <p>
              Fast fashion has led to massive textile waste and pollution, but small
              actions like donating clothes and shopping second-hand can make a big
              difference.
            </p>
            <h4>Nearby Thrift Stores and Donation Centers</h4>
          </div>
        </Block>
      </FlexRow>
        <FlexRow>
          <Block style={{height: "100%"}}>
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
