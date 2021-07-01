import React, { useContext } from "react";
import { useState } from 'react';
import { useCart } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";

import "../css/itemCount.css";

const ItemCount = ({title, stock, picture, price, initial}) => {

    const [counter, setCounter] = useState(parseInt(initial));
    const cart = useCart()

    console.log(cart)

    const changeCounter = (value) => {
        if((counter + value) < parseInt(initial) || (counter + value) > parseInt(stock)) {
            setCounter(counter);
        } else {
            setCounter(counter + value)
        }
    }

    const addToCart = (title, picture, price, counter) => {
        console.log(title)
        cart.addItem({title, picture, price, counter})
    }

  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"><b>{title}</b></h5>
                <h6>Stock: {stock}</h6>
                <div className="item-body">
                    <label htmlFor="item-count">
                        <input className="input-counter" value={counter} />
                        <button className="btn btn-light btn-count" onClick={() => changeCounter(-1)}> - </button>
                        <button className="btn btn-light btn-count" onClick={() => changeCounter(1)}> + </button>
                    </label>
                </div>
                    <button className="btn btn-light btn-on-add" onClick={() => addToCart(title, picture, price, counter)}>Agregar al carrito</button>
                    <NavLink to={"/Cart"}>
                        <button className="btn btn-light btn-on-add">Finalizar compra</button>
                    </NavLink>
            </div>
        </div>
    </>
  );
};

export default ItemCount;
