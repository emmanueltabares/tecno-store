import React from "react";
import ItemCount from './ItemCount';

const onAdd = (value) => {
    console.log(`Agregar al carrito ${value} Notebooks`)
}

const ItemListContainer = () => {
    return (
        <div>
            <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;