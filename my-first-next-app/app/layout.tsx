import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import './globals.css';

export default function MainLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}