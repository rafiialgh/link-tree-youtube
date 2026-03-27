import Image from "next/image";

export default function Nav() {
  return (
    <nav className="relative z-10 flex items-center justify-between w-full h-20 py-4 bg-transparent">
      <div className="flex items-center w-16">
        <Image className="cursor-pointer w-16" src="/logo hitam.png" alt="logo" width={100} height={100} />
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li className="font-mono text-sm text-gray-600 transition cursor-pointer hover:text-blue-600"><a href="#link">Videos</a></li>
          <li className="font-mono text-sm text-gray-600 transition cursor-pointer hover:text-blue-600"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}