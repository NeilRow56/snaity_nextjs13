import Banner from "components/Banner";
import Header from "components/Header";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
