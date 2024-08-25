import { FieldError, UseFormRegister } from "react-hook-form";

type ValidFieldNames = "name" | "email" | "companyName" | "title" | "message";

export type FormData = {
  name: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
};

export type FormTextFieldProps = {
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type FormFieldProps = FormTextFieldProps & {
  type: string;
};
