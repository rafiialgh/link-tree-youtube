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
    <>
      <div id="link" className="w-full bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-900 to-purple-950">
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[22rem] h-fit mb-14 mt-14 bg-gradient-to-r from-cyan-800 to-cyan-950 rounded-xl p-0.5 sm:w-full sm:mx-7">
            <div className="relative rounded-xl w-full h-full bg-gray-900">
              <Image className="absolute invert z-0 sm:w-96" src={bgOurnament} alt="bg" width={1001} height={1001}/>
              <Image className="absolute bottom-0 right-0 z-0 w-[30rem] invert" src={bgMesh} alt="bg" width={2000} height={2000}/>
                <h1 className="font-robotoMono pt-10 mb-10 text-2xl items-center justify-center flex">Link</h1>
              <div className="flex flex-col w-full justify-center items-center flex-wrap">
                <dl className="sm:w-full sm:flex sm:flex-row sm:flex-wrap sm:justify-between">{link.map(createCard)}</dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}