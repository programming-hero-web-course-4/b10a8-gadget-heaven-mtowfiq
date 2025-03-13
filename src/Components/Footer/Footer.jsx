import React from "react";

const Footer = () => {
  return (
    <div className=" pt-24 bg-gray-100">
      <h3 className="text-center font-bold text-4xl mb-3">Gadget Heaven</h3>
      <p className="text-center font-medium text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
      <footer className="footer sm:footer-horizontal p-10 mx-auto w-fit space-x-44">
        <nav>
          <h6 className="font-bold mb-4 text-lg">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold mb-4 text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold mb-4 text-lg">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
