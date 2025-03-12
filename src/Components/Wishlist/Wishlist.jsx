import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProductIdContext } from '../../Provider/ProductIdProvider';
import DisplayWishlist from '../DisplayWishlist/DisplayWishlist';

const Wishlist = () => {
    const data = useLoaderData()
    const {productId} = useContext(ProductIdContext)
    console.log(productId)
    const items = data.filter(item => productId.includes(item.product_id) )
    console.log(items)

    const navigate = useNavigate()

    const handleGoBackToHome = () =>{
        navigate("/")
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h5 className='font-bold text-2xl mb-8'>Wishlist</h5>
            <div>
                {
                    items.length > 0 ? 
                    (<div>
                        {
                            items.map(item => <DisplayWishlist key={item.product_id} item={item}></DisplayWishlist>)
                        }
                    </div>)
                    :
                    (<div className='flex flex-col items-center justify-center'>
                        <h3 className='font-bold text-xl mb-8'>No items in your Cart</h3>
                        <button className='border-4 border-purple-200 text-purple bg-white rounded-4xl px-8 py-4 font-bold text-xl mb-8' onClick={handleGoBackToHome}>Go back to Home page</button>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Wishlist;