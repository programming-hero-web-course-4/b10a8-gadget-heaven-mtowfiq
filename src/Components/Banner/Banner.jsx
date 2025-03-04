import "./BannerStyles.css"
const Banner = () => {
    return (
        <div className="text-center mt-12 bg-purple max-w-6xl mx-auto rounded-4xl">
            <h2 className="text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className="mt-6 mb-9 text-white">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="text-purple bg-white rounded-4xl px-8 py-4">Shop Now</button>
            <div className="p-6 border border-white banner-img-bg w-fit mx-auto rounded-4xl">
                <img className="max-w-5xl rounded-3xl" src="src\assets\assets\banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;