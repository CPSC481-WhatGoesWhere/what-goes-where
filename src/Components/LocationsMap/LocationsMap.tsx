import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./LocationsMap.module.css";
import Button from "../Button";
import TextInput from "../TextInput";
import { useState } from "react";

export type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  pricePerPound?: number;
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
  if (!location.pricePerPound) {
    return null;
  }
  return (
    <>
      <hr />
      <p>
        <strong>Price per pound: </strong>${location.pricePerPound.toFixed(2)}
      </p>
      <h4>Cash Refund Estimation</h4>
      <label>
        Enter the number of pounds of metal you have:
        <TextInput
          type="number"
          placeholder="LBS"
          value={pounds}
          onChange={(val) => setPounds(val ? Number(val) : undefined)}
        />
      </label>
      <p>
        Estimated Refund: $
        {pounds ? (pounds * location.pricePerPound).toFixed(2) : "0.00"}
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
