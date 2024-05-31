"use client";

// Importing necessary modules
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Array of data containing information for each slide in the slider
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

// Slider component for displaying a rotating set of slides with text and images
const Slider = () => {
  // State variable to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect hook to automatically switch to the next slide at a set interval
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    // Clearing the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

   // Rendering the Slider component
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-4 text-red-500 font-bold p-4 md:p-10 overflow-hidden">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-2 px-4 md:py-6 md:px-10"><Link href="/menu">Order Now</Link></button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

// Exporting the Slider component
export default Slider; 