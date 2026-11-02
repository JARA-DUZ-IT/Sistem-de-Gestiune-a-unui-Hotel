import { useState, useEffect } from "react";
import "./App.css";
import RezervareList from "./components/RezervareList.jsx";
import { fetchRezervari } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [rezervari, setRezervari] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchRezervari();
        if (!ignore) setRezervari(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  function handleToggle(id) {
    setRezervari((prev) =>
      prev.map((r) => (r.id === id ? { ...r, efectuat: !r.efectuat } : r))
    );
  }

  function handleDelete(id) {
    setRezervari((prev) => prev.filter((r) => r.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inAsteptare = rezervari.filter((r) => !r.efectuat).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>HotelFlow</h1>
        <p>Gestionează check-in-urile și tipurile de camere.</p>
        <p className="app-count">
          {rezervari.length} rezervări, dintre care {inAsteptare} în așteptare
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Lista rezervărilor</h2>
          {loading && <p className="info">Se încarcă lista...</p>}
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          {!loading && !error && (
            <RezervareList 
              rezervari={rezervari} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>
    </>
  );
}