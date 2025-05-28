import { Inter } from "next/font/google";
import "../style/globals.scss";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", 'cyrillic']
});

export const metadata = {
  title: "CYBERZION",
  description: "CYBERZION company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
