/* eslint-disable array-callback-return */
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
/* import Item from "./Item"; */

/* import data from "../data/data.json"; */

export default function ItemList() {


     const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("../data/data.json")
        .then(function(response){
            return response.json();
          })
          .then(function(items){
            setProducts(items)
          });
      }, [])

    return (
        <div>
            {products?.map((product) => {
                <li
                    key={product.id}>
                    {product.title} 
                </li>
            })}
        </div>
    )
 



    /* const [categories, setCategories] = useState([]); 

  useEffect(() => {

    fetch("https://api.mercadolibre.com/sites/MLA/categories")
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        setCategories(data)
      });

  }, [])

  return (
    <div>
        <Item categories={categories}/>
    </div>
  ); */
}
