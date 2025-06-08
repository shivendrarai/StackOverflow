import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="Stackoverflow logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Stack<span className="text-primary-500">OverFlow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
