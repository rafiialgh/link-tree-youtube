import Nav from "./nav"
import Hero from "./hero"
import Body from "@/app/body";
import Contact from "@/app/contact";

export default function Page() {
  return (
    <>
      <div className="pt-[20px] bg-[url('/bg-main-dark-800w.jpg')] bg-cover h-[20.5rem] ">
        <Nav/>
        <Hero/>
        <Body/>
        <Contact/>
      </div>
    </>
  )
}

