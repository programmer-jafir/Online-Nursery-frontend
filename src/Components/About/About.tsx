import React from "react";
import about from "./about.jpg"

const About: React.FC = () => {
  return (
    <div id="about" className="bg-gray-100 py-10">
        <h1 className="text-4xl text-green-500 font-bold text-center">About Us</h1>
      <div className="flex flex-wrap items-center justify-around mt-10">
      <p className="md:w-1/2 sm:w-auto max-[640]:fit text-xl text-center font-normal text-gray-500 px-10 ">
        At Plant Life Nursery, founded in 2024, our mission is to bring
        nature closer to you by providing high-quality indoor and outdoor
        plants. As a family-owned business, we’ve grown from a local nursery to
        an online store serving plant enthusiasts nationwide. We offer a diverse
        selection of plants, carefully nurtured to ensure they arrive healthy
        and ready to thrive. Committed to quality, expert advice, sustainable
        practices, and customer satisfaction, we aim to make it easy for
        everyone to enjoy the beauty and benefits of plants. Join our community
        and let us help you bring the joy of plants into your life.
      </p>
      <img className="mt-10 w-full max-w-md rounded-lg shadow-lg" src={about} alt="" />
      </div>
    </div>
  );
};

export default About;
