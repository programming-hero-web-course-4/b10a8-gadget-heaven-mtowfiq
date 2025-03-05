import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const DisplayLaptops = () => {
    const data = useLoaderData()
    const laptops = data.filter(laptop => laptop.category === "Laptops")
    console.log(laptops)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 sm:gap-4'>
            {
                laptops.map(laptop => <Product product={laptop} key={laptop.product_id}></Product>)
            }
        </div>
    );
};

export default DisplayLaptops;