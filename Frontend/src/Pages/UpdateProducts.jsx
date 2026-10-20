import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateProduct, getProductById } from "../services/productService";

function UpdateProducts() {
  const [formData, setFromData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  async function fetchProductsDetails() {
    const response = await getProductById(id);
    setFromData(response);
  }
  function handleChange(event) {
    setFromData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formattedData = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    };

    try {
    await updateProduct(id, formattedData);
    navigate(`/products/${id}`);
    } catch (error) {
      console.log("error" , error)
    }
   
  }

  useEffect(() => {
    fetchProductsDetails();
  }, [id]);
  return (
    <div className="updateTheProducts">
      <h1>Update Product</h1>
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

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        />

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

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProducts;
