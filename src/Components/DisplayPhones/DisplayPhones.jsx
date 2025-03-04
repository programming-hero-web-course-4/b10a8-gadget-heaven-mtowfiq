import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const DisplayPhones = () => {
    const data = useLoaderData()
    const phones = data.filter(phone => phone.category === "Smartphones")
    console.log(phones)
    return (
        <div>
            <h3>Phones</h3>
            {
                phones.map(phone => <Product key={phone.product_id} product={phone}></Product>)
            }
        </div>
    );
};

export default DisplayPhones;