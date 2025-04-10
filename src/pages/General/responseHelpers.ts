import { CHAT_ITEMS } from "@/pages/General/constants";

export const getResponseMessage = (question: string): string => {
  // Preprocess the question: convert to lowercase and remove punctuation
  const lowerCaseQuestion = question.toLowerCase().replace(/[.,!?;:]/g, " ");

  // Define keyword groups with expanded and detailed keywords
  const keywordGroups = [
    {
      keywords: ["bottle", "bottles", "can", "cans", "depot", "depots"],
      responseId: "BottleDepot",
    },
    {
      keywords: ["clothes", "clothing", "donation", "shirt", "shirts", "pant", "pants", "jacket", "jackets", 
        "sweater", "sweaters", "shoe", "shoes", "boot", "boots", "sock", "socks", "hat", "hats", 
        "scarf", "scarves", "belt", "belts", "accessory", "accessories", "glove", "gloves", 
        "sweatshirt", "sweatshirts", "sweatpant", "sweatpants", "underwear", "lingerie", "activewear", 
        "outerwear", "formalwear", "casualwear", "workwear", "uniform", "uniforms", "costume", 
        "costumes", "vintage", "secondhand", "thrift", "goodwill", "salvation army"],
      responseId: "ClothingDonation",
    },
    {
      keywords: ["metal", "metals", "scrap", "copper", "aluminum", "steel", "iron", "brass", "wire", "wires"],
      responseId: "MetalRecycling",
    },
    {
      keywords: ["junk", "trash", "crap", "shit", "in-laws", "debris", "waste", "bulk", "hauling", "disposal", "pickup", "removal"],
      responseId: "JunkRemoval",
    },
    {
      keywords: ["battery", "batteries", "disposal", "recycling", "drop-off", "waste", "safe disposal"],
      responseId: "BatteryDisposal",
    },
    {
      keywords: ["plastic", "plastics", "recycling", "waste", "disposal", "bottle", "bottles", "bag", 
        "bags", "container", "containers", "packaging"],
      responseId: "PlasticRecycling",
    },
    {
      keywords: ["electronics", "electronic", "e-waste", "recycling", "disposal", "drop-off", "waste", 
        "old", "broken"],
      responseId: "ElectronicsRecycling",
    },
    {
      keywords: ["compost", "composting", "food waste", "organic waste", "bin", "pile", "tips", 
        "process", "materials", "kitchen waste"],
      responseId: "Composting",
    },
    {
      keywords: ["hazardous", "waste", "materials", "disposal", "chemical", "toxic", "guidelines", 
        "drop-off", "safe disposal"],
      responseId: "HazardousWaste",
    },
  ];

  // Check each group for matching keywords
  for (const group of keywordGroups) {
    if (group.keywords.some((keyword) => lowerCaseQuestion.includes(` ${keyword} `) || lowerCaseQuestion.startsWith(keyword) || lowerCaseQuestion.endsWith(keyword))) {
      const selectedItem = CHAT_ITEMS.find((item) => item.id === group.responseId);
      return selectedItem ? selectedItem.message : "";
    }
  }

  // Default response if no keywords match
  const defaultItem = CHAT_ITEMS.find((item) => item.id === "InvalidSubject");
  return defaultItem ? defaultItem.message : "";
};
