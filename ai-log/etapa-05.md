# Stage 5: AI log

## Tools
- Google Gemini

## Conversations
https://share.gemini.google/ozjER2easWLl

## Key requests

### 1. Implementing local state, events, and theme toggle
- **Asked:** To adapt the Stage 5 requirements (local state, events, and light/dark theme toggle) for my custom "HotelFlow" project, using my existing components (`RezervareCard`, `RezervareList`) and CSS.
- **Got:** Updated JSX code implementing `useState` for the reservations array and theme. Functions for `handleToggle` and `handleDelete` using immutable array methods (`.map` and `.filter`). The AI also provided the logic for a controlled checkbox, a delete button with accessibility (`aria-label`), and generated a light mode CSS variant that complements my original neon dark theme.
- **Changed or rejected:** I explicitly instructed the AI to use my specific HotelFlow project structure and data instead of the generic guide's `TASKURI_INITIALE`. I also requested the complete `App.css` file instead of just partial snippets to ensure my previous layout and neon styles were preserved flawlessly without manual copy-paste errors.

## What I learned / what did not work
I learned how to use `useState` to manage dynamic data in React and the importance of updating state immutably (e.g., using `.map` and `.filter` instead of mutating the array directly). I saw how data and functions flow down via `props` and how user events (like `onChange` and `onClick`) trigger functions in the parent component (`App.jsx`) where the state actually lives. I understood the difference between a value kept in state versus a derived value (like the `inAsteptare` counter, which recalculates automatically on every render). Additionally, I learned how to implement a controlled form element (the checkbox tied to state) and how to manage the global theme by applying a `data-theme` attribute directly to the HTML document (`document.documentElement`).