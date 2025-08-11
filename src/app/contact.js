export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full bg-white border-t">
        <div className="w-full ">
        </div>
        <div className="flex flex-col items-center justify-evenly py-14 mx-7 gap-y-3">
          <div className="flex justify-center">
            <div className="w-fit mt-0">
              <h1 className="text-center font-commissioner text-zinc-500 w-fit mb-0 text-sm md:text-base">Made with Next.js and designed happily
                using Figma 😁</h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-fit">
            <div className="flex items-center justify-center mb-0">
              <h1 className="font-commissioner text-zinc-500 text-sm md:text-base">© 2023 Muhammad Rafii Alghafary</h1>
            </div>
          </div>
          <div className="flex items-center w-fit">
            <div className=" sm:mb-0">
              <ul className="flex justify-between w-fit sm:flex-wrap gap-x-4 gap-y-2 text-sm md:text-base">
                <li className="text-zinc-500"><a href="https://www.instagram.com/rafiialgh/">Instagram</a></li>
                <li className="text-zinc-500"><a href="https://github.com/rafiialgh">Github</a></li>
                <li className="text-zinc-500"><a href="https://www.tiktok.com/@alghaaaaaa">Tiktok</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}