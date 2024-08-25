import clsx from "clsx";
import { FormTextFieldProps } from "@/lib/types";

const FormTextField: React.FC<FormTextFieldProps> = ({
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        rows={3}
        {...register(name)}
        className={clsx(
          error ? "border-b-red-700" : "border-b-light-pale",
          "w-full pl-6 py-4 border-b bg-pale-blue outline-none",
          "focus:border-b focus:border-b-san-juan-blue-100",
        )}
      />
      {error && (
        <span
          className={clsx(
            "text-red-700 absolute top-0 right-0 text-sm",
            "text-base",
          )}
        >
          {error.message}
        </span>
      )}
    </>
  );
};

export default FormTextField;
