import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const DisplaySmartWatches = () => {
    const data = useLoaderData()
    const watches = data.filter(watch => watch.category === "Smartwatches")
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 sm:gap-4'>
            {
                watches.map(watch => <Product product={watch} key={watch.product_id}></Product>)
            }
        </div>
    );
};

export default DisplaySmartWatches;