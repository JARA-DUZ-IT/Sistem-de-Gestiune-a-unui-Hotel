
import RezervareCard from "./RezervareCard.jsx";
import styles from "./RezervareList.module.css";

export default function RezervareList({
  rezervari,
  onToggle,
  onDelete,
}) {
  if (rezervari.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu exista nicio rezervare.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {rezervari.map((rezervare) => (
        <RezervareCard
          key={rezervare.id}
          rezervare={rezervare}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
