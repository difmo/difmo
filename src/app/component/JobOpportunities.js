export default function JobOpportunities() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      location: "Lucknow",
      tags: ["Full-time", "Remote"],
      link: "/apply-job",
    },
    {
      title: "Product Designer",
      location: "Lucknow",
      tags: ["Full-time", "Hybrid"],
      link: "/apply-job",
    },
    {
      title: "Marketing Manager",
      location: "Lucknow",
      tags: ["Full-time", "On-site"],
      link: "/apply-job",
    },
  ];

  return (
    <section className="text-left py-12 px-6 bg-gray-100  md:px-6 lg:px-14">
      <h3 className="text-sm text-gray-500 uppercase">Current Opportunities</h3>
      <h2 className="text-3xl font-bold mt-2 text-gray-900">
        Find Your Next Role
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md flex flex-col "
          >
            <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
            <p className="text-gray-500">{job.location}</p>
            <div className="flex gap-2 mt-3">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={job.link}
              className="mt-4 px-6 py-3 text-center bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
