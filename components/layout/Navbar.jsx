import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "HOME", href: "/HomePage", styles: "bg-green-500" },
  { name: "SHOP", href: "/ShopPage", styles: "bg-blue-500" },
  { name: "CART", href: "/CartPage", styles: "bg-red-500" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("HOME");

  const onNavClick = (navname) => {
    if (activeNav === navname) {
      return;
    }
    setActiveNav(navname);
  };

  return (
    <div>
      <div className="flex border-2 border-black justify-between items-center py-4 mx-auto px-2 md:px-6 lg:px-10 mb-16">
        <div>
          <div className="">Logo</div>
        </div>
        <ul className="space-x-4">
          {navItems.map((nav) => {
            return (
              <Link key={nav.name} href={nav.href}>
                <a
                  onClick={() => onNavClick(nav.name)}
                  className={`p-2 ${
                    activeNav === nav.name &&
                    `${nav.styles} border-b-2 border-black`
                  }`}
                >
                  {nav.name}
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
