"use client";
import Image from "next/image";
// import blogs from '../data/blogs'
import Link from "next/link";
import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variant1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, y: -100, transition: { duration: .7, } }
}
const variant2 = {
    visible: { opacity: 1, transition: { duration: .7, delay: .2 } },
    hidden: { opacity: 0, transition: { duration: .7, } }
}
const variant3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .4} },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, } }
}

export default function Blog() {
  const blogs_con = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(blogs_con, { margin: "0px 0px -60% 0px", once: false})
  const controls = useAnimationControls()


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden")
}, [isInView, controls]);

  const dateConverter = (date: any) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  const checkNovelty = (date: any) => {
    // take the date and compare it with the current date if it is less than 7 days return new
    const newDate = new Date(date);
    const currentDate = new Date();
    const difference = currentDate.getTime() - newDate.getTime();
    const days = difference / (1000 * 3600 * 24);
    if (days <= 7) {
      return "New";
    } else if (days <= 30) {
      return "Recent";
    }
    return "";
  };
  return (
    <div ref={blogs_con} className="relative w-full px-8 sm:px-[100px] py-20 flex flex-col gap-5 items-center">
      <motion.h3 variants={variant1} animate={controls} className="text-xl sm:text-2xl md:text-3xl text-[var(--background)] font-semibold font-outline-black drop-shadow-[0_0_5px_var(--background)]  black-ops">
        Blogs
      </motion.h3>
      <motion.h2 variants={variant2} animate={controls} className="text-3xl sm:text-4xl md:text-6xl text-center text-[var(--background)] font-bold max-w-[650px] md:leading-[4.25rem] mb-10 font-outline-black drop-shadow-[0_0_5px_var(--background)] black-ops">
        From Impact Makers Events
      </motion.h2>
      <motion.div variants={variant3} animate={controls} className="w-full flex flex-wrap gap-16 justify-center">
        {blogs?.slice(0, 3).map((blog: any, index: any) => (
          <Link
            href={`/blog/${blog._id}`}
            key={index}
            className="group w-[350px] h-[400px] relative book"
          >
            <div className="absolute left-0 top-0 w-full h-full  p-10 bg-[#eee] duration-1000 bookpage">
              {/* <Image
                src={"/logo.png"}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px] object-contain"
                alt="lets work"
                width={1080}
                height={1080}
                quality={100}
              /> */}
              <Image
                className="w-full h-[200px] object-cover rounded-sm mb-3"
                src={blog.image}
                alt={blog.title}
                width={1920}
                height={1080}
                quality={100}
              />
              <p className="relative text-sm mb-5">
                {blog.snippet.slice(0, 100)}...
              </p>
              <p className="float-right text-sm">
                {dateConverter(blog.date)}
              </p>
            </div>
            <div className="relative overflow-hidden w-full h-full bg-[#fff] border-2 border-[var(--foreground)] duration-1000 bookcover">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
                src={blog.image}
                alt={blog.title}
                width={1920}
                height={1080}
                quality={100}
              />
              <div className="relative w-full h-full flex flex-col items-center bg-[#ffffffaa] pt-32 pb-10 px-7 gap-10 ">
                <div className="absolute left-10 top-10 -translate-y-1/2 rotate-45 w-10 h-80 bg-[var(--primary)]"></div>
                <div className="absolute left-12 top-10 -translate-y-1/2 rotate-45 w-3 h-80 bg-[#fff]"></div>
                <Image
                  className="max-w-[200px] object-contain"
                  src={"/logo.png"}
                  alt="logo"
                  width={1080}
                  height={1080}
                  quality={100}
                />
                <h2 className="text-center text-2xl text-[#38383a] font-bold">
                  {blog.title}
                </h2>
                <span className="absolute px-2 py-2 text-sm w-fit bottom-2 right-4 text-slate-50">
                  {checkNovelty(blog.data) && (
                    <span className="px-4 py-1 rounded-lg bg-[var(--theme-blue)]">
                      {checkNovelty(blog.date)}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

{
  /* <Link href={`/blog/${blog._id}`} key={index} className='group w-[350px] min-h-[450px] relative book'>
                    <div className="absolute left-0 top-0 w-full h-full p-10 bg-[#eee] duration-1000 bookpage">
                        <Image src={"/images/Logo_water.png"} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px] object-contain" alt="lets work" width={1080} height={1080} quality={100} />
                        <Image className='w-[120px] h-[200px] float-left object-cover rounded-sm mr-3 mb-1' src={blog.image} alt={blog.title} width={1920} height={1080} quality={100} />
                        <p className='text-justify text-sm booktext border border-[#085AA3] p-5'>{blog.content.slice(0, 350)}...</p>
                    </div>
                    <div className="relative overflow-hidden w-full h-full bg-[#fff] border-2 border-[#085AA3] duration-1000 bookcover">
                        <Image className='absolute top-0 left-0 w-full h-full object-cover blur-sm' src={blog.image} alt={blog.title} width={1920} height={1080} quality={100} />
                        <div className="relative w-full h-full flex flex-col items-center bg-[#ffffffaa] pt-20 pb-10 px-7 gap-10 ">
                            <div className="absolute left-10 top-10 -translate-y-1/2 rotate-45 w-10 h-80 bg-[#085AA3]"></div>
                            <div className="absolute left-12 top-10 -translate-y-1/2 rotate-45 w-3 h-80 bg-[#fff]"></div>
                            <Image className='max-w-[80px] object-contain' src={"/images/Logo.png"} alt='logo' width={1080} height={1080} quality={100} />
                            <h2 className='text-center text-2xl text-[#38383a] font-bold'>{blog.title}</h2>
                        </div>
                    </div>
                </Link> */
}
