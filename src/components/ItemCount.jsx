import React from "react";
import { useState } from 'react';
import "../css/itemCount.css";

const ItemCount = ({title, stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(parseInt(initial));
    const [button, setButton] = useState("Agregar al carrito");

    const changeCounter = (value) => {
        if((counter + value) < parseInt(initial) || (counter + value) > parseInt(stock)) {
            setCounter(counter);
        } else {
            setCounter(counter + value)
        }

    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setButton("Finalizar compra");
    }

  return (
    <>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><b>{title}</b></h5>
                <h6>Stock: {stock}</h6>
                <div className="item-body">
                    <label htmlFor="item-count">
                        <input onChange={handleChange} className="input-counter" value={counter} />
                        <button class="btn btn-light btn-count" onClick={() => changeCounter(-1)}> - </button>
                        <button class="btn btn-light btn-count" onClick={() => changeCounter(1)}> + </button>
                    </label>
                </div>
                <button class="btn btn-light btn-on-add" onClick={() => onAdd(counter)}>{button}</button>
            </div>
        </div>
    </>
  );
};

export default ItemCount;
