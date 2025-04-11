export const CHAT_ITEMS = [
  {
    id: "BottleDepot",
    message: `
      <h2>Bottle Depot</h2>
      <p>If you have empty drink containers like soda cans, juice boxes, or plastic bottles, you can return them to a bottle depot for a refund in most areas.<br>💵 <b>Refund:</b> Eligible beverage containers are part of a deposit program—returning them helps the environment and puts money back in your pocket.<br>📍 <b>Find a Depot:</b> Look up your nearest bottle depot location to drop them off easily.</p>
    `,
    side: "left",
    navigationPath: "/bottle-depot",
    buttonName: "Find a Location"
  },  
  {
    id: "OldClothes",
    message: `
      <h2>Old Clothes</h2>
      <p>Got clothing you no longer wear?<br> ♻️ <b>Donate:</b> If the clothes are still in good condition, donate them to local thrift stores, shelters, or community drives.<br> 👕 <b>Recycle:</b> Torn or worn-out items may be accepted by textile recycling programs.<br> 🎨 <b>Repurpose:</b> Use old fabrics for rags or DIY crafts instead of tossing them. Keeping textiles out of landfills helps reduce waste and supports those in need.</p>
    `,
    side: "left",
    navigationPath: "/clothing-donations",
    buttonName: "Find a Donation Site"
  },  
  {
    id: "MetalRecycling",
    message: `
      <h2>Metal Recycling</h2>
      <p>If you have scrap metal like copper wires, aluminum, or steel parts, don't toss them in the trash—they can be recycled and even have resale value.<br>♻️ <b>Drop-off:</b> Bring metals to a local recycling center or scrap yard—many accept pipes, wires, brackets, and screws.<br>💡 <b>Sort First:</b> If possible, separate copper, steel, and aluminum for easier processing and better value.</p>
    `,
    side: "left",
    navigationPath: "/metal-disposal",
    buttonName: "Find a Drop-off Point"
  },
  {
    id: "JunkRemoval",
    message: "<h2>Junk Removal</h2><p>Bulky items like couches and old furniture don’t belong in your bin. Find out how to schedule pickup or drop-off.</p>",
    side: "left",
    navigationPath: "/junk-removal",
    buttonName: "Schedule Pickup"
  },
  {
    id: "UsedBatteries",
    message: `
      <h2>Used Batteries</h2>
      <p>To dispose of used batteries, you should never throw them in the trash. Single-use and rechargeable batteries contain hazardous materials.<br> 🔋 <b>Drop Off:</b> Many electronics stores have battery recycling bins.<br> ⚠️ <b>Do Not Trash:</b> Batteries can leak toxic chemicals into the environment.</p>
    `,
    side: "left",
    navigationPath: "/item/usedbatteries",
    buttonName: "Learn More"
  },
  {
    id: "PlasticBags",
    message: `
      <h2>Plastic Bags</h2>
      <p>Plastic bags should not be placed in curbside recycling bins. They take hundreds of years to decompose and can clog recycling systems.<br> ♻️ <b>Recycle:</b> Drop them off at grocery stores that have designated collection bins.<br> 🗑️ <b>Trash:</b> If that’s not an option, place them in the garbage.</p>
    `,
    side: "left",
    navigationPath: "/item/plasticbags",
    buttonName: "Learn More"
  },
  {
    id: "BrokenElectronics",
    message: `
      <h2>Broken Electronics</h2>
      <p>To get rid of broken electronics like phones or laptops, recycling is the best option.<br> 🔌 <b>Recycle:</b> Take electronics to an e-waste recycling facility.<br> 🛑 <b>Do Not Trash:</b> Electronics contain hazardous materials and should never be thrown in the regular garbage.</p>
    `,
    side: "left",
    navigationPath: "/item/brokenelectronics",
    buttonName: "Learn More"
  },
  {
    id: "BrokenToys",
    message: `
      <h2>Broken Toys</h2>
      <p>To dispose of broken toys responsibly, first check if they can be repaired and donated.<br> 🔄 <b>Recycle:</b> Clean plastic toys might be accepted by some recycling programs, while electronic toys should go to e-waste centers.<br> 🌳 <b>Wooden Toys:</b> Untreated wood can be composted or repurposed.</p>
    `,
    side: "left",
    navigationPath: "/item/brokentoys",
    buttonName: "Learn More"
  },
  {
    id: "ExpiredFood",
    message: `
      <h2>Expired Food</h2>
      <p>To dispose of expired food, compost fruit, vegetables, and grains when possible.<br> 🚮 <b>Organic Waste Bin:</b> Meats, dairy, and leftovers should go in your green bin if your city offers one.<br> 🛑 <b>Do Not Pour:</b> Avoid dumping soups or sauces in the trash to prevent leaks and odors.</p>
    `,
    side: "left",
    navigationPath: "/item/expiredfood",
    buttonName: "Learn More"
  },
  {
    id: "GlassBottles",
    message: `
      <h2>Glass Bottles</h2>
      <p>To dispose of glass bottles properly, rinse them out and remove any lids.<br> ♻️ <b>Recycle:</b> Most curbside programs accept clean glass bottles, and some areas offer bottle refunds at depots.<br> 🚫 <b>Avoid Mixing:</b> Do not include broken glass or non-bottle glass like windows or mirrors.</p>
    `,
    side: "left",
    navigationPath: "/item/glassbottles",
    buttonName: "Learn More"
  },
  {
    id: "LightBulbs",
    message: `
      <h2>Light Bulbs</h2>
      <p>Used light bulbs need special disposal.<br> ♻️ <b>Recycle:</b> CFLs and fluorescent bulbs should go to hardware stores or recycling depots.<br> 🚮 <b>Trash:</b> Incandescent bulbs can go in the garbage, but keep all hazardous bulbs out of landfills.</p>
    `,
    side: "left",
    navigationPath: "/item/lightbulbs",
    buttonName: "Learn More"
  },
  {
    id: "PaintCans",
    message: `
      <h2>Paint Cans</h2>
      <p>When disposing of paint cans, never pour leftover paint down the drain.<br>🎨 <b>Recycle:</b> Take dried-out cans to a recycling center.<br> 🛑 <b>Hazardous Waste:</b> If the paint is still liquid, bring it to a hazardous waste facility for safe disposal.</p>
    `,
    side: "left",
    navigationPath: "/item/paintcans",
    buttonName: "Learn More"
  },
  {
    id: "Sponges",
    message: `
      <h2>Used Sponges</h2>
      <p>To dispose of sponges properly, check the material first.<br> 🧼 <b>Compost:</b> Natural cellulose sponges can be composted when worn out.<br> 🗑️ <b>Trash:</b> Synthetic sponges should be thrown in the garbage unless a recycling program is available.</p>
    `,
    side: "left",
    navigationPath: "/item/sponges",
    buttonName: "Learn More"
  },
  {
    id: "PackingPeanuts",
    message: `
      <h2>Packing Peanuts</h2>
      <p>Don't put packing peanuts in your recycling bin.<br> 📮 <b>Drop-off:</b> Many shipping stores accept clean peanuts for reuse.<br> 🌽 <b>Biodegradable Types:</b> If they dissolve in water, they're compostable—test before tossing.</p>
    `,
    side: "left",
    navigationPath: "/item/packingpeanuts",
    buttonName: "Learn More"
  },
  {
    id: "ExpiredMakeup",
    message: `
      <h2>Expired Makeup</h2>
      <p>When makeup goes bad, most of it should go in the trash.<br> 🚮 <b>Trash:</b> Expired or used cosmetics usually can't be recycled.<br> 📦 <b>Take-back:</b> Some brands accept products through mail-in recycling programs.</p>
    `,
    side: "left",
    navigationPath: "/item/expiredmakeup",
    buttonName: "Learn More"
  },
  {
    id: "Balloons",
    message: `
      <h2>Party Balloons</h2>
      <p>Never release balloons outdoors—they can harm wildlife and pollute waterways.<br> 🗑️ <b>Trash:</b> Deflate and cut up balloons before placing them in the garbage.<br> ♻️ <b>Foil Balloons:</b> Mylar balloons may be accepted by specialty recycling programs.</p>
    `,
    side: "left",
    navigationPath: "/item/balloons",
    buttonName: "Learn More"
  },
  {
    id: "Pizzaboxes",
    message: `
      <h2>Pizza Boxes</h2>
      <p>Pizza boxes can be recycled or composted depending on how greasy they are.<br> ♻️ <b>Recycle:</b> If clean or lightly soiled, place in your cardboard bin.<br> 🗑️ <b>Trash or Compost:</b> Heavily greasy sections should go in the trash or be composted where accepted.</p>
    `,
    side: "left",
    navigationPath: "/item/pizzaboxes",
    buttonName: "Learn More"
  },
  {
    id: "Disposablerazors",
    message: `
      <h2>Disposable Razors</h2>
      <p>Disposable razors are tricky to recycle due to mixed materials.<br> 🗑️ <b>Trash:</b> Wrap the blade and place in the garbage if no take-back program exists.<br> 📦 <b>Mail-In:</b> Some brands partner with TerraCycle for razor recycling programs.</p>
    `,
    side: "left",
    navigationPath: "/item/disposablerazors",
    buttonName: "Learn More"
  },
  {
    id: "Coffeepods",
    message: `
      <h2>Coffee Pods</h2>
      <p>To dispose of coffee pods responsibly, separate the lid, grounds, and pod before recycling.<br> ♻️ <b>Recycle:</b> Some pods are accepted if cleaned and sorted properly.<br> 📦 <b>Mail-In:</b> Many brands partner with TerraCycle to offer recycling programs.</p>
    `,
    side: "left",
    navigationPath: "/item/coffeepods",
    buttonName: "Learn More"
  },
  {
    id: "Toiletpaperrolls",
    message: `
      <h2>Toilet Paper Rolls</h2>
      <p>Empty toilet paper rolls are easy to recycle or reuse.<br> ♻️ <b>Recycle:</b> Flatten and add them to your paper bin.<br> 🌱 <b>Compost or Reuse:</b> Use for crafts, seed starters, or add to your compost pile as brown material.</p>
    `,
    side: "left",
    navigationPath: "/item/toiletpaperrolls",
    buttonName: "Learn More"
  },
  {
    id: "Phonechargers",
    message: `
      <h2>Old Phone Chargers</h2>
      <p>Don’t toss old or tangled chargers in the trash.<br> ♻️ <b>e-Waste:</b> Take them to an electronics recycling depot or store drop-off bin.<br> 📦 <b>Retail Drop-off:</b> Stores like Best Buy and Staples often accept used cables and chargers.</p>
    `,
    side: "left",
    navigationPath: "/item/phonechargers",
    buttonName: "Learn More"
  },
  {
    id: "Usedcandles",
    message: `
    <h2>Used Candles</h2>
    <p>When your candle burns out, don’t toss the whole container!<br> 🫙 <b>Reuse:</b> Clean out leftover wax and repurpose the jar or tin for storage or crafts.<br> ♻️ <b>Recycle:</b> Glass and metal containers can be recycled once the wax is removed.<br> 🗑️ <b>Trash:</b> If the container is non-recyclable or broken, dispose of it in the garbage.</p>
  `,
    side: "left",
    navigationPath: "/item/usedcandles",
    buttonName: "Learn More"
  },
  {
    id: "Aluminumcans",
    message: `
      <h2>Aluminum Cans</h2>
      <p>Aluminum cans are one of the easiest items to recycle.<br> ♻️ <b>Recycle:</b> Rinse them out and place them in your curbside bin or return them to a bottle depot.<br> 💵 <b>Deposit Refund:</b> In many places, you’ll get cash back for returning beverage cans.</p>
    `,
    side: "left",
    navigationPath: "/item/aluminumcans",
    buttonName: "Learn More"
  },
  {
    id: "Plasticbottles",
    message: `
      <h2>Plastic Bottles</h2>
      <p>Plastic bottles should always be rinsed and recycled.<br> ♻️ <b>Recycle:</b> Check the number on the bottom to confirm it's accepted in your area.<br> 🏪 <b>Deposit Return:</b> Return eligible bottles to a depot for a refund if available.</p>
    `,
    side: "left",
    navigationPath: "/item/plasticbottles",
    buttonName: "Learn More"
  },
  {
    id: "Oldfurniture",
    message: `
      <h2>Old Furniture</h2>
      <p>Don’t let bulky furniture go to waste.<br> 🏠 <b>Donate:</b> If it’s still usable, give it to a thrift store or shelter.<br> 🚚 <b>Recycle or Pickup:</b> Break it down and take parts to a recycling depot or schedule a junk removal service.</p>
    `,
    side: "left",
    navigationPath: "/item/oldfurniture",
    buttonName: "Learn More"
  },
  {
    id: "Copperwires",
    message: `
      <h2>Copper Wires</h2>
      <p>Don’t throw copper wires in the trash—they’re valuable and fully recyclable.<br> ♻️ <b>Scrap Yard:</b> Strip the insulation and take clean wire to a metal recycler for the best value.<br> 📦 <b>E-Waste:</b> If mixed with other materials, bring them to an electronics recycling center instead.</p>
    `,
    side: "left",
    navigationPath: "/item/copperwires",
    buttonName: "Learn More"
  },
  {
    id: "InvalidSubject",
    message: `
      <h2>Hmm... We Couldn't Find a Match</h2>
      <p>
        Sorry! We couldn't match your question to a specific disposal category. Our chatbot can help with all kinds of waste—whether you're asking about specific items or services like donation drop-offs and recycling depots.
        Try rephrasing your question or mentioning the item or type of service you're looking for.
      </p>
      <p><strong>You can ask about things like:</strong></p>
      <ul>
        <li>🔋 <em>Batteries</em> (e.g., AA, lithium, rechargeable)</li>
        <li>🥫 <em>Drink containers</em> (e.g., pop cans, plastic bottles, juice boxes)</li>
        <li>🏪 <em>Bottle Depot</em> (where to return containers for refund)</li>
        <li>🧯 <em>Metal Recycling</em> (e.g., copper wires, screws, pipes)</li>
        <li>🛋️ <em>Bulky junk</em> (e.g., old furniture, mattresses, broken appliances)</li>
        <li>🍌 <em>Expired food</em> (e.g., meat, leftovers, produce)</li>
        <li>👕 <em>Clothing Donation</em> (e.g., pants, jackets, shoes, thrift stores)</li>
        <li>💡 <em>Light bulbs</em> (e.g., LED, CFL, tube lights)</li>
        <li>🎈 <em>Hard-to-dispose items</em> (e.g., balloons, razors, coffee pods, pizza boxes, paint cans)</li>
        <li>💻 <em>Electronics & toys</em> (e.g., phones, remotes, toy cars, cables)</li>
        <li>🛍️ <em>Plastic bags & wrappers</em> (e.g., ziplocks, bubble mailers, soft plastics)</li>
      </ul>
      <p>If you're still unsure, try describing what the item is made of (e.g., "wooden chair" or "glass jar") or what you're trying to do (e.g., "donate clothes").</p>
    `,
    side: "left",
    navigationPath: null,
    buttonName: null
  }  
];
