import Image from "next/image";
import { technicalBlog } from "../../component/blogss"; // Adjust the import path
import about from "../../assets/about.jpg";
import Link from "next/link";

// This will generate the static paths at build time
export async function generateStaticParams() {
  const paths = technicalBlog.map((project) => ({
    id: project.id.toString(),
  }));

  return paths.map((params) => ({
    params,
  }));
}

const ProjectDetails = ({ params }) => {
  const { id } = params;
  const project = technicalBlog.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Image
          src={about}
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8 md:px-16">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-orange-300 sm:text-xl lg:text-2xl">
            Discover insights and inspiration on Difmo’s web development!
          </p>
          <button className="px-4 py-2 mt-4 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-orange-500" aria-label="Explore more blogs">
            Explore More Blogs
          </button>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto p-6 md:p-12">
      <h2 className="md:text-4xl text-xl font-lilita mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
                    {/* {blog.title.length > 16 ? `${blog.title.substring(0, 16)}...` : blog.title} */}
                    {project.title}
                  </h2>
       
        <div className="relative w-full h-[350px] sm:h-[250px] md:h-[300px] lg:h-[600px] mb-6 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            // objectFit="cover" // Ensure the image fills the area nicely
            className="rounded-lg"
            placeholder="blur" // Optional: Add blur placeholder for smoother loading
          />
        </div>

        {/* Text Section */}
          {/* <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p> */}
       <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
      <div>
        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
        <p className="text-base mb-4">
          React Native, the powerhouse framework for building cross-platform mobile applications, has recently launched its highly anticipated version 0.74. Bursting with a plethora of new features and enhancements, this update is poised to redefine the landscape of mobile development. In this extensive guide, we will delve deep into the exciting changes introduced in React Native 0.74, providing a detailed analysis of what’s new, what’s improved, and the benefits users can anticipate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">A Comprehensive Overview of the Latest Features and Enhancements</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Yoga 3.0 Integration: Enhancing Layout Rendering with Yoga 3.0</h3>
        <p className="text-base mb-4">
          A standout feature of React Native 0.74 is the integration of Yoga 3.0, a powerful layout engine that governs the rendering of components. With Yoga 3.0, developers can expect significant improvements in layout rendering, resulting in smoother and more responsive user interfaces. By harnessing the capabilities of Yoga 3.0, React Native apps can achieve enhanced performance and stability, delivering a seamless user experience across platforms. This integration signifies a major leap forward in React Native’s rendering capabilities, setting the stage for unprecedented levels of UI sophistication and interactivity.
        </p>
        <p className="text-base mb-4">
          The integration of Yoga 3.0 lays the foundation for unparalleled levels of UI sophistication and interactivity, empowering developers to create immersive and engaging user experiences. With its powerful layout engine, Yoga 3.0 enables precise control over component positioning, sizing, and alignment, allowing developers to craft pixel-perfect designs with ease. Moreover, the efficiency and flexibility of Yoga 3.0 facilitate rapid iteration and experimentation, enabling developers to iterate on their designs with confidence.
        </p>
        <p className="text-base mb-4">
          Furthermore, the integration of Yoga 3.0 underscores React Native’s commitment to delivering cutting-edge solutions for mobile app development. By embracing the latest advancements in layout rendering technology, React Native 0.74 sets a new standard for performance and stability, ensuring that apps built with the framework deliver a seamless user experience across platforms. Whether it’s optimizing for different screen sizes, supporting dynamic content layouts, or achieving smooth animations, Yoga 3.0 equips developers with the tools they need to bring their creative visions to life.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Minimum Android SDK Requirement Bumped: Elevating Compatibility and Performance Standards</h3>
        <p className="text-base mb-4">
          In a strategic move aimed at improving compatibility and performance, React Native 0.74 has elevated the minimum Android SDK requirement to version 23 (Android 6.0). By aligning with the latest Android standards, this change ensures that React Native apps can leverage the newest platform features and optimizations. Furthermore, developers can capitalize on enhanced compatibility with a broader range of Android devices, facilitating wider app adoption and improved user satisfaction. This decision underscores React Native’s commitment to staying abreast of platform advancements and delivering cutting-edge mobile experiences to users worldwide.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Benefits: What Users Can Expect?</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Performance and Stability: Unleashing Enhanced Performance and Stability</h4>
        <p className="text-base mb-4">
          With optimizations under the hood and the integration of Yoga 3.0, React Native 0.74 promises significant enhancements in performance and stability. Apps built with this latest version are poised to exhibit smoother animations, faster rendering, and reduced latency, resulting in a more immersive user experience. The streamlined rendering pipeline and refined layout engine contribute to improved frame rates and responsiveness, ensuring that apps feel fluid and responsive even on resource-constrained devices. This boost in performance sets the stage for a new era of high-performance mobile applications powered by React Native.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Optimizing Rendering Pipeline for Enhanced Efficiency</h4>
        <p className="text-base mb-4">
          In React Native 0.74, significant efforts have been made to optimize the rendering pipeline, resulting in enhanced efficiency and performance. By fine-tuning the internal mechanisms responsible for rendering components, this update ensures that apps built with React Native 0.74 deliver smoother animations, faster rendering, and reduced latency. The streamlined rendering pipeline minimizes unnecessary overhead and ensures that UI updates are processed with minimal delay, resulting in a more responsive and fluid user experience. Additionally, optimizations in the rendering pipeline contribute to improved frame rates and responsiveness, even on resource-constrained devices, setting the stage for a new era of high-performance mobile applications powered by React Native.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Strengthening Stability with Robust Error Handling</h4>
        <p className="text-base mb-4">
          Another key focus of React Native 0.74 is strengthening stability through robust error handling mechanisms. By implementing comprehensive error handling strategies and improving error reporting capabilities, this update enhances the resilience of React Native apps, ensuring smoother operation and fewer crashes. The framework now provides developers with better insights into runtime errors and exceptions, enabling them to identify and address issues more effectively. Additionally, improved error handling mechanisms help developers diagnose and troubleshoot problems more efficiently, reducing the likelihood of app crashes and enhancing overall stability. With strengthened stability, React Native 0.74 empowers developers to build robust and reliable mobile applications that provide a seamless user experience under various conditions.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Optimized App Size: Streamlining App Delivery and Installation Processes</h4>
        <p className="text-base mb-4">
          Another noteworthy benefit of React Native 0.74 is the optimization of app size. By removing deprecated PropTypes and implementing various size-reducing optimizations, this update helps to trim down the app’s bundle size, resulting in expedited download and installation times for end users. The streamlined app size not only enhances user experience by reducing wait times but also contributes to improved app performance, especially on devices with limited resources. Moreover, the reduced memory footprint translates into smoother app operation, ensuring a seamless user experience even on older or lower-end devices. Additionally, the smaller app size leads to reduced bandwidth usage and storage requirements, making it more convenient for users to download and retain the app on their devices. This optimization streamlines the app delivery process, ensuring a frictionless user experience from download to installation.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Batched onLayout Updates: Enhancing UI Responsiveness and Stability</h4>
        <p className="text-base mb-4">
          In React Native 0.74, the framework introduces batched state updates for onLayout events, a feature that significantly enhances UI responsiveness and stability. This optimization ensures that layout changes are processed efficiently, resulting in smoother transitions and a more polished user interface. By batching multiple layout updates into a single render pass, React Native minimizes unnecessary re-renders and layout recalculations, leading to a more responsive and fluid user experience. This enhancement is particularly beneficial for complex UIs with dynamic content that frequently triggers layout changes. By reducing UI flickering and ensuring consistent rendering, batched onLayout updates contribute to a seamless and stable user experience across all devices, ultimately enhancing user satisfaction and engagement.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Removal of Deprecated PropTypes: Streamlining the Development Experience</h4>
        <p className="text-base mb-4">
          React Native 0.74 bids farewell to deprecated PropTypes, which have been phased out since React 15.5 was released in 2017. This significant change not only streamlines the framework’s API but also contributes to a reduction in bundle size and memory usage. By removing built-in PropTypes for Image, Text, TextInput, Color, EdgeInsets, Point, and View, developers can enjoy a leaner and more efficient development experience. This simplification of the API surface also makes it easier for developers to onboard and maintain React Native projects, leading to improved code quality and developer productivity.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">New APIs and Enhancements for Android: Empowering Android Development Excellence</h4>
        <p className="text-base mb-4">
          In addition to iOS improvements, React Native 0.74 introduces a slew of enhancements for Android development. From performance optimizations to new APIs, this update empowers developers to create high-quality cross-platform apps with ease. Whether it’s leveraging the latest Android features or fine-tuning app performance, React Native 0.74 sets the stage for unparalleled mobile experiences on the Android platform. With improved tooling and support for modern Android development practices, developers can build innovative and feature-rich apps that cater to the diverse needs of Android users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="text-base mb-4">
          React Native 0.74 marks a monumental leap forward in the landscape of cross-platform mobile development. With its comprehensive array of new features and enhancements, this update significantly elevates the standards for performance, stability, and developer productivity. By embracing React Native 0.74, developers can unlock a plethora of new possibilities and deliver unparalleled mobile experiences to users worldwide. Moreover, in the quest for excellence in mobile app development, businesses can leverage the vast talent pool of developers available in India. With its reputation as a hub for top-notch tech talent, India offers a wealth of opportunities to hire the best developers or outsource development projects. The abundance of skilled professionals, coupled with cost-effective solutions, makes India an ideal destination for sourcing talent and achieving outstanding results in app development.
        </p>
        <p className="text-base mb-4">
          As we embark on this journey of innovation and excellence with React Native 0.74, let us seize the opportunity to tap into the expertise of India’s finest developers and propel our mobile apps to new heights of success. Together, we can revolutionize the mobile landscape and deliver transformative experiences that leave a lasting impact on users across the globe.
        </p>
      </div>
    </div>
      </div>
    </>
  );
};

export default ProjectDetails;
