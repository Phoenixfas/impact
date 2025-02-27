import Hero from "../blog/Hero"
import ThreeBG from "../ThreeBG"
import ServicesList from "./ServicesList"

export default function page() {
  return (
    <div className="w-full min-h-screen relative">
        <ThreeBG />
        <Hero title="Our Services" />
        <ServicesList />
    </div>
  )
}
