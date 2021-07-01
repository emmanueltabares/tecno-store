import React from "react";
import CartWidget from "./CartWidget";
import "../css/cartWidget.css";
import { NavLink } from "react-router-dom";

const categories = [
  { adress: "/", text: "Home" },
  { adress: "/category/computadoras", text: "Computadoras" },
  { adress: "/category/celulares", text: "Celulares" },
  { adress: "/category/audio", text: "Audio"}
]; 

const NavBar = () => {
 
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink to="/">
              <a className="navbar-brand" href="#">TecnoStore</a>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

            {categories?.map(cat => 
              <NavLink to={cat.adress}>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{cat.text}</a>
                </li>
              </NavLink>
              )}

            </ul> 

            <nav className="nav-widgets">
              <li className="nav-item" className="cart-widget">
                  <a className="nav-link"> 
                    <CartWidget />
                  </a>
              </li>
            </nav>
          </div>
          </div>
        </nav>    
      </>
    );
}

export default NavBar;