# Design System Strategy: The Kinetic Architect

## 1. Overview & Creative North Star
This design system is a sophisticated collision of tactile realism and structural boldness. Our Creative North Star is **"The Kinetic Architect."** We are moving away from the "flat web" by treating the UI as a physical, multi-layered environment where a Full-Stack Developer’s logic meets high-end editorial aesthetics.

The system rejects the "template" look. We achieve this through **Intentional Asymmetry**—where large-scale typography breaks the grid—and **Material Friction**, using high-contrast transitions between frosted glass, clay-like forms, and brutalist containers. This is not just a portfolio; it is a premium digital object.

---

## 2. Colors & Surface Logic
The palette is rooted in a deep, void-like foundation (`surface` #0E0E0E) to allow our electric accents to vibrate.

### The "No-Line" Rule
Standard 1px borders are prohibited for sectioning. Boundaries between content blocks must be defined strictly through:
*   **Tonal Shifts:** Moving from `surface` to `surface-container-low`.
*   **Negative Space:** Using aggressive vertical padding (e.g., 120px–160px) to let content breathe.
*   **Accents:** Only use the `primary` or `secondary` tokens for bold, Neobrutalist structural accents (e.g., a 4px left-border on a featured project card).

### Surface Hierarchy & Nesting
Treat the UI as a series of floating planes.
*   **Base:** `surface-container-lowest` (#000000) for the deepest background layers.
*   **Canvas:** `surface` (#0E0E0E) for the main scrollable area.
*   **Modules:** `surface-container` (#1A1919) for cards and grouped content.
*   **Floating Elements:** Use `surface-bright` with 60% opacity and a `24px` backdrop-blur to create Glassmorphism for navigation and modals.

### Signature Textures
Main CTAs and Hero sections should utilize a **Subtle Kinetic Gradient**. Transition from `primary` (#A3A6FF) to `primary-dim` (#6063EE) at a 135-degree angle. This provides a "soul" to the interface that static hex codes cannot provide.

---

## 3. Typography
We utilize a high-contrast pairing to reflect the duality of technical precision and creative vision.

*   **Display & Headlines (Space Grotesk):** This is our "Brutalist" voice. Use `display-lg` for hero statements. Apply `letter-spacing: -0.04em` to create a tight, authoritative editorial feel. 
*   **Body & Labels (Inter):** Our "Functional" voice. Inter provides maximum readability against dark backgrounds. Ensure `body-md` uses a slightly increased line-height (1.6) to prevent eye fatigue on dark surfaces.
*   **Visual Hierarchy:** Don't be afraid of scale. A `display-lg` headline should dwarf a `body-md` paragraph to create a "Signature" look seen in award-winning portfolios.

---

## 4. Elevation & Depth
We eschew the "flat" look for a sophisticated layering principle.

*   **Tonal Layering:** Depth is achieved by "stacking." Place a `surface-container-highest` element on a `surface-container-low` background to create a soft, natural lift without relying on heavy shadows.
*   **Ambient Shadows:** For "floating" items (Glassmorphism), use a shadow with a 40px blur at 8% opacity using the `on_primary_fixed` color. This mimics a real-world glow rather than a muddy grey drop shadow.
*   **Claymorphism in Forms:** Inputs should use `surface-container-highest` with an `inner-shadow`. This creates a soft, 3D "pressed" feel that makes form interaction feel tactile and premium.
*   **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` at 15% opacity. Never use 100% opaque lines for containment.

---

## 5. Components

### Buttons (Skeuomorphic & Tactile)
*   **Primary:** Background using `primary` gradient. Apply a subtle 1px top-inner-glow (`on_primary_container` at 30%) and a soft bottom shadow to create a "pressed" physical button feel.
*   **Secondary:** Glassmorphic. `surface-bright` at 10% opacity with a heavy backdrop blur.
*   **Interaction:** On hover, use GSAP to scale the button to 1.05 and increase the inner glow intensity.

### Cards (Neobrutalist Containers)
*   **Structure:** Use `surface-container-high`.
*   **The Accent Rule:** Apply a 4px solid border using `primary` only on the bottom and right sides to simulate a Neobrutalist shadow without the "heavy" look of a full box.
*   **Spacing:** Content within cards must use the `xl` (1.5rem) padding scale.

### Form Elements (Claymorphic)
*   **Inputs:** High roundedness (`xl`). Background `surface-container-lowest`. Use a subtle inner shadow to make the field look "carved" into the interface.
*   **Focus State:** Transition the border to `secondary` (#C180FF) with a soft outer glow.

### Navigation (Glassmorphic)
*   **Style:** A floating "dock" at the bottom or top of the screen. 
*   **Effect:** `surface-container` at 40% opacity, `backdrop-filter: blur(20px)`. This keeps the developer's work visible as the user scrolls, creating a sense of continuity.

### Chips & Tags
*   **Style:** Small, pill-shaped (`full` roundedness). Use `surface-variant` backgrounds with `label-md` typography. No borders.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Align a headline to the far left and the body text to the center-right to create visual tension.
*   **Do** use GSAP for "Reveal on Scroll." Elements should slide up and fade in with a slight stagger (0.1s) to feel choreographed.
*   **Do** use high-contrast imagery. Project screenshots should have a slight `primary` tint or high-shadow contrast to match the theme.

### Don’t:
*   **Don’t** use pure white (#FFFFFF) for long-form body text. Use `on_surface_variant` (#ADAAAA) to reduce "vibrance" and improve readability on dark backgrounds.
*   **Don’t** use standard "Ease-in-Out" easing. Use custom cubic-beziers (e.g., `0.16, 1, 0.3, 1`) for a "snappy yet smooth" high-end feel.
*   **Don’t** use 1px dividers. If you need to separate content, use a change in the `surface-container` tier or increase the whitespace.

---

## 7. Animation Direction
The motion is the "glue" of this system. 
1.  **Parallax Layers:** Project cards should move at a slightly different speed than the background text.
2.  **Magnetic Cursors:** Implement a custom cursor that expands when hovering over `primary` buttons.
3.  **Floating Physics:** Use Framer Motion to give claymorphic elements a slight "floating" animation (y-axis movement of 10px) to emphasize their 3D nature.