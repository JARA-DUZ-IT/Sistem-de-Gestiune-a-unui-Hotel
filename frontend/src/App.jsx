
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import RezervariPage from "./pages/RezervariPage.jsx";
import RezervareDetaliuPage from "./pages/RezervareDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RezervariPage />} />
        <Route
          path="rezervari/:id"
          element={<RezervareDetaliuPage />}
        />
        <Route path="despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
