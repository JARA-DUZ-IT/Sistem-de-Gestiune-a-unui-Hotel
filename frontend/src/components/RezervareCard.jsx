const ETICHETE_TIP = { single: "Single", double: "Double", suite: "Suite" };

export default function RezervareCard({ rezervare, onToggle, onDelete }) {
  return (
    <li className={rezervare.efectuat ? "rezervare-card done" : "rezervare-card"}>
      <label className="rezervare-main">
        <input
          type="checkbox"
          checked={rezervare.efectuat}
          onChange={() => onToggle(rezervare.id)}
        />
        <div>
          <h3>{rezervare.titlu}</h3>
          <span className={`badge badge-${rezervare.tip}`}>
            Cameră {ETICHETE_TIP[rezervare.tip]}
          </span>
        </div>
      </label>
      <button 
        className="btn-danger" 
        onClick={() => onDelete(rezervare.id)}
        aria-label={`Șterge ${rezervare.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}