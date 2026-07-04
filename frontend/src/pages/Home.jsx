import { useEffect, useState } from "react";
import api from "../api/api";

function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProducts() {

            try {

                const response = await api.get("/products");

                setProducts(response.data.data);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        }

        fetchProducts();

    }, []);

    if (loading)
        return <h2>Loading...</h2>;

    return (

        <div>

            <h1>CloudMart</h1>

            {products.map(product => (

                <div key={product.id}>

                    <h3>{product.name}</h3>

                    <p>₹ {product.price}</p>

                </div>

            ))}

        </div>

    );

}

export default Home;