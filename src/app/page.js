import Nav from "./nav";
import Body from "./body";
import Contact from "./contact";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-800 bg-white">
      <div className="w-full max-w-5xl px-6 md:px-8">
        <Nav />
        <Body />
        <Contact />
      </div>
    </div>
  );
}