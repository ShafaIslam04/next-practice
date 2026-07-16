"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavItemProps {
  href: string;
  label: string;
  icon: IconType;
}

const NavItem = ({
  href,
  label,
  icon: Icon,
}: NavItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300
        ${
          active
            ? "bg-[#F0EDFF] text-[#5E50C6] shadow-sm"
            : "text-[#75718A] hover:bg-[#F8F6FF] hover:text-[#6B5FD6]"
        }`}
    >
      <Icon
        className={`text-xl transition-all duration-300
          ${
            active
              ? "text-[#6B5FD6]"
              : "text-[#B7B2CF] group-hover:text-[#8B80E8] group-hover:scale-110"
          }`}
      />

      <span className="font-medium tracking-wide">
        {label}
      </span>
    </Link>
  );
};

export default NavItem;