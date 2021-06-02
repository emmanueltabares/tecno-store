import React from "react";
import { useState, useEffect } from "react";

export default function ItemList() {

     const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("data.json")
        .then(function(response){
            return response.json();
          })
          .then(function(items){
            setProducts(items.productos)
          });
      }, [])

    return (
        
        <div>
            {products?.map((product) => 

              
                <li
                    key={product.id}>
                    {product.title}
                    {product.description}
                </li>
            )}

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
