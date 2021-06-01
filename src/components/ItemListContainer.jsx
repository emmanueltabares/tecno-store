import React from "react";
/* import ItemCount from './ItemCount'; */
import ItemList from "./ItemList";

/*
const onAdd = (value) => {
    console.log(`Agregar al carrito ${value} Notebooks`)
}*/

const ItemListContainer = () => {
    return (
        /*
            Componente contador de items

            <div>
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
            </div>*/
        

        <div>
            <ItemList />
        </div>
    );
}

export default ItemListContainer;