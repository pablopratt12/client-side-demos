import React, { useState } from "react";

function Item({ item, updateItem }) {
    const [newValue, setNewValue] = useState(item.value);

    return (
        <div>
            <p>{item.name}: {item.value}</p>
            <input 
                type="text" 
                value={newValue} 
                onChange={(e) => setNewValue(e.target.value)}
            />
            <button onClick={() => updateItem(item.id, newValue)}>Update</button>
        </div>
    );
}

export default Item;


  