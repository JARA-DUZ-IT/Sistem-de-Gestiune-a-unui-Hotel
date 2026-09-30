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

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
☐ Stage 2: data logic in JavaScript

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