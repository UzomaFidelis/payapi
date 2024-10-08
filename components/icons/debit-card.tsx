type IconProps = React.SVGProps<SVGSVGElement>;

const DebitCard: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="106"
      height="106"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <circle id="a" cx="53" cy="53" r="53" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#36536B" xlinkHref="#a" />
        <path
          d="M72.01 49.948c.518 0 .938.42.938.937v10.339a5.39 5.39 0 01-5.39 5.39H38.39A5.39 5.39 0 0133 61.225V50.885c0-.517.42-.937.938-.937zm-29.036 4.219h-2.5a1.64 1.64 0 100 3.28h2.5a1.64 1.64 0 100-3.28zM67.557 40a5.39 5.39 0 015.391 5.39v.34c0 .517-.42.937-.938.937H33.937a.938.938 0 01-.937-.938v-.338A5.39 5.39 0 0138.39 40z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default DebitCard;
