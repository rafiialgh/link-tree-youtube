export default function Contact() {
  return (
    <footer id="contact" className="w-full ">
      <div className="flex flex-col items-center justify-center py-10 gap-y-4">
        <p className="text-center text-gray-500 font-mono text-xs">
          Made with Next.js and designed happily using Figma.
        </p>
        <p className="text-gray-500 font-mono text-xs">
          © 2026 Muhammad Rafii Alghafary
        </p>
        <ul className="flex justify-center mt-2 text-xs gap-x-6 font-mono">
          <li><a href="https://www.instagram.com/rafiialgh/" className="text-gray-500 transition hover:text-blue-600">Instagram</a></li>
          <li><a href="https://github.com/rafiialgh" className="text-gray-500 transition hover:text-blue-600">Github</a></li>
          <li><a href="https://www.tiktok.com/@alghaaaaaa" className="text-gray-500 transition hover:text-blue-600">Tiktok</a></li>
        </ul>
      </div>
    </footer>
  );
}