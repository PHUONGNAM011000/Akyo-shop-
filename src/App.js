import { Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Introduction from "./pages/Introduction/Introduction";
import ShowProduct from "./pages/Product.js/ShowProduct";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/introduction" />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/showproduct" element={<ShowProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
