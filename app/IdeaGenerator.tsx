'use client'
import { useState } from "react";
import { FaMagic, FaLightbulb, FaSpinner } from "react-icons/fa";
import TextFormater from "./TextFormater";

export default function IdeaGenerator() {
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
    <section className="bg-[var(--background)] pt-28 pb-10 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
          <FaMagic className="text-[var(--primary)]" /> AI-Powered Event Idea Generator
        </h2>
        <p className="text-gray-600 mt-4">Not sure what event to plan? Let AI inspire you with a unique idea!</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>

        <button
          onClick={generateIdea}
          className="mt-6 px-6 py-3 flex items-center justify-center gap-2 mx-auto bg-transparent text-[var(--foreground)] text-xl font-light border border-[var(--foreground)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300"
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaLightbulb />} Generate Idea
        </button>

        {idea && (
          <div className="mt-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200 text-left">
            {/* <h3 className="text-xl font-semibold text-gray-800">Your AI-Generated Event Idea:</h3> */}
            <div className="mt-2 text-gray-700">
              <TextFormater text={idea} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
