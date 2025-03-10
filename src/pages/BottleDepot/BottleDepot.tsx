import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { RECYCLING_DEPOTS } from "./constants";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./BottleDepot.module.css";
import Block from "@/Components/Block";
import FlexBackGround from "@/Components/FlexBackGround";
import TextInput from "@/Components/TextInput";
import { calculateEstimatedRefund } from "./utils";

function RefundCalculator() {
  const [glassBottles, setGlassBottles] = useState<number | undefined>(
    undefined
  );
  const [plasticBottles, setPlasticBottles] = useState<number | undefined>(
    undefined
  );
  const [aluminiumCans, setAluminiumCans] = useState<number | undefined>(
    undefined
  );

  const handleInputChange =
    (setter: (val: number | undefined) => void) => (v: string) => {
      setter(v ? parseInt(v) : undefined);
    };

  return (
    <FlexRow>
      <Block style={{ alignItems: "flex-start" }}>
        <h3>Calculate refund estimate</h3>
        <div className={styles.refundInputsContainer}>
          <TextInput
            type="number"
            placeholder="Enter number of glass bottles"
            value={glassBottles}
            onChange={handleInputChange(setGlassBottles)}
            min={0}
          />
          <TextInput
            type="number"
            placeholder="Enter number of plastic bottles"
            value={plasticBottles}
            onChange={handleInputChange(setPlasticBottles)}
            min={0}
          />
          <TextInput
            type="number"
            placeholder="Enter number of aluminium cans"
            value={aluminiumCans}
            onChange={handleInputChange(setAluminiumCans)}
            min={0}
          />
          <p>
            <strong>Estimated refund: </strong>$
            {calculateEstimatedRefund(
              glassBottles,
              plasticBottles,
              aluminiumCans
            ).toFixed(2)}
          </p>
        </div>
      </Block>
    </FlexRow>
  );
}

function BottleDepot() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  return (
    <FlexBackGround style={{ justifyContent: "flex-start", overflowY: "auto" }}>
      <FlexRow style={{ flex: "none" }}>
        <Block>
          <div className={styles.container}>
            <h1>Bottles and Cans Recycling</h1>
            <p>Recycle your empty bottles and cans for cash.</p>
          </div>
        </Block>
      </FlexRow>
      <FlexRow>
        <Block style={{ height: "100%" }}>
          <LocationsMap
            locations={RECYCLING_DEPOTS}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </Block>
      </FlexRow>
      <RefundCalculator />
    </FlexBackGround>
  );
}

export default BottleDepot;
