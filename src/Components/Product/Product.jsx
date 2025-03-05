import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {product_id, product_title, product_image, price} = product
    return (
        <div className='p-5 bg-gray-100 rounded-2xl'>
            <div>
                <img src={product_image} alt="" />
            </div>
            <h3 className='mt-6 mb-3 font-semibold text-2xl'>{product_title}</h3>
            <p className='mb-4 text-gray-500 font-medium text-xl'>{price}</p>
            <Link to={`products/${product_id}`}><button className='text-purple py-3 px-6 border rounded-4xl text-lg'>View Details</button></Link>
        </div>
    );
};

export default Product;