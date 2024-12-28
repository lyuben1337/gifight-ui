import * as React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Container({ className, children }: Props) {
  const containerClassName = clsx(
    className,
    "bg-gradient-to-b from-gray-800 to-gray-900 to-95%",
    "rounded-lg shadow-md",
  );

  return <div className={containerClassName}>{children}</div>;
}
