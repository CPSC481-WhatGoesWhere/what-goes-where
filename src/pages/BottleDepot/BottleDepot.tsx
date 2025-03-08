import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { RECYCLING_DEPOTS } from "./constants";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./BottleDepot.module.css";
function BottleDepot() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  return (
    <div className={styles.container}>
      <h1>Bottles and Cans Recycling</h1>
      <p>Recycle your empty bottles and cans for cash.</p>
      <h4>Nearby Bottle Depots</h4>
      <FlexRow>
        <LocationsMap
          locations={RECYCLING_DEPOTS}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </FlexRow>
    </div>
  );
}

export default BottleDepot;
