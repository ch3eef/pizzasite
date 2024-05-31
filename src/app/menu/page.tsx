// Importing necessary modules and data
import { menu } from "@/data";
import Link from "next/link";
import React from "react";

// Defining the MenuPage component
const MenuPage = () => {
  return (
    // Overall container for displaying menu categories
    <div className="p-2 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {/* Mapping through each menu category in the data and rendering a link for each */}
      {menu.map((category) => (
        // Link to the detailed menu page for each category
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-4 md:h-1/2 md:p-8"
          style={{ backgroundImage: `url(${category.img})` }}
        >

          {/* Container for displaying category details */}
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-2xl md:text-3xl">{category.title}</h1>
            <p className="text-sm my-2">{category.desc}</p>

            {/* Explore button (visible on larger screens) */}
            <button className={`hidden lg:block bg-${category.color} text-${category.color === "black" ? "white" : "white"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

// Exporting the MenuPage component
export default MenuPage;