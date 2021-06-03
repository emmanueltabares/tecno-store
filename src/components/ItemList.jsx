import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Item from "./Item";
import data from "../data/data.json";

import "../css/spinner.css";

export default function ItemList() {

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
            setProducts(res.filter(i => i.productos.category === catId));
            setLoader(false);
          })
        : getItems.then(res => {
            setProducts(res);
            setLoader(false);
          });
    }, [catId]);
     
    return (

      <>
        {loader && 
        <div className="spinner">
            <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
            </div>
            <p>Cargando...</p>
        </div>}
        {!loader && <Item products={products}/> }
      </>

      
    )
}
