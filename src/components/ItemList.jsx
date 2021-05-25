/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList() {

    const articles = [{
        id: 1,
        title: "Notebook Dell I5",
        description: "lorem ipsum lorem ipsum",
        stock: 5,
        price: 110.000
    },
    {
        id: 2,
        title: "Notebook Dell I7",
        description: "lorem ipsum lorem ipsum",
        stock: 10,
        price: 130.000
    },
    {
        id: 3,
        title: "Notebook Lenovo I3",
        description: "lorem ipsum lorem ipsum",
        stock: 20,
        price: 125.000
    },
    {
        id: 4,
        title: "Notebook Lenovo I5",
        description: "lorem ipsum lorem ipsum",
        stock: 8,
        price: 140.000
    }]

    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        const task = new Promise((resolve) => {
            setTimeout(() => {
                resolve(articles);
            }, 3000)
        });
        task.then((data) => {
            console.log(data)
            setProducts(data)
            }
        )
    }, []);



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
