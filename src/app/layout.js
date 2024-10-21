import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";

export const metadata = {
  title: "Difmo Technologies",
  description:
    "Enhancing Customer Experience with Innovative Web and Mobile App Solutions",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />

        <div className="mt-[82px] min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
