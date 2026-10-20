import { getAllProducts } from "../services/productService";
import { Link } from "react-router";
import { useState, useEffect } from "react";

function AllProducts() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await getAllProducts();
    setProducts(response);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div >
      <h1>All the products</h1>

      {products.map((oneProduct) => (
        <div className="product-card" key={oneProduct._id}>
          <p>Title: {oneProduct.title}</p>
          <Link to={`/products/${oneProduct._id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
