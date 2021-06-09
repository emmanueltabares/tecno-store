import React from "react";
import "../css/itemDetail.css";

const ItemDetail = ({ products }) => {

    return (

        <>
            {products.map(item => (
                <div class="card" key={item.id}>
                    <img className="img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title"><b>{item.title}</b></h5>
                        <h6>{item.description}</h6>
                    </div>
                </div>
                    )
                )} 
        </>
    ); 
}

export default ItemDetail;








