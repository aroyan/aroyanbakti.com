import "./globals.css";
import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">Home</Link>
  </nav>
);

export default function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <body>{children}</body>
    </>
  );
}
