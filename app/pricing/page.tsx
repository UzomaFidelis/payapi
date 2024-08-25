import React from "react";
import clsx from "clsx";
import pricing_data from "@/lib/data";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Ready from "@/components/ui/ready";
import CheckMark from "@/components/icons/checkmark";

const Pricing = () => {
  return (
    <div className={clsx("bg-pale-blue")}>
      <div className="flex flex-col items-center">
        <Header />
      </div>
      <main className={clsx("lg:flex lg:justify-center")}>
        <div
          className={clsx(
            "pb-[6.4rem] pt-[4.5rem] px-6",
            "md:pt-[5rem] md:flex md:flex-col md:items-center md:pb-[9rem]",
            "lg:max-w-[60.25rem]",
            "xl:max-w-[65rem]",
          )}
        >
          <h1
            className={clsx(
              "text-san-juan-blue-100 text-center font-bold text-4xl mb-[2.6rem]",
              "md:text-5xl md:mb-[6rem]",
              "lg:text-left lg:w-full lg:px-8",
            )}
          >
            Pricing
          </h1>
          <ul
            className={clsx(
              "mb-32",
              "md:flex md:justify-center md:px-8 gap-4 md:mb-24",
            )}
          >
            <li
              className={clsx(
                "flex flex-col items-center mb-12",
                "lg:items-start",
              )}
            >
              <p className={clsx("text-dark-pink font-bold text-2xl mb-10")}>
                Free Plan
              </p>
              <p
                className={clsx(
                  "sr-only text-san-juan-blue-50 text-center",
                  "md:not-sr-only",
                  "lg:text-left",
                )}
              >
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <p
                className={clsx(
                  "font-dm-serif text-[3.4rem] text-san-juan-blue-100 mb-[2.4rem]",
                )}
              >
                $0.00
              </p>
              <div
                className={clsx(
                  "grid grid-cols-[15px_auto] gap-x-6 gap-y-1 border-y border-y-san-juan-blue-50/50",
                  "py-[1.6rem] w-full items-center justify-center mb-5",
                  "lg:justify-start",
                )}
              >
                {pricing_data.free.map((el, idx) => (
                  <React.Fragment key={idx}>
                    <span
                      className="w-fit"
                      aria-label={el.available ? "includes" : "excludes"}
                    >
                      {el.available && <CheckMark className="w-[0.8rem]" />}
                    </span>
                    <span
                      className={clsx(
                        el.available
                          ? "text-san-juan-blue-100"
                          : "text-san-juan-blue-50",
                        "w-fit",
                      )}
                    >
                      {el.feature}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <button
                className={clsx(
                  "text-san-juan-blue-100 border border-san-juan-blue-100 rounded-full font-bold",
                  "py-[0.85rem] px-[1.6rem] hover:bg-san-juan-blue-100 hover:text-pale-blue",
                  "transition-colors duration-300",
                )}
              >
                Request Access
              </button>
            </li>
            <li
              className={clsx(
                "flex flex-col items-center mb-12",
                "lg:items-start",
              )}
            >
              <p className={clsx("text-dark-pink font-bold text-2xl mb-10")}>
                Basic Plan
              </p>
              <p
                className={clsx(
                  "sr-only text-san-juan-blue-50 text-center",
                  "md:not-sr-only",
                  "lg:text-left",
                )}
              >
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <p
                className={clsx(
                  "font-dm-serif text-[3.4rem] text-san-juan-blue-100 mb-[2.4rem]",
                )}
              >
                $249.00
              </p>
              <div
                className={clsx(
                  "grid grid-cols-[15px_auto] gap-x-6 gap-y-1 border-y border-y-san-juan-blue-50/50",
                  "py-[1.6rem] w-full items-center justify-center mb-5",
                  "lg:justify-start",
                )}
              >
                {pricing_data.basic.map((el, idx) => (
                  <React.Fragment key={idx}>
                    <span
                      className="w-fit"
                      aria-label={el.available ? "includes" : "excludes"}
                    >
                      {el.available && <CheckMark className="w-[0.8rem]" />}
                    </span>
                    <span
                      className={clsx(
                        el.available
                          ? "text-san-juan-blue-100"
                          : "text-san-juan-blue-50",
                        "w-fit",
                      )}
                    >
                      {el.feature}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <button
                className={clsx(
                  "text-san-juan-blue-100 border border-san-juan-blue-100 rounded-full font-bold",
                  "py-[0.85rem] px-[1.6rem] hover:bg-san-juan-blue-100 hover:text-pale-blue",
                  "transition-colors duration-300",
                )}
              >
                Request Access
              </button>
            </li>

            <li
              className={clsx(
                "flex flex-col items-center mb-12",
                "lg:items-start",
              )}
            >
              <p className={clsx("text-dark-pink font-bold text-2xl mb-10")}>
                Premium Plan
              </p>
              <p
                className={clsx(
                  "sr-only text-san-juan-blue-50 text-center",
                  "md:not-sr-only",
                  "lg:text-left",
                )}
              >
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <p
                className={clsx(
                  "font-dm-serif text-[3.4rem] text-san-juan-blue-100 mb-[2.4rem]",
                )}
              >
                $499.00
              </p>
              <div
                className={clsx(
                  "grid grid-cols-[15px_auto] gap-x-6 gap-y-1 border-y border-y-san-juan-blue-50/50",
                  "py-[1.6rem] w-full items-center justify-center mb-5",
                  "lg:justify-start",
                )}
              >
                {pricing_data.premium.map((el, idx) => (
                  <React.Fragment key={idx}>
                    <span
                      key={`premium-check-${idx}`}
                      className="w-fit"
                      aria-label={el.available ? "includes" : "excludes"}
                    >
                      {el.available && <CheckMark className="w-[0.8rem]" />}
                    </span>
                    <span
                      key={`premium-feature-${idx}`}
                      className={clsx(
                        el.available
                          ? "text-san-juan-blue-100"
                          : "text-san-juan-blue-50",
                        "w-fit",
                      )}
                    >
                      {el.feature}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <button
                className={clsx(
                  "text-san-juan-blue-100 border border-san-juan-blue-100 rounded-full font-bold",
                  "py-[0.85rem] px-[1.6rem] hover:bg-san-juan-blue-100 hover:text-pale-blue",
                  "transition-colors duration-300",
                )}
              >
                Request Access
              </button>
            </li>
          </ul>
          <Ready />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
