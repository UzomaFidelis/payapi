import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import MoneyBag from "@/components/icons/money-bag";
import Chart from "@/components/icons/chart";
import DebitCard from "@/components/icons/debit-card";
import Ready from "@/components/ui/ready";
import Sponsors from "@/components/ui/sponsors";

export default function Home() {
  return (
    <div
      className={clsx("bg-pale-blue", "lg:flex lg:flex-col lg:items-center")}
    >
      <Header />
      <div
        className={clsx(
          "flex flex-col items-center pb-[5.1rem]",
          "lg:flex-row-reverse lg:justify-between lg:w-[80vw] lg:max-w-[60.25rem] lg:box-border lg:gap-[20%] lg:mt-10",
          "xl:max-w-[62rem]",
        )}
      >
        <div
          className={clsx(
            "relative mt-[5.1rem] w-32 h-[15rem] mb-12",
            "md:mt-[5.1rem] md:w-48 md:h-[22.5rem] md:mb-20",
            "lg:shrink-0",
          )}
        >
          <Image
            src="/images/illustration-phone-mockup.png"
            alt=""
            fill
            aria-hidden
          />
        </div>
        <div
          className={clsx(
            "px-6 max-w-[38rem]",
            "lg:px-0 lg:flex lg:flex-col lg:items-start",
          )}
        >
          <h2
            className={clsx(
              "font-public-sans font-bold text-4xl text-center leading-[1] mb-10 text-san-juan-blue-100",
              "md:text-5xl md:leading-[1.1] md:mb-12",
              "lg:text-left lg:max-w-[35rem] lg:text-6xl",
            )}
          >
            Start building with our APIs for absolutely free.
          </h2>
          <form action="" className={clsx("md:relative md:mb-10")}>
            <input
              type="email"
              placeholder="Enter email address"
              className={clsx(
                "w-full rounded-full text-lg px-6 py-3 font-dm-serif mb-4 shadow-md",
                "hover:shadow-lg",
                "md:mb-0 md:pr-52",
              )}
            />
            <button
              type="submit"
              className={clsx(
                "w-full bg-dark-pink text-water-white p-[0.9rem] rounded-full font-bold mb-5",
                "hover:bg-charm-pink transition-colors duration-300",
                "md:absolute md:top-0 md:bottom-0 md:right-0 md:w-fit md:mb-0 md:px-8 md:h-full md:py-0",
              )}
            >
              Schedule a Demo
            </button>
          </form>
          <span className="flex gap-1 justify-center">
            <p className="text-san-juan-blue-50">Have any questions?</p>
            <Link href="" className="font-bold text-san-juan-blue-100">
              Contact Us
            </Link>
          </span>
        </div>
      </div>
      <main className={clsx("w-full", "lg:flex lg:flex-col lg:items-center")}>
        <div
          className={clsx("bg-mirage-blue w-full", "lg:flex lg:justify-center")}
        >
          <div
            className={clsx(
              "text-white text-center pt-[5.2rem] pb-[5.9rem] px-2",
              "md:pt-[6rem] md:flex md:flex-col md:items-center",
              "lg:flex-row-reverse lg:text-left lg:w-[80vw] lg:max-w-[60.25rem] lg:box-border lg:justify-between",
              "lg:gap-[9%] lg:px-0",
              "xl:max-w-[62rem]",
            )}
          >
            <div className="lg:shrink-0">
              <Sponsors iconFill={"#fff"} />
            </div>
            <div className="lg:flex lg:flex-col lg:items-start">
              <h2
                className={clsx(
                  "text-4xl font-bold mb-8",
                  "md:text-5xl md:mb-[2.9rem]",
                )}
              >
                Who we work with
              </h2>
              <p
                className={clsx(
                  "px-4 leading-7 mb-[3.82rem]",
                  "md:max-w-[32rem] md:mb-[3.1rem]",
                  "lg:px-0",
                )}
              >
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our APi. We
                provide developers with the tools they need to create easy and
                accessible experience for their users.
              </p>
              <Link
                href="/about"
                className={clsx(
                  "capitalize py-4 px-7 font-bold border border-off-white rounded-[200px]",
                  "transition-colors duration-300",
                  "hover:bg-water-white hover:text-mirage-blue",
                  "md:py-[0.9rem]",
                )}
              >
                About us
              </Link>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "pt-[5.6rem] px-4 pb-[6.3rem] bg-pale-blue",
            "md:px-16 md:pb-[8.4rem]",
            "lg:w-[80vw] lg:max-w-[60.25rem] lg:box-border lg:px-0 lg:py-[8.5rem]",
            "xl:max-w-[62rem]",
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center px-2",
              "md:flex-row md:items-start md:px-0 md:mb-[7.8rem]",
              "lg:justify-between lg:mb-[10.5rem] lg:gap-[5%]",
              "xl:gap-[9%]",
            )}
          >
            <div
              className={clsx(
                "relative w-60 h-[9.7rem] mb-[5.6rem]",
                "md:basis-[15.5rem] md:mb-0",
                "lg:basis-[18.5rem] lg:h-[11rem] lg:shrink-0",
                "xl:basis-[23rem] xl:h-[13rem]",
              )}
            >
              <Image
                src="/images/illustration-easy-to-implement.png"
                alt=""
                fill
                aria-hidden
              />
            </div>
            <div
              className={clsx(
                "mb-[6.7rem] text-center",
                "md:text-left md:pl-16 md:flex-1 md:mb-0",
                "lg:pl-10",
              )}
            >
              <h2
                className={clsx(
                  "text-4xl text-san-juan-blue-100 font-bold mb-8",
                  "lg:text-5xl",
                )}
              >
                Easy to implement
              </h2>
              <p
                className={clsx(
                  "text-san-juan-blue-50 leading-[1.7]",
                  "md:max-w-[40rem]",
                  "lg:text-xl",
                )}
              >
                Our API comes with just a few lines of code. You'll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div
            className={clsx(
              "px-2 mb-20",
              "md:flex md:flex-row-reverse items-center md:px-0 md:mb-28",
              "lg:mb-[10.5rem]",
            )}
          >
            <div
              className={clsx(
                "flex justify-center gap-5 w-full h-[14rem] mb-20",
                "md:mb-0 md:h-[16rem]",
                "lg:h-[17rem]",
              )}
            >
              <span
                className={clsx(
                  "relative w-28 h-full",
                  "md:w-[8.3rem]",
                  "lg:w-[9rem]",
                )}
              >
                <Image
                  src="/images/illustration-simple-ui-1.png"
                  alt=""
                  fill
                  aria-hidden
                />
              </span>
              <span
                className={clsx(
                  "relative w-28 h-full",
                  "md:w-[8.3rem]",
                  "lg:w-[9rem]",
                )}
              >
                <Image
                  src="/images/illustration-simple-ui-2.png"
                  alt=""
                  fill
                  aria-hidden
                />
              </span>
            </div>
            <div
              className={clsx(
                "text-center",
                "md:text-left md:pr-10",
                "lg:pr-6",
              )}
            >
              <h2
                className={clsx(
                  "text-4xl text-san-juan-blue-100 font-bold mb-8",
                  "lg:text-5xl",
                )}
              >
                Simple UI & UX
              </h2>
              <p
                className={clsx(
                  "text-san-juan-blue-50 leading-[1.7]",
                  "lg:text-xl",
                )}
              >
                Our pre-built form is easy to integrate in your app or website's
                checkout flow and designed to optimize conversion.
              </p>
            </div>
          </div>
          <div className={clsx("md:flex md:mb-[7.8rem] md:gap-2")}>
            <div
              className={clsx(
                "flex flex-col items-center px-2 mb-[4.1rem]",
                "md:px-0 md:mb-0",
              )}
            >
              <MoneyBag className="mb-4" />
              <p
                className={clsx(
                  "text-san-juan-blue-100 font-bold text-lg mb-4",
                  "lg:text-xl",
                )}
              >
                Personal Finances
              </p>
              <p
                className={clsx(
                  "text-center text-san-juan-blue-50 leading-[1.7]",
                  "lg:text-lg",
                )}
              >
                Consolidate financial data from multiple sources and categorize
                transactions to up to 2 years of history. Analyze reports to
                reconcile activities in your account.
              </p>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center px-2 mb-[4.1rem]",
                "md:px-0 md:mb-0",
              )}
            >
              <Chart className="mb-4" />
              <p
                className={clsx(
                  "text-san-juan-blue-100 font-bold text-lg mb-4",
                  "lg:text-xl",
                )}
              >
                Banking & Coverage
              </p>
              <p
                className={clsx(
                  "text-center text-san-juan-blue-50 leading-[1.7]",
                  "lg:text-lg",
                )}
              >
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center px-2 mb-[6.8rem]",
                "md:px-0 md:mb-0",
              )}
            >
              <DebitCard className="mb-4" />
              <p
                className={clsx(
                  "text-san-juan-blue-100 font-bold text-lg mb-4",
                  "lg:text-xl",
                )}
              >
                Consumer Payments
              </p>
              <p
                className={clsx(
                  "text-center text-san-juan-blue-50 leading-[1.7]",
                  "lg:text-lg",
                )}
              >
                It's easier to set up secure bank payments with us through a
                flow designed with the user experience in mind. Customers could
                instantly authenticate their account.
              </p>
            </div>
          </div>
          <Ready />
        </div>
      </main>
      <Footer />
    </div>
  );
}
