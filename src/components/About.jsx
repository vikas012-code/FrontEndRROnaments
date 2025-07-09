import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-pink-600">About Us</h1>

      <p className="text-lg mb-6 text-center">
        Welcome to <span className="font-semibold text-pink-500">R&R Ornaments</span>, your trusted destination for beautifully handcrafted 
        <span className="italic"> artificial jewelry</span> that blends elegance, tradition, and contemporary flair.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">Who We Are</h2>
        <p className="text-base">
          At R&R Ornaments, we believe jewelry is more than an accessory — it’s a statement of personality and grace. 
          Our mission is to provide <strong>high-quality, affordable</strong> jewelry for every occasion. From traditional to modern styles, 
          every piece is crafted with love to make you feel special.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">What We Offer</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Elegant Earrings & Jhumkas</li>
          <li>Stylish Necklaces & Chokers</li>
          <li>Charming Bracelets & Bangles</li>
          <li>Customized Bridal Sets</li>
          <li>Trendy Daily-Wear Jewelry</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">Visit Us</h2>
        <p>
          <strong>R&R Ornaments Shop</strong><br />
          📍 Shop No. 14, Adarsh Nagar Market,<br />
          Adarsh Nagar, Jalandhar, Punjab – 144001<br />
          📞 +91 00000000<br />
          📧 rnr.ornaments@gmail.com
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">Location Of Shop</h2>
        <p>
          <strong>R&R Ornaments Shop</strong><br />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6816.004606208861!2d75.56001895000001!3d31.331309499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a92fcf5be33%3A0xd10dfdaeced88fb0!2sAdarsh%20Nagar%2C%20Jalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1752068258372!5m2!1sen!2sin"></iframe>

        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">Why Choose Us</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Affordable luxury</li>
          <li>Unique and trendy collections</li>
          <li>Friendly customer service</li>
          <li>Custom orders available</li>
          <li>Trusted by hundreds of happy customers</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">Connect With Us</h2>
        <p>Follow us on Instagram & Facebook for new arrivals and styling tips!</p>
      </section>
    </div>
  );
};

export default About;
