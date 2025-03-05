import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const DisplayPhones = () => {
    const data = useLoaderData()
    const phones = data.filter(phone => phone.category === "Smartphones")
    console.log(phones)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 sm:gap-4'>
            {
                phones.map(phone => <Product key={phone.product_id} product={phone}></Product>)
            }
        </div>
    );
};

export default DisplayPhones;