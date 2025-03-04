import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const DisplaySmartWatches = () => {
    const data = useLoaderData()
    const watches = data.filter(watch => watch.category === "Smartwatches")
    return (
        <div>
            <p>SmartWatches</p>
            {
                watches.map(watch => <Product product={watch} key={watch.product_id}></Product>)
            }
        </div>
    );
};

export default DisplaySmartWatches;