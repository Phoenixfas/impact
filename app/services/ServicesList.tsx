'use client'
import services from '@/data/services'
import Image from 'next/image'
import {useState, useEffect} from 'react'

export default function ServicesList() {
    const [s, setS] = useState<{ id: string; name: string; description: string; snippet: string; main_img: string; other_imgs: string[]; }[]>([])
    useEffect(() => {
        setS(services)
    }, [])
  return (
    <div className='w-full p-5 sm:p-20 flex flex-wrap justify-center gap-10'>
        {s.map((service, index) => (
            <div key={index} className="w-full max-w-[600px] flex flex-col rounded-xl overflow-hidden border border-[var(--forground)] bg-[var(--primary)] text-[var(--background)] gap-5 shadow-xl shadow-[var(--foreground)]">
                <Image className='w-full h-[300px] object-cover' src={service?.main_img} alt='img' width={1200} height={800} />
                <div className="w-full flex flex-col">
                    <h1 className="text-3xl font-bold mt-5 px-5 black-ops">{service.name}</h1>
                    <p className="text-lg my-5 px-5">{service.description}</p>
                    <div className="w-full flex justify-between flex-wrap">
                        {/* {service.other_imgs.length !== 1 && service.other_imgs.map((img, index) => (
                            <Image key={index} className='w-[150px] h-[150px] object-cover' src={img} alt={service.name} width={200} height={200} />
                        ))} */}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
