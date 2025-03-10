import FlexRow from "@/Components/FlexRow";
import styles from "./MetalDisposal.module.css";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import { METAL_RECYCLING_DEPOTS } from "./constants";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";

function MetalDisposal() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  return (
    <FlexBackGround>
      <FlexRow style={{ flex: "none" }}>
        <Block>
          <div className={styles.container}>
            <h1>Metal Recycling</h1>
            <p>Recycle your metal for cash.</p>
          </div>
        </Block>
      </FlexRow>
      <FlexRow>
        <Block style={{ height: "100%" }}>
          <LocationsMap
            locations={METAL_RECYCLING_DEPOTS}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default MetalDisposal;
