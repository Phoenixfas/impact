import React from 'react'

export default function HeroContent() {
  return (
    <div className='relative w-full h-screen flex flex-col items-center sm:items-center justify-center px-5 sm:px-10 md:px-20 pt-20 sm:pb-20'>
        <h1 className='max-w-[90%] text-[1.8rem] leading-[2.5rem] sm:text-5xl md:text-[4rem] md:leading-[5rem] lg:text-[5rem] lg:leading-[6rem] tracking-widest text-center sm:text-center font-bold mb-10 text-[var(--foreground)] uppercase drop-shadow-[0_0_5px_var(--foreground)] sm:font-outline-white black-ops'>Crafting Experiences <br /> Creating Impact</h1>
        {/* <p className='text-[var(--foreground)] text-sm sm:text-lg text-center'>Millennium Hall, June 19-21, 2025</p> */}
    </div>
  )
}
