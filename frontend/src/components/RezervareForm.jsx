import { useState } from "react";
import { TIPURI_CAMERA } from "../constants.js";
import styles from "./RezervareForm.module.css";

const TITLU_MAX = 100;

export default function RezervareForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [tip, setTip] = useState("single");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();

    if (t === "") {
      return "Numele rezervarii este obligatoriu.";
    }

    if (t.length > TITLU_MAX) {
      return `Numele rezervarii poate avea maximum ${TITLU_MAX} caractere.`;
    }

    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const mesaj = valideaza();

    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({
        titlu: titlu.trim(),
        tip,
        efectuat: false,
      });

      setTitlu("");
      setTip("single");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label className={styles.field}>
        Nume rezervare
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: John Smith - Cam. 105"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label className={styles.field}>
        Tip camera
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          data-testid="form-tip"
        >
          {TIPURI_CAMERA.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button
        className={styles.submit}
        type="submit"
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salveaza..." : "Adauga rezervarea"}
      </button>
    </form>
  );
}
