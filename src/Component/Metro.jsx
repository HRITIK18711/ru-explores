import { useState } from "react";
import { Helmet } from "react-helmet";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const stories = [
  { id: 1, slug: "delhi-metro", title: "Delhi Metro", image: "/Image/delhi-metro.png", map: "/Image/delhi-metro-map.pdf", type: "pdf" },
  { id: 2, slug: "jaipur-metro", title: "Jaipur Metro", image: "/Image/jaipur-metro.png", map: "/Image/jaipur-metro-map.png", type: "image" },
  { id: 3, slug: "mumbai-metro", title: "Mumbai Metro", image: "/Image/mumbai-metro.png", map: "/Image/mumbai-metro-map.png", type: "image" },
  { id: 4, slug: "patna-metro", title: "Patna Metro", image: "/Image/patna-metro.png", map: "/Image/patna-metro-map.png", type: "image" },
  { id: 5, slug: "pune-metro", title: "Pune Metro", image: "/Image/pune-metro.png", map: "/Image/pune-metro-map.pdf", type: "pdf" },
  { id: 6, slug: "lucknow-metro", title: "Lucknow Metro", image: "/Image/uttar-pradesh-metro.png", map: "/Image/lucknow-metro-map.png", type: "image" },
  { id: 7, slug: "kanpur-metro", title: "Kanpur Metro", image: "/Image/uttar-pradesh-metro.png", map: "/Image/kanpur-metro-map.png", type: "image" },
  { id: 8, slug: "agra-metro", title: "Agra Metro", image: "/Image/uttar-pradesh-metro.png", map: "/Image/agra-metro-map.png", type: "image" },
];

export default function Metro() {
  const [activeMetro, setActiveMetro] = useState(null);

  // ✅ ONLY THESE WILL OPEN MODAL
  const allowedFullscreen = ["delhi-metro", "pune-metro"];

  return (
    <>
      <Helmet>
        <title>Metro Stories | RUExplores</title>
      </Helmet>

      {/* GRID */}
      <div className="pt-24 pb-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          🚇 Metro Stories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">

          {stories.map((story) => {
            const isAllowed = allowedFullscreen.includes(story.slug);

            return (
              <div
                key={story.id}
                onClick={() => isAllowed && setActiveMetro(story)}
                className={`flex flex-col items-center group ${
                  isAllowed ? "cursor-pointer" : "cursor-not-allowed opacity-60"
                }`}
              >

                {/* CIRCLE */}
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-md flex items-center justify-center group-hover:scale-110 transition">

                  <div className="w-[70%] h-[70%] bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                </div>

                <p className="mt-4 text-sm sm:text-base font-semibold text-center">
                  {story.title}
                </p>

              </div>
            );
          })}

        </div>
      </div>

      {/* ✅ MODAL (ONLY FOR DELHI & PUNE) */}
      {activeMetro && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">

          {/* HEADER */}
          <div className="flex justify-between items-center p-4 text-white border-b border-gray-700">
            <h2 className="text-lg font-semibold">
              {activeMetro.title} Route Map
            </h2>

            <button
              onClick={() => setActiveMetro(null)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex items-center justify-center">

            {activeMetro.type === "pdf" ? (
              <iframe
                src={`${activeMetro.map}#zoom=page-width`}
                title={activeMetro.title}
                className="w-full h-full bg-white"
              />
            ) : (
              <TransformWrapper initialScale={1} minScale={0.5} maxScale={5}>
                <TransformComponent>
                  <img
                    src={activeMetro.map}
                    alt={activeMetro.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </TransformComponent>
              </TransformWrapper>
            )}

          </div>
        </div>
      )}
    </>
  );
}