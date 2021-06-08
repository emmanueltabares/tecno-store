import React from "react";
import { NavLink } from "react-router-dom";
import "../css/item.css";

const Item = ({ products }) => {
    return (
      <div className="div-cards">
          {products.map(item => (
           
          <div class="card" key={item.id}>
              
            <div class="card-body">
                <img src={item.picture} class="d-block w-100" alt="" />
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <p class="card-price">${item.price}</p>
                <NavLink to={`/itemDetail/${item.id}`} activeClassName="active">
                  <a href="#" className="btn btn-primary mb-3">Ver detalle</a>
                </NavLink>
            </div>
          </div>

          ))}
      </div>
    );
}

export default Item;