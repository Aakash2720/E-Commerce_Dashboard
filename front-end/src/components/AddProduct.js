import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const addProduct = async () => {
    //validation
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);
    const UserId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, UserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };

  return (
    <div className="login">
      <h1>AddProduct</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid_input">Enter valid name</span>
      )}
      <input
        type="text"
        placeholder="Enter product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && (
        <span className="invalid_input">Enter valid price</span>
      )}
      <input
        type="text"
        placeholder="Enter product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid_input">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter product company"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid_input">Enter valid company</span>
      )}
      <button type="button" className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
