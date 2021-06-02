import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [detail, setDetails] = useState(null)

    return (

        <ItemDetail />
    );
}

export default ItemDetailContainer;