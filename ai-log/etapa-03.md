# Stage 3: AI log

## Tools
- Gemini

## Conversations
https://share.gemini.google/U2IYeu8XDC7x

## Key requests

### 1. Migrating the project to React and Vite
- **Asked:** To provide the necessary React and CSS code based on the data array from stage 2, and step-by-step guidance for setting up the Vite project environment.
- **Got:** The complete `App.jsx` component with dynamic counter logic, the adapted `App.css` for a single-column layout, and a beginner-friendly CLI tutorial for project initialization.
- **Changed or rejected:** I independently managed the execution policy restrictions in PowerShell based on the provided commands and manually performed the required cleanup of default Vite assets.

## What I learned / what did not work
I learned how to initialize a modern React project using the Vite build tool and how to manage node dependencies via npm. I discovered that PowerShell has strict default execution policies that block scripts like `npm` commands, requiring me to manually bypass them using the `Set-ExecutionPolicy` command. I also understood the basic transition of standard HTML into JSX syntax.