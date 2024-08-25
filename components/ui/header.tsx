"use client";

import clsx from "clsx";
import Link from "next/link";
import Logo from "../icons/logo";
import Navbar from "./navbar";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        "w-full pt-9 px-5 flex justify-between items-center top-0 z-20",
        "md:px-8 md:static md:justify-normal md:gap-14",
        "lg:max-w-[68rem]",
        "xl:max-w-[70rem]",
        "2xl:max-w-[73rem]",
      )}
    >
      <div>
        <Link href="/" aria-label="pay api">
          <Logo
            className={clsx("w-[8.2rem]", "md:w-[9rem]")}
            fill="hsl(207, 33%, 32%)"
          />
        </Link>
      </div>
      <div className="md:flex-1">
        <Navbar isOpen={menuOpen} toggleMenu={setMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
