import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
  return (
    <div className='relative overflow-hidden w-full flex flex-col items-center justify-center px-5 sm:px-20 py-[200px] bg-[var(--foreground)] text-[var(--background)]'>
        <div className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(#ffffff33_0%,_transparent_50%)]"></div>
        <p className='w-full text-2xl font-light text-center md:text-3xl md:leading-[2.5rem] max-w-[1000px]'>Impactful Events is a premier event management company based in Dubai, specializing in transforming visions into extraordinary experiences. From high-profile corporate conferences to luxury celebrations, our team blends innovation, strategic planning, and creativity to ensure seamless execution. Our goal is not just to create events but to leave lasting impressions that inspire and connect.</p>
        <Link href='/about' className='relative w-fit px-8 py-2 bg-[var(--primary)] text-[var(--background)] text-2xl font-light border border-[var(--primary)] hover:bg-transparent hover:text-[var(--background)] duration-300 mt-10'>About Us</Link>
    </div>
  )
}
