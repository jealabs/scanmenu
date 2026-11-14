import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealDetail from "./assets/pages/MealDetail.tsx";
import CartPage from "./assets/pages/CartPage.tsx";
import CheckoutPage from "./assets/pages/CheckoutPage.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  </>,
);
