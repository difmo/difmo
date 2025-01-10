import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";

export const metadata = {
  title: "Difmo Technologies",
  description:
    "Enhancing Customer Experience with Innovative Web and Mobile App Solutions",
};
// fsdlkf;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />

        <div className="min-h-screen bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
