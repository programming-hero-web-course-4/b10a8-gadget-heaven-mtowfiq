import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { NavLink, Outlet } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch("../../../public/data/products.json")
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-6 p-6'>
                <div className='bg-gray-100 flex flex-col items-center w-fit self-start p-6 rounded-2xl'>
                    <NavLink to="products/allProducts"><button className='border rounded-4xl mb-6 py-3 px-5'>All Product</button></NavLink>
                    <NavLink to="products/phones"><button className='border rounded-4xl mb-6 py-3 px-5'>Phones</button></NavLink>
                    <NavLink to="products/laptops"><button className='border rounded-4xl mb-6 py-3 px-5'>Laptops</button></NavLink>
                    <NavLink to="products/smartwatches"><button className='border rounded-4xl mb-6 py-3 px-5'>Smart Watches</button></NavLink>
                </div>
                {/* <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6'>
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div> */}
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6'>
                    <Outlet></Outlet>
                </div>
                
            </div>
        </div>
    );
};

export default Products;