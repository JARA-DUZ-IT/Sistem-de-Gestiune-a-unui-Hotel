const rezervari = [
  { id: 1, titlu: "Alice Smith - Cam. 101", efectuat: false, tip: "single" },
  { id: 2, titlu: "Bob Johnson - Cam. 205", efectuat: true, tip: "double" },
  { id: 3, titlu: "Charlie Brown - Cam. 301", efectuat: false, tip: "suite" }
];

const TIPURI = ["single", "double", "suite"];

function listeazaTitluri(lista) {
  return lista.map((r) => r.titlu);
}

function numaraInAsteptare(lista) {
  return lista.filter((r) => !r.efectuat).length;
}

function cautaDupaTitlu(lista, text) {
  return lista.filter((r) => r.titlu.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
  return lista.reduce((max, r) => Math.max(max, r.id), 0) + 1;
}

function adaugaRezervare(lista, titlu, tip = "single") {
  const titluCurat = titlu.trim();
  
  if (!titluCurat) {
    console.log("Titlul nu poate fi gol.");
    return lista;
  }
  
  if (!TIPURI.includes(tip)) {
    console.log("Tip de cameră invalid:", tip);
    return lista;
  }
  
  const nouaRezervare = {
    id: nextId(lista),
    titlu: titluCurat,
    efectuat: false, 
    tip: tip
  };
  
  return [...lista, nouaRezervare];
}

function comutaEfectuat(lista, id) {
  return lista.map((r) => 
    r.id === id ? { ...r, efectuat: !r.efectuat } : r
  );
}

function stergeRezervare(lista, id) {
  return lista.filter((r) => r.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(rezervari).join(", "));
console.log("În așteptare:", numaraInAsteptare(rezervari));
console.log("Căutare 'alice':", listeazaTitluri(cautaDupaTitlu(rezervari, "alice")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaRezervare(rezervari, "Diana Prince - Cam. 402", "suite");
console.log("Lista nouă:", lista.length, "rezervări");
console.log("Originalul a rămas cu:", rezervari.length, "rezervări");

console.log("--- Modificare și ștergere ---");
lista = comutaEfectuat(lista, 1);
console.log("După check-in id 1, în așteptare:", numaraInAsteptare(lista));
lista = stergeRezervare(lista, 3);
console.log("După ștergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaRezervare(lista, "   ", "single");
adaugaRezervare(lista, "EroareTest", "penthouse");