// Importing necessary modules and data
import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Defining the CategoryPage component
const CategoryPage = () => {
  return (

    // Overall container for displaying pizza categories
    <div className="flex flex-wrap text-red-500">

      {/* Mapping through each pizza item in the data and rendering a link for each */}
      {pizzas.map((item) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {/* Checking if there is an image for the pizza item */}
          {item.img && (
            <div className="relative h-[80%]">
              {/* Using Next.js Image component to efficiently handle and display images */}
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            {/* Pizza name */}
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>

            {/* Pizza price (visible on hover) */}
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>

            {/* Add to Cart button (visible on hover) */}
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

// Exporting the CategoryPage component
export default CategoryPage;