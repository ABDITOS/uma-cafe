# 🌿 Uma Luwih Cafe — Digital Menu & Landing Page

Welcome to the **Uma Luwih Cafe** codebase! This project is a modern, highly interactive landing page and digital menu system built for a specialty coffee shop perched above Bali's emerald rice terraces.

## ✨ Key Features

- **Modern Digital Menu:** A fully responsive grid menu with sticky category tabs, live text search, and quick-filter chips (e.g., Chicken, Beef, Sweet).
- **Interactive Cart & WhatsApp Integration:** Users can add items to their cart using sleek `+ / -` steppers. A floating cart bar tracks their order and instantly generates a pre-filled WhatsApp message with the exact items, quantities, and total price.
- **Smart Image Loading:** Custom `<SmartImage>` component that lazy-loads imagery with a beautiful cream/sage shimmer skeleton. If an image is missing, it elegantly falls back to a branded icon (coffee cup, bowl, sweet, etc.) without breaking the layout.
- **Animated Social Bar:** A sticky, fixed-position social media bar on the left screen edge that expands with a smooth bubble animation on hover to reveal handles and phone numbers.
- **Responsive Design:** Carefully crafted UI using a custom Sage & Cream color palette, organic blob shapes, soft layered shadows, and responsive layouts that look stunning on both mobile phones and desktop monitors.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Icons:** `lucide-react` & `react-icons`

---

## 📂 Project Structure

Here is where everything lives so you can easily navigate the codebase:

```text
uma-cafe/
├── public/
│   └── images/              # 📸 All local, high-res photos for the menu and site
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root HTML layout, fonts, and Hydration Error safeguards
│   │   ├── globals.css      # Custom Tailwind theme tokens (Cream/Sage colors, animations)
│   │   └── page.tsx         # 🚀 THE MAIN APP: Hero, Menu Grid, Cart Logic, and Footer
│   ├── components/
│   │   └── SmartImage.tsx   # Custom image wrapper with loading skeletons and fallback icons
│   └── data/
│       ├── content.ts       # Text copy, titles, and feature lists for the landing page
│       └── menu.ts          # 🍔 The Database: All menu items, prices, categories, and image mappings
├── scripts/
│   └── check-images.js      # Diagnostic script to ensure no broken images exist
└── README.md                # You are here!
```

---

## 📝 How to Update the Menu

Managing the menu is incredibly easy. You do **not** need a separate database. 

1. **Add the Photo:** Drop the new high-resolution `.jpg` file into the `/public/images/` folder.
2. **Update the Data:** Open `/src/data/menu.ts` and add or edit the item:
   ```typescript
   {
     id: 'new-item',
     category: 'Main Dishes',
     group: 'Chicken',
     name: 'New Chicken Dish',
     description: 'A delicious new addition to our menu.',
     price: 55, // Represented in thousands (e.g., 55 = Rp 55,000)
     image: '/images/new-chicken-dish.jpg',
     tags: ['Chef\'s pick'] // Optional badges
   }
   ```
3. **Verify:** Run `npm run check:images` in your terminal to ensure you typed the filename correctly!

---

## 🚀 Getting Started (For Developers)

To run this project on your local machine:

**1. Install dependencies:**
```bash
npm install
```

**2. Run the development server:**
```bash
npm run dev
```

**3. Open the site:**
Navigate to [http://localhost:3000](http://localhost:3000) in your browser. 

*Note: If you run into Turbopack caching issues when restarting the server, clear the cache by running `rm -rf .next` before running `npm run dev`.*

## 🧪 Available Scripts
- `npm run dev` - Starts the local development server.
- `npm run build` - Compiles the Next.js application for production.
- `npm run check:images` - Scans `menu.ts` and `content.ts` to guarantee that 100% of the referenced image paths physically exist in `/public/images`.
