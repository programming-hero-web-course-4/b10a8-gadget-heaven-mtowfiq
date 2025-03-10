import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductIdContext } from '../../Provider/ProductIdProvider';
import DisplayCart from '../DisplayCart/DisplayCart';

const Cart = () => {
    const data = useLoaderData()
    const {productId} = useContext(ProductIdContext)
    console.log(productId)
    const items = data.filter(item => productId.includes(item.product_id) )
    console.log(items)

    let totalPrice = 0

    items.forEach(item => {
        totalPrice = totalPrice + item.price
    })

    // console.log(totalPrice)

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center'>
                <h5 className='font-bold text-2xl'>Cart</h5>
                <div className='flex items-center space-x-4'>
                    <h4 className='font-bold text-2xl'>Total cost: $ {totalPrice}</h4>
                    <button className='py-3 px-6 text-purple border-purple-300 border rounded-4xl'>Sort by price</button>
                    <button className=' py-3 px-6 border-purple-300 border rounded-4xl'>Purchase</button>
                </div>
            </div>
            <div>
                {
                    items.map(item => <DisplayCart key={item.product_id} item={item}></DisplayCart>)
                }
            </div>
        </div>
    );
};

export default Cart;