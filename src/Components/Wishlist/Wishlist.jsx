import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductIdContext } from '../../Provider/ProductIdProvider';
import DisplayWishlist from '../DisplayWishlist/DisplayWishlist';

const Wishlist = () => {
    const data = useLoaderData()
    const {productId} = useContext(ProductIdContext)
    console.log(productId)
    const items = data.filter(item => productId.includes(item.product_id) )
    console.log(items)

    return (
        <div>
            <h5 className='font-bold text-2xl mb-8'>Wishlist</h5>
            {
                items.map(item => <DisplayWishlist key={item.product_id} item={item}></DisplayWishlist>)
            }
        </div>
    );
};

export default Wishlist;