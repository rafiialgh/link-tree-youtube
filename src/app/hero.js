import Image from "next/image";
import bgMesh from "../../public/contact-bg.png";

export default function Hero() {
  return (
    <>
      <div className="relative flex h-56 bg-white">
        <Image className="absolute bottom-0 right-0 z-0 w-80 invert" src={bgMesh} alt="bg" width={2000} height={2000}/>
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center h-48 w-96 md:w-full">
            <h1 className="z-10 text-2xl font-bold text-center text-black md:text-3xl">Link Youtube Buat Luh Pada!!! </h1>
          </div>
        </div>
      </div>
    </>
  )
}

