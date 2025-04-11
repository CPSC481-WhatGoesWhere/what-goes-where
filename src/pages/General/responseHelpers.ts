import { CHAT_ITEMS } from "@/pages/General/constants";

const stopwords = new Set([
  "where", "can", "i", "how", "do", "you", "the", "a", "an", "to", "it", "is", "my", "of", "for", "me", "we", "on"
]);

const tokenize = (text: string): string[] => {
  return text
    .toLowerCase()
    .replace(/[.,!?;:]/g, " ")
    .split(/\s+/)
    .filter(word => word && !stopwords.has(word));
};

const keywordGroups = [
  {
    keywords: [
      "bottle", "bottles", "cans", "tin", "drink", "drinks", "pop", "soda", "juice", "beer", "lager", "ale",
      "wine", "liquor", "cooler", "vodka", "rum", "alcohol", "recyclable", "deposit", "depot", "milk jug", "juicebox", 
      "tetrapak", "recyclebin", "beverage", "beverages", "return"
    ],
    responseId: "BottleDepot"
  },
  {
    keywords: [
      "clothes", "clothing", "clothe", "cloths", "shirt", "shirts", "tshirt", "tshirts", "pant", "pants", "jeans", 
      "jacket", "jackets", "sweater", "sweaters", "hoodie", "hoodies", "shoes", "shoe", "boots", "socks", "sock",
      "hat", "hats", "scarf", "scarves", "belt", "belts", "glove", "gloves", "underwear", "lingerie", "uniform", 
      "costume", "thrift", "thriftstore", "goodwill", "donate", "donation", "donations", "outerwear", "suit", 
      "suits", "dress", "dresses", "blazer", "blouse", "activewear", "workwear", "clothing bin", "clothingbank"
    ],
    responseId: "ClothingDonation"
  },
  {
    keywords: [
      "metal", "metals", "aluminum", "copper", "steel", "iron", "brass", "zinc", "tin", "nickel", "lead", "scrap", 
      "scrapmetal", "bolt", "bolts", "screw", "screws", "nail", "nails", "washer", "washers", "hinge", "bracket", 
      "pipe", "pipes", "rod", "rods", "wire", "wires", "mesh", "grate", "bar", "bars", "coil", "spring", "plate", 
      "rail", "rebar", "metaljunk", "metalframe", "metalparts"
    ],
    responseId: "MetalRecycling"
  },
  {
    keywords: [
      "junk", "garbage", "trash", "sofa", "couch", "mattress", "mattresses", "carpet", "rugs", "rug", "table", 
      "dresser", "cabinet", "wardrobe", "bed", "beds", "frame", "bedframe", "wood", "furniture", "chair", 
      "chairs", "cushion", "debris", "bulk", "haul", "microwave", "oven", "appliance", "appliances", "sink", 
      "toilet", "countertop", "fixture", "garage", "junkpile", "garbagedump", "furnitureremoval"
    ],
    responseId: "JunkRemoval"
  },
  {
    keywords: [
      "battery", "batteries", "rechargeable", "lithium", "alkaline", "nickel", "cadmium", "leadacid", "lead-acid", 
      "button", "coin", "cell", "powercell", "aaa", "aa", "c", "d", "cr2032", "duracell", "energizer", "watchbattery", 
      "camera battery", "hazardous", "dispose battery", "batterybin"
    ],
    responseId: "BatteryDisposal"
  },
  {
    keywords: [
      "plastic", "plastics", "plastic bag", "plastic bags", "bag", "bags", "wrap", "film", "clingwrap", "cling", 
      "ziplock", "zip lock", "ziploc", "grocerybag", "shoppingbag", "shopping bag", "grocery bag", "straw", 
      "straws", "wrapper", "wrappers", "saran", "polybag", "liner", "softplastic", "soft plastic", "plasticwrap"
    ],
    responseId: "PlasticBagRecycling"
  },
  {
    keywords: [
      "electronics", "electronic", "ewaste", "e-waste", "laptop", "laptops", "tablet", "tablets", "phone", "phones", 
      "cellphone", "mobile", "monitor", "monitors", "tv", "television", "printer", "printers", "mouse", "keyboard", 
      "charger", "cable", "cables", "remote", "headphones", "earbuds", "router", "modem", "console", "controller", 
      "stereo", "camera", "speakers", "speakerset", "electronics bin", "techjunk", "device"
    ],
    responseId: "BrokenElectronics"
  },
  {
    keywords: [
      "toy", "toys", "lego", "doll", "dolls", "actionfigure", "action figure", "puzzle", "puzzles", "stuffed", 
      "plush", "teddy", "teddybear", "boardgame", "boardgames", "playset", "figurine", "figurines", "truck", 
      "blocks", "robot", "train", "game", "games", "toyparts", "toypiece", "broken toy"
    ],
    responseId: "BrokenToys"
  },
  {
    keywords: [
      "expired", "spoiled", "rotten", "moldy", "leftover", "leftovers", "foodwaste", "compost", "scraps", 
      "perishable", "perishables", "banana", "apple", "fruit", "vegetable", "veggies", "lettuce", "meat", 
      "dairy", "cheese", "milk", "bread", "soup", "foodtrash", "organic", "organics"
    ],
    responseId: "ExpiredFood"
  },
  {
    keywords: [
      "glass", "glassbottle", "glass bottle", "glass bottles", "bottle", "bottles", "jar", "jars", "wine", 
      "beer", "pickle", "mason", "olive", "clear", "green", "amber", "glasscontainer", "glass containers", 
      "sauce", "jelly", "preserve", "vial", "recyclableglass"
    ],
    responseId: "GlassBottles"
  },
  {
    keywords: [
      "lightbulb", "light bulb", "bulb", "bulbs", "lamp", "lamps", "fluorescent", "cfl", "led", "halogen", "tube", 
      "tubelight", "tubebulb", "incandescent", "spotlight", "headlight", "bulbtube", "neon", "lightfixture", 
      "light fixture", "bulb disposal"
    ],
    responseId: "LightBulbs"
  },
  {
    keywords: [
      "paint", "paintcan", "paint can", "paint cans", "paintcans", "bucket", "latex", "oilbased", "oil-based", 
      "primer", "stain", "varnish", "coating", "gloss", "matte", "enamel", "leftoverpaint", "leftover paint", 
      "old paint", "paintbin"
    ],
    responseId: "PaintCans"
  }
];


export const getResponseMessage = (
  question: string
): { message: string; navigationPath: string | null; buttonName: string | null } => {
  const tokens = tokenize(question);

  for (const group of keywordGroups) {
    if (tokens.some((token) => group.keywords.includes(token))) {
      const selectedItem = CHAT_ITEMS.find((item) => item.id === group.responseId);
      return selectedItem
        ? {
            message: selectedItem.message,
            navigationPath: selectedItem.navigationPath,
            buttonName: selectedItem.buttonName,
          }
        : { message: "", navigationPath: null, buttonName: null };
    }
  }

  const defaultItem = CHAT_ITEMS.find((item) => item.id === "InvalidSubject");
  return defaultItem
    ? {
        message: defaultItem.message,
        navigationPath: defaultItem.navigationPath,
        buttonName: defaultItem.buttonName,
      }
    : { message: "", navigationPath: null, buttonName: null };
};
