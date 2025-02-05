import Head from "next/head";

const sections = [
  {
    title: "Introduction to Software Maintenance",
    content: [
      {
        heading: "What is Software Maintenance?",
        text: "Software maintenance refers to the ongoing efforts required to keep software running, fix bugs, enhance features, and ensure security. It is a crucial phase in the Software Development Life Cycle (SDLC).",
      },
      {
        heading: "Types of Software Maintenance",
        list: [
          "Corrective Maintenance: Fixing bugs and issues after deployment.",
          "Adaptive Maintenance: Adjusting the software to work with new environments.",
          "Perfective Maintenance: Improving performance and adding new features.",
          "Preventive Maintenance: Proactively preventing issues from arising in the future.",
        ],
      },
      {
        heading: "Software Life Cycle",
        text: "Maintenance is a critical phase that ensures the software remains effective and secure long after its initial development and deployment.",
      },
    ],
  },
  {
    title: "Key Challenges in Software Maintenance",
    content: [
      {
        text: "Software maintenance is not without its challenges. Some of the major difficulties include:",
        list: [
          "Handling Legacy Code: Maintaining poorly documented or outdated code can be time-consuming and error-prone.",
          "Scaling Maintenance Efforts: Large, complex systems require ongoing attention and are harder to scale for maintenance.",
          "Managing Technical Debt: Technical debt accumulates over time and can hinder future development and maintenance.",
          "Security Issues: Keeping the software secure and up to date with the latest vulnerabilities can be daunting.",
        ],
      },
    ],
  },
  {
    title: "Best Practices in Software Maintenance",
    content: [
      {
        list: [
          "Documentation: Keep all documentation up-to-date to facilitate efficient maintenance.",
          "Automated Testing: Implement automated tests to catch bugs early and ensure stability.",
          "Version Control: Use Git and other version control systems to manage updates and track changes.",
          "Modular Code: Write modular and clean code to make future changes more manageable.",
          "Performance Optimization: Continuously monitor and optimize performance to avoid slowdowns.",
        ],
      },
    ],
  },
  {
    title: "Tools and Technologies for Effective Software Maintenance",
    content: [
      {
        list: [
          "Version Control: Git, GitHub, GitLab",
          "CI/CD: Jenkins, GitLab CI, CircleCI",
          "Bug Tracking: Jira, Trello, GitHub Issues",
          "Performance Monitoring: New Relic, Datadog, Prometheus",
          "Static Analysis: SonarQube",
        ],
      },
    ],
  },
  {
    title: "Security Maintenance",
    content: [
      {
        list: [
          "Security Best Practices: Regularly patch vulnerabilities and conduct code reviews.",
          "Compliance Updates: Ensure the software meets the latest compliance standards like GDPR or HIPAA.",
          "Data Protection: Implement encryption and authentication protocols to protect user data.",
        ],
      },
    ],
  },
];

export default function SoftwareMaintenance() {
  return (
    <>
      <Head>
        <title>Software Maintenance</title>
        <meta name="description" content="Learn about Software Maintenance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 text-gray-900 pt-24">
        <header className="bg-red-600 text-white py-6 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Software Maintenance
            </h1>
            <p className="text-lg sm:text-xl mt-2">
              The essential guide to maintaining software applications
            </p>
          </div>
        </header>

        <main className="py-12 px-4 sm:px-6 lg:px-20">
          {sections.map((section, index) => (
            <section key={index} className="space-y-10 mt-16">
              <h2 className="text-left text-3xl sm:text-4xl md:text-4xl py-6 font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
                {section.title}
              </h2>
              {section.content.map((content, idx) => (
                <div key={idx}>
                  {content.heading && (
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                      {content.heading}
                    </h3>
                  )}
                  {content.text && (
                    <p className="text-base sm:text-lg">{content.text}</p>
                  )}
                  {content.list && (
                    <ul className="list-disc pl-5 space-y-3">
                      {content.list.map((item, i) => (
                        <li key={i} className="text-base sm:text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
