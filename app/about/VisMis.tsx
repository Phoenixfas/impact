import React from 'react'

export default function VisMis() {
  return (
    <div className='relative w-full px-8 sm:px-[100px] my-20 mt-[200px] flex flex-wrap md:flex-nowrap justify-center gap-10'>
        <div className="flex max-w-[600px] gap-8">
            <div className="hidden xs:block min-w-[50px] lg:min-w-[100px] max-w-[100px] h-full border-t border-[var(--primary)] translate-y-[1.5rem]"></div>
            <div className="">
                <h3 className='text-5xl mb-10'>Our Vision</h3>
                <p>To be a global leader in event management, known for unparalleled creativity, professionalism, and flawless execution.</p>
            </div>
        </div>
        <div className="flex max-w-[600px] gap-8">
            <div className="hidden xs:block min-w-[50px] lg:min-w-[100px] max-w-[100px] h-full border-t border-[var(--primary)] translate-y-[1.5rem]"></div>
            <div className="">
                <h3 className='text-5xl mb-10'>Our Mission</h3>
                <p>To transform ideas into immersive and memorable events through innovation, attention to detail, and strategic planning.</p>
            </div>
        </div>
    </div>
  )
}
