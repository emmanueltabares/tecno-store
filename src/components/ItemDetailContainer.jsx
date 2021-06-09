import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import data from "../data/data.json"

const ItemDetailContainer = () => {


  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { itemId } = useParams();

    useEffect(() => {
      const getItems = new Promise(resolve => {
        setLoader(true);
        setTimeout(() => {
          resolve(data.productos);
        }, 1000);
      });
  
      itemId
        ? getItems.then(res => {
            setProducts(res.filter(i => i.id === itemId));
            setLoader(false);
          })
        : getItems.then(res => {
            setProducts(res);
            setLoader(false);
          });
    }, [itemId]);


    return (
        <>
            {loader && 
            <div className="spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p>Cargando...</p>
            </div>}
            {!loader && <ItemDetail products={products} />}
        </>
    );
}

export default ItemDetailContainer;