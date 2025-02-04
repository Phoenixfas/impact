import Hero from "../blog/Hero"
import ServicesList from "./ServicesList"

export default function page() {
  return (
    <div className="w-full min-h-screen relative">
        <Hero title="Our Services" />
        <ServicesList />
    </div>
  )
}
