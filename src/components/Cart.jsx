import React, { useEffect, useState, useContext } from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {

  const { cart }= useCart()
  console.log(cart)
  console.log(cart.addedItems)

  return (
    <>

        <div>
          {cart.addedItems?.map(item => (
            <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={item.picture} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.price}</p>
                  <p class="card-text"><small class="text-muted">{item.counter}</small></p>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>

      
    </>
  )
}

export default Cart;