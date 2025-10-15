"use client";

import { usePathname } from "next/navigation";
import Footer from "./page";

export default function FooterWrapper() {
  const pathname = usePathname();
  const noHeaderRoutes = ["/login", "/cadastro", "/"];
  const showHeader = !noHeaderRoutes.includes(pathname);

  return showHeader ? <Footer /> : null;
}
