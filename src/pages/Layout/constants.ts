import { DISPOSAL_INFO } from "../ItemPage/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractSearchOptions(data: Record<string, any>) {
  return Object.keys(data).map((key) => {
    // Extract the h1 value from the first object in the array
    const h1Value = data[key][0].h1;

    // Return the object in the desired format
    return {
      value: key,
      label: h1Value,
    };
  });
}

export const SEARCH_OPTIONS = extractSearchOptions(DISPOSAL_INFO);
