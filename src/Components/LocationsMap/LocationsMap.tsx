import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./LocationsMap.module.css";
import Button from "../Button";
import TextInput from "../TextInput";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import FlexRow from "../FlexRow";
import Select from "../Select";
import { METAL_TYPES } from "@/pages/MetalDisposal/constants";

// Fix missing Leaflet marker icons in Vite
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

export type METAL = "aluminum" | "copper" | "steel" | "brass";
export type METAL_PRICE = Record<METAL, number>;

export type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  pricePerPound?: METAL_PRICE;
  hours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
};

function OperatingHours({ hours }: { hours: Location["hours"] }) {
  return (
    <ul className={styles.hoursList}>
      {Object.entries(hours).map(([day, hours]) => (
        <li key={day} className={styles.hoursItem}>
          <strong>{day}:</strong> {hours}
        </li>
      ))}
    </ul>
  );
}

function LocationRefundDetails({ location }: { location: Location }) {
  const [pounds, setPounds] = useState<number | undefined>(undefined);
  const [selectedMetal, setSelectedMetal] = useState<string | undefined>(
    METAL_TYPES[0].value
  );
  if (!location.pricePerPound) {
    return null;
  }
  return (
    <>
      <hr />
      <div>
        <strong>Price per pound: </strong>
        <ul className={styles.pricePerPoundList}>
          {Object.entries(location.pricePerPound).map(([metal, price]) => (
            <li key={metal}>
              {metal.charAt(0).toUpperCase() + metal.slice(1)}: $
              {price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <h4>Cash Refund Estimation</h4>
      <FlexRow style={{ justifyContent: "flex-start", paddingLeft: 0 }}>
        <span>Select the metal you want to recycle:</span>
        <Select
          options={METAL_TYPES}
          selectedValue={selectedMetal}
          setSelectedValue={setSelectedMetal}
        />
      </FlexRow>
      <label>
        Enter the number of pounds of {selectedMetal} you have:
        <TextInput
          type="number"
          placeholder="LBS"
          value={pounds}
          onChange={(val) => setPounds(val ? Number(val) : undefined)}
        />
      </label>
      <p>
        Estimated Refund: $
        {pounds && selectedMetal
          ? (pounds * location.pricePerPound[selectedMetal as METAL]).toFixed(2)
          : "0.00"}
      </p>
    </>
  );
}

function LocationDetails({ location }: { location: Location }) {
  return (
    <>
      <div className={styles.depotDetails}>
        <h2>{location.name}</h2>
        <i>{location.address}</i>
        <OperatingHours hours={location.hours} />
        <LocationRefundDetails location={location} />
      </div>
      <a
        className={styles.directionsButton}
        target="_blank"
        href={`http://maps.google.com/maps?z=12&t=m&q=loc:${location.lat}+${location.lng}`}
      >
        <Button>Get Directions</Button>
      </a>
    </>
  );
}

interface LocationsMapProps {
  locations: Location[];
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
}

const LocationsMap = ({
  locations,
  selectedLocation,
  setSelectedLocation,
}: LocationsMapProps) => {
  const markerRefs = useRef<Record<number, L.Marker>>(Object.create(null));

  useEffect(() => {
    if (selectedLocation) {
      const marker = markerRefs.current[selectedLocation.id];
      if (marker) {
        marker.openPopup();
      }
    }
  }, [selectedLocation]);

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <div className={styles.container}>
      <MapContainer
        center={[51.0447, -114.0719]} // Center on Calgary
        zoom={12}
        style={{ width: "70%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            eventHandlers={{
              click: () => handleMarkerClick(location),
            }}
            ref={(ref) => {
              if (ref) {
                markerRefs.current[location.id] = ref;
              }
            }}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className={styles.panel}>
        {selectedLocation ? (
          <LocationDetails location={selectedLocation} />
        ) : (
          <p>Select a location to see details.</p>
        )}
      </div>
    </div>
  );
};

export default LocationsMap;
