import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const DisplayLaptops = () => {
    const data = useLoaderData()
    const laptops = data.filter(laptop => laptop.category === "Laptops")
    console.log(laptops)
    return (
        <div>
            <p>Laptops</p>
            {
                laptops.map(laptop => <Product product={laptop} key={laptop.product_id}></Product>)
            }
        </div>
    );
};

export default DisplayLaptops;