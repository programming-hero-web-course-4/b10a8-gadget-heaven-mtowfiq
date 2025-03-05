import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const {product_id} = useParams()
    const productIdInt = parseInt(product_id)

    const product = data.find(data => data.product_id === productIdInt)
    const {product_id: currentProductId, product_image, product_title, price, availabilty, description, Specification, rating} = product
    // console.log(product)
    return (
        <div>
            <div className='bg-purple pt-8 px-10 text-white'>
                <h2 className='font-bold text-4xl text-center'>Product Details</h2>
                <p className='mt-4 mb-8 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='p-8 max-w-7xl mx-auto flex gap-8'>
                <div className='my-auto'>
                    <img src={product_image} alt="" />
                </div>
                <div>
                    <h2 className='mb-3 text-3xl font-semibold'>{product_title}</h2>
                    <p className='mb-4 font-semibold text-xl'>{price}</p>
                    {
                        availabilty? (<div><button className='py-2 px-4 rounded-4xl btn-green'>In Stock</button></div>) : (<div><button className='py-2 px-4 rounded-4xl btn-green'>Out of Stock</button></div>)
                    }
                    <p className='text-lg mb-4'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                    <h4 className='font-bold text-lg mb-4'>Specification:</h4>
                    {
                        Specification.map((spec, idx) => <li className='text-gray-500 mb-4 text-lg' key={idx} spec={spec}>{spec}</li>)
                    }
                    <h4 className='font-bold text-lg mb-3'>Rating</h4>
                    <button className='bg-gray-300 rounded-4xl py-2 px-4 mb-4'>{rating}</button>
                    <div className='flex gap-4'>
                        <button className='bg-purple rounded-4xl py-3 px-7 flex items-center gap-3'>Add To Cart <img className='p-2 bg-white border border-black rounded-full w-1/4' src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="" /></button>
                        <img className='p-2 bg-white border w-1/6 border-black rounded-full' src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;