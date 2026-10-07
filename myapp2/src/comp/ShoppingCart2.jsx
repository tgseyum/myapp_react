import { useState } from "react";
function ShoppingCart2() {
const [products] = useState([
    { id: 1, name: "Keyboard", price: 50 },
    { id: 2, name: "Mouse", price: 30 },
    { id: 3, name: "Monitor", price: 200 }
]);
const [cart, setCart] = useState([]);

function addToCart(product) {
    setCart([...cart, product]);
}

const total = cart.reduce((sum, product) => sum + product.price,   0);

return (
    <div>
        <h2>Shopping Cart</h2>
        {products.map(product => (
            <p key={product.id}>
                {product.name} - ${product.price}  {" "}
                <button onClick={() => addToCart(product)}>
                    Add
                </button>
            </p>
        ))}

        <h3>Cart</h3>
        {cart.length > 0 ? (
            <ul>
                {cart.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        ) : (
            <p>Your cart is empty.</p>
        )}

        <p>Cart Total: ${total}</p>

    </div>
);


}

export default ShoppingCart2;