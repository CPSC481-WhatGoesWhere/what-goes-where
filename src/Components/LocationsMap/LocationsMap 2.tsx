import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./LocationsMap.module.css";
import Button from "../Button";

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
          <>
            <div className={styles.depotDetails}>
              <h2>{selectedLocation.name}</h2>
              <i>{selectedLocation.address}</i>
              <ul className={styles.hoursList}>
                {Object.entries(selectedLocation.hours).map(([day, hours]) => (
                  <li key={day} className={styles.hoursItem}>
                    <strong>{day}:</strong> {hours}
                  </li>
                ))}
              </ul>
              {selectedLocation.pricePerPound && (
                <p>
                  <strong>Price per pound: </strong>$
                  {selectedLocation.pricePerPound.toFixed(2)}
                </p>
              )}
            </div>
            <a
              className={styles.directionsButton}
              target="_blank"
              href={`http://maps.google.com/maps?z=12&t=m&q=loc:${selectedLocation.lat}+${selectedLocation.lng}`}
            >
              <Button>Get Directions</Button>
            </a>
          </>
        ) : (
          <p>Select a location to see details.</p>
        )}
      </div>
    </div>
  );
};

export default LocationsMap;
