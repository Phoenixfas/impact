import BlogPaginator from "./BlogPaginator";
import Hero from './Hero'


export default function page() {
  return (
    <div className="w-full min-h-screen relative">
        <Hero title="News from Impact Makers Events" />
        <BlogPaginator />
    </div>
  )
}
