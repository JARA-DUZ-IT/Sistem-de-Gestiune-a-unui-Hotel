const ETICHETE_TIP = { single: "Single", double: "Double", suite: "Suite" };

export default function RezervareCard({ rezervare }) {
  return (
    <li className={rezervare.efectuat ? "rezervare-card done" : "rezervare-card"}>
      <div>
        <h3>{rezervare.titlu}</h3>
        <span className={`badge badge-${rezervare.tip}`}>
          Cameră {ETICHETE_TIP[rezervare.tip]}
        </span>
      </div>
      <span className="status">{rezervare.efectuat ? "Efectuat" : "În așteptare"}</span>
    </li>
  );
}