import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  color: "green" | "blue" | "gray" | 'red'
  className?: string;
}

export function Button({ children, color, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`rounded-md  bg-gradient-to-r 
			 transition  duration-300 from-${color}-400 
			 to-${color}-700 py-2 px-4 text-white ${className} hover:scale-105 
				hover:opacity-80

			 `}
      {...rest}
    >
      {children}
    </button>
  );
}
