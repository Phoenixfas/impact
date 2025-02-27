'use client'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroContent() {
  const heroH = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.to(heroH.current, { opacity: 0, duration: 2, ease: "power1.inOut", scrollTrigger: { trigger: ".hero-con", start: "top -5%", end: "top -50%", scrub: true, }, });
  }, [])

  return (
    <div className='hero-con relative w-full h-screen flex flex-col items-center sm:items-start justify-center px-5 sm:px-10 md:px-20 pt-20 sm:pb-20 overflow-hidden'>
        <h1 ref={heroH} className='hero-h relative max-w-[800px] text-[1.5rem] leading-[2.2rem] sm:text-5xl md:text-[4rem] md:leading-[5rem] lg:text-[5rem] lg:leading-[6rem] tracking-[1rem] text-center sm:text-left font-black mb-10 text-[var(--background)] uppercase drop-shadow-[0_0_5px_var(--background)] sm:font-outline-black  space-mono-bold'>Crafting Experiences <br /> Creating Impact</h1>
        {/* <p className='text-[var(--foreground)] text-sm sm:text-lg text-center'>Millennium Hall, June 19-21, 2025</p> */}
    </div>
  )
}
