import React from "react";
import { useState } from 'react';
import "../css/itemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(parseInt(initial));

    const changeCounter = (value) => {
        if((counter + value) < parseInt(initial) || (counter + value) > parseInt(stock)) {
            setCounter(counter);
        } else {
            setCounter(counter + value)
        }

    }

  return (
    <>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><b>Notebook Dell I5</b></h5>
                <h6>Stock: {stock}</h6>
                <div className="item-body">
                    <label htmlFor="item-count">
                        <h2 className="input-counter"> Cantidad: {counter} </h2>
                        <button class="btn btn-light btn-count" onClick={() => changeCounter(-1)}> - </button>
                        <button class="btn btn-light btn-count" onClick={() => changeCounter(1)}> + </button>
                    </label>
                </div>
                <a href="#" class="btn btn-light btn-on-add" onClick={() => onAdd(counter)}>Agregar al carrito</a>
            </div>
        </div>
    </>
  );
};

export default ItemCount;
