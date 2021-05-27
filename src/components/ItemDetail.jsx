import React from "react";

const ItemDetail = ({title, description, stock, price}) => {
    return (
        <div class="card">
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    );
}

export default ItemDetail;