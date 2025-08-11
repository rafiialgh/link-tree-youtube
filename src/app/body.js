import Image from "next/image";
import Card from "@/app/card";
import link from "@/app/link";
import bgMesh from "public/contact-bg.png"
import bgOurnament from "public/project-ournament-lines.png"

export default function Body() {

  function createCard(links) {
    return (
      <Card
        href={links.link}
        name={links.name}
      />
    )
  }

  return (
    <div className="max-w-xl border-t">
      <div id="link" className=" bg-white">
        <div className="w-full h-0.5">
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-[22rem] h-fit mb-14 mt-14 bg-gradient-to-r from-cyan-800 to-cyan-950 rounded-xl p-0.5 sm:w-full sm:mx-7">
            <div className="relative w-full h-full bg-gray-900 rounded-xl">
              <Image className="absolute z-0 invert sm:w-96" src={bgOurnament} alt="bg" width={1001} height={1001}/>
              <Image className="absolute bottom-0 right-0 z-0 w-[30rem] invert" src={bgMesh} alt="bg" width={2000} height={2000}/>
                <h1 className="flex items-center justify-center pt-10 mb-2 text-2xl font-commissioner">Link</h1>
                <p className="flex items-center justify-center mb-10 text-md font-commissioner text-zinc-500">klik watch on youtube yeee ⬇️</p>
              <div className="flex flex-col flex-wrap items-center justify-center w-full">
                <dl className="flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap sm:w-full sm:flex">{link.map(createCard)}</dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}