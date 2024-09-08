import { Metadata } from "next";
import Header from "@/components/ui/header";
import Image from "next/image";
import clsx from "clsx";
import Ready from "@/components/ui/ready";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={clsx("bg-pale-blue")}>
      <div className="flex  flex-col items-center">
        <Header />
      </div>
      <main
        className={clsx(
          "pb-[6.4rem] flex flex-col items-center",
          "md:pb-[9rem]",
        )}
      >
        <h1 className="sr-only">About Us</h1>
        <div
          className={clsx(
            "pt-[4.5rem] px-6",
            "md:pt-12 md:flex md:flex-col md:items-center md:px-10",
            "lg:items-start lg:px-10 lg:pt-16 lg:max-w-[64rem]",
          )}
        >
          <p
            className={clsx(
              "font-dm-serif font-bold text-center text-4xl text-san-juan-blue-100 mb-[3.17rem] tracking-wider",
              "md:text-5xl md:max-w-[90%] md:leading-[1.2] md:mb-[3.5rem]",
              "lg:text-left lg:max-w-[60%] lg:mb-[4.5rem]",
            )}
          >
            We empower innovators by delivering access to the financial system
          </p>
          <div className={clsx("mb-[3.17rem]", "md:flex md:gap-2 md:mb-20")}>
            <h2
              className={clsx(
                "font-dm-serif font-bold text-2xl text-san-juan-blue-100 text-center mb-5",
                "md:basis-[14rem] md:font-bold md:text-4xl md:text-left",
              )}
            >
              Our Vision
            </h2>
            <p
              className={clsx(
                "text-center tracking-normal leading-7 text-san-juan-blue-50",
                "md:flex-1 md:text-left",
              )}
            >
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div
            className={clsx("mb-[3rem]", "md:flex md:gap-2", "lg:mb-[5rem]")}
          >
            <h2
              className={clsx(
                "font-dm-serif font-bold text-2xl text-san-juan-blue-100 text-center mb-5",
                "md:basis-[14rem] md:font-bold md:text-4xl md:text-left",
              )}
            >
              Our Business
            </h2>
            <p
              className={clsx(
                "text-center tracking-normal leading-7 text-san-juan-blue-50",
                "md:flex-1 md:text-left",
              )}
            >
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
        <div
          className={clsx(
            "relative w-full h-[18.5rem] mb-12",
            "md:h-[17.2rem] md:mb-[4.7rem]",
            "lg:h-[19.8rem] md:mb-[5.5rem]",
            "xl:h-[25rem]",
          )}
        >
          <Image
            src="/images/about/mobile/image-team-members.jpg"
            alt="team members"
            fill
            className={clsx("md:hidden")}
          />
          <Image
            src="/images/about/tablet/image-team-members.jpg"
            alt="team members"
            fill
            className={clsx("hidden", "md:block", "lg:hidden")}
          />
          <Image
            src="/images/about/desktop/image-team-members.jpg"
            alt="team members"
            fill
            className={clsx("hidden", "lg:block")}
          />
        </div>
        <div className={clsx("lg:max-w-[65rem]")}>
          <div
            className={clsx(
              "relative flex flex-col items-center gap-7 py-[2.7rem] mb-[3.5rem] w-full",
              "before:absolute before:top-0 before:w-[80%] before:h-[1px] before:bg-light-pale before:left-[50%] before:translate-x-[-50%]",
              "after:absolute after:bottom-0 after:w-[80%] after:h-[1px] after:bg-light-pale after:left-[50%] after:translate-x-[-50%]",
              "md:flex-row md:items-start md:justify-center md:gap-[5rem] md:px-10 md:py-0 md:mb-[6rem]",
              "md:before:hidden md:after:hidden",
              "lg:justify-start lg:gap-[2rem]",
            )}
          >
            <div
              className={clsx(
                "flex flex-col items-center",
                "md:py-4 md:relative",
                "md:before:absolute md:before:top-0 md:before:w-[100%] md:before:h-[1px] md:before:bg-light-pale md:before:left-[50%] md:before:translate-x-[-50%]",
                "md:after:absolute md:after:bottom-0 md:after:w-[100%] md:after:h-[1px] md:after:bg-light-pale md:after:left-[50%] md:after:translate-x-[-50%]",
                "lg:flex-1 lg:items-start",
              )}
            >
              <p className="font-dm-serif text-san-juan-blue-100">
                Team Members
              </p>
              <p className="font-bold text-[3.4rem] text-dark-pink">300+</p>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center",
                "md:py-4 md:relative",
                "md:before:absolute md:before:top-0 md:before:w-[100%] md:before:h-[1px] md:before:bg-light-pale md:before:left-[50%] md:before:translate-x-[-50%]",
                "md:after:absolute md:after:bottom-0 md:after:w-[100%] md:after:h-[1px] md:after:bg-light-pale md:after:left-[50%] md:after:translate-x-[-50%]",
                "lg:flex-1 lg:items-start",
              )}
            >
              <p className="font-dm-serif text-san-juan-blue-100">
                Offices in the US
              </p>
              <p className="font-bold text-[3.4rem] text-dark-pink">3</p>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center",
                "md:py-4 md:relative",
                "md:before:absolute md:before:top-0 md:before:w-[100%] md:before:h-[1px] md:before:bg-light-pale md:before:left-[50%] md:before:translate-x-[-50%]",
                "md:after:absolute md:after:bottom-0 md:after:w-[100%] md:after:h-[1px] md:after:bg-light-pale md:after:left-[50%] md:after:translate-x-[-50%]",
                "lg:flex-1 lg:items-start",
              )}
            >
              <p className="font-dm-serif text-san-juan-blue-100">
                Transactions analyzed
              </p>
              <p className="font-bold text-[3.4rem] text-dark-pink">10M+</p>
            </div>
          </div>
          <div className={clsx("px-6 mb-24", "md:px-10 md:mb-28")}>
            <div className={clsx("mb-12", "md:flex md:gap-2 md:mb-20")}>
              <h2
                className={clsx(
                  "font-dm-serif font-bold text-2xl text-san-juan-blue-100 text-center mb-5",
                  "md:basis-[14rem] md:font-bold md:text-4xl md:text-left",
                )}
              >
                The Culture
              </h2>
              <p
                className={clsx(
                  "text-center tracking-normal leading-7 text-san-juan-blue-50",
                  "md:flex-1 md:text-left",
                )}
              >
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites internet hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>
            <div className={clsx("md:flex md:gap-2")}>
              <h2
                className={clsx(
                  "font-dm-serif font-bold text-2xl text-san-juan-blue-100 text-center mb-5",
                  "md:basis-[14rem] md:font-bold md:text-4xl md:text-left",
                )}
              >
                The People
              </h2>
              <p
                className={clsx(
                  "text-center tracking-normal leading-7 text-san-juan-blue-50",
                  "md:flex-1 md:text-left",
                )}
              >
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
        </div>
        <div className={clsx("px-4 w-full", "lg:px-12")}>
          <Ready />
        </div>
      </main>
      <Footer />
    </div>
  );
}
