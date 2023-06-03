import Image from "next/image";


export default function Nav() {
  return (
    <>
      <div className="w-full h-16 px-7 mt-5 flex relative z-10">
        <div className="w-16 flex justify-center items-center sm:mx-7 md:mx-20">
          <Image className="cursor-pointer" src="/logo putih.png" alt="logo" width={100} height={100}/>
        </div>
        <div className="ml-auto flex sm:mr-7 md:mr-20">
          <ul className="flex justify-center items-center">
            <li className="cursor-pointer font-robotoMono"><a href="#link">Link</a></li>
            <li className="ml-5 cursor-pointer font-robotoMono"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}