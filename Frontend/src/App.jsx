import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Homepage from "./Pages/HomePage";
import AllProducts from "./Pages/AllProducts";
import CreateProduct from "./Pages/CreateProducts";
import ProductDetails from "./Pages/ProductDetails";
import UpdateProduct from "./Pages/UpdateProducts";
import "./App.css";
function App() {
  return (
    <div className="container">
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/:id/edit" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
