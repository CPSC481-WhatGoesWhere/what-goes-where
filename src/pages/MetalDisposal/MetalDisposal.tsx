import FlexRow from "@/Components/FlexRow";
import styles from "./MetalDisposal.module.css";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location, METAL } from "@/Components/LocationsMap/LocationsMap";
import { METAL_RECYCLING_DEPOTS, METAL_TYPES } from "./constants";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import Table from "@/Components/Table";
import {
  formatMetalDepotTableRecord,
  getMetalDepotTableRecords,
} from "./utils";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import Button from "@/Components/Button";
import { useNavigate } from "react-router-dom";
import ScrollList from "@/Components/ScrollList";

function MetalDisposal() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [postalCode, setPostalCode] = useState("");
  const [selectedMetal, setSelectedMetal] = useState<string | undefined>(
    METAL_TYPES[0].value
  );
  const navigate = useNavigate();

  const handlePostalCodeChange = (input: string) => {
    const cleanedInput = input.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let formatted = "";

    for (let i = 0; i < cleanedInput.length && i < 6; i++) {
      const char = cleanedInput[i];

      if (i % 2 === 0) {
        // Positions 0, 2, 4: letters only
        if (/[A-Z]/.test(char)) {
          formatted += char;
        } else {
          break;
        }
      } else {
        // Positions 1, 3, 5: digits only
        if (/[0-9]/.test(char)) {
          formatted += char;
        } else {
          break;
        }
      }

      // Automatically insert space after third character
      if (formatted.length === 3) {
        formatted += " ";
      }
    }

    setPostalCode(formatted);
  };

  const tableRowSelect = (row: Location) => {
    document.getElementById("map")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setSelectedLocation(row);
  };
  return (
    <FlexBackGround
      style={{ gap: "var(--spacing-none)", padding: "var(--spacing-none)" }}
    >
      <ScrollList
        style={{ maxWidth: "100%" }}
        bottomFade={false}
        topFade={true}
      >
        <FlexRow style={{ flex: "none" }}>
          <Block>
            <div className={styles.container}>
              <h1>Metal Recycling</h1>
              <p>
                Find depots to recycle your metal for cash. <br/>Enter your postal code, 
                select a metal type, and view nearby locations. <br/>Click below to learn 
                how to recycle copper wires properly.
              </p>
            </div>
            <FlexRow style={{ flex: "none", padding: "0px", justifyContent: "flex-start" }}>
              <Button
                onClick={() => navigate("/item/copperwires")}
                dark={false}
                containerStyle={{maxWidth: "40%"}}
              >
                Copper Wires
              </Button>
            </FlexRow>
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
                    className={styles.postalCodeInput}
                    value={postalCode}
                    onChange={handlePostalCodeChange}
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

      </ScrollList>
    </FlexBackGround>
  );
}

export default MetalDisposal;
