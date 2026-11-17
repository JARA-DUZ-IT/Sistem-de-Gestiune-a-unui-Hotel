
import { Link } from "react-router-dom";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./RezervareCard.module.css";

export default function RezervareCard({ rezervare, onToggle, onDelete }) {
  return (
    <li
      className={`${styles.card} ${rezervare.efectuat ? styles.done : ""}`}
      data-testid="item"
      data-id={rezervare.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={rezervare.efectuat}
          onChange={() => onToggle(rezervare.id)}
          aria-label={`Check-in pentru ${rezervare.titlu}`}
          data-testid="item-toggle"
        />

        <div className={styles.info}>
          <Link
            to={`/rezervari/${rezervare.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {rezervare.titlu}
          </Link>

          <span className={`badge badge-${rezervare.tip}`}>
            Camera {ETICHETE_TIP[rezervare.tip]}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(rezervare.id)}
        aria-label={`Sterge ${rezervare.titlu}`}
        data-testid="item-delete"
      >
        Sterge
      </button>
    </li>
  );
}
