import { Router } from "express";
import { parseId, valideazaRezervare } from "../validation.js";

const router = Router();

// Etapa 9: datele stau in memorie si se pierd la repornire (Etapa 10 le muta in MariaDB)
let rezervari = [
  { id: 1, titlu: "Emma Davis - Cam. 210", efectuat: true, tip: "double" },
  { id: 2, titlu: "Rares - Cam 225", efectuat: true, tip: "single" },
  { id: 3, titlu: "Rares - 250", efectuat: false, tip: "single" },
];
let nextId = 4;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = rezervari.findIndex((r) => r.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Rezervarea nu exista" });
    return -1;
  }
  return index;
}

// GET /rezervari
router.get("/", (req, res) => {
  res.json(rezervari);
});

// GET /rezervari/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(rezervari[index]);
});

// POST /rezervari
router.post("/", (req, res) => {
  const { erori, date } = valideazaRezervare(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const rezervare = { id: nextId++, ...date };
  rezervari.push(rezervare);
  res.status(201).json(rezervare);
});

// PATCH /rezervari/:id
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  const { erori, date } = valideazaRezervare(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  rezervari[index] = { ...rezervari[index], ...date };
  res.json(rezervari[index]);
});

// DELETE /rezervari/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  rezervari.splice(index, 1);
  res.status(204).end();
});

export default router;