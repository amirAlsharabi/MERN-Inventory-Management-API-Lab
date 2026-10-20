import React from "react";
import { getProductById, deleteProduct } from "../services/productService";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  async function fetchProductById() {
    const response = await getProductById(id);
    setProduct(response);
  }
  useEffect(() => {
    fetchProductById();
  }, [id]);

  async function handleDelete() {
    try {
      await deleteProduct(id);
      navigate("/products");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>

      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>quantity: ${product.quantity}</p>

          <Link to={`/products/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <button className="btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
