export default function EmployeeStories() {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Senior Developer",
      image: "/sarah-chen.jpg", // Replace with actual image URL
      feedback:
        "The growth opportunities here are incredible. I started as a junior developer and within 3 years, I'm leading major projects and mentoring others.",
    },
    {
      name: "Marcus Johnson",
      position: "Product Manager",
      image: "/marcus-johnson.jpg", // Replace with actual image URL
      feedback:
        "The collaborative culture and focus on innovation make this a truly special place to work. Every day brings new challenges and opportunities.",
    },
  ];

  return (
    <section className="text-left py-12 px-6  md:px-6 lg:px-14">
      <h3 className="text-sm text-gray-500 uppercase">Employee Stories</h3>
      <h2 className="text-3xl font-bold mt-2 text-gray-800">
        Hear from Our Team
      </h2>

      <div className="flex flex-wrap mt-8 gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex max-w-lg items-start space-x-4 text-left"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full bg-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
