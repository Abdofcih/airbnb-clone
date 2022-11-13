import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 max-w-6xl mx-auto px-32 py-12" >
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">COMUNITY</h5>
        <p>Accessibilty</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      </section>
    </footer>
  );
};

export default Footer;
