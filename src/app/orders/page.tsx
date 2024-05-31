// Importing necessary module
import React from "react";


// Defining the OrdersPage component
const OrdersPage = () => {
  return (

     // Overall container for displaying order information
    <div className="p-4 lg:px-20 xl:px-40">

      {/* Table for organizing order details */}
      <table className="w-full border-separate border-spacing-3">

         {/* Table header with column names */}
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th className="hidden md:block" >Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* Table body with order data */}
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="hidden md:block py-6 px-1">89.90</td>
            <td className="py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>

          {/* Second order row */}
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="hidden md:block py-6 px-1">89.90</td>
            <td className="py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>

          {/* Third order row */}
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="hidden md:block py-6 px-1">89.90</td>
            <td className="py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Exporting the OrdersPage component
export default OrdersPage;