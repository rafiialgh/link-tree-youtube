import Image from "next/image";


export default function Nav() {
  return (
    <>
      <div className="relative z-10 flex w-full h-16 mt-5 px-7">
        <div className="flex items-center justify-center w-16 sm:mx-7 md:mx-20">
          <Image className="cursor-pointer" src="/logo putih.png" alt="logo" width={100} height={100}/>
        </div>
        <div className="flex ml-auto sm:mr-7 md:mr-20">
          <ul className="flex items-center justify-center">
            <li className="cursor-pointer font-robotoMono"><a href="#link">Link</a></li>
            <li className="ml-5 cursor-pointer font-robotoMono"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}