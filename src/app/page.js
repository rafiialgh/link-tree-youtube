import Nav from "./nav"
import Hero from "./hero"
import Body from "@/app/body";
import Contact from "@/app/contact";

export default function Page() {
  return (
    <div className="flex item-center justify-center bg-gray-50">
      <div className=" max-w-xl">
        <Nav/>
        {/* <Hero/> */}
        <Body/>
        <Contact/>
      </div>
    </div>
  )
}

