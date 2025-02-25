'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import services from '@/data/services'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    useEffect(() => {
        gsap.to('.about-con-p', { y: 0, opacity: 1, duration: 1, ease: "power1.out", scrollTrigger: { trigger: ".services-con", start : "top 40%", toggleActions: "play pause resume reverse"}, });
    }, [])

  return (
    <div className='services-con w-full flex flex-col items-center px-5 sm:px-20 py-[100px] bg-[var(--background)] text-[var(--background)]'>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[var(--background)] font-semibold font-outline-black drop-shadow-[0_0_5px_var(--background)] mb-5 space-mono-bold">
            Services
        </h3>
        <h2 className='text-3xl leading-[2.5rem] sm:text-5xl sm:leading-[3.5rem] font-bold text-center font-outline-black drop-shadow-[0_0_5px_var(--background)] space-mono-bold mb-[70px]'>Our Expertise, Your Vision</h2>
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-10 justify-center mb-[70px]">
            {services.slice(0, 4).map((service, index) => (
                <div key={index} className="group relative w-[300px] h-[400px] hover:border border-[var(--background)] hover:shadow-lg hover:shadow-[var(--foreground)] hover:-translate-y-5 overflow-hidden duration-500 transition-transform">
                    <Image className={`w-full h-full object-cover brightness-50`} src={service.main_img} alt="img" width={500} height={700} />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-center text-[var(--background)] font-black drop-shadow-[0_0_5px_var(--background)]  black-ops">{service.name}</div>
                    <div className="absolute left-0 top-full group-hover:top-0 z-10 w-full h-full px-5 py-5 bg-[var(--primary)] text-center text-[var(--background)] flex flex-col justify-center gap-2 duration-500 ease-in-out">
                        <h3 className='relative text-xl font-bold top-full group-hover:top-0 duration-500 delay-100 ease-in-out'>{service.name}</h3>
                        <p className='relative text-lg font-light top-full group-hover:top-0 duration-500 delay-150 ease-in-out'>{service.snippet}</p>
                    </div>
                </div>
            ))}
        </div>
        <Link href='/services' className='relative w-fit px-8 py-2 bg-transparent text-[var(--foreground)] text-2xl font-light border border-[var(--foreground)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300'>More Services</Link>
    </div>
  )
}
