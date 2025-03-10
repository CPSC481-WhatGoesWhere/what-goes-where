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
      <FlexRow style={{flex: "none"}}>
        <Block>
          <div className={styles.container}>
            <h1>Wire Recycling</h1>
            <p>Recycle your electrical wires for cash.</p>
            <h4>Nearby Wire Recycling Depots</h4>
          </div>
        </Block>
      </FlexRow>
        <FlexRow >
          <Block style={{height: "100%"}}>
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
