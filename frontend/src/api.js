
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Functie comuna pentru toate cererile HTTP
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  // Tratarea raspunsurilor fara continut (204 No Content)
  return res.status === 204 ? null : res.json();
}

// GET - preluarea rezervarilor
export function fetchRezervari() {
  return request("/rezervari");
}

// POST - adaugarea unei rezervari
export function createRezervare(rezervare) {
  return request("/rezervari", {
    method: "POST",
    body: JSON.stringify(rezervare),
  });
}

// PATCH - modificarea unei rezervari
export function updateRezervare(id, changes) {
  return request(`/rezervari/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

// DELETE - stergerea unei rezervari
export function deleteRezervare(id) {
  return request(`/rezervari/${id}`, {
    method: "DELETE",
  });
}

export function fetchRezervare(id) {
  return request(`/rezervari/${id}`);
}