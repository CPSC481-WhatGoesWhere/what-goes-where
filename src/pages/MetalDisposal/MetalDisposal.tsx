import FlexRow from "@/Components/FlexRow";
import styles from "./MetalDisposal.module.css";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import { METAL_RECYCLING_DEPOTS, POSTAL_CODE_REGEX_STR } from "./constants";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import Table from "@/Components/Table";
import { getMetalDepotTableRecords } from "./utils";
import TextInput from "@/Components/TextInput";

function MetalDisposal() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [postalCode, setPostalCode] = useState("");
  return (
    <FlexBackGround style={{ justifyContent: "flex-start", overflowY: "auto" }}>
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
      <FlexRow>
        <Block style={{ alignItems: "flex-start" }}>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Metal Recycling Depots</h4>
            <FlexRow style={{ justifyContent: "flex-end", paddingLeft: 0 }}>
              <span>
                Enter your postal code to find closest depots that will pay you
                the most:
              </span>
              <div style={{ width: "200px" }}>
                <TextInput
                  pattern={POSTAL_CODE_REGEX_STR}
                  className={styles.postalCodeInput}
                  value={postalCode}
                  onChange={setPostalCode}
                  placeholder="E.g. A1A 1A1"
                />
              </div>
            </FlexRow>
          </div>
          <Table
            data={getMetalDepotTableRecords(METAL_RECYCLING_DEPOTS, postalCode)}
          />
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default MetalDisposal;
