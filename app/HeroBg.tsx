
export default function HeroBg() {
    return (
        <div className="absolute top-0 left-0 w-full h-screen">
            <div className={`absolute left-0 top-0 w-full h-full transition-opacity ease-in-out duration-[1s]`}>
                <div className='relative w-full h-screen overflow-hidden'>
                    <div className="relative w-full h-screen">
                        <video className="w-full h-full object-cover contrast-150 brightness-110" src="/videos/hero.mp4" autoPlay controls={false} muted loop></video>
                    </div>
                    
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(#000000_0%,_#00000088_15%,_#00000088_85%,_#000000_100%)]"></div> */}
                </div>
            </div>
        </div>
    );
}
