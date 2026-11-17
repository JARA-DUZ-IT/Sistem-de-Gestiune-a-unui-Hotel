
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function navClass({ isActive }) {
  return isActive
    ? `${styles.link} ${styles.active}`
    : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.themeToggle}
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod intunecat"}
        </button>

        <div className={styles.inner}>
          <div>
            <span className={styles.logo}>HotelFlow</span>
            <p className={styles.subtitle}>
              Gestioneaza check-in-urile si tipurile de camere.
            </p>
          </div>

          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Rezervari
            </NavLink>

            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        HotelFlow - Proiect Tehnologii Web
      </footer>
    </>
  );
}
