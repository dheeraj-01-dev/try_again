import type { Metadata } from "next";
import { Exo_2, Inter, Itim } from "next/font/google";
import "./globals.css";
import ConnectToSocketIO from "@/components/ConnectToSocketIO";



const inter = Inter({ subsets: ["latin"] });
const itim = Itim({ weight: "400", style: "normal", subsets: ["latin"]}) 
const exo = Exo_2({weight: "400", subsets: ["cyrillic"]})

export const metadata: Metadata = {
  title: "Batalusa",
  description: "battleroya esports tournaments battleroya.com"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className={exo.className}>
        <div className="navChildren">
          {children}
        </div>
        <div id="globalToast">
          <div id="toastText">Say me Anything!</div>
        </div>
        <ConnectToSocketIO />
      </body>
    </html>
  );
}
