"use client";

import { usePathname } from "next/navigation";
import Header from "./page";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const noHeaderRoutes = ["/login", "/cadastro", "/"];
  const showHeader = !noHeaderRoutes.includes(pathname);

  return showHeader ? <Header /> : null;
}
