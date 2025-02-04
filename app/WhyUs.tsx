import React from 'react'

export default function WhyUs() {
  return (
    <div id='why-us' className='relative w-full flex flex-col items-center justify-center px-20 sm:px-40 py-[300px] text-[var(--foreground)] overflow-hidden'>
        <div className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(#00000088_0%,_transparent_50%)]"></div>
        <div className="relative w-fit  flex flex-col items-center justify-center text-center">
            <div className="absolute w-full h-full animate-floating">
                <p className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[calc(100%)] border  bg-[var(--foreground)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-base sm:text-xl font-light">Innovative <br />Designs</p>
                <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+100px)] bg-[var(--foreground)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-base sm:text-xl font-light">Seamless <br />Execution</p>
                <p className="absolute top-0 right-0 translate-x-1/2 -translate-y-[calc(100%)] bg-[var(--foreground)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-base sm:text-xl font-light">Expert <br />Team</p>
                <p className="absolute bottom-0 left-[10%] sm:left-1/4 -translate-x-1/2 translate-y-[calc(100%+50px)] bg-[var(--foreground)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-base sm:text-xl font-light">Client-Centric <br />Approach</p>
                <p className="absolute bottom-0 right-[10%] sm:right-1/4 translate-x-1/2 translate-y-[calc(100%+50px)] bg-[var(--foreground)] text-[var(--background)] rounded-full p-5 sm:px-10 sm:py-8 text-base sm:text-xl font-light">Global <br />Reach</p>
            </div>
            <h3 className='w-full text-4xl leading-[3rem] md:text-6xl font-light text-center md:leading-[6rem] max-w-[1000px] font-outline-white drop-shadow-[0_0_5px_var(--foreground)] black-ops'> Why Impact Makers Events? </h3>
        </div>
    </div>
  )
}
