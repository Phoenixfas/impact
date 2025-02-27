import React from 'react'

export default function OurValue() {
  return (
    <div className='relative w-full my-28 py-28 px-8 sm:px-[100px] bg-[var(--foreground)] flex flex-col items-center text-center text-[var(--background)]'>
        <div className="absolute w-full h-full max-w-[1000px] max-h-[1000px] bg-[radial-gradient(#ffffff33_0%,_transparent_50%)]"></div>
        <h2 className='text-4xl sm:text-6xl mb-10 black-ops'>What Drives Us</h2>
        <p className='text-2xl text-center mb-5'><span className='font-bold'>Creativity</span> – Bringing fresh and innovative ideas to every event.</p>
        <p className='text-2xl text-center mb-5'><span className='font-bold'>Precision</span> – Meticulous planning to ensure seamless execution.</p>
        <p className='text-2xl text-center mb-5'><span className='font-bold'>Client-Centric Approach</span> – Prioritizing our clients’ goals and visions.</p>
        <p className='text-2xl text-center mb-5'><span className='font-bold'>Integrity</span> – Conducting business with transparency and professionalism.</p>
        <p className='text-2xl text-center mb-5'><span className='font-bold'>Excellence</span> – Striving for the highest standards in every project.</p>
    </div>
  )
}
