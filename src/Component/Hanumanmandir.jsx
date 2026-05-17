import React from "react";

const SectionImage = ({ src, source }) => (
  <div className="my-6">
    <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
    <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
  </div>
);

const Hanumanmandir = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Kedarkantha Trek Uttarakhand – Best Time, Itinerary & Complete Snow Trek Guide
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 22 April, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Rohit Upadhyay</span>
        </p>

        <SectionImage
          src="/Image/kedarkantha-trek-01.jpg"
          source="Pexels/Umarand Rabi"
        />

        <p className="mb-4 text-gray-700">
          Deep in the snow-covered mountains of Uttarakhand lies a trekking trail that feels like walking through a winter dream. Imagine stepping into silent pine forests wrapped in white snow, camping under a sky full of stars, and waking up early to witness a magical Himalayan sunrise from a summit above the clouds.
        </p>

        <p className="mb-4 text-gray-700">
          This is the experience of the Kedarkantha Trek in Uttarakhand, one of the most beautiful and beginner-friendly winter treks in India. Located in the Govind Wildlife Sanctuary of the Garhwal Himalayas, this trek offers the perfect blend of adventure, scenic beauty and Himalayan camping.
        </p>

        <p className="mb-6 text-gray-700">
          Every year, thousands of trekkers visit Kedarkantha to experience snow trekking, summit climbing and peaceful mountain landscapes. Whether you are a first-time trekker or an adventure enthusiast, this trek provides memories that stay with you for a lifetime.
        </p>

        <p className="mb-6 text-gray-700">
          In this complete guide, you will discover everything about the Kedarkantha Trek Uttarakhand including best time to visit, trek route, distance, difficulty, packing list, budget and travel tips.
        </p>

        {/* Juda Ka Talab */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Juda Ka Talab: The Most Beautiful Stop on Kedarkantha Trek
        </h2>

        <SectionImage
          src="/Image/kedarkantha-trek-02.jpg"
          source="Pexels/Pawan Sehgal"
        />

        <p className="mb-4 text-gray-700">
          One of the most magical highlights of the Kedarkantha Trek is Juda Ka Talab, a serene high-altitude lake surrounded by dense pine forests. Located at around 2,700 meters, this lake serves as a popular campsite for trekkers on their way to the summit.
        </p>

        <p className="mb-4 text-gray-700">
          During winter, Juda Ka Talab freezes completely, creating a breathtaking landscape of snow and ice. In contrast, during spring and autumn, the lake reflects the surrounding trees and mountains, offering a peaceful and scenic environment.
        </p>

        <p className="mb-6 text-gray-700">
          Most trekking itineraries include an overnight stay at Juda Ka Talab, where campers experience star-filled skies, bonfire nights and the quiet beauty of the Himalayas. For many trekkers, this campsite becomes one of the most memorable parts of the entire journey.
        </p>

        {/* Why Special */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why Kedarkantha Trek is So Special
        </h2>

        <SectionImage
          src="/Image/kedarkantha-trek-03.jpg"
          source="Anjana Rawat"
        />

        <h4 className="font-semibold text-black mb-1">
          One of the Best Winter Snow Treks in India
        </h4>

        <p className="mb-4">
          Kedarkantha is famous for its snow-covered trails during winter, making it one of the most popular Himalayan snow treks.
        </p>

        <h4 className="font-semibold text-black mb-1">
          Beginner-Friendly Summit Trek
        </h4>

        <p className="mb-4">
          Unlike many difficult Himalayan treks, Kedarkantha allows beginners to experience the thrill of reaching a Himalayan summit at 3,810 meters.
        </p>

        <h4 className="font-semibold text-black mb-1">
          Beautiful Pine Forest Trails
        </h4>

        <p className="mb-4">
          The trek passes through dense pine and oak forests, creating a peaceful and magical trekking atmosphere.
        </p>

        <h4 className="font-semibold text-black mb-1">
          Camping in Snow
        </h4>

        <p className="mb-4">
          Trekkers get the chance to camp in snowy meadows, enjoy bonfire nights and experience true Himalayan adventure.
        </p>

        <h4 className="font-semibold text-black mb-1">
          Early Morning Summit & 360-Degree Summit View
        </h4>

        <p className="mb-6">
          From the summit, you can witness stunning views of peaks like Swargarohini, Bandarpoonch and Black Peak. While the Kedarkantha summit is popular, the real magic lies in the early morning silence before sunrise. Standing at the top, surrounded by endless Himalayan peaks, you experience a moment of calm that is hard to describe.
        </p>

        <SectionImage
          src="/Image/kedarkantha-trek-04.jpg"
          source="Pexels/Vikash Kr"
        />

        <h4 className="font-semibold text-black mb-1">
          Starry Nights at the Campsite
        </h4>

        <p className="mb-6">
          Away from city lights, the campsites on the Kedarkantha trek offer a breathtaking view of the night sky. On clear nights, you can witness thousands of stars, making it a perfect moment for reflection and connection with nature.
        </p>

        {/* Location */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Where is Kedarkantha Located in Uttarakhand
        </h2>

        <SectionImage
          src="/Image/kedarkantha-trek-05.jpg"
          source="NDTV/euttaranchal.com"
        />

        <p className="mb-4">
          Kedarkantha is located near the village of Sankri in the Uttarkashi district of Uttarakhand. The trek is part of the Govind Wildlife Sanctuary known for its rich biodiversity and scenic beauty.
        </p>

        <h4 className="font-semibold text-black mb-1">Quick Facts</h4>

        <ul className="list-disc pl-6 mb-6">
          <li>Location: Uttarkashi district, Uttarakhand</li>
          <li>Base Camp: Sankri Village</li>
          <li>Altitude: 3,810 meters</li>
          <li>Mountain Range: Garhwal Himalayas</li>
        </ul>

        {/* Best Time */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Best Time to Visit Kedarkantha Trek
        </h2>

        <SectionImage
          src="/Image/kedarkantha-trek-06.jpg"
          source="Anjana Rawat"
        />

        <h4 className="font-semibold text-black mb-1">
          Winter (December to February)
        </h4>

        <p className="mb-6">
          Best time for snow trekking. Trails and campsites are covered in thick snow.
        </p>

        <SectionImage
          src="/Image/kedarkantha-trek-07.jpg"
          source="Anjana Rawat"
        />

        <h4 className="font-semibold text-black mb-1">
          Spring (March to April)
        </h4>

        <p className="mb-4">
          Snow begins to melt and forests become green and vibrant.
        </p>

        <h4 className="font-semibold text-black mb-1">
          Autumn (October to November)
        </h4>

        <p className="mb-6">
          Clear skies and cold weather with beautiful mountain views.
        </p>

        {/* Distance */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Kedarkantha Trek Distance and Difficulty
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Detail</th>
                <th className="border p-3 text-left">Information</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Total Trek Distance</td>
                <td className="border p-3">Approx. 20 km</td>
              </tr>

              <tr>
                <td className="border p-3">Maximum Altitude</td>
                <td className="border p-3">3,810 meters</td>
              </tr>

              <tr>
                <td className="border p-3">Difficulty Level</td>
                <td className="border p-3">Easy to Moderate</td>
              </tr>

              <tr>
                <td className="border p-3">Trek Duration</td>
                <td className="border p-3">4–5 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reach */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How to Reach Kedarkantha Base Camp
        </h2>

        <p className="mb-4">
          Nearest city: Dehradun
        </p>

        <p className="mb-4">
          Route: Dehradun → Mussoorie → Purola → Sankri
        </p>

        <p className="mb-6">
          Distance: Approx. 200 km by road.
        </p>

        {/* Itinerary */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          5-Day Itinerary of Kedarkantha Trek Route
        </h2>

        <SectionImage
          src="/Image/kedarkantha-trek-08.jpg"
          source="Pexels/Sanket Barik"
        />

        <h4 className="font-semibold text-black mb-1">
          Day 1: Dehradun to Sankri
        </h4>

        <ul className="list-disc pl-6 mb-6">
          <li>Start your journey from Dehradun</li>
          <li>Drive through Mussoorie, Purola and Mori</li>
          <li>Reach Sankri by evening</li>
          <li>Explore the village and relax</li>
          <li>Overnight stay in Sankri</li>
        </ul>

      </div>
    </div>
  );
};

export default Hanumanmandir;