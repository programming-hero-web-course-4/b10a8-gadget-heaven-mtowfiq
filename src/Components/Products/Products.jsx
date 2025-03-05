import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("../../../public/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold mt-28">Explore Cutting-Edge Gadgets</h2>
      <div className="flex gap-6 p-6">
        <div className="bg-gray-100 flex flex-col items-center w-fit self-start p-6 rounded-2xl">
          <NavLink to="/">
            <button className="border rounded-4xl mb-6 py-3 px-5 font-black text-lg">
              All Product
            </button>
          </NavLink>
          <NavLink to="products/phones">
            <button className="font-black text-lg border rounded-4xl mb-6 py-3 px-5">
              Phones
            </button>
          </NavLink>
          <NavLink to="products/laptops">
            <button className="font-black text-lg border rounded-4xl mb-6 py-3 px-5">
              Laptops
            </button>
          </NavLink>
          <NavLink to="products/smartwatches">
            <button className="font-black text-lg border rounded-4xl mb-6 py-3 px-5">
              Smart Watches
            </button>
          </NavLink>
        </div>

          {
            location.pathname === '/' ?
            (<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 sm:gap-4">
                {products.map((product) => (
                  <Product key={product.product_id} product={product}></Product>
                ))}
              </div>) :
              (<Outlet></Outlet>)
          }
      </div>
    </div>
  );
};

export default Products;
