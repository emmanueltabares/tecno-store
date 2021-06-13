import React from "react";
import ItemCount from "./ItemCount";
import "../css/itemDetail.css";

const onAdd = (value, setButton) => {
    console.log(`Agregar al carrito ${value} Notebooks`);
    setButton("Finalizar Compra");
}

const ItemDetail = ({ products }) => {

    return (

        <>
            {products.map(item => (
                <>
                    <div class="card" key={item.id}>
                        <img className="img" src={item.picture} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"><b>{item.title}</b></h5>
                            <h6>{item.description}</h6>
                        </div>
                    </div> 
                    <ItemCount stock={item.stock} title={item.title} initial="1" onAdd={onAdd} />
                </>
                    )
                )} 
        </>
    ); 
}

export default ItemDetail;
