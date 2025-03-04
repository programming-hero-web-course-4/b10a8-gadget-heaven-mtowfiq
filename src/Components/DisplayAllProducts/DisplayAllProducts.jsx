import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const DisplayAllProducts = () => {
    const data = useLoaderData()
    return (
        <div>
            <p>All Products</p>
            {
                data.map(product => <Product product={product} key={product.product_id}></Product>)
            }
        </div>
    );
};

export default DisplayAllProducts;