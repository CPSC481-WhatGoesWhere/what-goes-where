import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./ClothingDonations.module.css";
import { CLOTHING_DONATION_CENTERS } from "./constants";

function ClothingDonations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  return (
    <div className={styles.container}>
      <h1>Clothing Donations</h1>
      <p>
        Fast fashion has led to massive textile waste and pollution, but small
        actions like donating clothes and shopping second-hand can make a big
        difference.
      </p>
      <h4>Nearby Thrift Stores and Donation Centers</h4>
      <FlexRow>
        <LocationsMap
          locations={CLOTHING_DONATION_CENTERS}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </FlexRow>
    </div>
  );
}

export default ClothingDonations;
