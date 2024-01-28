"use client";

import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="max-container flex items-center justify-between p-6">
      <Link href="/" className="text-3xl font-bold">
        Logo
      </Link>
      <ul className="flex flex-1 items-center justify-end gap-16 max-lg:hidden">
        <li className="flex items-center">
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
};
