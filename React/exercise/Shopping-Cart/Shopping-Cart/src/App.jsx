import React, { useState } from "react";

// Test data - Do not modify
const items = [
    { id: 1, name: "T-shirt", price: 20, onSale: true },
    { id: 2, name: "Jeans", price: 50, onSale: false },
    { id: 3, name: "Socks", price: 5, onSale: true },
    { id: 4, name: "Hat", price: 15, onSale: false },
    { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
    const [onSaleOnly, setOnSaleOnly] = useState(false);

    const filteredItems = onSaleOnly ? items.filter((item) => item.onSale) : items;

    return (
        <>
        <div className="container mt-3">
            <h1>Shopping Cart</h1>

            <button className="btn btn-primary m-2" onClick={() => setOnSaleOnly(!onSaleOnly)}>
                {onSaleOnly ? "Show All Items" : "Show Sale Items Only"}
            </button>

            <ul className="list-group">
                {filteredItems.map((item) => (
                    <li key={item.id} className="list-group-item d-flex align-items-center m-2 py-3">
                        <strong>{item.name}</strong>
                        {item.onSale && <span className="badge bg-danger ms-2 p-2">On Sale!</span>}
                        <strong className="ms-auto">${item.price}</strong>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default App;
