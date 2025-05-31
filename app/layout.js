import "./globals.css";
import { Manrope } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Header from "./components/Header";

//Font Init
const manrope = Manrope({
  subsets: ["latin"],
});

//Metadata
export const metadata = {
  title: "PersonaQuest",
  description:
    "Take a fun and insightful flashcard quiz to find out your Myers-Briggs personality type. Free, fast, and interactive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
