import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const socialLinks = [
  {
    href: "https://www.facebook.com/difmotech",
    icon: <FaFacebook size={20} />,
  },
  {
    href: "https://x.com/difmotech",
    icon: <FaTwitter size={20} />,
  },
  {
    href: "https://in.linkedin.com/company/difmo",
    icon: <FaLinkedin size={20} />,
  },
  {
    href: "https://www.instagram.com/thedifmo",
    icon: <FaInstagram size={20} />,
  },
  {
    href: "https://www.youtube.com/@thedifmo",
    icon: <FaYoutube size={24} />, // Slightly bigger for YouTube
  },
];
export default function FAQSection() {
  return (
    <div className="px-2 md:max-w-screen-2xl mx-auto text-gray-700  pt-10">
      <p className="text-2xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </p>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="p-4   bg-white">
          <h3 className="font-semibold">What are your response times?</h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            We typically respond to all inquiries within 24 hours during
            business days. For urgent matters, please call our support line.
          </p>
        </div>
        <div className="p-4   bg-white">
          <h3 className="font-semibold">Do you offer emergency support?</h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            Yes, we provide 24/7 emergency support for critical issues. Please
            call our emergency hotline at +91 945-579-1624.
          </p>
        </div>
        <div className="p-4   bg-white">
          <h3 className="font-semibold">
            Can I schedule an in-person meeting?
          </h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            Yes, you can schedule an in-person meeting at our office. Please
            contact us via email or phone to arrange an appointment.
          </p>
        </div>
        <div className="p-4   bg-white ">
          <h3 className="font-semibold">What’s your refund policy?</h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            We offer a 30-day money-back guarantee on all our services. Please
            refer to our terms and conditions for detailed information.
          </p>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="pt-14">
        <span className="pb-6 font-bold text-2xl text-gray-700 flex justify-center">
          Connect With Us
        </span>
        <div className="flex space-x-6 justify-center items-center">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary-orange transition-all duration-300"
            >
              <div className="text-gray-400 hover:text-white transition-all duration-300">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
