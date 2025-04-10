import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { RECYCLING_DEPOTS } from "./constants";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./BottleDepot.module.css";
import Block from "@/Components/Block";
import FlexBackGround from "@/Components/FlexBackGround";
import ScrollList from "@/Components/ScrollList";
import RefundCalculator from "./RefundCalculator";

function BottleDepot() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  return (
    <FlexBackGround style={{ gap: "var(--spacing-none)", padding: "var(--spacing-none)" }}>
      <ScrollList
        style={{ maxWidth: "100%" }}
        bottomFade={false}
        topFade={true}
      >
        <FlexRow style={{ flex: "none", alignItems: "stretch" }}>
          <Block style={{ flex: 1, alignItems: "center"}}>
            <div className={styles.container}>
              <h1>Bottles and Cans Recycling</h1>
              <p>
                Turn your empty bottles and cans into cash while helping the
                environment. Find nearby recycling depots and start making a
                difference today!
              </p>
            </div>
          </Block>
          <RefundCalculator />
        </FlexRow>
        <FlexRow style={{ flex: "none" }}>
          <Block style={{ height: "100%" }}>
            <LocationsMap
              locations={RECYCLING_DEPOTS}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </Block>
        </FlexRow>
      </ScrollList>
    </FlexBackGround>
  );
}

export default BottleDepot;
