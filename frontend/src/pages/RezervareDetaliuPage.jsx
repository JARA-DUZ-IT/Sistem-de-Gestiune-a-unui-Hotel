import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRezervare } from "../api.js";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./RezervareDetaliuPage.module.css";

export default function RezervareDetaliuPage() {
  const { id } = useParams();

  const [rezultat, setRezultat] = useState({
    id: null,
    rezervare: null,
    error: null,
  });

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchRezervare(id);

        if (!ignore) {
          setRezultat({
            id,
            rezervare: data,
            error: null,
          });
        }
      } catch (err) {
        if (!ignore) {
          setRezultat({
            id,
            rezervare: null,
            error: err.message,
          });
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (rezultat.id !== id) {
    return (
      <p className="info" data-testid="loading">
        Se incarca detaliile rezervarii...
      </p>
    );
  }

  if (rezultat.error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Rezervarea nu a putut fi incarcata: {rezultat.error}
        </p>
        <Link to="/">Inapoi la rezervari</Link>
      </section>
    );
  }

  const rezervare = rezultat.rezervare;

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Inapoi la rezervari
      </Link>

      <h2 data-testid="detail-title">{rezervare.titlu}</h2>

      <div className={styles.fields}>
        <div>
          <span className={styles.label}>ID rezervare</span>
          <p>{rezervare.id}</p>
        </div>

        <div>
          <span className={styles.label}>Tip camera</span>
          <p>
            <span className={`badge badge-${rezervare.tip}`}>
              {ETICHETE_TIP[rezervare.tip]}
            </span>
          </p>
        </div>

        <div>
          <span className={styles.label}>Status</span>
          <p>
            {rezervare.efectuat
              ? "Check-in efectuat"
              : "In asteptare"}
          </p>
        </div>
      </div>
    </section>
  );
}
