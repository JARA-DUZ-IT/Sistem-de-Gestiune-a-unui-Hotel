# Stage 7: AI Log

## Tools

-   ChatGPT (GPT-6)

## Conversations

https://chatgpt.com/share/6afc373f-4cfc-83ed-acef-202ce8aa3bf4

## Key Requests

### 1. Implementing CRUD Operations Through a Shared API Function

-   **Asked:** To adapt the Stage 7 requirements to my "HotelFlow"
    project, implementing the necessary HTTP operations for managing
    hotel reservations.
-   **Got:** Updated code for `api.js` with a shared `request()`
    function supporting GET, POST, PATCH, and DELETE requests. I also
    received guidance on handling HTTP errors and updating React state
    only after successful server responses.
-   **Changed or rejected:** The original examples used tasks and
    task-related properties. These were adapted to HotelFlow by using
    the `rezervari` resource and reservation-specific fields such as
    `titlu`, `tip`, and `efectuat`.

### 2. Creating a Controlled Reservation Form and Validation

-   **Asked:** To implement a reservation form with controlled inputs,
    validation, and proper error handling.
-   **Got:** An updated `RezervareForm.jsx` component using `useState`,
    `value`, and `onChange`. The form validates the reservation title,
    enforces a maximum length of 100 characters, prevents duplicate
    submissions, and clears the fields only after a successful server
    response.
-   **Changed or rejected:** The task-oriented form from the guide was
    adapted to the hotel reservation model, with a reservation title and
    room type selection.

### 3. Updating and Deleting Reservations

-   **Asked:** To implement the reservation status toggle and deletion
    functionality while preserving server-side persistence.
-   **Got:** Updated handlers for adding, updating, and deleting
    reservations in `App.jsx`, together with the corresponding API
    functions. The interface updates only after the server confirms the
    operation.
-   **Changed or rejected:** Task completion was replaced with the
    reservation check-in status represented by the `efectuat` property.

### 4. Testing and Debugging Stage 7

-   **Asked:** To verify the implementation against the Stage 7
    requirements and identify possible problems in the code.
-   **Got:** Guidance for testing form validation, reservation creation,
    status updates, deletion, persistence after refresh, API errors, and
    the required `data-testid` attributes.
-   **Changed or rejected:** The implementation was tested using the
    HotelFlow reservation data and API routes instead of the original
    TaskFlow examples.

## What I Learned / What Did Not Work

I learned how to create a controlled React form, validate user input
before sending requests, and use a shared API request function for
different HTTP methods. I also understood why React state should only be
updated after the server confirms a successful operation.

I learned how to handle asynchronous operations with `async/await`,
display errors directly in the interface, prevent duplicate form
submissions, and preserve data through a mock REST API using
`json-server`.

The original examples from the guide were based on a task management
application, so they could not be copied directly. They needed to be
adapted to the HotelFlow reservation model, including the resource name,
properties, form fields, and displayed information.