import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setcategory(result.category);
    setcompany(result.company);

    console.warn(result);
  };
  const updateProduct = async () => {
    //validation
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
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
      <h1>UpdateProduct</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product company"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      />

      <button type="button" className="appButton" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
}

export default UpdateProduct;
