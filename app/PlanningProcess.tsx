import { FaRegCalendarCheck, FaPaintBrush, FaHandHoldingUsd, FaClipboardList, FaUsersCog, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Initial Consultation & Discovery",
    description:
      "Discuss event goals, budget, and preferences. We offer a free consultation to understand your vision.",
    icon: <FaRegCalendarCheck className="text-blue-500 text-3xl" />,
  },
  {
    id: 2,
    title: "Event Concept & Design",
    description:
      "Develop themes, décor ideas, and event branding. Our team creates mood boards and visual mockups.",
    icon: <FaPaintBrush className="text-yellow-500 text-3xl" />,
  },
  {
    id: 3,
    title: "Budgeting & Vendor Coordination",
    description:
      "Finalize event budget and coordinate with trusted vendors, ensuring the best deals and seamless execution.",
    icon: <FaHandHoldingUsd className="text-green-500 text-3xl" />,
  },
  {
    id: 4,
    title: "Event Planning & Logistics",
    description:
      "Plan timelines, guest management, transportation, and contingency strategies for a stress-free experience.",
    icon: <FaClipboardList className="text-red-500 text-3xl" />,
  },
  {
    id: 5,
    title: "Event Execution & On-Site Management",
    description:
      "Supervise setup, vendors, and troubleshooting, ensuring everything runs smoothly on the big day.",
    icon: <FaUsersCog className="text-purple-500 text-3xl" />,
  },
  {
    id: 6,
    title: "Post-Event Wrap-Up & Follow-Up",
    description:
      "Cleanup, feedback collection, and post-event media sharing. We ensure a complete wrap-up with client satisfaction.",
    icon: <FaCheckCircle className="text-gray-500 text-3xl" />,
  },
];


export default function PlanningProcess() {
  return (
    <section className="bg-[var(--foreground)] pt-20 pb-28 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl leading-[3rem] md:text-6xl font-light text-center md:leading-[6rem] text-[var(--background)] font-outline-black drop-shadow-[0_0_5px_var(--background)] black-ops">Our Event Planning Process</h2>
        <p className="text-xl text-[var(--background)] mt-4">Step-by-step, we bring your vision to life.</p>
      </div>

      <div className="mt-10 flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl">
            <div className="p-4 bg-gray-200 rounded-full mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
