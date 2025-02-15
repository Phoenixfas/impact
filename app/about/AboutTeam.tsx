import Image from 'next/image'
import React from 'react'

export default function AboutTeam() {
  return (
    <div className='w-full px-8 sm:px-[100px] my-20 flex flex-col gap-5'>
        <div className="flex flex-wrap justify-between gap-14">
            <div className="flex-[1] text-[var(--foreground)] min-w-[250px] sm:min-w-[400px]">
                <h3 className='text-lg sm:text-xl md:text-xl font-normal mb-8 black-ops'>About</h3>
                <h2 className='text-3xl sm:text-4xl md:text-6xl font-medium max-w-[600px] md:leading-[4.25rem] mb-10 black-ops'>The Experts Behind the Magic</h2>
                <p className='text-2xl'>A passionate team of event strategists, designers, coordinators, and creatives working together to bring your event to life. Our professionals come from diverse backgrounds, combining expertise in event planning, branding, audiovisual production, and hospitality.</p>
            </div>
            <div className="flex-[1] flex justify-center min-w-[250px] sm:min-w-[400px] sm:max-w-[500px] xl:min-w-[500px] xl:max-w-[600px] border-[10px] border-[var(--primary)] p-3">
                <Image className='w-full h-full object-cover' src='/images/about/team.jpg' alt='team' width={1000} height={1400} quality={100} />
            </div>
        </div>
    </div>
  )
}
