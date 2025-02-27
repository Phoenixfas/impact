import ContactCards from "./ContactCards";
// import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";
import Hero from '../blog/Hero'
import Map from "./Map";
import ThreeBG from "../ThreeBG";


export default function page() {
  return (
    <div className="w-full min-h-screen relative">
        <ThreeBG />
        <Hero title="Contact Us" />
        <GetInTouch />
        {/* <ContactForm /> */}
        <ContactCards />
        <Map />
    </div>
  )
}
