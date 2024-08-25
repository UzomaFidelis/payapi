import clsx from "clsx";

const Ready = () => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        "md:gap-4",
        "lg:flex-row lg:justify-between lg:w-full",
      )}
    >
      <h2
        className={clsx(
          "text-4xl tracking-wide text-center text-san-juan-blue-100 font-dm-serif font-bold mb-8",
          "md:text-5xl",
          "lg:mb-0 lg:text-3xl",
        )}
      >
        Ready to start?
      </h2>
      <form action="" className={clsx("md:relative w-full", "md:w-[34.5rem]")}>
        <input
          type="email"
          placeholder="Enter email address"
          className={clsx(
            "w-full rounded-full text-lg px-6 py-3 font-dm-serif mb-4 shadow-md",
            "md:mb-0 md:pr-52 hover:shadow-lg",
          )}
        />
        <button
          className={clsx(
            "w-full bg-dark-pink text-water-white p-[0.9rem] rounded-full font-bold mb-5",
            "md:absolute md:top-0 md:bottom-0 md:right-0 md:w-fit md:mb-0 md:px-8 md:h-full md:py-0",
            "hover:bg-charm-pink transition-colors duration-300",
          )}
        >
          Schedule a Demo
        </button>
      </form>
    </div>
  );
};

export default Ready;
