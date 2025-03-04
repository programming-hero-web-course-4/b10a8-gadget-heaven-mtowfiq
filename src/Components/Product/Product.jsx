import React from 'react';

const Product = ({product}) => {
    const {product_id, product_title, product_image, price} = product
    return (
        <div className='p-5 bg-gray-100 rounded-2xl'>
            <div>
                <img src={product_image} alt="" />
            </div>
            <h3 className='mt-6 mb-3'>{product_title}</h3>
            <p className='mb-4'>{price}</p>
            <button className='text-purple py-3 px-6 border rounded-4xl'>View Details</button>
        </div>
    );
};

export default Product;