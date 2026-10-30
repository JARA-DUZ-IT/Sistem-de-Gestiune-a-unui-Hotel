# HotelFlow
A web application to manage hotel reservations and room statuses. 
It helps receptionists track guest check-ins, room types, and floor allocations.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| Guest & Room| text | required, max 100 chars |
| Checked-in | boolean | toggled from the list, default false |
| Room Type | fixed values | Single, Double, Suite |
| Floor | relation | Floor 1, Floor 2, Floor 3 |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Alice Smith - Room 101, pending, Single
2. Bob Johnson - Room 205, checked-in, Double
3. Charlie Brown - Room 301, pending, Suite

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Stage 1: Brainstorming data model, generating README and HTML/CSS structures. |
| Gemini | Stage 2: Generating the JavaScript array, pure functions (map, filter, reduce), and console tests. |.
| Gemini | Stage 3: Generating React component, adapting CSS for Vite, fixing PowerShell execution policies, and Vite setup. |
| Gemini | Stage 4: Splitting the UI into React components, passing props, and conditional rendering based on state. |
Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- `RezervareList` receives the whole array and renders one card per item.
- `RezervareCard` receives a single item through props and displays it.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/README.md#L1-L43 | read |
| S1-R2 | AI usage section | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/README.md#L1-L43 | read |
| S1-R3 | AI log for stage 1 | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/ai-log/etapa-01.md#L1-L17 | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/index.html#L10-L57 | open the page |
| S1-R5 | finished card looks different | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/style.css#L129-L135 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/style.css#L145-L150 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/35b6764700aad60f01c14f71879c8aeda4a84881/style.css#L140-L161 | Tab; dark mode |
| S1-R8 | commit “Stage 1” pushed | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/commits/main/ | commit history |
| S2-R1 | JS file linked, logs on page load | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/c086b4ee0d1632bb904315c6ad581968bc4442cb/rezervari.js#L1-L58 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/c086b4ee0d1632bb904315c6ad581968bc4442cb/rezervari.js#L1-L5 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/c086b4ee0d1632bb904315c6ad581968bc4442cb/rezervari.js#L1-L76 | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/c086b4ee0d1632bb904315c6ad581968bc4442cb/rezervari.js#74-L76 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/c086b4ee0d1632bb904315c6ad581968bc4442cb/rezervari.js#L1-L76 | console line |
| S2-R6 | README Stage 2 section + AI log | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/README.md | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/commits/main/ | commit history |
| S3-R1 | npm run dev starts without errors | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/package.json#L1-L27 | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/App.jsx#L15-L19 | edit data, save |
| S3-R3 | data from README, not from the example | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/App.jsx#L3-L7 | compare with README |
| S3-R4 | stage 1 styles reused | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/App.css#L1-L91 | look at the page |
| S3-R5 | node_modules ignored, build passes | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/.gitignore#L1-L24 | npm run build |
| S3-R6 | README Stage 3 section + AI log | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/README.md | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/commits/main/ | commit history |
| S4-R1 | 2+ components in src/components/ | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/tree/main/frontend/src/components | open folder |
| S4-R2 | card receives data through props | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/components/RezervareCard.jsx#L3 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/components/RezervareList.jsx#L10-L12 | F12,Console |
| S4-R4 | message for empty list | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/components/RezervareList.jsx#L4-L6| set array to [] |
| S4-R5 | state changes the card look | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/893e7d0d3e6377aa2133267053de506418bc2214/frontend/src/components/RezervareCard.jsx#L5 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/main/README.md | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/ai-log/etapa-04.md | read |
| S4-R7 | commit "Stage 4" pushed | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/commits/main/ | commit history |
| S5-R1 | list kept in useState, in App | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.jsx#L1-L65 | read |
| S5-R2 | toggling changes state and card look | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.jsx#L19-L23 | click a checkbox |
| S5-R3 | delete removes the item | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.jsx#L25-L27 | click Delete |
| S5-R4 | header counter derived, not in state | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.jsx#L35 | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.jsx#L19-L28 | read |
| S5-R6 | light/dark toggle: state + data-theme on html | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.jsx#L29-L33 | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/frontend/src/App.css#L33-L156 | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/README.md | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/blob/e12c91a1e70ac4ae9c61eceeec150ac69e90b013/ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | https://github.com/JARA-DUZ-IT/Sistem-de-Gestiune-a-unui-Hotel/commit/e12c91a1e70ac4ae9c61eceeec150ac69e90b013 | commit history |