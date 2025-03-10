import { Location } from "@/Components/LocationsMap/LocationsMap";
import { POSTAL_CODE_REGEX } from "./constants";

export function getMetalDepotTableRecords(
  data: Location[],
  userPostalCode?: string
) {
  const validPostalCode =
    userPostalCode && POSTAL_CODE_REGEX.test(userPostalCode);
  const res = data.map((record) => {
    const distance = validPostalCode ? Math.random().toFixed(2) : "N/A";
    return {
      Name: record.name,
      Address: record.address,
      "Price Per Pound ($)": record.pricePerPound,
      "Distance (km)": distance,
      "Price/Distance Ratio": validPostalCode
        ? ((record.pricePerPound ?? 0) / Number(distance)).toFixed(2)
        : "N/A",
    };
  });

  const sorted = res.sort((a, b) => {
    if (!validPostalCode) {
      return 1;
    }
    const res =
      (b["Price Per Pound ($)"] ?? 0) / Number(b["Distance (km)"]) -
      (a["Price Per Pound ($)"] ?? 0) / Number(a["Distance (km)"]);
    return res;
  });
  return sorted;
}
