export const metadata = {
  title: "Difmo Technologies - Custom Software & Mobile App Development",
  description:
    "Difmo Technologies provides top-tier mobile and web app development, AI-powered business automation, and cloud computing solutions.",
  keywords:
    "mobile app development, software development, mobile app development company, app development business, application development company, app making company, app building company, mobile application development, app development, mobile development company, app development services, mobile app development services, mobile development, create a mobile app, build a mobile app, app building software, app creation software, design an app, mobile application developers, mobile app development near me, mobile app company, web and mobile app development company, web app development services, mobile development services, mobile application development company, mobile application development services, app dev company, build a software, software company development, mobile phone app development, mobile app software development, creating a phone app, app software developers, company app development, mobile app dev, application making software, application building software, build mobile application, software making, mobile app making software, software for web development, best software for mobile app development, making mobile app, mobile software development company, mobile app development company website, mobile apps for business, web development technologies, software development businesses, mobile development technologies, mobile apps developers, app dev software, developing software applications, mobile application development technologies, software development technologies, services software development, mobile app development app, tech software, software app design, web & mobile app development company, best mobile application development company, mobile app development sites, mobile application design company, best mobile development company, mobile app development packages, development software company, best app development services, best software for developing apps, app developers, app development agency, app making software, application developer, top app developers, website development software, app development firm, native app development, top mobile app development companies, app development for mobile, mobile apps technologies, it developer, app coding software, mobile app development agency, website app development, mobile application technologies, app development platform, developing software solutions, website and app development company, mobile app development firm, software programming, enterprise mobile application development companies, enterprise mobile app development companies, mobile development agency, best technologies for mobile app development, top mobile app developers, developer apps, software application developer, create mobile application, mobile application development software, mobile app development platform, software development website, top app development company, computer developer, software solutions development, software build, computer software developer, native mobile app development, application development agency, software and app development, mobile app design development, mobile and app development, software dev, mobile application dev, mobile app design & development, ios mobile app development company, software to develop, mobile application development agency, software in development, software development web, mobile app development website, top mobile application development company, it software development, application development platform, native mobile app, top mobile development companies, web and mobile development, r&d software, mobile application companies, application development firm, mobile application and development, mobile dev, mobile application development platform, mobile development platform, application programming, the software developer, sw development, mobile application design and development, native app development company, computer software development, native mobile development, sw developer, native mobile application development, mobile application development firm, native mobile app development company, soft developer, dev software, mobile application platform, web and mobile, difmo technologies custom software development services, difmo cloud computing solutions for enterprises, difmo ai powered business automation tools, difmo saas platform for digital transformation, best difmo mobile app development services, difmo software solutions for e-commerce businesses, difmo enterprise IT consulting and support",
  author: "Difmo Technologies",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// import { Meta } from "react-router-dom";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import "./globals.css";
// import Head from "next/head";
// export const metadata = {
//   title: "Difmo Technologies",
//   description:
//     "Enhancing Customer Experience with Innovative Web and Mobile App Solutions",
// };
// // fsdlkf;
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
// <Head>
//   <Meta/>
// </Head>
//       <body className="">
//         <Header />

//         <div className="min-h-screen bg-white">{children}</div>
//         <Footer />
//       </body>
//     </html>
//   );
// }
