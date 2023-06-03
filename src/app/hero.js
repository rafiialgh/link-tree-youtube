import Image from "next/image";
import bgMesh from "../../public/contact-bg.png";

export default function Hero() {
  return (
    <>
      <div className="h-56 flex relative">
        <Image className="absolute bottom-0 right-0 z-0 w-80 invert" src={bgMesh} alt="bg" width={2000} height={2000}/>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-96 h-48 flex justify-center items-center md:w-full">
            <h1 className="text-center z-10 text-2xl font-rubikMonoOne font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 md:text-3xl">Link Youtube Buat Luh Pada!!! </h1>
          </div>
        </div>
      </div>
    </>
  )
}

