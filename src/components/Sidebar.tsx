"use client";

import React, { useState } from "react";
import {
  FaBook,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaBars,
  FaTimes
} from "react-icons/fa";
import NavItem from "./NavItem";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    label: "Education",
    href: "/education",
    icon: FaGraduationCap,
  },
  {
    label: "Hobby",
    href: "/hobbies",
    icon: FaHeart,
  },
  {
    label: "Books",
    href: "/books",
    icon: FaBook,
  },
];

const Sidebar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-[60] md:hidden flex items-center justify-between bg-white p-4 shadow">
    <h1 className="text-xl font-bold text-[#5E50C6]">Knowledge Hub</h1>
    <button onClick={()=>setIsOpen(!isOpen)}>
      {
        isOpen ? (
         <FaTimes className="text-2xl"/>
        ) : (
        <FaBars className="text-2xl"/>
        )
      }

    </button>
    </div>
    <aside className={`
    fixed top-0 left-0
    h-screen w-64
    bg-white border-r p-6
    z-50
    transform transition-transform duration-300

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    md:translate-x-0
    md:sticky
    md:top-0
  `}>
      
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[#6B5FD6]">
          ✨ Knowledge Hub
        </h1>

        <p className="mt-2 text-sm text-[#9A94BF]">
          Learn • Explore • Grow
        </p>
      </div>

     
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;