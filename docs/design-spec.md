# Uma Café — Design Specification

> Derived from reference: cream-and-sage specialty coffee shop landing page.
> Adapted for Uma Luwih café, Tegallalang, Bali.

---

## 1. Color Palette

| Token                  | Hex       | Usage                                                   |
|------------------------|-----------|---------------------------------------------------------|
| `--cream`              | `#FAF7F2` | Page background, card backgrounds                       |
| `--cream-dark`         | `#F0EBE3` | Subtle card hover, secondary surfaces                   |
| `--sage-100`           | `#EEF4EB` | Light sage tint, feature row background                 |
| `--sage-200`           | `#D9E8D2` | Hero photo area bg, Popular Drinks panel, icon badges   |
| `--sage-300`           | `#B8D4AC` | Wavy dividers, decorative blobs                         |
| `--sage-400`           | `#8FBC7E` | Hover states, secondary accent                          |
| `--green-deep`         | `#3A6B4A` | "+" buttons, icon strokes, accent text                  |
| `--green-dark`         | `#2D5016` | Primary text on sage backgrounds                        |
| `--terra`              | `#E2764A` | CTA buttons (Order Now, View Menu)                      |
| `--terra-hover`        | `#D0663C` | CTA hover state                                         |
| `--text-primary`       | `#2C2C2C` | Headlines, primary body text                            |
| `--text-secondary`     | `#6B6B6B` | Descriptions, captions                                  |
| `--text-tertiary`      | `#999999` | Footnotes, disabled text                                |
| `--white`              | `#FFFFFF` | Card surfaces, modal backgrounds                        |
| `--divider`            | `#E5E0D8` | Thin lines between card halves, rule lines              |

### CSS Custom Properties

```css
:root {
  --cream: #FAF7F2;
  --cream-dark: #F0EBE3;
  --sage-100: #EEF4EB;
  --sage-200: #D9E8D2;
  --sage-300: #B8D4AC;
  --sage-400: #8FBC7E;
  --green-deep: #3A6B4A;
  --green-dark: #2D5016;
  --terra: #E2764A;
  --terra-hover: #D0663C;
  --text-primary: #2C2C2C;
  --text-secondary: #6B6B6B;
  --text-tertiary: #999999;
  --white: #FFFFFF;
  --divider: #E5E0D8;
}
```

---

## 2. Typography

### Font Families
- **Headlines:** `Nunito`, rounded sans-serif, weight 800 (extra-bold).
  Heavy, friendly, approachable — matches the reference's thick rounded headlines.
- **Body:** `Inter` or system-ui, weight 400/500.
  Clean, neutral, excellent readability at small sizes.

### Size Hierarchy

| Element             | Size (desktop)   | Weight | Line Height | Letter Spacing |
|---------------------|------------------|--------|-------------|----------------|
| Hero headline       | 52–56px (3.5rem) | 800    | 1.1         | -0.02em        |
| Section title       | 28–32px (2rem)   | 700    | 1.25        | -0.01em        |
| Card title          | 18px (1.125rem)  | 700    | 1.3         | normal         |
| Body / description  | 15–16px (1rem)   | 400    | 1.6         | normal         |
| Caption / price     | 13–14px (0.875rem)| 500   | 1.4         | normal         |
| Badge / tiny label  | 11–12px (0.75rem)| 600    | 1.2         | 0.03em         |

### Mobile Scaling
- Hero headline: 36–40px
- Section title: 24px
- Card title: 16px

---

## 3. Shape Language

### Border Radii
| Element              | Radius             |
|----------------------|--------------------|
| Cards (recommend)    | 20px               |
| Popular Drinks panel | 24px               |
| Pill buttons         | 9999px (full pill) |
| Hero photo mask      | organic blob (SVG clipPath) |
| Circular drink photos| 50% (perfect circle)|
| Icon badges          | 50% (circle)       |
| Footer info card     | 20px               |
| Gallery tiles        | 16px               |

### Organic Blob Hero Mask
The hero image is masked with an organic, potato-like blob shape using an SVG `clipPath`.
Approximate path: a roughly elliptical shape that is taller than wide, with irregular rounded edges — not symmetrical.

### Wavy Section Dividers
Between hero and feature-icons row: a full-width SVG wave in `--sage-300` that curves gently across the viewport. Height ~60-80px.

### Shadows
- Cards: `0 2px 16px rgba(0,0,0,0.06)` (very soft)
- Hero photo card: `0 8px 32px rgba(0,0,0,0.10)` (medium lift)
- Floating badges: `0 4px 12px rgba(0,0,0,0.10)`
- CTA buttons: `0 4px 16px rgba(226,118,74,0.25)` (orange glow)

---

## 4. Icon Style

- **Stroke style:** thin line, 1.5–2px stroke, no fill
- **Color:** `--green-deep` (#3A6B4A)
- **Badge container:** 48×48px circle with `--sage-200` background
- **Used for:** feature row icons, visit info (address, hours, phone), hero badges
- **Source:** Lucide icons or similar thin-line set

---

## 5. Spacing Rhythm

| Token            | Value   | Usage                            |
|------------------|---------|----------------------------------|
| Section padding  | 80–100px vertical, 24–64px horizontal | Between major sections |
| Card internal    | 24px    | Inside cards                     |
| Grid gap         | 24–32px | Between cards, between columns   |
| Element gap      | 12–16px | Between icon and text, title/desc|
| Page max-width   | 1200px  | Content container                |

---

## 6. Section-by-Section Layout

### 6.1 Header
- Left: leaf logo circle + "Uma Café" wordmark + "specialty coffee" subtitle
- Center: nav links (Menu, Our Story, Gallery, Contact) — regular weight, text-primary
- Right: orange pill "Order Now" button

### 6.2 Hero
- 2-column grid on cream background
- **Left column (55%):** large 3-line headline, short paragraph, orange "View Menu" pill CTA, row of 3 icon badges (Specialty Coffee, Made with Love, Sunset Views)
- **Right column (45%):** sage-200 background blob area, large organic-masked photo (hero-terrace.jpg with objectPosition tuned for latte+fries), floating white pill badge "4.9 ★ Google Rating" at bottom-right
- Below: full-width wavy SVG divider in sage-300

### 6.3 Feature Icons Row
- 4-column grid on cream bg
- Each: circle icon badge (sage bg) → bold title → one-line description
- Items: Rice Terrace Views / Fresh Ingredients / Friendly Service / Cozy Atmosphere

### 6.4 Popular Drinks
- One wide sage-200 rounded (24px) panel
- **Left third:** title "Popular Drinks", subtext, cream pill "See Full Menu" button
- **Right two-thirds:** 3 circular drink photos with name, short description, price below — separated by thin vertical dividers
- Drinks: Iced Tea, Fresh Juice, Latte (prices "Ask us")

### 6.5 We Recommend
- Centered title with decorative thin lines + leaf icons on either side
- 3 horizontal cards (white, 20px radius, soft shadow)
- Each card: rounded photo left (40%) → name + description + price left-aligned → green "+" circle button right
- Items: Spiced Grill Chicken 78K, Chicken Satay 34K, Rose Strawberry Toast 35K

### 6.6 Our Story / The View Banner
- Full-width sage-200 background
- **Left:** "Our Story" headline, paragraph about Uma Café, "Learn More" cream pill, 3 icon points (Rice Terrace Setting, Mount Agung View, Fresh Local Flavors)
- **Right:** sunset-mount-agung.jpg clipped by curved edge / organic mask

### 6.7 Contact / CTA Card
- Cream card, 20px radius, split by thin vertical divider
- **Left:** "Visit Us!" title, address with icon, hours with icon, phone with icon
- **Right:** "Order via WhatsApp" title, short text, orange CTA button, subtle decorative illustration

### 6.8 Footer
- Dark cream or sage-100 background
- Left: social media icons
- Center: © 2026 Uma Café · Tegallalang, Bali
- Right: Privacy Policy · Terms links

---

## 7. Warm Image Treatment

All photos receive a subtle CSS filter:
```css
filter: brightness(1.02) saturate(1.05) sepia(0.05);
```

## 8. Responsive Breakpoints

| Breakpoint | Behavior                                    |
|------------|---------------------------------------------|
| < 640px    | Single column, stacked hero, 2×2 features   |
| 640–1024px | 2-column hero, 2×2 features, 2-col cards    |
| > 1024px   | Full desktop layout as described             |
