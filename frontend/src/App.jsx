import "./App.css";

const rezervari = [
  { id: 1, titlu: "Alice Smith - Cam. 101", efectuat: false, tip: "single" },
  { id: 2, titlu: "Bob Johnson - Cam. 205", efectuat: true, tip: "double" },
  { id: 3, titlu: "Charlie Brown - Cam. 301", efectuat: false, tip: "suite" }
];

export default function App() {
  const inAsteptare = rezervari.filter((r) => !r.efectuat).length;

  return (
    <>
      <header className="app-header">
        <h1>HotelFlow</h1>
        <p>Gestionează check-in-urile și tipurile de camere.</p>
        <p className="app-count">
          {rezervari.length} rezervări, dintre care {inAsteptare} în așteptare
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Lista rezervărilor</h2>
          {/* Temporar: date brute; componentele apar in Etapa 4 */}
          <pre>{JSON.stringify(rezervari, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}