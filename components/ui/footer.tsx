import Facebook from "../icons/facebook";
import Linkedin from "../icons/linkedin";
import Logo from "../icons/logo";
import Twitter from "../icons/twitter";
import Link from "next/link";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className="w-full bg-mirage-blue flex justify-center">
      <div
        className={clsx(
          "flex flex-col items-center pt-12 pb-10 w-full",
          "md:flex-row md:justify-between md:px-14 md:py-10",
          "lg:max-w-[68rem]",
          "xl:max-w-[70rem]",
          "2xl:max-w-[73rem]",
        )}
      >
        <div className={clsx("md:flex md:gap-14 md:items-center")}>
          <Link href="/" aria-label="home">
            <Logo className={clsx("w-32 mb-8", "md:mb-0")} fill="white" />
          </Link>
          <ul
            className={clsx(
              "flex flex-col gap-6 text-center text-water-white mb-9",
              "md:flex-row md:mb-0",
            )}
          >
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ul
          aria-label="social media links"
          className="flex gap-8 justify-center items-center"
        >
          <Link href="">
            <Facebook className="w-9" />
          </Link>
          <Link href="">
            <Twitter className="w-7" />
          </Link>
          <Link href="">
            <Linkedin className="w-7" />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
