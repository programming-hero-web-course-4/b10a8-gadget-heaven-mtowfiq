import React from 'react';

const DisplayCart = ({item}) => {
    const {product_image, price, product_title, description} = item
    return (
        <div className='p-8 bg-gray-100 flex items-center gap-8 mb-6 rounded-2xl'>
            <div>
                <img className='rounded-xl' src={product_image} alt="" />
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold text-2xl'>{product_title}</h2>
                    <button><img className='w-1/3 border border-red-300 rounded-4xl' src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000" alt="" /></button>
                </div>
                <p className='text-lg mt-3 mb-4 text-gray-500'>{description}</p>
                <p className='text-xl font-semibold'>Price: $ {price}</p>
            </div>
        </div>
    );
};

export default DisplayCart;