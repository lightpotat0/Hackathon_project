import "./globals.css";

export const metadata = {
  title: "GetVagas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
