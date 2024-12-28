import * as React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
  type?: "submit";
};

export function Button({ className, children, ...rest }: Props) {
  const buttonClassName = clsx(
    className,
    "transition-colors w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md p-3 py-2 font-semibold",
  );

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
}
