# Stage 6: AI Log

## Tools
- Google Gemini

## Conversations
https://share.gemini.google/g1W4MAC1U66T

## Key Requests

### 1. Connecting to a Mock API and Managing States (useEffect)
- **Asked:** To adapt the instructions for Stage 6 to my "HotelFlow" project by moving hardcoded data to a local server using `json-server` and `db.json`[cite: 27, 28].
- **Got:** Updated code for `App.jsx` using `useEffect` to fetch data asynchronously[cite: 26, 27]. I also received the necessary files (`api.js`, `.env.example`) and the logic for handling the application's three states: loading, error, and success[cite: 27, 29].
- **Changed or rejected:** I needed additional assistance to debug multiple errors that appeared in the terminal while installing and starting the server[cite: 34].

### 2. Debugging Terminal Errors and JSON Structure
- **Asked:** Solutions for the terminal freezing during `json-server` installation, the `ENOENT package.json` runtime error, and the issue where the server returned an empty object `{}`[cite: 34].
- **Got:** Clear instructions on how to stop frozen processes (`Ctrl + C`), clear the npm cache (`npm cache clean --force`), and navigate to the correct directory (`cd frontend`). I also received the corrected JSON structure and learned that the data must be wrapped in an object with a specific key (`"rezervari"`) to generate the correct API route[cite: 27].

## What I Learned / What Did Not Work

I learned how to use `useEffect` to fetch data when a component mounts and how to use `async/await` functions with `fetch`[cite: 26]. I also understood that a data request has three possible states (loading, success, and error) and that the interface must provide on-screen feedback for each of them[cite: 27].

What did not work initially: the dependency installation got stuck in a loop; I ran the scripts in the root directory instead of the `frontend` folder; and I entered the data in `db.json` as a simple array, which prevented the API route from being generated. I was also stopping the API server to start the React application, as I initially did not understand that both processes need to run simultaneously in two separate terminals in order to communicate with each other[cite: 28, 34].