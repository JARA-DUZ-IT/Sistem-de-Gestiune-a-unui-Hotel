# Stage 4: AI log

## Tools
- Google Gemini

## Conversations
https://share.gemini.google/4fgefDSkvMds

## Key requests

### 1. Generating React components and passing props
- **Asked:** To split the UI into separate React components (`RezervareCard` and `RezervareList`) based on the Stage 1 HTML structure, handle data mapping with keys, and adapt the UI for conditional rendering (empty list message and completed status).
- **Got:** The JSX code for both components, using object destructuring for props, and the updated `App.jsx` and `App.css` files to integrate the components with the existing Neon theme.
- **Changed or rejected:** I had to explicitly request to preserve my original CSS classes and UI structure from the Stage 1 mockup because the AI initially omitted the form styling needed for future stages. I also manually tested the UI behavior by purposely removing the `key` prop and emptying the array to verify React warnings and conditional outputs.

## What I learned / what did not work
I learned how to break down an UI into modular React components (`RezervareCard` and `RezervareList`) and how data flows downwards from parent (`App.jsx`) to child components via `props`. I understood the critical importance of the `key` attribute when rendering lists with `.map()` to help React identify which items changed, and I practiced conditional rendering for handling empty arrays or dynamic CSS classes based on object properties (like `efectuat: true`).