import { CHAT_ITEMS } from "@/pages/General/constants";

export const getResponseMessage = (question: string): { message: string, navigationPath: string | null, buttonName: string | null } => {
  // Preprocess the question: convert to lowercase and remove punctuation
  const lowerCaseQuestion = question.toLowerCase().replace(/[.,!?;:]/g, " ");

  // Define keyword groups with expanded and detailed keywords
  const keywordGroups = [
    {
      keywords: [
        "bottle", "bottles", "can", "cans", "depot", "milk", "juice", "soda", "pop", "beer", "lager", "ale",
        "wine", "liquor", "spirit", "vodka", "rum", "cooler", "recyclebin"
      ],
      responseId: "BottleDepot"
    },
    {
      keywords: [
        "clothes", "clothing", "shirt", "shirts", "pant", "pants", "jacket", "jackets", "sweater", "sweaters",
        "shoes", "boots", "socks", "hat", "hats", "scarf", "scarves", "belt", "belts", "glove", "gloves",
        "underwear", "lingerie", "uniform", "costume", "thrift", "goodwill", "donate", "donation", "outerwear",
        "suit", "suits", "dress", "dresses", "blazer", "blouse", "activewear", "workwear"
      ],
      responseId: "ClothingDonation"
    },
    {
      keywords: [
        "metal", "metals", "aluminum", "copper", "steel", "iron", "brass", "zinc", "tin", "nickel", "lead",
        "bolt", "screw", "nail", "washer", "hinge", "bracket", "pipe", "pipes", "rod", "rods", "wire", "mesh",
        "grate", "bar", "bars", "scrap", "frame", "coil", "spring", "plate", "rail", "rebar"
      ],
      responseId: "MetalRecycling"
    },
    {
      keywords: [
        "junk", "sofa", "couch", "mattress", "carpet", "rug", "table", "dresser", "cabinet", "wardrobe", "bed",
        "frame", "wood", "chair", "cushion", "debris", "appliance", "microwave", "oven", "sink", "toilet",
        "countertop", "fixture", "garage", "haul", "bulk", "trash"
      ],
      responseId: "JunkRemoval"
    },
    {
      keywords: [
        "battery", "batteries", "lithium", "alkaline", "nickel", "cadmium", "leadacid", "button", "coin", "aaa",
        "aa", "c", "d", "rechargeable", "cr2032", "cell", "energizer", "duracell"
      ],
      responseId: "BatteryDisposal"
    },
    {
      keywords: [
        "plastic", "plastics", "bag", "bags", "wrap", "film", "ziplock", "cling", "grocerybag", "shoppingbag",
        "straw", "straws", "wrapper", "wrappers", "saran", "polybag", "liner", "softplastic"
      ],
      responseId: "PlasticRecycling"
    },
    {
      keywords: [
        "electronics", "electronic", "ewaste", "laptop", "laptops", "tablet", "tablets", "phone", "phones", "cellphone",
        "monitor", "monitors", "tv", "television", "printer", "printers", "mouse", "keyboard", "charger", "cable",
        "remote", "headphones", "earbuds", "router", "modem", "console", "controller", "stereo", "camera", "speaker"
      ],
      responseId: "BrokenElectronics"
    },
    {
      keywords: [
        "toy", "toys", "lego", "doll", "dolls", "puzzle", "puzzles", "stuffed", "plush", "boardgame", "playset",
        "figurine", "truck", "blocks", "actionfigure", "robot", "train", "teddy", "game", "games"
      ],
      responseId: "BrokenToys"
    },
    {
      keywords: [
        "expired", "spoiled", "rotten", "moldy", "leftovers", "foodwaste", "compost", "scraps", "perishables", 
        "banana", "apple", "lettuce", "bread", "fruit", "vegetable", "greens", "meat", "dairy", "soup"
      ],
      responseId: "ExpiredFood"
    },
    {
      keywords: [
        "glass", "jar", "jars", "wine", "beer", "pickle", "mason", "clear", "green", "amber", "bottle", "vial",
        "olive", "sauce", "jelly", "preserve", "recyclableglass", "glasscontainer"
      ],
      responseId: "GlassBottles"
    },
    {
      keywords: [
        "lightbulb", "bulb", "bulbs", "lamp", "fluorescent", "cfl", "led", "halogen", "tube", "tubelight",
        "incandescent", "spotlight", "headlight", "bulbtube", "neon", "lightfixture"
      ],
      responseId: "LightBulbs"
    },
    {
      keywords: [
        "paint", "paintcan", "paintcans", "bucket", "latex", "oilbased", "primer", "stain", "varnish", "coating",
        "gloss", "matte", "enamel", "leftoverpaint", "paintbin"
      ],
      responseId: "PaintCans"
    },
    {
      keywords: [
        "plastic", "plastics", "bag", "bags", "wrap", "film", "ziplock", "cling", "grocerybag", "shoppingbag",
        "straw", "straws", "wrapper", "wrappers", "saran", "polybag", "liner", "softplastic"
      ],
      responseId: "PlasticBagRecycling"
    }
    
  ];

  // Check each group for matching keywords
  for (const group of keywordGroups) {
    if (group.keywords.some((keyword) => lowerCaseQuestion.includes(` ${keyword} `) || lowerCaseQuestion.startsWith(keyword) || lowerCaseQuestion.endsWith(keyword))) {
      const selectedItem = CHAT_ITEMS.find((item) => item.id === group.responseId);
      return selectedItem 
        ? { message: selectedItem.message, navigationPath: selectedItem.navigationPath, buttonName: selectedItem.buttonName } 
        : { message: "", navigationPath: null, buttonName: null };
    }
  }

  // Default response if no keywords match
  const defaultItem = CHAT_ITEMS.find((item) => item.id === "InvalidSubject");
  return defaultItem 
    ? { message: defaultItem.message, navigationPath: defaultItem.navigationPath, buttonName: defaultItem.buttonName } 
    : { message: "", navigationPath: null, buttonName: null };
};
