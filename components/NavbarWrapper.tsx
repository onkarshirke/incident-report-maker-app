"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import SimpleHeader from "./SimpleHeader";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Show SimpleHeader on sign-in and sign-up pages
  if (pathname === "/auth/signin" || pathname === "/auth/signup") {
    return <SimpleHeader />;
  }

  return <Navbar />;
}
