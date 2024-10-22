"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/aboutbg2.jpg";
import webdevlopment from "../assets/webdevlopment .jpg";
import webimage from "../assets/dev.jpg";
import software from "../assets/projectImages/sh.png";
import appdev from "../assets/appdevs.png";
import apiint from "../assets/apiint.png";
import crmimg from "../assets/crmimg.png";
import consulating from "../assets/consulating.png";
import iot from "../assets/iot.png";
import ailear from "../assets/ailear.png";
import sofware1 from "../assets/imagess.png";
import Contactus from "../component/Contactus";

const Products = () => {
  const cardData = [
    {
      id: 1,
      title: "Web Development",
      // imageUrl: webimage, // Add your image path here
      imageUrl: software,
    },
    {
      id: 2,
      title: "Software development",
      imageUrl: webimage, // Add your image path here
      // imageUrl: software, // Add your image path here
    },
    {
      id: 3,
      title: "App development",
      imageUrl: appdev, // Add your image path here
    },
    {
      id: 4,
      title: "3rd Party API's integration",
      imageUrl: apiint, // Add your image path here
    },
    {
      id: 5,
      title: "CRM development",
      imageUrl: crmimg, // Add your image path here
    },
    {
      id: 6,
      title: "Software consulting",
      imageUrl: consulating, // Add your image path here
    },
    {
      id: 7,
      title: "IOT & Automation",
      imageUrl: iot, // Add your image path here
    },
    {
      id: 8,
      title: "Machine Learning & AI",
      imageUrl: ailear, // Add your image path here
    },
    {
      id: 9,
      title: "Software Re-engineering",
      imageUrl: sofware1,
    },
  ];

  return (
    <>

 
 
      <div className="w-full h-[250px] md:h-[400px] mb-6 relative">
        <Image
          src={webdevlopment}
          alt="About Illustration"
          layout="fill"
          objectFit="cover"
          className="rounded-b-[20%]"
        />
      </div>

      <div className="py-2 pb-8">
  <div className="mx-4 sm:mx-8 lg:mx-16">
    <div className="my-7">
      <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
        Defeat App: Food and Water Services by Difmo Technology
      </h2>
      <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
        The Defeat App by Difmo Technology provides a streamlined and efficient solution for ordering food and water services. Designed to cater to both individual needs and bulk orders, Defeat offers the convenience of accessing clean drinking water and a variety of meal options from trusted suppliers.
      </p>
      <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
        The app features:
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li className="sm:pt-2">
          <strong>Quick Food and Water Ordering:</strong> Users can browse through menus and water delivery services, place orders instantly, and track their delivery in real-time.
        </li>
        <li className="sm:pt-2">
          <strong>Personalized Recommendations:</strong> Based on user preferences and order history, the app suggests food and beverage options to enhance the customer experience.
        </li>
        <li className="sm:pt-2">
          <strong>Subscription Services:</strong> For regular users, Defeat provides a subscription feature for daily or weekly water and meal deliveries, ensuring convenience and timely service.
        </li>
        <li className="sm:pt-2">
          <strong>Secure Payment Options:</strong> Integrated with multiple payment gateways, Defeat ensures secure and seamless transactions.
        </li>
        <li className="sm:pt-2">
          <strong>Real-time Updates:</strong> Users receive notifications for order confirmation, delivery status, and promotional offers.
        </li>
      </ul>
    </div>

    <div className="flex justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-warm-gray rounded-tr-[2rem] rounded-bl-[2rem] p-3 md:mx-0 mx-5 shadow-2xl transition-transform transform"
          >
            <div className="text-center">
              <div className="h-[100px] w-[100px] rounded-full overflow-hidden flex items-center justify-center mx-auto">
                <Image
                  src={card.imageUrl} // Use the image URL from the cardData
                  alt={card.title}
                  width={100} // Set the width
                  height={100} // Set the height
                  className="h-full w-full object-cover" // Add styling to the image
                />
              </div>

              <h2 className="md:text-[16px] text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-1">
                {card.title}
              </h2>
              <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[12px] leading-relaxed md:leading-loose tracking-wide text-justify">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      <div className="mx-4 sm:mx-8 lg:mx-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 rounded-lg">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
              Elevating Your Business with Cutting-Edge Web Solutions
            </h2>
            <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              In today's fast-paced digital age, staying ahead isn’t just an
              advantage—it’s essential. With customer preferences evolving
              rapidly and brand loyalty fleeting, businesses must innovate to
              remain competitive. At Difmo Technologies, we understand the pulse
              of the digital landscape and provide cutting-edge custom web
              development services that position your brand to thrive. We’re not
              just building websites; we’re creating immersive digital
              experiences. Our tailored web design solutions ensure your online
              presence is compelling and unique. Whether you’re launching a new
              brand or refining an existing one, our skilled developers are
              dedicated to turning your vision into reality, with affordability
              and innovation at the core. At Difmo Technologies, we are driven
              by a commitment to excellence, pushing the boundaries of what’s
              possible to help your business soar. Trust us for forward-thinking
              web solutions that keep you at the forefront of your industry.
            </p>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
              className="w-full max-w-md bg-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-warm-gray py-2 pb-8">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
              Mastering Web Application Technologies for Your Success
            </h2>
            <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              At Difmo Technologies, years of expertise have made us leaders in
              web development. We've mastered the latest technologies to build
              fast, secure, and scalable web applications tailored to your
              unique business needs. Stay ahead with innovative solutions
              powered by the best in tech, only from Difmo.
            </p>
          </div>

          <div className="flex justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-warm-gray rounded-tr-[2rem] rounded-bl-[2rem] p-3 md:mx-0 mx-5 shadow-2xl transition-transform transform"
                >
                  <div className="text-center ">
                    <div className="h-[100px] w-[100px]  rounded-full overflow-hidden flex items-center justify-center mx-auto">
                      <Image
                        src={card.imageUrl} // Use the image URL from the cardData
                        alt={card.title}
                        width={100} // Set the width
                        height={100} // Set the height
                        className="h-full w-full object-cover" // Add styling to the image
                      />
                    </div>

                    <h2 className="md:text-[16px] text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-1">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[12px] leading-relaxed md:leading-loose tracking-wide text-justify">
                      {/* <p className="font-concert text-start text-gray-700 leading-relaxed"> */}
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 pb-8   bg-warm-gray p-4 ">
        <div className="rounded-lg shadow-2xl p-1">

  <Contactus/>
        </div>
</div>

    </>
  );
};

export default Products;
