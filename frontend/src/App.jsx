import { useState } from "react";
import "./App.css";
import RezervareList from "./components/RezervareList.jsx";

const REZERVARI_INITIALE = [
  { id: 1, titlu: "Alice Smith - Cam. 101", efectuat: false, tip: "single" },
  { id: 2, titlu: "Bob Johnson - Cam. 205", efectuat: true, tip: "double" },
  { id: 3, titlu: "Charlie Brown - Cam. 301", efectuat: false, tip: "suite" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [rezervari, setRezervari] = useState(REZERVARI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

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
          <RezervareList 
            rezervari={rezervari} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </>
  );
}