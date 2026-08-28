# SOP-02: Interactive Gallery & Artwork Inspector

## 1. Objectives
Deliver a fluid, luxury-tier user experience that allows studio clients, art directors, and creative buyers to explore Core Artworks' extensive portfolio.

## 2. Interactive Requirements
1. **Category Tabs & Subcategory Pills**:
   - Instant filtering with smooth layout transitions (Framer Motion).
   - "All Works" option + subcategory count badge indicators.
   - Search bar filtering by tag, title, client, or software tool.
2. **Interactive Lightbox Inspector**:
   - High-resolution modal display with keyboard shortcuts (`Esc` to close, Left/Right navigation).
   - Display full metadata: Client, Year, Software Stack, Art Direction, and extracted Monochromatic/Accent Color Palette swatches.
   - CTA to "Inquire About Similar Style" which pre-fills the Commission Estimator / Contact Form.
3. **Before & After / Layer Inspector (Sketch vs. Master / Clay vs. Final)**:
   - Draggable vertical divider handle.
   - Smooth touch/mouse tracking with percentage indicator.
   - Toggle buttons for quick comparison modes.

## 3. Performance Criteria
- 60 FPS transition animations.
- Responsive grid scaling seamlessly from mobile (1 column) to tablet (2 columns) to desktop (3-4 columns).
