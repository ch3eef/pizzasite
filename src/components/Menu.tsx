"use client";
 //this is used because  using useState hook, our component must be a client component

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {
  const [open, setOpen] = useState(false);


  // to do this, we use use state hook that we can use to store the boolean to check if it is open or close
  //we use useState(false) bacause at the beginning its going to be false

  //TEMPORARY 
  const user = false
  return (
    <div>
      {!open ? (
        <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/>
      ) : (
        <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
      )}
      {/* if the image is not open (!open) show the image (? <img>) else (:) show other image. setOpen is the state true is the current state for the first image and false is the current state for the second image but if the first image is clicked, the */}
      {open && (<div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
        {links.map(item => (
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
        ))}
        {!user ? (<Link href="/login" onClick={()=>setOpen(false)} >Login</Link>) : 
        (<Link href="/orders" onClick={()=>setOpen(false)} >Orders</Link>)}
        <Link href="/cart" onClick={()=>setOpen(false)} >
          <CartIcon />
        </Link>
      </div>)}
    </div>
  );
};

export default Menu