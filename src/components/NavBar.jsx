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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">TecnoStore</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

            {categories?.map(cat => 
              <NavLink to={cat.adress}>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">{cat.text}</a>
                </li>
              </NavLink>
              )}

            </ul> 

            <nav className="nav-widgets">
              <li class="nav-item" className="cart-widget">
                  <a class="nav-link"> 
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