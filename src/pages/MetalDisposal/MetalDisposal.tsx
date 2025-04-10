import FlexRow from "@/Components/FlexRow";
import styles from "./MetalDisposal.module.css";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location, METAL } from "@/Components/LocationsMap/LocationsMap";
import {
  METAL_RECYCLING_DEPOTS,
  METAL_TYPES,
  POSTAL_CODE_REGEX_STR,
} from "./constants";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import Table from "@/Components/Table";
import {
  formatMetalDepotTableRecord,
  getMetalDepotTableRecords,
} from "./utils";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";

function MetalDisposal() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [postalCode, setPostalCode] = useState("");
  const [selectedMetal, setSelectedMetal] = useState<string | undefined>(
    METAL_TYPES[0].value
  );
  const tableRowSelect = (row: Location) => {
    document.getElementById("map")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setSelectedLocation(row);
  };
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
            <FlexRow style={{ justifyContent: "flex-start", paddingLeft: 0 }}>
              <span>Select the metal you want to recycle:</span>
              <Select
                options={METAL_TYPES}
                selectedValue={selectedMetal}
                setSelectedValue={setSelectedMetal}
              />
            </FlexRow>
          </div>
          <Table
            data={getMetalDepotTableRecords(
              METAL_RECYCLING_DEPOTS,
              postalCode,
              selectedMetal as METAL
            )}
            formatData={formatMetalDepotTableRecord}
            onRowClick={tableRowSelect}
          />
        </Block>
      </FlexRow>
      <FlexRow>
        <Block style={{ height: "100%" }} id="map">
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
