import RezervareCard from "./RezervareCard.jsx";

export default function RezervareList({ rezervari }) {
  if (rezervari.length === 0) {
    return <p className="empty">Nu există nicio rezervare.</p>;
  }

  return (
    <ul className="rezervare-list">
      {rezervari.map((rezervare) => (
        <RezervareCard key={rezervare.id} rezervare={rezervare} />
      ))}
    </ul>
  );
}