import React, { createContext, useState } from 'react';

export const ProductIdContext = createContext()

const ProductIdProvider = ({children}) => {
    const [productId, setProductId] = useState([])
    const addProductIdToWishlist = (id) => {
        setProductId((prevIds)=> setProductId([...prevIds, id]))
    }
    const [productIdCart, setProductIdCart] = useState([])
    const addProductIdToCart = (id) =>{
        setProductIdCart((prevIds)=> setProductIdCart([...prevIds, id]))
    }
    return (
        <div>
            <ProductIdContext.Provider value={{productId, addProductIdToWishlist, addProductIdToCart, productIdCart}}>
                {children}
            </ProductIdContext.Provider>
        </div>
    );
};

export default ProductIdProvider;