# Project Constitution (`gemini.md`)

## Behavioral Rules & Invariants
- **Reliability over speed**: Never guess at business logic.
- **Data-First Rule**: All data schemas (Portfolio, Categories, Testimonials, FAQs, Commission Estimator, Inquiries) must be defined and validated before UI/Tool implementations.
- **Theme Constraints**: Grey (`#121214`, `#18181b`, `#27272a`, `#71717a`), White (`#ffffff`, `#f4f4f5`), Black (`#000000`, `#09090b`). High-contrast monochrome with refined micro-gradients.
- **Social Integrations**: Instagram, DeviantArt, ArtStation, Discord, GitHub.
- **Self-Annealing**: Stack trace analysis -> Patch script -> Test fix -> Update architecture SOPs.
- **3-Layer Separation**:
  - Layer 1: Architecture (`architecture/` SOPs)
  - Layer 2: Navigation (Decision & routing)
  - Layer 3: Tools (`tools/` deterministic scripts)

---

## Data Schemas

### 1. Artwork / Portfolio Item Schema
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PortfolioArtwork",
  "type": "object",
  "required": ["id", "title", "category", "subcategory", "thumbnail", "image", "description", "client", "year", "tools", "tags"],
  "properties": {
    "id": { "type": "string" },
    "title": { "type": "string" },
    "category": { "type": "string" },
    "subcategory": { "type": "string" },
    "thumbnail": { "type": "string" },
    "image": { "type": "string" },
    "beforeImage": { "type": "string", "description": "Optional sketch or clay render for before/after comparison" },
    "aspectRatio": { "type": "string", "enum": ["landscape", "portrait", "square", "ultra-wide"] },
    "description": { "type": "string" },
    "client": { "type": "string" },
    "year": { "type": "integer" },
    "tools": { "type": "array", "items": { "type": "string" } },
    "tags": { "type": "array", "items": { "type": "string" } },
    "featured": { "type": "boolean" },
    "stats": {
      "type": "object",
      "properties": {
        "views": { "type": "string" },
        "likes": { "type": "string" }
      }
    }
  }
}
```

### 2. Category & Subcategory Schema
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ArtCategory",
  "type": "object",
  "required": ["id", "name", "slug", "description", "subcategories"],
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "slug": { "type": "string" },
    "description": { "type": "string" },
    "icon": { "type": "string" },
    "subcategories": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "name", "slug", "itemCount"],
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "slug": { "type": "string" },
          "itemCount": { "type": "integer" }
        }
      }
    }
  }
}
```

### 3. Testimonials Schema
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ClientTestimonial",
  "type": "object",
  "required": ["id", "clientName", "role", "company", "avatar", "quote", "projectType", "rating"],
  "properties": {
    "id": { "type": "string" },
    "clientName": { "type": "string" },
    "role": { "type": "string" },
    "company": { "type": "string" },
    "avatar": { "type": "string" },
    "quote": { "type": "string" },
    "projectType": { "type": "string" },
    "rating": { "type": "number", "minimum": 1, "maximum": 5 }
  }
}
```

### 4. FAQ Item Schema
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "FAQItem",
  "type": "object",
  "required": ["id", "category", "question", "answer"],
  "properties": {
    "id": { "type": "string" },
    "category": { "type": "string" },
    "question": { "type": "string" },
    "answer": { "type": "string" }
  }
}
```

### 5. Commission Inquiry & Cost Estimator Payload Schema
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CommissionBriefPayload",
  "type": "object",
  "required": ["clientName", "email", "category", "subcategory", "projectScope", "estimatedBudgetRange", "timeline", "briefDescription"],
  "properties": {
    "clientName": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "company": { "type": "string" },
    "category": { "type": "string" },
    "subcategory": { "type": "string" },
    "artStyle": { "type": "string" },
    "deliverableType": { "type": "string" },
    "estimatedBudgetRange": { "type": "string" },
    "timeline": { "type": "string" },
    "commercialRights": { "type": "boolean" },
    "briefDescription": { "type": "string" },
    "referenceUrls": { "type": "array", "items": { "type": "string" } }
  }
}
```

---

## Maintenance & Incident Log
- **Phase 1**: Discovery completed; full data schemas codified.
- **Phase 2**: Link established. Scaffolding set up with React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, and Canvas Confetti.
- **Phase 3**: SOPs codified in `architecture/`. All UI and data engines constructed according to A.N.T. 3-layer architecture.
- **Phase 4**: Styling tuned to a luxury monochrome palette (Grey, White, Black) with high-contrast typography, interactive Before/After inspector, color palette copy swatches, and responsive layout.
- **Phase 5**: Production build tested and verified (`npm run build` code 0). Configured for instant deployment to GitHub and Vercel.
