'use client'
import { FaRegCalendarCheck, FaPaintBrush, FaHandHoldingUsd, FaClipboardList, FaUsersCog, FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variant1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, y: -100, transition: { duration: .7, } }
}
const variant2 = {
    visible: { opacity: 1, transition: { duration: .7, delay: .2 } },
    hidden: { opacity: 0, transition: { duration: .7, } }
}
const variant3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .4} },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, } }
}

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
  const planning_con = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(planning_con, { margin: "0px 0px -60% 0px", once: false})
  const controls = useAnimationControls()

  useEffect(() => {
      controls.start(isInView ? "visible" : "hidden")
  }, [isInView, controls]);
  return (
    <section ref={planning_con} className="relative flex flex-col items-center pt-20 pb-28 px-5 sm:px-20">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.h2 variants={variant1} animate={controls} className="text-4xl leading-[3rem] md:text-6xl font-light text-center md:leading-[6rem] text-[var(--background)] font-outline-black drop-shadow-[0_0_5px_var(--background)] black-ops">Our Event Planning Process</motion.h2>
        <motion.p variants={variant2} animate={controls} className="text-xl text-[var(--background)] mt-4">Step-by-step, we bring your vision to life.</motion.p>
      </div>

      <motion.div variants={variant3} animate={controls} className="max-w-[1200px] mt-10 flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        {steps.map((step) => (
          <div key={step.id} className="group flex flex-col items-center text-center p-6 border border-[var(--background)] hover:bg-[var(--background)] duration-300 shadow-lg rounded-2xl">
            <div className="p-4 bg-gray-200 rounded-full mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--background)] group-hover:text-[var(--foreground)] duration-300 opacity-75">{step.title}</h3>
            <p className="text-[var(--background)] group-hover:text-[var(--foreground)] duration-300 mt-2">{step.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
