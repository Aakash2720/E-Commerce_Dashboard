import "./App.css";
import AddProduct from "./components/AddProduct";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComp from "./components/PrivateComp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Welcome to logout page</h1>} />
            <Route path="/profile" element={<h1>Welcome to profile page</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
