import React, { useState, useEffect, useRef } from "react";
import { stories } from "./Webstories";
import { Link } from "react-router-dom";

const Upcoming_events = [
  {
    slug: "javed-ali-spellbound-tour-noida",
    title: "Javed Ali Spellbound Tour Noida",
    image: "/Image/javed-ali-spellbound-tour-noida.jpg",
  },
  {
    slug: "sanam-night-of-nostalgia-delhi",
    title: "Sanam Night Of Nostalgia Delhi",
    image: "/Image/sanam-night-of-nostalgia-delhi.jpg",
  },
  {
    slug: "whipmantra-concert-gurugram",
    title: "Whipmantra Concert Gurugram",
    image: "/Image/whipmantra-concert-gurugram.jpg",
  },
];

export default function LatestNews() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const visibleCards = 4;
  const cardWidth = 256; // 240 width + 16 gap

  // Clone stories for the seamless loop
  const extendedStories = [
    ...stories,
    ...stories.slice(0, visibleCards),
  ];

  // 👉 AUTO SLIDE
  const startAutoSlide = () => {
    // Clear any existing intervals first to avoid double running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // 👉 RESET LOOP
  useEffect(() => {
    if (index >= stories.length) {
      setTimeout(() => {
        setIndex(0);
      }, 200);
    }
  }, [index]);

  // 👉 NAVIGATION BUTTON HANDLERS
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="w-full  py-15 px-4 md:px-10 ml-40 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT PANEL */}
        <div 
          className="lg:col-span-3 relative overflow-hidden group"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >

          {/* FADE EDGES */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>

          {/* LEFT PREVIOUS BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full z-20 transition duration-300 opacity-0 group-hover:opacity-100 shadow-md focus:outline-none"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* RIGHT NEXT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full z-20 transition duration-300 opacity-0 group-hover:opacity-100 shadow-md focus:outline-none"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* WRAPPER */}
          <div className="pl-10">

            {/* SLIDER */}
            <div
              className="flex gap-4 items-center transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * cardWidth}px)`,
              }}
            >
              {extendedStories.map((item, i) => {
                const isActive = i >= index && i < index + visibleCards;

                return (
                  <div
                    key={i}
                    className={`
                      flex-shrink-0 transition-all duration-700
                      ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95" }
                    `}
                    style={{ width: "240px"  }} 
                  >
                    <Link to={`/webstories/${item.slug}`}>

                      {/* CARD */}
                      <div className="relative w-full aspect-[9/16]  rounded-[20px] overflow-hidden shadow-xl group cursor-pointer">

                        {/* MEDIA */}
                        {item.video ? (
                          <video
                            src={item.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        )}

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* TEXT */}
                        <div className="absolute bottom-0 p-4 text-white">
                          <p className="text-sm font-semibold leading-tight">
                            {item.title}
                          </p>
                          <p className="text-xs opacity-80 mt-1">
                            {item.createdBy}
                          </p>
                        </div>

                      </div>

                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* RIGHT PANEL (Commented out as requested) */}
        {/* <div className="bg-white rounded-xl shadow p-4 h-[380px] flex flex-col"> ... </div> */}

      </div>
    </div>
  );
}