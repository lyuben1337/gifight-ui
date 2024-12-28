import * as React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Title({ children, className }: Props) {
  const titleClassName = clsx(className, "text-gray-100 text-2xl font-bold");

  return <h1 className={titleClassName}>{children}</h1>;
}
