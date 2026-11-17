
import { useEffect, useState } from "react";
import RezervareList from "../components/RezervareList.jsx";
import RezervareForm from "../components/RezervareForm.jsx";
import {
  fetchRezervari,
  createRezervare,
  updateRezervare,
  deleteRezervare,
} from "../api.js";
import styles from "./RezervariPage.module.css";

export default function RezervariPage() {
  const [rezervari, setRezervari] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Adaugarea unei rezervari
  async function handleAdd(rezervare) {
    const creata = await createRezervare(rezervare);
    setRezervari((prev) => [...prev, creata]);
  }

  // Modificarea starii unei rezervari
  async function handleToggle(id) {
    const rezervare = rezervari.find((r) => r.id === id);

    try {
      const actualizata = await updateRezervare(id, {
        efectuat: !rezervare.efectuat,
      });

      setRezervari((prev) =>
        prev.map((r) => (r.id === id ? actualizata : r))
      );

      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  // Stergerea unei rezervari
  async function handleDelete(id) {
    try {
      await deleteRezervare(id);

      setRezervari((prev) =>
        prev.filter((r) => r.id !== id)
      );

      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  const inAsteptare = rezervari.filter(
    (r) => !r.efectuat
  ).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adauga rezervare</h2>
        <RezervareForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Lista rezervarilor</h2>

        <p className={styles.summary}>
          {rezervari.length} rezervari, dintre care {inAsteptare} in asteptare
        </p>

        {loading && (
          <p className="info" data-testid="loading">
            Se incarca lista...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            Nu am putut procesa cererea: {error}
          </p>
        )}

        {!loading && (
          <RezervareList
            rezervari={rezervari}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}
