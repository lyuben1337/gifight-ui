import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export function Input({ className, ...rest }: Props) {
  const inputClassName = clsx(
    className,
    "w-full bg-gray-900 text-gray-100 rounded-md p-3 py-2 ring-2 ring-opacity-50 ring-gray-600",
    "focus:outline-none focus:ring focus:ring-blue-500",
    "transition duration-200 ease-in-out",
  );

  return <input className={inputClassName} {...rest} />;
}
