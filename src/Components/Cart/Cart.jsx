import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProductIdContext } from '../../Provider/ProductIdProvider';
import DisplayCart from '../DisplayCart/DisplayCart';

const Cart = () => {
    const data = useLoaderData()
    const {productIdCart} = useContext(ProductIdContext)
    console.log(productIdCart)
    const items = data.filter(item => productIdCart.includes(item.product_id) )
    const [sortedItems, setSortedItems] = useState(items)
    console.log(items)

    let totalPrice = 0

    items.forEach(item => {
        totalPrice = totalPrice + item.price
    })

    // console.log(totalPrice)

    const handleSort = () =>{
        const sortedItemsArr = [...sortedItems].sort((a, b) => b.price - a.price)
        setSortedItems(sortedItemsArr)
    }
    
    const navigate = useNavigate()

    const handleGoBack = () =>{
        navigate("/")
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center mb-8'>
                <h5 className='font-bold text-2xl'>Cart</h5>
                <div className='flex items-center space-x-4'>
                    <h4 className='font-bold text-2xl'>Total cost: $ {totalPrice}</h4>
                    <button onClick={handleSort} className='py-3 px-6 text-purple border-purple-300 border rounded-4xl'>Sort by price (High to Low)</button>
                    <button className=' py-3 px-6 border-purple-300 border rounded-4xl'>Purchase</button>
                </div>
            </div>
            <div>
                {
                    sortedItems.length > 0 ? (<div>
                        {
                            sortedItems.map(item => <DisplayCart key={item.product_id} item={item}></DisplayCart>)
                        }
                    </div>) : 
                    (
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='font-bold text-xl mb-8'>No items in your Cart</h3>
                            <button className='border-4 border-purple-200 text-purple bg-white rounded-4xl px-8 py-4 font-bold text-xl mb-8' onClick={handleGoBack}>Go back to Home page</button>
                        </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default Cart;