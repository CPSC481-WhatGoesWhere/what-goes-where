import { CHAT_ITEMS } from "@/pages/General/constants";

export const keywordGroups = [
  // --- Item Responses

  {
    keywords: [
      "copper wire", "copper wires", "scrap wire", "stripped wire", "extension wire", 
      "wire recycling", "power cable", "cable", "electric wire", "electrical cable", 
      "house wiring", "recycle wire", "copper cable", "wire spool", "copper conductor", 
      "speaker wire", "copper scraps", "copper cord"
    ],
    responseId: "Copperwires"
  },

  {
    keywords: [
      "old furniture", "used furniture", "broken furniture", "donate furniture", 
      "sofa", "couch", "dresser", "bookshelf", "wardrobe", "table", "chair", 
      "recliner", "bed frame", "mattress", "furniture removal", "junk furniture", 
      "unwanted furniture", "furniture pickup", "drop off furniture", 
      "dispose furniture", "furniture donation", "furniture drop off"
    ],
    responseId: "Oldfurniture"
  },

  {
    keywords: [
      "expired makeup", "old makeup", "makeup disposal", "cosmetics", "terraCycle makeup", 
      "beauty product", "mascara", "foundation", "eyeshadow", "lipstick", "blush", 
      "nail polish", "compact", "face powder", "concealer", "cosmetic container", 
      "used makeup", "expired cosmetic", "broken makeup", "empty makeup packaging"
    ],
    responseId: "ExpiredMakeup"
  },


  {
    keywords: [
      // General expired food terms
      "expired food", "rotten food", "spoiled food", "old food", "moldy food",
      "compost food", "throw away food", "food waste", "dispose food", "leftover food",
      
      // Meats
      "expired chicken", "rotten chicken", "spoiled chicken", "raw chicken", "bad chicken",
      "expired pork", "rotten pork", "spoiled pork", "bad pork", "raw pork",
      "expired beef", "rotten beef", "spoiled beef", "bad beef", "raw beef",
      "expired turkey", "spoiled turkey", "rotten turkey", "old turkey",
      "expired fish", "spoiled fish", "rotten fish", "bad fish", "raw fish",
      "expired seafood", "rotten seafood", "spoiled seafood", "bad shrimp", "bad shellfish",
  
      // Dairy
      "expired milk", "spoiled milk", "rotten milk", "bad milk", "sour milk",
      "expired cheese", "moldy cheese", "spoiled cheese", "bad cheese",
      "expired yogurt", "spoiled yogurt", "rotten yogurt",
      "expired cream", "spoiled cream", "bad cream", "expired butter",
  
      // Fruits & Vegetables
      "rotten banana", "moldy strawberries", "spoiled apple", "expired orange",
      "rotten fruit", "spoiled fruit", "moldy fruit", "expired vegetables",
      "rotten vegetables", "spoiled vegetables", "moldy vegetables",
      "bad lettuce", "wilted spinach", "soft tomato", "rotten potato", "sprouted potato",
  
      // Bread & Bakery
      "moldy bread", "expired bread", "old bread", "spoiled cake", "stale cookies",
      "expired pastries", "old muffins", "spoiled donuts",
  
      // Pantry & Packaged Goods
      "expired cereal", "expired pasta", "spoiled rice", "expired flour",
      "expired canned food", "old canned beans", "expired soup", "expired sauce",
      "expired snacks", "stale chips", "expired chocolate", "expired jam",
  
      // Eggs & Misc
      "expired eggs", "rotten eggs", "spoiled eggs", "bad eggs",
      "expired leftovers", "spoiled leftovers", "moldy leftovers"
    ],
    responseId: "ExpiredFood"
  },

  {
    keywords: [
      // General toy terms
      "broken toy", "old toy", "used toy", "discarded toy", "unwanted toy", "damaged toy",
      "recycle toy", "toy recycling", "toy disposal", "toy bin",
  
      // Materials
      "plastic toy", "wooden toy", "metal toy", "rubber toy", "foam toy",
  
      // Specific toy types
      "action figure", "lego", "barbie", "doll", "toy car", "remote control car",
      "toy truck", "train toy", "board game", "jigsaw puzzle", "toy robot",
  
      // Soft toys
      "stuffed animal", "stuffed toy", "soft toy", "plush toy", "plushie",
  
      // Electronic toys
      "electronic toy", "battery toy", "talking toy", "flashing toy", "noisy toy",
  
      // Kids' items
      "baby toy", "infant toy", "teething toy", "rattle", "toddler toy"
    ],
    responseId: "BrokenToys"
  },

  {
    keywords: [
      // General
      "used candle", "old candle", "burned candle", "leftover candle", "candle residue",
      "recycle candle", "candle waste",
  
      // Jars and containers
      "glass candle jar", "clean candle jar", "candle tin", "metal candle tin", "candle container",
  
      // Types of candles
      "tea light", "votive candle", "scented candle", "pillar candle", "wax melts", "taper candle",
      "birthday candle", "decorative candle", "soy candle", "beeswax candle", "paraffin candle"
    ],
    responseId: "Usedcandles"
  },

  {
    keywords: [
      "phone charger", "old charger", "broken charger", "recycle charger",
      "charging cable", "power cable", "charging cord", "broken cord",
      "usb charger", "usb cord", "charging wire", "tangled charger",
      "apple charger", "iphone charger", "lightning cable", "android charger",
      "micro usb", "usb-c charger", "usb type c", "fast charger", "wall adapter",
      "power adapter", "brick charger", "portable charger", "charging block"
    ],
    responseId: "Phonechargers"
  },

  {
    keywords: [
      "disposable razor", "used razor", "plastic razor", "razor blades", "razor handle",
      "old razor", "broken razor", "shaving razor", "razor head", "razor cartridge",
      "manual razor", "safety razor", "recycle razor", "terraCycle razor",
      "men’s razor", "women’s razor", "facial razor", "body razor", "razor packaging"
    ],
    responseId: "Disposablerazors"
  },

  {
    keywords: [
      "packing peanuts", "foam peanuts", "styrofoam peanuts", "white peanuts", 
      "biodegradable peanuts", "cornstarch peanuts", "eco-friendly peanuts",
  
      "shipping filler", "void fill", "air pillows", "bubble wrap", "plastic air cushion", 
      "plastic pillow", "cushioning material", "foam packaging", "foam block", "foam insert",
  
      "foam filler", "box filler", "package stuffing", "peanut packaging"
    ],
    responseId: "Packingpeanuts"
  },

  {
    keywords: [
      "dish sponge", "kitchen sponge", "used sponge", "dirty sponge", "old sponge",
      "cleaning sponge", "scrubber", "scrubbing pad", "cellulose sponge", "synthetic sponge",
      "sponge disposal", "dishwashing sponge", "non-scratch sponge", "abrasive sponge",
      "scouring pad", "magic eraser", "clean sponge", "antibacterial sponge"
    ],
    responseId: "Sponges"
  },

  {
    keywords: [
      // General bag types
      "plastic bag", "shopping bag", "grocery bag", "store bag", "carry bag", "retail bag",
      "soft plastic", "clear plastic bag", "produce bag", "produce plastic", "vegetable bag",
  
      // Disposal & recycling
      "bag recycling", "store drop off", "plastic bag disposal", "used plastic bag",
      "recycle plastic bag", "plastic bag return", "plastic bag reuse",
  
      // Types and materials
      "thin plastic", "film plastic", "cling wrap", "saran wrap", "bread bag", "ziploc bag",
      "sandwich bag", "freezer bag", "bubble wrap bag", "mailing bag", "shipping plastic",
      "plastic courier bag", "stretch film", "pallet wrap", "plastic wrapper", "shopping sack"
    ],
    responseId: "PlasticBags"
  },

  {
    keywords: [
      // General terms
      "glass bottle", "recycle glass", "glass container", "glass jar", "bottle glass",
  
      // Beverage bottles
      "wine bottle", "beer bottle", "liquor bottle", "vodka bottle", "alcohol bottle",
      "soda bottle", "juice glass bottle", "sparkling water bottle", "kombucha bottle",
  
      // Types of glass
      "clear glass", "green glass", "brown glass", "frosted glass", "blue glass",
  
      // Misc
      "glass recycling", "broken bottle", "broken glass jar", "recycled jar", "pickle jar",
      "sauce jar", "mason jar", "baby food jar", "glass medicine bottle"
    ],
    responseId: "GlassBottles"
  },

  {
    keywords: [
      "light bulb", "bulb disposal", "recycle bulb", "used bulb", "broken bulb", "old light bulb",
  
      // Bulb types
      "led bulb", "fluorescent bulb", "cfl bulb", "compact fluorescent bulb", "halogen bulb",
      "incandescent bulb", "tube light", "fluorescent tube", "neon light", "uv bulb",
  
      // Fixtures and variants
      "light tube", "tube lamp", "desk lamp bulb", "ceiling light bulb", "vanity bulb", "spiral bulb",
      "smart bulb", "colored bulb", "night light bulb", "bulb drop off"
    ],
    responseId: "LightBulbs"
  },

  {
    keywords: [
      "paint can", "old paint", "dried paint", "wet paint", "leftover paint", "paint disposal",
      "recycle paint", "paint container", "paint tin", "paint recycling",
  
      // Types
      "latex paint", "oil paint", "acrylic paint", "spray paint", "interior paint", "exterior paint",
      "paint bucket", "used paint", "hazardous paint", "hazardous waste",
  
      // Other related
      "paint drop off", "paint bucket disposal", "stained can", "dripping paint", "sealed paint can"
    ],
    responseId: "PaintCans"
  },

  {
    keywords: [
      // General terms
      "used battery", "dead battery", "old battery", "battery disposal", "recycle battery",
  
      // Common household batteries
      "aa battery", "aaa battery", "9v battery", "c battery", "d battery",
      "alkaline battery", "single-use battery", "non-rechargeable battery",
  
      // Rechargeables
      "rechargeable battery", "ni-mh battery", "lithium-ion battery", "li-ion battery",
  
      // Button cells
      "button cell", "watch battery", "coin cell", "hearing aid battery", "small battery",
  
      // Special types
      "phone battery", "camera battery", "laptop battery", "power tool battery",
      "drill battery", "vape battery", "battery drop off", "battery bin"
    ],
    responseId: "UsedBatteries"
  },

  {
    keywords: [
      // General
      "broken electronics", "old electronics", "recycle electronics", "electronic disposal",
      "dispose electronics", "e-waste", "e waste", "unwanted electronics", "obsolete electronics",
  
      // Common items
      "broken phone", "cracked phone", "old laptop", "used tablet", "damaged computer",
      "dead remote", "broken tv", "non-working television", "tv recycling",
      "monitor", "desktop computer", "printer", "fax machine",
  
      // Misc
      "electronic device", "damaged gadget", "electronic appliance", "recycle tech", "tech trash"
    ],
    responseId: "BrokenElectronics"
  },

  {
    keywords: [
      // General
      "coffee pod", "recycle coffee pod", "used coffee pod", "coffee capsule", "coffee disc",
      "coffee cartridge", "spent coffee pod", "used capsule", "k-cup", "k cup",
  
      // Brands
      "keurig", "nespresso", "starbucks pod", "tim hortons pod", "tassimo", "dolce gusto",
  
      // Variants
      "single-serve coffee", "single use pod", "plastic coffee pod", "aluminum pod",
      "compostable pod", "biodegradable coffee pod", "eco-friendly pod"
    ],
    responseId: "Coffeepods"
  },

  {
    keywords: [
      // General
      "toilet paper roll", "toilet tube", "cardboard tube", "tp roll", "toilet roll",
  
      // Other uses
      "paper core", "cardboard cylinder", "bathroom roll", "empty toilet roll", "recycle toilet roll",
      "paper towel roll", "cardboard insert", "toilet paper core"
    ],
    responseId: "Toiletpaperrolls"
  },

  {
    keywords: [
      // General
      "balloon", "used balloon", "deflated balloon", "broken balloon", "popped balloon", 
      "balloon waste", "discarded balloon", "recycle balloon",
  
      // Materials
      "latex balloon", "foil balloon", "mylar balloon", "plastic balloon", "rubber balloon",
  
      // Occasions
      "party balloon", "birthday balloon", "helium balloon", "wedding balloon",
      "event balloon", "balloon decoration", "celebration balloon",
  
      // Misc
      "balloon string", "helium tank", "balloon clip", "balloon ribbon", "balloon bag"
    ],
    responseId: "Balloons"
  },

  {
    keywords: [
      // General
      "pizza box", "used pizza box", "takeout box", "recycle pizza box", 
      "compost pizza box", "greasy box", "leftover pizza box",
  
      // Related terms
      "cardboard pizza box", "greasy cardboard", "pizza packaging", "dirty pizza box",
      "pizza carton", "pizza delivery box", "cheese-stained box", "oily pizza box",
  
      // Materials
      "food box", "cardboard box", "takeaway pizza box", "used takeout box"
    ],
    responseId: "Pizzaboxes"
  },

  {
    keywords: [
      // General
      "aluminum can", "metal can", "tin can", "drink can", "soft drink can", "beverage can",
      "recycle can", "can recycling", "recycle aluminum",
  
      // Specific items
      "beer can", "soda can", "pop can", "coke can", "energy drink can", "juice can",
      "carbonated drink can", "sparkling water can", "empty can",
  
      // Condition
      "crushed can", "used aluminum can", "bent can", "rinsed can"
    ],
    responseId: "Aluminumcans"
  },

  {
    keywords: [
      // General
      "plastic bottle", "recycle bottle", "drink bottle", "bottle recycling",
      "plastic beverage container", "clear plastic bottle", "plastic water bottle",
  
      // Specific items
      "juice bottle", "pop bottle", "soda bottle", "water bottle", "sports drink bottle",
      "milk bottle", "energy drink bottle", "smoothie bottle",
  
      // Refund-related
      "deposit bottle", "bottle refund", "bottle depot", "returnable bottle",
  
      // Materials/condition
      "empty plastic bottle", "crushed plastic bottle", "bottle cap"
    ],
    responseId: "Plasticbottles"
  },

  // --- Feature Responses
  {
    keywords: [
      // General
      "metal", "metals", "metal scrap", "metal recycling", "metal disposal", "scrapmetal", 
      "metal junk", "recycle metal", "metal parts", "metal items", "metal waste", "metal bin",
  
      // Specific metals
      "steel", "stainless steel", "iron", "cast iron", "brass", "bronze", "zinc", 
      "nickel", "lead", "aluminum", "aluminum frame", "aluminum parts", "copper pipe",
  
      // Metal hardware
      "bolt", "bolts", "screw", "screws", "nail", "nails", "washer", "washers", "hinge", "bracket",
      "latch", "hook", "clamp", "fastener", "metal fitting",
  
      // Construction scraps
      "pipe", "pipes", "rod", "rods", "metal mesh", "grate", "metal grate", "bar", "bars",
      "metal coil", "spring", "metal sheet", "metal plate", "rail", "rebar",
  
      // Household/general
      "metal frame", "metal pole", "metal tray", "metal container", "metal bar", "metal shelf",
      "metal furniture", "broken metal item", "scrap bin", "metal cabinet", "rusted metal"
    ],
    responseId: "MetalRecycling"
  },
  
  {
    keywords: [
      // General
      "junk", "trash", "garbage", "waste", "rubbish", "discarded", "bulk waste", "bulky item", 
      "junkpile", "junk removal", "cleanout", "haul", "bulk pickup", "bulk removal", "junk collection",
      "unwanted item", "broken item", "recycle junk", "get rid of item",
  
      // Furniture
      "old couch", "old chair", "furniture", "used furniture", "broken furniture", "cushion", 
      "sofa", "recliner", "wooden furniture", "bedframe", "frame", "table", "bookshelf", "cabinet", 
      "dresser", "tv stand", "broken table",
  
      // Household fixtures
      "carpet", "rug", "rugs", "mat", "flooring", "vinyl flooring", "countertop", "sink", 
      "toilet", "bathtub", "fixture", "kitchen sink", "washbasin",
  
      // Garage / basement
      "garage junk", "shed cleanout", "garage cleanout", "basement cleanup", "garage stuff",
  
      // Appliances
      "appliance", "appliances", "microwave", "oven", "stove", "fridge", "freezer", 
      "appliance pickup", "broken microwave", "discarded appliance"
    ],
    responseId: "JunkRemoval"
  },
  
  {
    keywords: [
      // General
      "clothing donation", "donate clothes", "used clothing", "old clothes", "unwanted clothes",
      "gently used clothes", "second hand clothes", "give away clothes", "drop off clothing",
      "clothing bin", "clothes bin", "clothingbank", "donate clothing", "clothing drive",
  
      // Types of clothing
      "donate shirts", "donate pants", "donate jeans", "donate sweaters", "donate jackets",
      "donate coats", "donate dresses", "donate socks", "donate underwear", "donate shoes",
      "donate boots", "donate hats", "donate mittens", "donate winter clothing",
  
      // Organizations / concepts
      "thriftstore", "thrift store", "donation center", "charity clothing", 
      "goodwill", "drop box", "red cross clothing", "salvation army clothing"
    ],
    responseId: "OldClothes"
  },
  
  {
    keywords: [
      // General
      "bottle depot", "recycling depot", "return center", "bottle return", "can return", 
      "return empties", "deposit refund", "refund depot", "recycling center", "recycling station",
  
      // Beverage-specific
      "bottle refund", "can refund", "drink refund", "beverage container refund", 
      "drink deposit", "bottle deposit", "returnable bottles", "returnable cans",
  
      // Actions
      "return cans", "return bottles", "get bottle money", "recycle bottles for cash", 
      "bottle drop off", "can drop off", "refund beverage container"
    ],
    responseId: "BottleDepot"
  }
];

export const getResponseMessage = (
  question: string
): { message: string; navigationPath: string | null; buttonName: string | null } => {
  const normalizedInput = question.toLowerCase();

  for (const group of keywordGroups) {
    if (group.keywords.some(keyword => normalizedInput.includes(keyword))) {
      const selectedItem = CHAT_ITEMS.find(item => item.id === group.responseId);
      return selectedItem
        ? {
            message: selectedItem.message,
            navigationPath: selectedItem.navigationPath,
            buttonName: selectedItem.buttonName,
          }
        : { message: "", navigationPath: null, buttonName: null };
    }
  }

  const defaultItem = CHAT_ITEMS.find(item => item.id === "InvalidSubject");
  return defaultItem
    ? {
        message: defaultItem.message,
        navigationPath: defaultItem.navigationPath,
        buttonName: defaultItem.buttonName,
      }
    : { message: "", navigationPath: null, buttonName: null };
};
