# Stage 9: AI Log

## Tools
- Google Gemini

## Conversations
https://share.gemini.google/Gk8ietu6IOrb

## Key Requests

### 1. Building the Custom Express Backend and Removing json-server
- **Asked:** To replace `json-server` with a custom Node.js and Express backend adapted to my "HotelFlow" project (`/rezervari` resource, `titlu`, `tip`, and `efectuat` fields), implement server-side validation and proper HTTP status codes, update `frontend/src/api.js` to read server error messages, and clean up `db.json` and `json-server` from `frontend/`.
- **Got:** Complete code for the `backend/` structure (`package.json`, `.gitignore`, `.env.example`, `src/server.js`, `src/app.js`, `src/validation.js`, and `src/routes/rezervari.js`), the updated error handling in `api.js`, and the updated `README.md` sections and verification checklist.
- **Changed or rejected:** I kept Express `^5.3.0` as installed by npm instead of changing the version string, replaced the default generated `backend/package.json` to switch from `"commonjs"` to `"module"`, and integrated the Stage 9 documentation into my existing `README.md` layout.

### 2. Testing REST Endpoints with curl and Debugging Runtime Issues
- **Asked:** Help resolving a PowerShell error when running `curl`, verifying why the initial `curl` requests returned old `db.json` records and `201` on invalid data, and checking why the browser still showed a generic `404` message on `/rezervari/999`.
- **Got:** Instructions to run `curl` commands in Git Bash instead of PowerShell, identification that the previous `json-server` instance was still occupying port `3001`, verification of all HTTP status codes (`200`, `201`, `400`, `404`, `204`), and confirmation to save `frontend/src/api.js` so the custom `{ error: "..." }` message renders properly.

## What I Learned / What Did Not Work

I learned how to structure a modular Express 5 backend by separating `app.js` from `server.js` and organizing endpoints with `express.Router()`. I also understood the importance of middleware execution order (`cors()`, `express.json()`, route handlers, 404 fallback, and centralized four-parameter error handling), why server-side whitelist validation is mandatory even when the frontend validates inputs, and why CORS must be configured on the server when the frontend (`localhost:5173`) and backend (`localhost:3001`) run on different ports.

What did not work initially: running `curl` in Windows PowerShell failed because `curl` is aliased to `Invoke-WebRequest`, so I switched to Git Bash. Additionally, my first `curl` tests hit the old `json-server` process that was still running on port `3001` instead of the new Express server, which bypassed validation until I stopped the old process and started `npm run dev` in `backend/`. Finally, `/rezervari/999` initially kept displaying `Eroare server: 404` because I had forgotten to save `frontend/src/api.js` after adding `body.error` parsing.