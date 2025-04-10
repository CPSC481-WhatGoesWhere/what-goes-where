import { Location, METAL } from "@/Components/LocationsMap/LocationsMap";
import { POSTAL_CODE_REGEX } from "./constants";

type LocationTableData = Location & {
  selectedMetalPricePerPound: number | undefined;
  distance: string;
  priceDistanceRatio: string;
};

export function getMetalDepotTableRecords(
  data: Location[],
  userPostalCode?: string,
  selectedMetal?: METAL
): LocationTableData[] {
  const validPostalCode =
    userPostalCode && POSTAL_CODE_REGEX.test(userPostalCode);

  const res = data.map((record) => {
    const distance = validPostalCode ? Math.random().toFixed(2) : "N/A"; // Random distance from user postal code to location
    const selectedMetalPrice =
      selectedMetal &&
      record.pricePerPound &&
      record.pricePerPound[selectedMetal]
        ? record.pricePerPound[selectedMetal]
        : undefined; // Price per pound for the selected metal
    return {
      ...record,
      selectedMetalPricePerPound: selectedMetalPrice,
      distance: distance,
      priceDistanceRatio:
        validPostalCode && selectedMetal && selectedMetalPrice
          ? (selectedMetalPrice / Number(distance)).toFixed(2)
          : "N/A",
    } as LocationTableData;
  });

  const sorted = res.sort((a, b) => {
    if (
      !validPostalCode ||
      !selectedMetal ||
      !a["pricePerPound"] ||
      !b["pricePerPound"]
    ) {
      return 1;
    }
    const res =
      (b["selectedMetalPricePerPound"] ?? 0) / Number(b["distance"]) -
      (a["selectedMetalPricePerPound"] ?? 0) / Number(a["distance"]);
    return res;
  });
  return sorted;
}

export function formatMetalDepotTableRecord(record: LocationTableData) {
  return {
    Name: record.name,
    Address: record.address,
    "Price Per Pound ($)": record.selectedMetalPricePerPound,
    "Distance (km)": record.distance,
    "Price/Distance Ratio": record.priceDistanceRatio,
  };
}
