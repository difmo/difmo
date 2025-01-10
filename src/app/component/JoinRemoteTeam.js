import Image from "next/image";
import Link from "next/link";

const JoinRemoteTeam = () => {
  return (
    <div className=" flex items-center justify-center  px-4 md:px-12 lg:px-16 my-5">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10 bg-gradient-to-b bg-secondary border-secondary  rounded-xl shadow-lg">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Ready to take the next step in your career
          </h1>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            At Difmo Technologies, we are at the forefront of technological
            advancements, working on cutting-edge projects in Mobile App
            Development, Web Application Development, Artificial Intelligence &
            Machine Learning (AI/ML), and Robotics. We are seeking passionate
            and talented professionals to join our dynamic team and contribute
            to creating impactful solutions that redefine industries. If you’re
            ready to collaborate with like-minded innovators, work on exciting
            technologies, and grow your career in a fast-paced, forward-thinking
            environment, we’d love to hear from you. Apply now and be a part of
            our journey to transform the future!
          </p>
          <Link
            href="/apply-job"
            className=" bg-red-700 rounded-3xl flex justify-center hover:bg-[#ff8d89] text-white font-medium py-2 px-6"
          >
            Apply Now
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-64 lg:h-auto rounded-xl overflow-hidden bg-blue-200 ">
          <Image
            src="/image/a1.jpg" // Replace with the actual image path
            alt="Team Member"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinRemoteTeam;
