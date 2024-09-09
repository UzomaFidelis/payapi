"use client";

import { useEffect, useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import clsx from "clsx";

const Navbar = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  useEffect(() => {
    const handleOutsideNavClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
          toggleMenu(false);
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideNavClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideNavClick);
    };
  }, [isOpen]);

  return (
    <nav className={clsx("flex")} ref={navRef}>
      <button className={clsx("z-50", "md:hidden")}>
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          color={isOpen ? "hsl(220, 60%, 99%)" : "hsl(207, 33%, 32%)"}
          size={28}
        />
      </button>
      <div
        className={clsx(
          isOpen
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-50 scale-50 translate-x-full",
          "bg-mirage-blue fixed top-0 right-0 h-screen transition-transform duration-300 z-[3]",
          "text-water-white flex flex-col items-center pt-[6.8rem] w-[16.5rem] box-border",
          "md:translate-x-0 md:scale-100 md:static md:flex-row md:h-auto md:p-0 md:bg-transparent",
          "md:text-san-juan-blue-50 md:w-auto md:opacity-100 md:flex-1",
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-10 items-center py-[2.6rem] h-full w-full relative",
            "before:absolute before:h-px before:w-4/6 before:top-0 before:bg-water-white/70 before:left-1/2",
            "before:-translate-x-1/2",
            "overflow-auto",
            "md:flex-row md:p-0 md:border-none md:text-sm md:justify-between md:flex-1 md:overflow-visible",
            "md:before:hidden",
          )}
        >
          <ul
            className={clsx(
              "flex flex-col items-center gap-10",
              "md:flex-row md:gap-8",
            )}
          >
            <li>
              <Link
                href="/pricing"
                className={clsx(
                  "text-base font-bold",
                  "md:hover:text-san-juan-blue-100",
                )}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={clsx(
                  "text-base font-bold",
                  "md:hover:text-san-juan-blue-100",
                )}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx(
                  "text-base font-bold",
                  "md:hover:text-san-juan-blue-100",
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link
              href=""
              className={clsx(
                "bg-dark-pink rounded-full font-bold px-8 py-4",
                "inline-block",
                "md:text-water-white md:bg-dark-pink transition-colors duration-300 hover:bg-charm-pink",
              )}
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
