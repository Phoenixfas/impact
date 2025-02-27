import Link from 'next/link'
import React from 'react'

export default function AboutClient() {
  return (
    <div className='relative w-full px-8 sm:px-[100px] my-20 mt-[200px] flex flex-col gap-10 text-[var(--foreground)]'>
        <h2 className='text-3xl sm:text-4xl md:text-6xl font-medium max-w-[600px] md:leading-[4.25rem] black-ops'>Let&apos;s Create Something Unforgettable</h2>
        <p className='text-2xl'>Ready to elevate your next event? Connect with us and let’s bring your vision to life with precision, creativity, and excellence.</p>
        <Link href='/contact' className='relative w-fit px-8 py-2 bg-transparent text-[var(--foreground)] text-2xl font-light border border-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300'>Contact Us Today</Link>
    </div>
  )
}
