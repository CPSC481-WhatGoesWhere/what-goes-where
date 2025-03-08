import FlexRow from "@/Components/FlexRow";
import styles from "./MetalDisposal.module.css";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import { METAL_RECYCLING_DEPOTS } from "./constants";

function MetalDisposal() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  return (
    <div className={styles.container}>
      <h1>Wire Recycling</h1>
      <p>Recycle your electrical wires for cash.</p>
      <h4>Nearby Wire Recycling Depots</h4>
      <FlexRow>
        <LocationsMap
          locations={METAL_RECYCLING_DEPOTS}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </FlexRow>
    </div>
  );
}

export default MetalDisposal;
