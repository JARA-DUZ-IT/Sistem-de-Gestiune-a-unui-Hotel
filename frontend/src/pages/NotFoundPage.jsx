
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={`panel ${styles.notFound}`} data-testid="not-found">
      <h2>404</h2>
      <p>Pagina pe care o cauti nu exista.</p>
      <Link to="/">Inapoi la pagina principala</Link>
    </section>
  );
}
