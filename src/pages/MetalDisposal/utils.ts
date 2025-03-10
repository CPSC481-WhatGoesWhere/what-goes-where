import { Location } from "@/Components/LocationsMap/LocationsMap";
import { POSTAL_CODE_REGEX } from "./constants";

export function getMetalDepotTableRecords(
  data: Location[],
  userPostalCode?: string
) {
  const validPostalCode =
    userPostalCode && POSTAL_CODE_REGEX.test(userPostalCode);
  const res = data.map((record) => ({
    Name: record.name,
    Address: record.address,
    "Price Per Pound ($)": record.pricePerPound,
    "Distance (km)": validPostalCode ? Math.random().toFixed(2) : "N/A",
    "Price/Distance Ratio": validPostalCode ? Math.random().toFixed(2) : "N/A",
  }));

  return res.sort((a, b) => {
    if (
      typeof a["Distance (km)"] === "string" ||
      typeof b["Distance (km)"] === "string"
    ) {
      return 1;
    }

    return (
      (a["Price Per Pound ($)"] ?? 0) / a["Distance (km)"] -
      (b["Price Per Pound ($)"] ?? 0) / b["Distance (km)"]
    );
  });
}
