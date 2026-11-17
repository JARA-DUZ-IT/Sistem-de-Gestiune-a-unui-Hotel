
export const TIPURI_CAMERA = [
  { value: "single", label: "Single" },
  { value: "double", label: "Double" },
  { value: "suite", label: "Suite" },
];

export const ETICHETE_TIP = Object.fromEntries(
  TIPURI_CAMERA.map((tip) => [tip.value, tip.label])
);
