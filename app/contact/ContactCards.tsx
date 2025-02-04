import { IoCall, IoMail, IoLocation } from "react-icons/io5";

export default function ContactCards() {
  return (
    <div className='w-full px-5 md:px-[120px] mb-10 flex flex-wrap gap-[30px]'>
        <div className="flex-1 flex flex-wrap lg:flex-nowrap gap-10 py-10 px-7 md:px-14 bg-[var(--foreground)] rounded-lg">
            <div className="flex gap-5 sm:min-w-[300px] min-w-[200px] flex-wrap xl:flex-nowrap">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#FBC982] text-[#FBC982] text-2xl"><IoCall /></div>
                <div>
                    <h3 className="text-[#FBC982] text-sm font-medium">Call Us:</h3>
                    <p className="text-[var(--background)] text-lg font-normal">+971547114951</p>
                </div>
            </div>
            <div className="flex gap-5 sm:min-w-[300px] min-w-[200px] flex-wrap xl:flex-nowrap">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#FBC982] text-[#FBC982] text-2xl"><IoMail /></div>
                <div>
                    <h3 className="text-[#FBC982] text-sm font-medium">Email Us:</h3>
                    <p className="text-[var(--background)] text-lg font-normal">info@impactmakersevents.com</p>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-wrap lg:flex-nowrap py-10 px-7 md:px-14 bg-[var(--foreground)] rounded-lg">
            <div className="flex gap-5 sm:min-w-[300px] min-w-[200px] flex-wrap xl:flex-nowrap">
                <div className="min-w-[50px] max-w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#FBC982] text-[#FBC982] text-2xl"><IoLocation /></div>
                <div>
                    <h3 className="text-[#FBC982] text-sm font-medium">Visit Us:</h3>
                    <p className="text-[var(--background)] text-lg font-normal">Dubai Smart City</p>
                </div>
            </div>
        </div>
    </div>
  )
}
