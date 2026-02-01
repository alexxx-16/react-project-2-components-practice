import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  console.log("Button coordinates: ", e.clientX, e.clientY);
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={handleClick}
      className={`py-2 rounded-full shadow-md text-white font-bold px-5 bg-yellow-400 hover:bg-yellow-500 transition-colors disabled:opacity-50 w-20 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
