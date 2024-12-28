import * as React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Text({ children, className }: Props) {
  const textClassName = clsx(className, "text-gray-100 font-bold");

  return <p className={textClassName}>{children}</p>;
}
