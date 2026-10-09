# 🏗️ Technical Architecture & State Management

This document provides a deeper technical overview of the Uma Cafe frontend architecture to help developers understand how state flows through the application.

## 1. Single Page Application (SPA) Approach
The entire user experience—from browsing the landing page to filtering the menu and managing the cart—happens on a single route (`/src/app/page.tsx`). We chose a `"use client"` approach for the main page to support high interactivity (instant filtering, cart tracking) without the latency of server round-trips.

## 2. State Management (Cart & Filters)
We use React's built-in `useState` and `useMemo` hooks to manage the interactive elements of the page.

### 🛒 The Cart State
The cart is managed by a simple Record/Dictionary object mapping Item IDs to Quantities:
```typescript
const [cart, setCart] = useState<Record<string, number>>({});
```
- **Adding Items:** When a user clicks `+`, the `updateCart(id, delta)` function increases the quantity.
- **Removing Items:** When quantity reaches `0`, the item is dynamically deleted from the `cart` object to prevent clutter.
- **Deriving Totals:** We use `useMemo` to iterate over the `cart` object, matching IDs against `menuData` to instantly calculate `totalItems` and `totalPrice`.

### 🔍 Filtering State
The menu grid updates instantly based on three independent state variables:
1. `activeTab`: (e.g., "All", "Main Dishes", "Coffee & Drinks")
2. `searchQuery`: Text-based matching against item names and descriptions.
3. `activeFilter`: Quick chips (e.g., "Chicken", "Beef") that match against predefined item groupings.

These three states feed into a `filteredMenu` hook (`useMemo`) which recalculates the array of displayed items on every keystroke or click, ensuring buttery-smooth performance.

## 3. WhatsApp Integration Logic
We do not use a backend database for orders. Instead, we compile the local `cart` state into a formatted string and pass it directly to WhatsApp's API (`wa.me`).

**How it works:**
1. The user clicks "Order via WhatsApp".
2. The `generateWhatsAppLink()` function loops through the `cart`.
3. It builds a text payload: `*1x Chicken Burger* - Rp 43,000`, etc.
4. It appends the total price.
5. It uses `encodeURIComponent()` to safely convert spaces and line breaks into a URL.
6. The browser opens a new tab straight to the business's WhatsApp chat with the pre-filled message.

## 4. The `<SmartImage>` Component
Because Next.js `<Image>` components can be finicky with external loading states, we built a bulletproof wrapper.
- **Aspect Ratio:** Images are forced into responsive, locked aspect ratios (e.g., `4/3`) to prevent layout shift.
- **Hydration Safe:** We bypassed traditional `onLoad` opacity toggles (which break during Next.js hydration) and instead placed a CSS-animated skeleton permanently behind the image (`-z-10`). The image natively pops over it when loaded.
- **Error Handling:** If an image URL is broken, `onError` triggers a state change that renders a polished SVG icon fallback instead of a broken browser link.
