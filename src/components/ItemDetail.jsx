import React from "react";
import ItemCount from "./ItemCount";
import "../css/itemDetail.css";


const ItemDetail = ({ products }) => {

    return (

        <>
            {products.map(item => (
                <>
                    <div class="card" key={item.id}>
                        <img className="img" src={item.picture} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><b>{item.title}</b></h5>
                            <h6>{item.description}</h6>
                            <p className="card-price">${item.price}</p>
                        </div>
                    </div> 
                    <ItemCount stock={item.stock} title={item.title} initial="1" picture={item.picture} price={item.price} />
                </>
                    )
                )} 
        </>
    ); 
}

export default ItemDetail;
