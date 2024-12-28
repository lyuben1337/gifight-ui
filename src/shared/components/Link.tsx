import * as React from "react";
import clsx from "clsx";
import { Link as ReactRouterLink } from "react-router";

type Props = {
  className?: string;
  children?: React.ReactNode;
  to: string;
};

export function Link({ className, children, ...rest }: Props) {
  const linkClassName = clsx(
    "relative inline-block text-blue-400 group",
    className,
  );

  return (
    <ReactRouterLink className={linkClassName} {...rest}>
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full bg-blue-400 transition-all duration-200" />
    </ReactRouterLink>
  );
}
