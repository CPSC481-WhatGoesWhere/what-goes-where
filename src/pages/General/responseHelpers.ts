import { CHAT_ITEMS } from "@/pages/General/constants";

export const keywordGroups: { keywords: string[]; responseId: string }[] = [
  // --- Item Responses

  {
    keywords: [
      "copper", "wire", "wires",
      "extension", "cord", "cords",
      "power", "cable", "cables",
    ],
    responseId: "Copperwires"
  },

  {
    keywords: [
      "furniture",
      "couch", "couches",
      "sofa", "sofas",
      "loveseat", "loveseats",
      "chair", "chairs",
      "recliner", "recliners",
      "rocker", "rockers",
      "table", "tables",
      "desk", "desks",
      "dresser", "dressers",
      "cabinet", "cabinets",
      "wardrobe", "wardrobes",
      "bookshelf", "bookshelves",
      "bed", "beds",
      "headboard", "headboards",
      "nightstand", "nightstands",
      "mattress", "mattresses",
      "boxspring", "boxsprings",
      "armchair", "armchairs",
      "stool", "stools",
      "bench", "benches",
      "stand", "stands"
    ],
    responseId: "Oldfurniture"
  },

  {
    keywords: [
      "makeup", "cosmetics", "beauty",
      "lipstick", "lipsticks",
      "mascara", "mascaras",
      "eyeliner", "eyeliners",
      "foundation", "foundations",
      "concealer", "concealers",
      "blush", "powder", "powders",
      "eyeshadow", "eyeshadows",
      "bronzer", "bronzers",
      "highlighter", "highlighters",
      "primer", "primers",
      "lipgloss", "lipglosses",
      "compact", "compacts",
      "palette", "palettes",
      "cream", "creams",
      "remover", "removers",
      "nailpolish", "nailpolishes",
      "lipliner", "lipliners",
      "brow", "brows",
      "browpencil", "browpencils",
      "settingspray",
      "facemist", "facemists",
      "toner", "toners",
      "compact", "compacts",
      "contour", "contours",
      "moisturizer", "moisturizers",
      "serum", "serums",
      "lotion", "lotions"
    ],
    responseId: "ExpiredMakeup"
  },


  {
    keywords: [
      "expired", "spoiled", "rotten", "moldy", "sour", "stale", "leftover", "leftovers",

      "fruit", "fruits",
      "vegetable", "vegetables", "veggie", "veggies",
      "banana", "bananas",
      "apple", "apples",
      "berry", "berries", "strawberry", "strawberries",
      "grape", "grapes",
      "orange", "oranges", "citrus",
      "lettuce", "salad", "spinach", "greens",

      "meat", "meats",
      "chicken", "beef", "pork", "fish", "seafood",
      "turkey", "ham", "lamb",
      "egg", "eggs",

      "milk", "cheese", "butter", "cream", "yogurt",

      "bread", "loaf", "loaves", "bagel", "bagels", "toast",
      "cake", "cakes", "cookie", "cookies", "pastry", "pastries", "dessert", "desserts", "donut", "donuts",

      "rice", "pasta", "noodle", "noodles", "cereal", "snack", "snacks", "cracker", "crackers",

      "pizza", "burgers", "burger", "sandwich", "sandwiches", "spaghetti",
      "soup", "soups", "sauce", "sauces", "gravy", "canned", "tuna"
    ],
    responseId: "ExpiredFood"
  },

  {
    keywords: [
        "toy", "toys",
        "lego", "legos",
        "doll", "dolls",
        "plush", "plushes", "stuffed", "stuffies",
        "teddy", "teddies", "bear", "bears",
        "puzzle", "puzzles",
        "figurine", "figurines",
        "playset", "playsets",
        "robot", "robots",
        "boardgame", "boardgames", "game", "games",
        "block", "blocks",
        "building", "buildingset", "buildingsets",
        "action", "figure", "figures",
        "playdough", "playdoh",
        "puppet", "puppets",
        "kite", "kites",
        "game", "games"
    ],
    responseId: "BrokenToys"
  },

  {
    keywords: [
      "candle", "candles",
      "tealight", "tealights",
      "pillar", "pillars",
      "votive", "votives",
      "birthday",
      "wax",
      "scented",
    ],
    responseId: "Usedcandles"
  },

  {
    keywords: [
      "phone", "phones",
      "mobile", "mobiles",
      "charger", "chargers",
      "charging",
      "lightning",
      "micro",
      "micro-usb",
      "usb",
      "type",
      "type-c", "typec",
      "type-a", "typea"
    ],
    responseId: "Phonechargers"
  },

  {
    keywords: [
      "razor", "razors",
      "blade", "blades",
      "cartridge", "cartridges",
      "bic",
      "gillette",
      "venus",
      "mach3",
      "mach2",
      "shaving",
      "shave",
    ],
    responseId: "Disposablerazors"
  },

  {
    keywords: [
      "packing", "peanut", "peanuts"
    ],
    responseId: "PackingPeanuts"
  },

  {
    keywords: [
      "sponge", "sponges",
      "dish",
      "scrubber", "scrubbers",
      "pad", "pads",
      "bath",
      "scrubbing",
      "scrub",
      "scour", "scouring", "scourer", "scourers",
      "dish", "wand", "wands"
    ],
    responseId: "Sponges"
  },

  {
    keywords: [
      "plastic", "bags",
      "grocery", "shopping",
      "ziploc", "ziplock",
      "wrap", "cling", "film", "saran", "stretch",
      "soft", "poly", "liner", "liners"
    ],
    responseId: "PlasticBags"
  },

  {
    keywords: [
      "glass", "bottle", "bottles",
      "jar", "jars",
      "mason", "pickle", "sauce", "jam", "jelly",
      "wine", "beer", "olive",
      "green", "vial", "amber"
    ],
    responseId: "GlassBottles"
  },

  {
    keywords: [
      "light", "bulb", "bulbs",
      "led", "cfl", "halogen", "incandescent",
      "fluorescent", "spotlight", "headlight", "headlights",
    ],
    responseId: "LightBulbs"
  },

  {
    keywords: [
      "paint",
      "can",
      "cans",
      "bucket", "buckets",
      "latex", "primer", "varnish",
      "enamel"
    ],
    responseId: "PaintCans"
  },

  {
    keywords: [
      "battery", "batteries",
      "aa", "aaa", "c", "d", "9v", "button", "coin",
      "lithium", "alkaline", "rechargeable",
      "lead", "acid", "nickel", "cadmium",
      "cr2032", "duracell", "energizer", "cell"
    ],
    responseId: "UsedBatteries"
  },

  {
    keywords: [
      "electronic", "electronics", "ewaste",
      "laptop", "laptops",
      "tablet", "tablets",
      "phone", "phones",
      "tv", "television", "televisions",
      "monitor", "monitors",
      "printer", "printers",
      "router", "routers", "modem", "modems",
      "remote", "controller", "controllers",
      "console", "stereo", "radio", "headphones",
      "earbuds", "mouse", "keyboard", "aripods",
      "webcam", "camera", "cameras", "microwave", "oven", "ovens",
      "ac", "air conditioner", "air conditioners",
      "fridge", "fridges", "refrigerator", "refrigerators", 
      "coffee", "maker", "makers",
      "airfryer", "air", "fryer", "fryers",
      "toaster", "toasters",
      "lcd", "led", "oled"
    ],
    responseId: "BrokenElectronics"
  },

  {
    keywords: [
      "coffee", "pod", "pods",
      "kcup", "kcups",
    ],
    responseId: "Coffeepods"
  },

  {
    keywords: [
      "toilet", "paper", "papers", "roll", "rolls",
      "toiletpaper", "toiletpapers"
    ],
    responseId: "Toiletpaperrolls"
  },

  {
    keywords: [
        "balloon", "balloons",
        "helium", "latex", "foil", "inflated", "birthday", "party"
    ],
    responseId: "Balloons"
  },

  {
    keywords: [
      "pizza", "box", "boxes",
      "pizzabox", "pizzaboxes",
    ],
    responseId: "Pizzaboxes"
  },

  {
    keywords: [
      "aluminum", "can", "cans",
      "drink", "drinks", "soda", "pop", "beer", "lager", "energy", "redbull", "monster"
    ],
    responseId: "Aluminumcans"
  },

  {
    keywords: [
      "plastic", "bottle", "bottles",
      "water", "pop", "juice", "soda", "milk", "beverage",
      "drink", "sportsdrink", "powerade"
    ],
    responseId: "Plasticbottles"
  },

  // --- Feature Responses
  {
    keywords: [
      "clothes", "clothing", "shirt", "shirts", "pant", "pants", "jacket", "jackets", "sweater", "sweaters",
      "shoes", "boots", "socks", "hat", "hats", "scarf", "scarves", "belt", "belts", "glove", "gloves",
      "underwear", "lingerie", "uniform", "costume", "thrift", "goodwill", "donate", "donation", "outerwear",
      "suit", "suits", "dress", "dresses", "blazer", "blouse", "activewear", "workwear", "jeans", "bra", "boxers", 
      "briefs", "dropoff", "throw", "discard"
    ],
    responseId: "OldClothes"
  },
  {
    keywords: [
      "metal", "metals", "scrap", "scrapmetal",
      "aluminum", "steel", "copper", "iron", "brass", "zinc", "nickel", "tin", "lead",
      "wire", "wires", "pipe", "pipes", "rod", "rods", "bar", "bars", "rebar",
      "bolt", "bolts", "nail", "nails", "screw", "screws", "hinge", "bracket", "washer",
      "mesh", "grate", "coil", "spring", "frame", "sheet", "plate", "rail", "scrapyard", 
      "throw", "dispose", "dropoff", "discard"
    ],
    responseId: "MetalRecycling"
  },
  {
    keywords: [
      "junk", "sofa", "couch", "mattress", "carpet", "rug", "table", "dresser", "cabinet", "wardrobe", "bed",
      "frame", "wood", "chair", "cushion", "debris", "appliance", "microwave", "oven", "sink", "toilet",
      "countertop", "fixture", "garage", "haul", "bulk", "trash", "service", "removal", "pickup",
      "mirror", "curtain", "blinds"
    ],
    responseId: "JunkRemoval"
  },

  {
    keywords: [
      "bottle", "bottles",
      "can", "cans",
      "crate", "crates",
      "milk", "juices", "juice",
      "soda", "pop", "beers", "beer",
      "lager", "lagers", "ale", "ales",
      "wine", "wines", "liquor", "vodka", "rum", "cooler", "coolers",
      "return", "returns", "deposit", "deposits", "refund", "refunds",
      "recyclables", "beverage", "beverages", "carton", "cartons",
      "coke", "pepsi", "sprite", "gatorade", "snapple", "nestle",
      "depot", "recycling", "recyclebin"
    ],
    responseId: "BottleDepot"
  }
];

export const getResponseMessage = (
  question: string
): { message: string; navigationPath: string | null; buttonName: string | null } => {
  const normalizedWords = question
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .split(/\s+/);

  const stopwords = new Set([
    "can", "a", "an", "the", "is", "are", "do", "does", "how", "where", "what", "when",
    "to", "of", "i", "you", "we", "my", "on", "in", "it", "and", "or"
  ]);

  let bestGroup: typeof keywordGroups[number] | null = null;
  let highestMatchCount = 0;
  let bestMatchingKeywords: string[] = [];

  for (const group of keywordGroups) {
    const matchedKeywords = group.keywords.filter(keyword => normalizedWords.includes(keyword));
    const matchCount = matchedKeywords.length;

    if (matchCount > highestMatchCount) {
      highestMatchCount = matchCount;
      bestGroup = group;
      bestMatchingKeywords = matchedKeywords;
    }
  }

  console.log("Normalized Words:", normalizedWords);
  console.log("Best Group:", bestGroup?.responseId);
  console.log("Matched Keywords:", bestMatchingKeywords);
  console.log("Highest Match Count:", highestMatchCount);

  // If all matched keywords are stopwords, fallback to default
  const onlyStopwordsMatched = bestMatchingKeywords.every(word => stopwords.has(word));
  if (!bestGroup || highestMatchCount === 0 || onlyStopwordsMatched) {
    const defaultItem = CHAT_ITEMS.find(item => item.id === "InvalidSubject");
    return defaultItem
      ? {
          message: defaultItem.message,
          navigationPath: defaultItem.navigationPath,
          buttonName: defaultItem.buttonName,
        }
      : { message: "", navigationPath: null, buttonName: null };
  }

  const selectedItem = CHAT_ITEMS.find(item => item.id === bestGroup.responseId);
  return selectedItem
    ? {
        message: selectedItem.message,
        navigationPath: selectedItem.navigationPath,
        buttonName: selectedItem.buttonName,
      }
    : { message: "", navigationPath: null, buttonName: null };
};




