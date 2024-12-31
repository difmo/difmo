import React from 'react';

const Page = () => {
  return (
    <div className="bg-[#8e878708] text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
      <div className="md:p-10 p-6 md:px-40 sm:mx-[2rem] md:mt-3 mt-7">
        <h2 className="md:text-3xl mb-4 p-4 sm:p-0 text-4xl font-lilita font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
          Legal Notice
        </h2>

        <p>This is the Cookie Policy for Difmo Technologies, accessible from info@difmo.com</p>

        <h3 className="font-bold mt-6">What Are Cookies</h3>
        <p>
          As is common practice with almost all professional websites, this site uses cookies, which are tiny files downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, but this may downgrade or 'break' certain elements of the site's functionality.
        </p>

        <h3 className="font-bold mt-6">How We Use Cookies</h3>
        <p>
          We use cookies for various reasons detailed below. Unfortunately, in most cases, there are no industry-standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave all cookies enabled unless you are sure you do not need them for a service you use.
        </p>

        <h3 className="font-bold mt-6">Disabling Cookies</h3>
        <p>
          You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites. Disabling cookies will usually result in disabling certain functionality and features of the site. Therefore, it is recommended that you do not disable cookies.
        </p>

        <h3 className="font-bold mt-6">The Cookies We Set</h3>
        <ul className="list-disc ml-6">
          <li>Forms related cookies: When you submit data through a form, cookies may be set to remember your user details for future correspondence.</li>
        </ul>

        <h3 className="font-bold mt-6">Third Party Cookies</h3>
        <p>
          In some special cases, we also use cookies provided by trusted third parties. This section details which third-party cookies you might encounter through this site.
        </p>
        <p>
          This site uses Google Analytics, one of the most widespread and trusted analytics solutions on the web, to help us understand how you use the site and how we can improve your experience. These cookies may track things such as how long you spend on the site and the pages you visit so we can continue to produce engaging content.
        </p>

        <h3 className="font-bold mt-6">More Information</h3>
        <p>
          Hopefully, this has clarified things for you. As mentioned earlier, if you're not sure whether you need cookies or not, it's safer to leave them enabled to avoid interference with any site features you use.
        </p>
        <p>
          If you need more information, you can contact us through the following method: Email: info@difmo.com
        </p>
      </div>
    </div>
  );
};

export default Page;
