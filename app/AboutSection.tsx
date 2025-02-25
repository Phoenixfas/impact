'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useEffect(() => {
    gsap.to('.about-con-p', { y: 0, opacity: 1, duration: 1, ease: "power1.out", scrollTrigger: { trigger: ".about-con", start : "top 40%", end: "bottom top", toggleActions: "play none none reverse"} });
    // gsap.to('.about-con-a', { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1,0.5)", scrollTrigger: { trigger: ".about-con", start : "top 30%", toggleActions: "play pause resume reverse"}, });
  }, [])

  return (
    <div className='about-con overflow-hidden w-full flex flex-col items-center justify-center px-5 sm:px-20 py-[100px] bg-transparent text-[var(--background)]'>
      <div className="about-con-p relative w-full translate-y-[200px] opacity-0 flex flex-col items-center justify-center">
        <div className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(#ffffff33_0%,_transparent_50%)]"></div>
        <p className='w-full text-2xl font-light text-center md:text-3xl md:leading-[2.5rem] max-w-[1000px]'>Impactful Events is a premier event management company based in Dubai, specializing in transforming visions into extraordinary experiences. From high-profile corporate conferences to luxury celebrations, our team blends innovation, strategic planning, and creativity to ensure seamless execution. Our goal is not just to create events but to leave lasting impressions that inspire and connect.</p>
        <Link href='/about' className='about-con-a w-fit px-8 py-2 bg-[var(--primary)] text-[var(--background)] text-2xl font-light border border-[var(--primary)] hover:bg-transparent hover:text-[var(--background)] duration-300 mt-10'>About Us</Link>
      </div>
    </div>
  )
}
