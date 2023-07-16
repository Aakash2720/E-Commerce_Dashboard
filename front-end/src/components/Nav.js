import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const auth = localStorage.getItem("user");

  const nav = useNavigate();
  const logout = () => {
    localStorage.clear();
    nav("/signup");
  };
  return (
    <div>
      <img
        alt="logo"
        className="img-logo"
        src="https://assets-global.website-files.com/62b33d4be1f1d9e3d9bb1e64/63075a5aa7a2f7b6d9ceb626_Innovative%20E-Commerce%20Website%20Design%20Ideas.jpg"
      ></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          {/* <li>
            <Link to="/update">Update Product</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul align-right">
          <li>
            <Link to="/signup">Sign UP</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
export default Nav;
