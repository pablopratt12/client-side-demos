import React, { useState } from "react";
import Item from "./Item";
import itemsData from "./data";

function App() {
    const [items, setItems] = useState(itemsData);

    const updateItem = (id, newValue) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, value: newValue } : item
        ));
    };

    return (
        <div>
            <h1>Interactive List</h1>
            <p>Edit the values below:</p>
            {items.map((item) => (
                <Item key={item.id} item={item} updateItem={updateItem} />
            ))}
        </div>
    );
}

export default App;
