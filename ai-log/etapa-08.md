# Stage 8: AI Log

## Tools

-   ChatGPT (GPT-6)

## Conversations

https://chatgpt.com/share/6afc373f-4cfc-83ed-acef-202ce8aa3bf4

## Key Requests

### 1. Implementing React Router and a Shared Layout

-   **Asked:** To adapt the Stage 8 routing requirements to my
    "HotelFlow" project while preserving the functionality implemented
    in the previous stages.
-   **Got:** Updated code for `main.jsx` using `BrowserRouter` and a new
    `App.jsx` containing the application routes. I also received a
    shared `Layout.jsx` component using `Outlet` and `NavLink` for
    navigation.
-   **Changed or rejected:** The original TaskFlow routes were adapted
    to HotelFlow, using `/rezervari/:id` for reservation details and
    `/despre` for the information page.

### 2. Creating Reservation Detail, About, and Not Found Pages

-   **Asked:** To implement a detail page that retrieves a reservation
    using the ID from the URL, together with an About page and a custom
    404 page.
-   **Got:** New page components: `RezervareDetaliuPage.jsx`,
    `DesprePage.jsx`, and `NotFoundPage.jsx`. The detail page uses
    `useParams()` and a new `fetchRezervare(id)` API function to
    retrieve the requested reservation from the server. Error handling
    was also implemented for reservations that do not exist.
-   **Changed or rejected:** The detail page was adapted to display
    HotelFlow-specific information, including the reservation title,
    room type, check-in status, and reservation ID.

### 3. Migrating Component Styles to CSS Modules

-   **Asked:** To reorganize the styling according to the Stage 8
    requirements without losing the existing HotelFlow design.
-   **Got:** Separate CSS Module files for the layout, reservation card,
    reservation form, reservation list, and application pages. I also
    received an updated `index.css` containing global variables, theme
    definitions, and shared styles.
-   **Changed or rejected:** The existing colors, dark theme, and visual
    design were preserved. Component-specific styles were moved into
    their corresponding `.module.css` files. After checking that
    `App.css` was no longer imported, it was deleted.

### 4. Updating Reservation Navigation

-   **Asked:** To make reservation titles clickable and open their
    individual detail pages.
-   **Got:** An updated `RezervareCard.jsx` using React Router's `Link`,
    with each reservation linking to `/rezervari/:id`. The required
    `data-testid="item-link"` attribute replaced the previous
    `item-title` attribute.
-   **Changed or rejected:** The original task card was adapted to the
    reservation card, while preserving the checkbox and delete
    functionality.

### 5. Testing, Debugging, and Final Verification

-   **Asked:** To verify the application against the Stage 8
    requirements and check whether the previous Stage 7 functionality
    was preserved.
-   **Got:** A manual testing checklist covering navigation without page
    reload, reservation details, browser refresh, missing reservation
    IDs, the custom 404 page, and browser back navigation.
-   **Changed or rejected:** The implementation was checked using
    HotelFlow routes and reservation data. The application passed the
    manual tests, `npm run build`, and `npm run lint`.

## What I Learned / What Did Not Work

I learned how React Router manages navigation between multiple pages
without reloading the entire document. I also understood how
`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Outlet`, and
`useParams()` work together to create a multi-page React application.

I learned how to retrieve a specific resource from an API using an ID
from the URL and how to handle missing resources without displaying an
empty page.

I also learned how CSS Modules isolate component styles and how global
styles should be organized separately in `index.css`.

One important challenge was reorganizing the existing application
without breaking the functionality implemented in Stage 7. The original
`App.jsx` contained the reservation state and CRUD handlers, so this
logic had to be moved into `RezervariPage.jsx`, while `App.jsx` became
responsible only for routing. The existing visual design was preserved
during the migration.

Finally, I verified that the application builds successfully with
`npm run build` and passes ESLint with `npm run lint`.