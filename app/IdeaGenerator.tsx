'use client'
import { FaMagic, FaLightbulb, FaSpinner } from "react-icons/fa";
import TextFormater from "./TextFormater";
import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variant1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, y: 200, transition: { duration: .7, } }
}
const variant2 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .2 } },
    hidden: { opacity: 0, y: 200, transition: { duration: .7, } }
}
const variant3 = {
  visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .4} },
  hidden: { opacity: 0, y: 200, transition: { duration: .7, } }
}

export default function IdeaGenerator() {
    const ai_con = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ai_con, { margin: "0px 0px -60% 0px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
      controls.start(isInView ? "visible" : "hidden")
    }, [isInView, controls]);
    
    const [eventType, setEventType] = useState("");
    const [budget, setBudget] = useState("");
    const [vibe, setVibe] = useState("");
    const [idea, setIdea] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const generateIdea = async () => {
        if (!eventType || !budget || !vibe) {
          alert("Please fill in all fields before generating an idea.");
          return;
        }
      
        setLoading(true);
        setIdea(null);
      
        try {
          const response = await fetch("/api/generateIdea", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventType, budget, vibe }),
          });
      
          const data = await response.json();
          setIdea(data.idea || "Sorry, no idea generated. Try again!");
        } catch (error) {
          console.error("Error generating idea:", error);
          setIdea("Something went wrong. Please try again.");
        }
      
        setLoading(false);
      };

  return (
    <section ref={ai_con} className="relative flex flex-col items-center pt-28 pb-10 px-6 md:px-12 text-center">
      <div className="max-w-5xl ">
        <motion.h2 variants={variant1} animate={controls} className="text-3xl leading-[2.5rem] sm:text-5xl sm:leading-[3.5rem] font-bold text-[var(--background)] flex items-center justify-center gap-3 max-w-[1000px]  drop-shadow-[0_0_5px_var(--background)] black-ops">
          AI-Powered Event Idea Generator
        </motion.h2>
        <motion.p variants={variant2} animate={controls} className="text-[var(--background)] opacity-75 mt-4">Not sure what event to plan? Let AI inspire you with a unique idea!</motion.p>

        <motion.div variants={variant3} animate={controls} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Event Type (e.g., Wedding, Corporate)"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Budget (e.g., Low, Medium, High)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Vibe (e.g., Elegant, Fun, Relaxed)"
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
        </motion.div>

        <motion.button
          variants={variant3} animate={controls} 
          onClick={generateIdea}
          className="mt-6 px-6 py-3 flex items-center justify-center gap-2 mx-auto bg-transparent text-[var(--background)] text-xl font-light border border-[var(--background)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300"
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaLightbulb />} Generate Idea
        </motion.button>

        {idea && (
          <div className="mt-6 p-6 shadow-lg rounded-xl border border-[var(--background)] text-left">
            {/* <h3 className="text-xl font-semibold text-gray-800">Your AI-Generated Event Idea:</h3> */}
            <div className="mt-2 text-[var(--background)]">
              <TextFormater text={idea} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
