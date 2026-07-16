"use client";

import React from "react";
import {
  FaBook,
  FaGraduationCap,
  FaHeart,
  FaHome,
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
  return (
    <aside className="w-72 min-h-screen bg-[#FCFCFF] border-r border-[#ECEAF8] px-6 py-8">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[#6B5FD6]">
          ✨ Knowledge Hub
        </h1>

        <p className="mt-2 text-sm text-[#9A94BF]">
          Learn • Explore • Grow
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;