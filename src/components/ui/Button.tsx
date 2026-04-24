import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd"
> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "light";
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[8px] text-[14px] leading-none transition-colors duration-150 focus:outline-none focus:shadow-[rgba(0,0,0,0.1)_0px_4px_12px]";
  const variantClasses = {
    primary:
      "bg-[#ebeae5] text-[#26251e] border border-[rgba(38,37,30,0.1)] px-[14px] py-[10px] hover:text-[#cf2d56]",
    secondary:
      "bg-[#e6e5e0] text-[rgba(38,37,30,0.6)] rounded-full px-2 py-[3px] hover:text-[#cf2d56]",
    tertiary:
      "bg-[#e1e0db] text-[rgba(38,37,30,0.6)] rounded-full px-2 py-[3px] hover:text-[#cf2d56]",
    ghost:
      "bg-[rgba(38,37,30,0.06)] text-[rgba(38,37,30,0.55)] px-3 py-[6px] hover:text-[#cf2d56]",
    light:
      "bg-[#f7f7f4] text-[#26251e] px-3 py-[6px] border border-[rgba(38,37,30,0.1)] hover:text-[#cf2d56]",
  } as const;

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
