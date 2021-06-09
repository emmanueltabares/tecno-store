import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import data from "../data/data.json";
/* import ItemCount from './ItemCount'; */
import ItemList from "./ItemList";

import "../css/spinner.css";

/*
const onAdd = (value) => {
    console.log(`Agregar al carrito ${value} Notebooks`)
}*/

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();

    useEffect(() => {
      const getItems = new Promise(resolve => {
        setLoader(true);
        setTimeout(() => {
          resolve(data.productos);
        }, 1000);
      });
  
      catId
        ? getItems.then(res => {
            setProducts(res.filter(i => i.category === catId));
            setLoader(false);
          })
        : getItems.then(res => {
            setProducts(res);
            setLoader(false);
          });
    }, [catId]);

    return (
        /*
            Componente contador de items

            <div>
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
            </div>*/
        

            <>
            {loader && 
            <div className="spinner">
                <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                </div>
                <p>Cargando...</p>
            </div>}
            {!loader && <ItemList products={products}/> }
          </>
    );
}

export default ItemListContainer;