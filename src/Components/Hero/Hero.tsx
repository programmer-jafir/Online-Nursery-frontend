import React from 'react';
import bannerImg from './banner.jpg'
import { Button } from '../ui/button';

const Hero: React.FC = () => {
    return (
        <div>
            <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-32 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
              Welcome to <span className="text-green-500">Plant Life Nursery</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Discover and shop for plants, flowers, and gardening essentials at Plant Life Nursery!
            </p>
            <Button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-400 transition duration-300">
              <a href="/products">Order Now</a>
            </Button>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              src={bannerImg}
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Hero;