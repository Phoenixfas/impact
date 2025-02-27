'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variant1 = {
    visible: { opacity: 1, scale: 1, transition: { duration: .3, } },
    hidden: { opacity: 0, scale: 0, transition: { duration: .3, } }
}
const variant2 = {
    visible: { opacity: 1, scale: 1, transition: { duration: .3, delay: .2 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: .3, } }
}

export default function WhyUs() {
  const whyUs = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(whyUs, { margin: "0px 0px -90% 0px", once: false})
  const controls = useAnimationControls()

  useEffect(() => {
      controls.start(isInView ? "visible" : "hidden")
  }, [isInView, controls]);

  return (
    <div ref={whyUs} id='why-us' className='why-us relative w-full flex flex-col items-center justify-center px-20 sm:px-40 py-[300px] text-[var(--foreground)] overflow-hidden'>
        <motion.div variants={variant1} animate={controls} className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(#16697A88_0%,_transparent_50%)]"></motion.div>
        <div className="relative w-fit  flex flex-col items-center justify-center text-center">
            <motion.div variants={variant1} animate={controls} className="absolute w-full h-full ">
                <p className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[calc(100%)] bg-[var(--primary)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-xs sm:text-xl font-light">Innovative <br />Designs</p>
                <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+100px)] bg-[var(--primary)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-xs sm:text-xl font-light">Seamless <br />Execution</p>
                <p className="absolute top-0 right-0 translate-x-1/2 -translate-y-[calc(100%)] bg-[var(--primary)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-xs sm:text-xl font-light">Expert <br />Team</p>
                <p className="absolute bottom-0 left-[10%] sm:left-1/4 -translate-x-1/2 translate-y-[calc(100%+50px)] bg-[var(--primary)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-xs sm:text-xl font-light">Client-Centric <br />Approach</p>
                <p className="absolute bottom-0 right-[10%] sm:right-1/4 translate-x-1/2 translate-y-[calc(100%+50px)] bg-[var(--primary)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-xs sm:text-xl font-light">Global <br />Reach</p>
            </motion.div>
            <motion.h3 variants={variant2} animate={controls} className='w-full text-4xl leading-[3rem] md:text-6xl font-light text-center md:leading-[6rem] max-w-[800px] text-[var(--background)] font-outline-black drop-shadow-[0_0_5px_var(--background)] black-ops'> Why Impact Makers Events? </motion.h3>
        </div>
    </div>
  )
}
