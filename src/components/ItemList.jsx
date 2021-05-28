/* eslint-disable array-callback-return */
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

const articles = [{
    "id": 1,
    "title": "Notebook Dell I5",
    "description": "lorem ipsum lorem ipsum",
    "stock": 5,
    "price": 110.000
},
{
    "id": 2,
    "title": "Notebook Dell I7",
    "description": "lorem ipsum lorem ipsum",
    "stock": 10,
    "price": 130.000
},
{
    "id": 3,
    "title": "Notebook Lenovo I3",
    "description": "lorem ipsum lorem ipsum",
    "stock": 20,
    "price": 125.000
},
{
    "id": 4,
    "title": "Notebook Lenovo I5",
    "description": "lorem ipsum lorem ipsum",
    "stock": 8,
    "price": 140.000
}]

export default function ItemList() {


    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("../data/data.json")
          .then(response => response.json())
          .then(data => setProducts(data)
          );
    
      }, [])

    return (
        <div>
            {products?.map((product) => {
                <Item
                    key={product.id}
                    title={product.title} 
                    description={product.description}
                    stock={product.stock}
                    price={product.price}
                />
            })}
        </div>
    )
}
