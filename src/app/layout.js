import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web3 Women Summit24",
  description: "Web3 Women summit 2024 is happening on 8-10 March 2024. We welcome you all to the Web3 Woman Summit, a platform that explores the endless possibilities offered by blockchain technology, decentralization, and the digital revolution. This summit aims to bring together remarkable women at the forefront of the technological revolution to engage in discussions, workshops, keynote speeches, and networking opportunities. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
