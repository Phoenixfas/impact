'use client'
import Image from 'next/image'
import services from '@/data/services'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
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

export default function ServicesSection() {
    const services_con = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(services_con, { margin: "0px 0px -60% 0px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
    }, [isInView, controls]);

  return (
    <div ref={services_con} className='services-con w-full flex flex-col items-center px-5 sm:px-20 py-[100px] bg-[var(--background)] text-[var(--background)]'>
        <motion.h3 variants={variant1} animate={controls} className="text-xl sm:text-2xl md:text-3xl text-[var(--background)] font-semibold font-outline-black drop-shadow-[0_0_5px_var(--background)] mb-5 black-ops">
            Services
        </motion.h3>
        <motion.h2 variants={variant2} animate={controls} className='text-3xl leading-[2.5rem] sm:text-5xl sm:leading-[3.5rem] font-bold text-center font-outline-black drop-shadow-[0_0_5px_var(--background)] black-ops mb-[70px]'>Our Expertise, Your Vision</motion.h2>
        <motion.div variants={variant3} animate={controls} className="w-full flex flex-wrap lg:flex-nowrap gap-10 justify-center mb-[70px]">
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
        </motion.div>
        <Link href='/services' className='relative w-fit px-8 py-2 bg-transparent text-[var(--foreground)] text-2xl font-light border border-[var(--foreground)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300'>More Services</Link>
    </div>
  )
}
