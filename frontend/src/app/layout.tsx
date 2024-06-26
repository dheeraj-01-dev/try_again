import type { Metadata } from "next";
import { Inter, Itim } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const itim = Itim({ weight: "400", style: "normal", subsets: ["latin"]}) 

export const metadata: Metadata = {
  title: "Batalusa",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className={itim.className}>
        <div className="navChildren">
          {children}
        </div>
        <div id="globalToast">
          <div id="toastText">Say me Anything!</div>
        </div>
      </body>
    </html>
  );
}
