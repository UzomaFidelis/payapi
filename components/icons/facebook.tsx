import clsx from "clsx";

type IconProps = React.SVGProps<SVGSVGElement>;

const Facebook: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      fill="#fff"
      viewBox="-5.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className={clsx(
        className,
        "hover:fill-san-juan-blue-50 transition-colors duration-300",
      )}
    >
      <title>facebook</title>
      <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path>
    </svg>
  );
};

export default Facebook;
