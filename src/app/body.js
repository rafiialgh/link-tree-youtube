import Image from "next/image";
import Card from "./card";
import link from "./link"; 
import bgMesh from "../../public/contact-bg.png";
import bgOurnament from "../../public/project-ournament-lines.png";

export default function Body() {
  return (
    <section id="link" className="w-full py-10">
      <div className="relative w-full px-6 py-12 overflow-hidden bg-[#F5F0E8] border border-[#DDD6C8] shadow-sm sm:px-12">
        
        <Image className="absolute top-0 left-0 z-0 opacity-10 pointer-events-none" src={bgOurnament} alt="background ornament" width={1001} height={1001} />
        <Image className="absolute bottom-0 right-0 z-0 w-[30rem] opacity-10 pointer-events-none" src={bgMesh} alt="background mesh" width={2000} height={2000} />

        <div className="relative z-10 flex flex-col  w-full">
          <h2 className="mb-3 text-xl text-gray-800 font-mono uppercase tracking-widest">YouTube Collection</h2>
          <p className="mb-10 text-gray-500 text-sm font-mono uppercase">
            klik watch on youtube yee <span className="animate-bounce inline-block duration-300">↓</span>
          </p>

          {/* Responsive Grid Layout */}
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {link.map((item, index) => (
              <Card key={index} href={item.link} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}