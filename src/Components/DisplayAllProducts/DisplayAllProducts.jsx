import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const DisplayAllProducts = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 sm:gap-4'>
            {
                data.map(product => <Product product={product} key={product.product_id}></Product>)
            }
        </div>
    );
};

export default DisplayAllProducts;