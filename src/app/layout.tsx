import { ReactNode } from "react";
import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baijamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-baijamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma capsula do tempo construída com Next.js e TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
