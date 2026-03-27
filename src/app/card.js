"use client";

import { useRef, useEffect, useState } from "react";

const Card = (props) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        setIsOverflowing(textRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [props.name]);

  return (
    <div className="relative z-10 flex flex-col w-full group rounded-sm">
      <div className="border border-[#DDD6C8] rounded-sm group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden transition-all duration-300">
        <div className="relative w-full bg-gray-200 aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${props.href}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {props.name && (
          <div className="p-3 bg-white space-y-1">
            <h1 className="uppercase text-xs font-sans tracking-widest font-semibold text-[#C8A96E]">vlog</h1>
            
            <div ref={containerRef} className="w-full overflow-hidden whitespace-nowrap relative">
              {/* Invisible element to measure text width */}
              <div 
                ref={textRef} 
                className="absolute top-0 left-0 invisible whitespace-nowrap text-xs font-medium font-sans"
              >
                {props.name}
              </div>

              {/* Visible elements */}
              {isOverflowing ? (
                <div className="flex w-max animate-marquee">
                  <h3 className="text-xs font-medium text-gray-700 font-sans pr-10 shrink-0">
                    {props.name}
                  </h3>
                  <h3 className="text-xs font-medium text-gray-700 font-sans pr-10 shrink-0">
                    {props.name}
                  </h3>
                </div>
              ) : (
                <h3 className="text-xs font-medium text-gray-700 font-sans truncate w-full block">
                  {props.name}
                </h3>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Card;