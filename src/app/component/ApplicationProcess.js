export default function ApplicationProcess() {
  const steps = [
    {
      icon: "📄", // Replace with actual icon component
      title: "Apply Online",
      description: "Submit your application through our career portal",
    },
    {
      icon: "📞", // Replace with actual icon component
      title: "Initial Interview",
      description: "Phone screening with our recruitment team",
    },
    {
      icon: "👥", // Replace with actual icon component
      title: "Team Interview",
      description: "Meet your potential future teammates",
    },
    {
      icon: "✅", // Replace with actual icon component
      title: "Offer & Onboarding",
      description: "Welcome to the team!",
    },
  ];

  return (
    <section className="text-left py-12 px-6 bg-gray-100  md:px-6 lg:px-14">
      <h3 className="text-sm text-gray-500 uppercase">Application Process</h3>
      <h2 className="text-3xl font-bold mt-2 text-gray-800">
        Your Journey to Joining Us
      </h2>

      <div className="flex flex-wrap text-left gap-12 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col text-left  max-w-xs">
            <div className="bg-black text-white w-12 h-12 flex text-left rounded-lg text-2xl">
              {step.icon}
            </div>
            <h3 className="font-semibold mt-4 text-gray-800">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
