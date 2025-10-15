// app/layout.js (Server Component)
import "./globals.css";
import HeaderWrapper from "@/components/header/headerWrapper";
import FooterWrapper from "@/components/footer/footerWrapper";

export const metadata = {
  title: "GETvagas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderWrapper />
        {children}
        <FooterWrapper/>
      </body>
    </html>
  );
}
