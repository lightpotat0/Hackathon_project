// app/layout.js (Server Component)
import "./globals.css";
import HeaderWrapper from "@/components/header/headerWrapper";

export const metadata = {
  title: "GETvagas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
