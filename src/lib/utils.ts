import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getLocalStorage = () => {
  if (typeof localStorage === "undefined") {
    return { theme: "light" };
  }

  return localStorage;
};
