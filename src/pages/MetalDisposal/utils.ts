import { Location } from "@/Components/LocationsMap/LocationsMap";
import { POSTAL_CODE_REGEX } from "./constants";

type LocationTableData = Location & {
  pricePerPound: number | undefined;
  distance: string;
  priceDistanceRatio: string;
};

export function getMetalDepotTableRecords(
  data: Location[],
  userPostalCode?: string
): LocationTableData[] {
  const validPostalCode =
    userPostalCode && POSTAL_CODE_REGEX.test(userPostalCode);
  const res = data.map((record) => {
    const distance = validPostalCode ? Math.random().toFixed(2) : "N/A";
    return {
      ...record,
      pricePerPound: record.pricePerPound,
      distance: distance,
      priceDistanceRatio: validPostalCode
        ? ((record.pricePerPound ?? 0) / Number(distance)).toFixed(2)
        : "N/A",
    };
  });

  const sorted = res.sort((a, b) => {
    if (!validPostalCode) {
      return 1;
    }
    const res =
      (b["pricePerPound"] ?? 0) / Number(b["distance"]) -
      (a["pricePerPound"] ?? 0) / Number(a["distance"]);
    return res;
  });
  return sorted;
}

export function formatMetalDepotTableRecord(record: LocationTableData) {
  return {
    Name: record.name,
    Address: record.address,
    "Price Per Pound ($)": record.pricePerPound,
    "Distance (km)": record.distance,
    "Price/Distance Ratio": record.priceDistanceRatio,
  };
}
