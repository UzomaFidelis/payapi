import React from "react";
import Tesla from "../icons/tesla";
import Microsoft from "../icons/microsoft";
import Hp from "../icons/hp";
import Oracle from "../icons/oracle";
import Google from "../icons/google";
import Nvidia from "../icons/nvidia";
import clsx from "clsx";

const Sponsors = ({ iconFill }: { iconFill: string }) => {
  return (
    <ul
      className={clsx(
        "grid grid-cols-[auto_auto] gap-x-16 justify-center gap-y-9 items-center mb-[3.23rem]",
        "md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:mb-16",
        "lg:gap-x-8 lg:gap-y-10",
      )}
    >
      <li className="mx-auto">
        <Tesla
          className={clsx("w-28", "md:w-[8.3rem]", "lg:w-28")}
          fill={iconFill}
          aria-label="tesla"
        />
      </li>
      <li className="mx-auto">
        <Microsoft
          className={clsx("w-28", "md:w-[9rem]", "lg:w-28")}
          fill={iconFill}
          aria-label="microsoft"
        />
      </li>
      <li className="mx-auto">
        <Hp
          className={clsx("w-28", "md:w-[8.9rem]", "lg:w-28")}
          fill={iconFill}
          aria-label="hp, hewlett packard"
        />
      </li>
      <li className="mx-auto">
        <Oracle
          className={clsx("w-28", "md:w-[8.3rem]", "lg:w-28")}
          fill={iconFill}
          aria-label="oracle"
        />
      </li>
      <li className="mx-auto">
        <Google
          className={clsx("w-20", "md:w-[6rem]", "lg:w-28")}
          fill={iconFill}
          aria-label="google"
        />
      </li>
      <li className="mx-auto">
        <Nvidia
          className={clsx("w-28", "md:w-[8.3rem]", "lg:w-28")}
          fill={iconFill}
          aria-label="nvidia"
        />
      </li>
    </ul>
  );
};

export default Sponsors;
