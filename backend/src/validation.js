export const TIPURI_CAMERA = ["single", "double", "suite"];
const TITLU_MAX = 100;

export function valideazaRezervare(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.tip !== undefined) {
    const t = body.tip ?? "single";
    if (!TIPURI_CAMERA.includes(t)) {
      erori.push(`tip trebuie sa fie una din: ${TIPURI_CAMERA.join(", ")}`);
    } else {
      date.tip = t;
    }
  }

  if (body.efectuat !== undefined) {
    if (typeof body.efectuat !== "boolean") {
      erori.push("efectuat trebuie sa fie true sau false");
    } else {
      date.efectuat = body.efectuat;
    }
  } else if (!partial) {
    date.efectuat = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}