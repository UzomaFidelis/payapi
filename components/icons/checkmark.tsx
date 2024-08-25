import clsx from "clsx";

type IconProps = React.SVGProps<SVGSVGElement>;

const CheckMark: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 14 11"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className ? className : "w-4")}
      {...props}
    >
      <path
        d="M1 5.718L4.893 9.56l8.107-8"
        stroke="#BA4270"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CheckMark;
