import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createProduct } from "../services/productService";

function CreateProducts() {
  const [formData, setFromData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setFromData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
   
    try {
      const response = await createProduct(formData);
      navigate(`/products/${response._id}`);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="CreateProducts">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="category">category: </label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="electronics">electronics</option>
          <option value="food">food</option>
          <option value="clothing">clothing</option>
          <option value="furniture">furniture</option>
          <option value="other">other</option>
        </select>

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProducts;
