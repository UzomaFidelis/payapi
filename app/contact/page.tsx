import React from "react";
import clsx from "clsx";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Sponsors from "@/components/ui/sponsors";
import Ready from "@/components/ui/ready";
import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <div className={clsx("bg-pale-blue")}>
      <div className="flex flex-col items-center">
        <Header />
      </div>
      <main className="pb-[6.4rem]">
        <h1 className="sr-only">Contact Us</h1>
        <div
          className={clsx(
            "pt-[4.5rem] px-6",
            "md:flex md:flex-col md:items-center md:pt-12",
            "lg:px-7 lg:items-start",
            "xl:px-10",
          )}
        >
          <h2
            className={clsx(
              "font-dm-serif font-bold text-center text-4xl text-san-juan-blue-100 mb-[4rem] tracking-wider",
              "md:text-5xl md:max-w-[90%] md:leading-[1.2] md:mb-[4.5rem]",
              "lg:text-left lg:max-w-[65%]",
            )}
          >
            Submit a help request and we'll get in touch shortly.
          </h2>
          <div
            className={clsx(
              "md:flex md:flex-col md:items-center",
              "lg:flex-row lg:w-full lg:justify-between lg:mb-[5rem] lg:max-w-[70rem]",
            )}
          >
            <ContactForm />
            <div>
              <div className="mb-12">
                <h2
                  className={clsx(
                    "font-bold text-2xl text-center text-san-juan-blue-100",
                    "md:max-w-[30rem]",
                    "lg:text-left lg:pl-3",
                  )}
                >
                  Join the thousands of innovators already building with us
                </h2>
              </div>
              <div className="mb-20">
                <Sponsors iconFill={"hsl(207, 33%, 32%)"} />
              </div>
            </div>
          </div>
          <Ready />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
