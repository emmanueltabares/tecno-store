import React from "react";
import "../css/itemDetail.css";

const ItemDetail = () => {

    return (

        <>
            <div class="card">
                <img className="img" src={image} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><b>Nombre</b></h5>
                    <h6>Precio</h6>
                </div>
            </div>
        </>
    ); 
}

export default ItemDetail;






