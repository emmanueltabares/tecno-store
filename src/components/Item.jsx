import React from "react";

const Item = ({ categories }) => {
    return (
        <div>
    <ul>
        {categories.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    );
}

export default Item;