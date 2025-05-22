import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { faqs } from "../Alldata";
import { FaQuestionCircle } from "react-icons/fa"; // Example icon

gsap.registerPlugin(ScrollTrigger);

function ScrollPage() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        const updateAnimation = () => {
            const sectionWidth = section.scrollWidth;
            const viewportWidth = window.innerWidth;
            const scrollDistance = sectionWidth - viewportWidth;

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            gsap.to(section, {
                x: () => `-${scrollDistance}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        };

        updateAnimation();
        window.addEventListener("resize", updateAnimation);
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener("resize", updateAnimation);
        };
    }, []);

    return (
        <div className="text-[#e6e6e6] font-sans">
            <section className="overflow-hidden">
                <div ref={triggerRef}>
                    <div
                        ref={sectionRef}
                        className="flex h-screen items-center space-x-6 px-10"
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.item}
                                className="bg-white min-w-[300px] h-[400px] rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 p-6 group"
                            >
                                <div className="flex flex-col h-full justify-between">
                                    {/* Icon */}
                                    <div className="flex items-center gap-2 text-indigo-600 mb-4">
                                        <FaQuestionCircle className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {faq.question}
                                        </h2>
                                    </div>

                                    {/* Answer */}
                                    <p className="text-gray-600 text-sm flex-1">
                                        {faq.answer}
                                    </p>

                                    {/* Button */}
                                  
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ScrollPage;
