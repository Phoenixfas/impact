'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variant1 = {
  visible: { opacity: 1, y: 0, transition: { duration: .7, } },
  hidden: { opacity: 0, y: 200, transition: { duration: .7, } }
}

export default function AboutSection() {
  const about_con = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(about_con, { margin: "0px 0px -60% 0px", once: false})
  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden")
  }, [isInView, controls]);

  return (
    <div ref={about_con} className='about-con overflow-hidden w-full flex flex-col items-center justify-center px-5 sm:px-20 py-[100px] bg-transparent text-[var(--background)]'>
      <motion.div variants={variant1} animate={controls} className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(#ffffff33_0%,_transparent_50%)]"></div>
        <p className='relative w-full text-2xl font-light text-center md:text-3xl md:leading-[2.5rem] max-w-[1000px]'>Impactful Events is a premier event management company based in Dubai, specializing in transforming visions into extraordinary experiences. From high-profile corporate conferences to luxury celebrations, our team blends innovation, strategic planning, and creativity to ensure seamless execution. Our goal is not just to create events but to leave lasting impressions that inspire and connect.</p>
        <Link href='/about' className='relative mt-6 px-6 py-3 flex items-center justify-center gap-2 mx-auto bg-transparent text-[var(--background)] text-2xl font-light border border-[var(--background)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300'>About Us</Link>
      </motion.div>
    </div>
  )
}
