import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
      <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          <img src="./img/logo.png" alt="logo" className="md:cursor-pointer h-[5rem]" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 font-[Poppins]">
        <Link to="/login"> <li className="text-2xl">
         <ion-icon name="person-outline"></ion-icon></li></Link>
         <Link to="/wishlist"> <li className="text-2xl">
          <ion-icon name="heart-outline"></ion-icon></li></Link>
          <Link to="/cart">    <li className="text-2xl">
          <ion-icon name="bag-outline"></ion-icon></li></Link>
        </ul>
        
        {/* Mobile nav */}
        <ul
          className={`uppercase 
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
        <ul className="flex bg-white w-full gap-3 my-6">
        <Link to="/login"> <li className="text-2xl">
         <ion-icon name="person-outline"></ion-icon></li></Link>
         <Link to="/wishlist"> <li className="text-2xl">
          <ion-icon name="heart-outline"></ion-icon></li></Link>
          <Link to="/cart">    <li className="text-2xl">
          <ion-icon name="bag-outline"></ion-icon></li></Link>
        </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
