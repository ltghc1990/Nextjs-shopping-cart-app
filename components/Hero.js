import React from "react";
import InnerContainer from "./layout/InnerContainer";

import Link from "next/link";

// should be a grid hero
const Hero = () => {
  return (
    <InnerContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-4">
        <Link href="/category/ps5">
          <a className="bg-gray-400 h-44">ps5</a>
        </Link>
        <Link href="/category/xbox">
          <a className="bg-blue-400 h-44">xbox</a>
        </Link>
        <Link href="/category/switch">
          <a className="bg-red-400 h-44">Switch</a>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
        <Link href="/category/pc">
          <a className="bg-green-400 h-72">PC</a>
        </Link>
        <Link href="/category/accessories">
          <a className="bg-yellow-400 h-72">accessories</a>
        </Link>
      </div>
    </InnerContainer>
  );
};

export default Hero;
