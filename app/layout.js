import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <body>
      <main>{children}</main>
    </body>
  );
}
