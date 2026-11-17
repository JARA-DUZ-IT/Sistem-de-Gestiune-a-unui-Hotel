import styles from "./DesprePage.module.css";

export default function DesprePage() {
  return (
    <section className={`panel ${styles.about}`}>
      <h2>Despre HotelFlow</h2>

      <p>
        HotelFlow este o aplicatie web pentru gestionarea rezervarilor
        unui hotel.
      </p>

      <p>
        Aplicatia permite administrarea rezervarilor, vizualizarea
        detaliilor acestora si gestionarea statusului de check-in.
      </p>

      <h3>Functionalitati</h3>
      <ul>
        <li>Afisarea listei de rezervari</li>
        <li>Adaugarea unei rezervari noi</li>
        <li>Marcarea check-in-ului ca efectuat</li>
        <li>Stergerea rezervarilor</li>
        <li>Vizualizarea detaliilor fiecarei rezervari</li>
      </ul>
    </section>
  );
}
