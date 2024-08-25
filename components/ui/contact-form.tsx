"use client";

import clsx from "clsx";
import CheckMark from "../icons/checkmark";
import { useForm } from "react-hook-form";
import { FormData } from "@/lib/types";
import FormField from "./form-field";
import FormTextField from "./form-text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/validation";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "text-san-juan-blue-100 flex flex-col gap-[1.7rem] mb-[5.1rem]",
        "md:max-w-[30rem]",
        "lg:max-w-[28rem] lg:mb-0",
      )}
    >
      <label className="relative">
        <FormField
          type="text"
          placeholder="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <span className="sr-only">name</span>
      </label>
      <label className="relative">
        <FormField
          type="email"
          placeholder="Email Address"
          name="email"
          register={register}
          error={errors.email}
        />
        <span className="sr-only">email</span>
      </label>
      <label className="relative">
        <FormField
          type="text"
          placeholder="Company Name"
          name="companyName"
          register={register}
          error={errors.companyName}
        />
        <span className="sr-only">company name</span>
      </label>
      <label className="relative">
        <FormField
          type="text"
          placeholder="Title"
          name="title"
          register={register}
          error={errors.title}
        />
        <span className="sr-only">title</span>
      </label>
      <label className="relative">
        <FormTextField
          placeholder="Message"
          name="message"
          register={register}
          error={errors.message}
        />
        <span className="sr-only">message</span>
      </label>
      <div className="mt-3 ">
        <label
          htmlFor="stay-updated"
          className="flex gap-4 items-center px-4 mb-4"
        >
          <span
            className={clsx(
              "flex justify-center items-center w-[22px] h-[22px] leading-0 text-0 border border-san-juan-blue-100",
              "bg-san-juan-blue-50/15 cursor-pointer shrink-0",
            )}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="stay-updated"
              className="peer hidden"
            />
            <CheckMark className="w-4 hidden peer-checked:block" aria-hidden />
          </span>
          <span className="text-san-juan-blue-50 text-lg">
            Stay up-to-date with company announcements and updates to our API
          </span>
        </label>
        <button
          type="submit"
          className={clsx(
            "border border-san-juan-blue-100 font-bold rounded-full py-3 px-12",
            "hover:bg-san-juan-blue-100 hover:text-pale-blue",
          )}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
