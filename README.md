# What Goes Where

Project description

## Getting started

1. Install dependencies: `npm install`
2. Run server: `npm run dev`
3. Go to [localhost:5173](http://localhost:5173/)

## Tools

- Routing via react-browser-dom
- Styling via styled-modules (can change to CSS)
- React Query (can remove if we are not making API calls)
- React Context for client side state management (can remove if we are not using it)

## Chatbot Testing Script

You can use the following sample questions to verify that the chatbot correctly identifies each category. These cover synonyms, plurals, and varied sentence structures.

<details>
<summary><strong>📦 Bottle Depot</strong></summary>

- Where can I return my bottles?
- How do I recycle soda cans?
- Where do I dispose of pop cans?
- Can I take juice boxes to the bottle depot?
- I have a lot of beer bottles — what do I do?
- What do I do with drink cans and milk jugs?

</details>

<details>
<summary><strong>👕 Clothing Donation</strong></summary>

- Where can I throw out my clothes?
- How do I donate jackets and boots?
- What should I do with old pants and socks?
- Can I recycle underwear and scarves?
- Where's the nearest thrift donation bin?
- I want to donate sweaters and blouses.

</details>

<details>
<summary><strong>🔩 Metal Recycling</strong></summary>

- Where do I recycle metal?
- I have old bolts and nails — how do I dispose of them?
- Can I recycle a steel rod and some copper wires?
- What to do with aluminum scrap and iron plates?

</details>

<details>
<summary><strong>🛋️ Junk Removal</strong></summary>

- I need to get rid of an old couch and mattress.
- How do I dispose of a broken table and carpet?
- What can I do with my junk furniture?
- Is there a pickup service for big trash like appliances?

</details>

<details>
<summary><strong>🔋 Battery Disposal</strong></summary>

- Where can I throw away used batteries?
- How do I dispose of AA and AAA batteries?
- What do I do with a lithium coin cell?
- Are rechargeable batteries recyclable?

</details>

<details>
<summary><strong>🛍️ Plastic Bags</strong></summary>

- Where do I throw away plastic bags?
- Can I recycle cling film or grocery bags?
- Is there a bin for soft plastics and ziplocks?
- What about sandwich bags and straws?

</details>

<details>
<summary><strong>💻 Broken Electronics</strong></summary>

- How do I get rid of an old TV and a broken printer?
- Where can I dispose of e-waste like a laptop?
- Can I recycle my old phone and charger?
- What to do with headphones, routers, and game consoles?

</details>

<details>
<summary><strong>🧸 Broken Toys</strong></summary>

- Where can I throw away broken toys?
- What do I do with old puzzles and stuffed animals?
- Can I recycle action figures and Lego?
- Where to get rid of dollhouses and board games?

</details>

<details>
<summary><strong>🍌 Expired Food</strong></summary>

- How do I dispose of spoiled food?
- Can I compost old bananas and moldy bread?
- Where do I throw away expired meat and dairy?
- What bin do fruit scraps and leftovers go in?

</details>

<details>
<summary><strong>🥃 Glass Bottles</strong></summary>

- Where can I recycle wine bottles?
- What do I do with empty jars and olive oil bottles?
- Can I throw out beer bottles in the glass bin?
- Are glass sauce containers recyclable?

</details>

<details>
<summary><strong>💡 Light Bulbs</strong></summary>

- How do I dispose of old light bulbs?
- What do I do with used CFL and LED bulbs?
- Can I recycle halogen tubes and fluorescent lights?

</details>

<details>
<summary><strong>🎨 Paint Cans</strong></summary>

- How do I throw away paint cans?
- What do I do with leftover oil-based paint?
- Can I recycle paint buckets and primer?
- Where to dispose of empty latex paint containers?

</details>

> 💡 *Note:* If none of the keywords match, the chatbot should return the "Invalid Subject" response.