import { useState, useEffect } from "react";

function ShoppingCart() {

    const [products, setProducts] = useState([
        { id: 1, name: "Keyboard", price: 50 },
        { id: 2, name: "Mouse", price: 30 },
        { id: 3, name: "Monitor", price: 200 }
    ]);

    const [total, setTotal] = useState(0);

    useEffect(() => {

        const calculatedTotal = products.reduce(
            (sum, product) => sum + product.price,
            0
        );

        setTotal(calculatedTotal);

    }, [products]);

    return (
        <div>
            <h2>Shopping Cart</h2>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>

            <h3>Total: ${total}</h3>

            <button onClick={() => setProducts([ ...products, { id: 4,name: "Headphones", price: 80}]) }>
                Add Headphones
            </button>
        </div>
    );
}

export default ShoppingCart;