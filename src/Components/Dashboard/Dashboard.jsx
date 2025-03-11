import { useContext } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { ProductIdContext } from "../../Provider/ProductIdProvider";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-purple py-8 px-40 mb-14">
                <h3 className="text-center text-white font-bold text-4xl">Dashboard</h3>
                <p className="text-center text-white mt-4 mb-8">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="dash flex justify-center gap-6">
                    <NavLink to="/dashboard" end><button className="border text-white rounded-4xl py-3 px-16">Cart</button></NavLink>
                    <NavLink to="/dashboard/wishlist"><button className="border text-white rounded-4xl py-3 px-16">Wishlist</button></NavLink>
                </div>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;