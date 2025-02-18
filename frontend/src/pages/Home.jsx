import React from 'react';
import 'tailwindcss/tailwind.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '../assets/hero.jpg';
import { motion } from 'framer-motion';
import logo from '../assets/logo1.png';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handleSubscriptionClick = () => {
    navigate('/payment');
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto pb-40 flex flex-col items-center"
          >
            
            
            <h1 className="text-4xl md:text-6xl lg:text-5xl mb-8 mt-20 font-bold text-center text-gray-900">
              Welcome to 
            </h1>            <img src={logo} alt="Logo" className="w-90 h-auto mb-8" />

            <p className="text-xl md:text-2xl lg:text-3xl mt-7 font-medium text-center text-gray-700">
              Your Ultimate Frontend Design Studio
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mt-4 font-light text-center text-gray-600">
              Crafting beautiful and responsive web designs with precision and creativity.
            </p>
          </motion.div>
        </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-300">
        <div className="container mx-auto ">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <Slider {...settings}>
            <div className="p-4">
              <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img src="https://i.postimg.cc/qq48ZXYP/aa2.jpg" alt="Drag-and-Drop Builder" className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Drag-and-Drop Builder</h3>
                <p>Build your website effortlessly with our intuitive drag-and-drop interface.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img src="https://i.postimg.cc/5tXpwgdp/ian-schneider-Tam-Mbr4okv4-unsplash.jpg" alt="Customizable Components" className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Customizable Components</h3>
                <p>Use modular components to create a unique and personalized website.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img src="https://i.postimg.cc/dtJBWwch/aa1.jpg" alt="Real-time Preview" className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Real-time Preview</h3>
                <p>See your changes in real-time as you build your website.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img src="https://i.postimg.cc/qq48ZXYP/aa2.jpg" alt="Templates" className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Templates</h3>
                <p>Choose from a variety of templates for different industries.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img src="https://i.postimg.cc/x15MczX5/aa3.jpg" alt="Integration" className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Seamless Integration</h3>
                <p>Integrate with modern tools like analytics and SEO.</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">See PixelCraft in Action</h2>
          <img src="https://i.postimg.cc/qq48ZXYP/aa2.jpg" alt="PixelCraft Demo" className="mx-auto max-h-96 w-screen" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-400">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <Slider {...settings}>
            <div className="text-center">
              <img src="https://i.postimg.cc/nz4Df9fq/user2.jpg" alt="User 1" className="mx-auto  max-h-60 max-w-30 min-w-30 rounded-full mb-4" />
              <p className="text-xl mb-2">"PixelCraft made it so easy to build my website!"</p>
              <p className="text-gray-900 text-">- Niggesh, Web Designer</p>
            </div>
            <div className="text-center">
              <img src="https://i.postimg.cc/2yTr4rhs/user1.jpg" alt="User 2" className="mx-auto max-h-60 max-w-30  rounded-full mb-4" />
              <p className="text-xl mb-2">"I love the real-time preview feature!"</p>
              <p className="text-gray-900">- Jane Smith, Blogger</p>
            </div>
            <div className="text-center">
              <img src="https://i.postimg.cc/d0d7GZ1g/user3.jpg" alt="User 3" className="mx-auto max-h-60 max-w-30 rounded-full mb-4" />
              <p className="text-xl mb-2">"The templates are fantastic and easy to customize."</p>
              <p className="text-gray-900">- MR. Meow, Daddy</p>
            </div>
          </Slider>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="vip-features" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold  text-center mb-12">VIP Features</h2>
          <div className="flex flex-wrap justify-center">
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="border p-6 rounded-lg  align-middle text-center bg-stone-400 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Unlock Exclusive Benefits</h3>
                <ul className="text-left mb-4">
                  <li className="mb-2">✔️ Access to premium templates</li>
                  <li className="mb-2">✔️ Priority customer support</li>
                  <li className="mb-2">✔️ Advanced customization options</li>
                  <li className="mb-2">✔️ Regular updates and new features</li>
                  <li className="mb-2">✔️ Enhanced security and performance</li>
                </ul>
                <motion.button
                  onClick={handleSubscriptionClick}
                  className="btn btn-primary align-middle  text-white rounded-full bg-stone-900 p-6"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Proceed to Subscription
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
       
     
    </div>
  );
};

export default Home;