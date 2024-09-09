import Facebook from "../icons/facebook";
import Linkedin from "../icons/linkedin";
import Logo from "../icons/logo";
import Twitter from "../icons/twitter";
import Link from "next/link";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer
      className={clsx(
        "w-full bg-mirage-blue flex justify-center",
        "bg-circle bg-no-repeat bg-[center_bottom_-36.5rem]",
        "lg:bg-[right_-20rem_bottom_-20rem]",
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-center pt-12 pb-10 w-full",
          "md:flex-row md:justify-between md:px-14 md:py-10",
          "lg:max-w-[60.25rem] lg:px-0",
          "xl:max-w-[62rem]",
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
              <Link
                href="/pricing"
                className={clsx(
                  "transition-colors duration-300",
                  "hover:text-san-juan-blue-50",
                )}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={clsx(
                  "transition-colors duration-300",
                  "hover:text-san-juan-blue-50",
                )}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx(
                  "transition-colors duration-300",
                  "hover:text-san-juan-blue-50",
                )}
              >
                Contact
              </Link>
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
            <Twitter className="w-7 hover:fill-red-800" />
          </Link>
          <Link href="">
            <Linkedin className="w-7 hover:fill-red-800" />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
