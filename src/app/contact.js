export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full bg-gradient-to-tl from-blue-950 to-black">
        <div className="w-full h-0.5 bg-gradient-to-r from-cyan-800 to-cyan-950">
        </div>
        <div className="flex flex-col items-center justify-evenly sm:flex-row sm:mt-14 sm:pb-14 sm:mx-7 sm:gap-x-3">
          <div className="flex justify-center">
            <div className="w-80 mt-14 sm:w-fit sm:mt-0">
              <h1 className="font-commissioner text-zinc-500 mb-5 text-center sm:w-fit sm:mb-0">Made with Next.js and designed happily
                using Figma 😁</h1>
            </div>
          </div>
          <div className="flex justify-center w-fit items-center">
            <div className="mb-14 flex items-center justify-center sm:mb-0">
              <h1 className="font-commissioner text-zinc-500">© 2023 Muhammad Rafii Alghafary</h1>
            </div>
          </div>
          <div className="w-fit flex items-center">
            <div className="mb-14 sm:mb-0">
              <ul className="flex justify-between w-60 sm:w-fit sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
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