import { useState, useEffect } from "react";

function ShoppingCart3() {


const [products, setProducts] = useState([
    { id: 1, name: "Keyboard", price: 50 },
    { id: 2, name: "Mouse", price: 30 },
    { id: 3, name: "Monitor", price: 200 }
]);

const [name, setName] = useState("");
const [price, setPrice] = useState("");

const [total, setTotal] = useState(0);

useEffect(() => {

    const calculatedTotal = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    setTotal(calculatedTotal);

}, [products]);

function addProduct(e) {

    e.preventDefault();

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: Number(price)
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
}

return (
    <div>

        <h2>Shopping Cart</h2>

        <form onSubmit={addProduct}>

            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Product name"
            />

            <input
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Price"
                type="number"
            />

            <button type="submit">
                Add Product
            </button>

        </form>

        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                </li>
            ))}
        </ul>

        {products.length > 0 ? (
            <h3>Total: ${total}</h3>
        ) : (
            <p>No products available.</p>
        )}

    </div>
);


}

export default ShoppingCart3;