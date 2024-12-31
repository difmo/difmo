import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-[#8e878708] text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
      <div className="md:p-10 p-6 md:px-40 sm:mx-[2rem] md:mt-3 mt-7">
        <h2 className="md:text-3xl mb-4 p-4 sm:p-0 text-4xl font-lilita font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
          Terms & Conditions
        </h2>

        <p>
          <strong>Acceptance of Terms</strong><br />
          By accessing our website or using our services, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
        </p>

        <p>
          <strong>Services</strong><br />
          Difmo Technologies offers customized solutions for web application and mobile application development. Our services are tailored to meet your specific business needs, delivering high-quality, innovative digital solutions.
        </p>

        <p>
          <strong>User Responsibilities</strong><br />
          You agree to use our services responsibly and in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of any login information associated with your account.
        </p>

        <p>
          <strong>Intellectual Property</strong><br />
          All content, trademarks, logos, and intellectual property rights related to our services are the property of Difmo Technologies. You may not use, reproduce, or distribute any content from our website or services without prior written consent.
        </p>

        <p>
          <strong>Privacy</strong><br />
          Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
        </p>

        <p>
          <strong>Limitation of Liability</strong><br />
          Difmo Technologies shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of profits, data, or business interruption.
        </p>

        <p>
          <strong>Changes to Terms</strong><br />
          Difmo Technologies reserves the right to update or modify these Terms of Service at any time. We will notify you of any changes by posting the updated terms on our website. Continued use of our services after such modifications shall constitute your consent to the updated terms.
        </p>

        <p>
          <strong>Contact Us</strong><br />
          If you have any questions or concerns regarding these Terms of Service, please contact us at:<br />
          <strong>Difmo Technologies</strong><br />
          <a href="https://www.difmo.com" className="text-blue-600 underline">www.difmo.com</a><br />
          Phone: +91 945-579-1624<br />
          Email: <a href="mailto:info@difmo.com" className="text-blue-600 underline">info@difmo.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
