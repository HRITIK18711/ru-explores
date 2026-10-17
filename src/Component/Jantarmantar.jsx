import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="jantar mantar delhi"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const JantarMantar = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Jantar Mantar Delhi - Complete Guide, History, Timings & Things to Do
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 03 May, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        <SectionImage src="/Image/jantar-mantar-delhi-travel-guide-01.jpg" />

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          In a city crowded with monuments that rely on scale and decoration, Jantar Mantar Delhi stands out for doing neither. It doesn’t try to impress and that’s precisely why it often gets overlooked.
        </p>

        <p className="text-gray-700 mb-6">
          What you find here is not heritage in the conventional sense but something far more deliberate - a space built for calculation, not admiration. The structures don’t explain themselves and they don’t need to. They were never meant for casual viewing but they were meant to work.
        </p>

        <p className="text-gray-700 mb-6">
          That distinction matters because Jantar Mantar forces a different kind of engagement. You don’t walk through it, you interpret it. And in a city where most landmarks are consumed quickly, this one quietly resists that pace.
        </p>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          History of Jantar Mantar, Delhi
        </h2>

        <SectionImage src="/Image/jantar-mantar-delhi-travel-guide-02.jpg" />

        <p className="text-gray-700 mb-6">
          Built in 1724 by Maharaja Jai Singh II, Jantar Mantar Delhi was created in response to a practical problem. Astronomical data at the time could not be fully trusted. The Calendar systems varied, predictions often conflicted and existing methods lacked consistency.
        </p>

        <p className="text-gray-700 mb-6">
          Jai Singh’s solution was ambitious but clear. He chose to replace unreliable calculations with direct observation. Instead of relying on smaller and movable tools, he designed large and fixed instruments. These instruments could measure celestial positions with greater stability and improved accuracy.
        </p>

        <p className="text-gray-700 mb-6">
          The Delhi observatory became the first of five such sites. It was followed by more advanced versions in Jaipur, Ujjain, Varanasi and Mathura. Each observatory was built on the same principle. Larger and more stable instruments could deliver more precise results. Out of the five observatories built by Maharaja Jai Singh II, four have survived today. The fifth one in Mathura did not survive into the present day and no longer exists.
        </p>

        <p className="text-gray-700 mb-6">
          The name Jantar Mantar is derived from the Sanskrit words Yantra, meaning instrument, and Mantra, meaning calculation or formula. Together, the name reflects a system designed for scientific observation and precise measurement. Over time, in spoken Hindi and everyday usage, Yantra Mantra gradually evolved into Jantar Mantar.
        </p>

        {/* WHY FAMOUS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why is Jantar Mantar famous?
        </h2>

        <SectionImage src="/Image/jantar-mantar-delhi-travel-guide-03.jpg" />

        <p className="text-gray-700 mb-4">
          Unlike most historical sites in Delhi, Jantar Mantar was not built for power, defence or decoration. It was designed with a clear purpose - to observe, measure and understand the sky.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Measure time with high accuracy</li>
          <li>Track the movement of the sun</li>
          <li>Calculate planetary positions</li>
          <li>Predict astronomical events</li>
        </ul>

        <p className="text-gray-700 mb-6">
          The most prominent among them is the Samrat Yantra, a massive sundial capable of measuring time with an accuracy of up to two seconds.
        </p>

        <p className="text-gray-700 mb-6">
          What makes the site remarkable is not just its scale, but its intent. It represents a period when astronomy was studied through direct observation, using carefully designed structures rather than mechanical devices.
        </p>

        {/* INSTRUMENTS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Main Instruments at Jantar Mantar, Delhi
        </h2>

        <SectionImage src="/Image/jantar-mantar-delhi-travel-guide-04.jpg" source="Times of India" />

        <p className="text-gray-700 mb-4 font-semibold">
          Samrat Yantra - The Giant Sundial
        </p>
        <p className="text-gray-700 mb-6">
          The largest structure here is a triangular instrument that tells time using sunlight and shadow. The shadow moves slowly, about one millimetre every second, showing time in a very natural and steady way. If you stand beside it for a minute, you begin to notice something different. You are not just checking the time, you are actually watching it move in front of you.
        </p>

        <p className="text-gray-700 mb-4 font-semibold">
          Jai Prakash Yantra - A Walkable Sky Map
        </p>
        <p className="text-gray-700 mb-6">
          This hemispherical structure represents the sky and how celestial bodies were mapped. You can step inside it and see how the positions of stars were calculated in the past. It may feel a bit confusing at first, but that sense of curiosity is what makes the experience interesting.
        </p>

        <p className="text-gray-700 mb-4 font-semibold">
          Ram Yantra - Measuring the Sky
        </p>
        <p className="text-gray-700 mb-6">
          The Ram Yantra is designed to measure the altitude and direction (azimuth) of celestial bodies such as the sun and stars. It consists of two open circular structures with a central pillar, allowing observations from different positions to ensure accuracy.
        </p>

        <p className="text-gray-700 mb-4 font-semibold">
          Misra Yantra - The Time Calculator
        </p>
        <p className="text-gray-700 mb-6">
          The Misra Yantra is a combination of different instruments designed to solve multiple time-related observations. It was used to find the longest and shortest days of the year, calculate the exact moment of noon and even compare time differences between different places.
        </p>

{/* THINGS TO DO */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Things to Do at Jantar Mantar, Delhi
</h2>

<SectionImage src="/Image/jantar-mantar-delhi-travel-guide-05.jpg" />

<p className="text-gray-700 mb-6">
  If you’re wondering about things to do at Jantar Mantar Delhi, don’t just walk around but engage with it.
</p>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>Read time using the Samrat Yantra</b> - Observe how the shadow moves along the scale to indicate time with surprising accuracy.</li>
  <li><b>Focus on one instrument at a time</b> - Instead of rushing through, take a few minutes to understand how a single structure works. It makes the experience far more meaningful.</li>
  <li><b>Explore the geometry through photography</b> - The curves, angles and symmetry offer unique perspectives for creative shots.</li>
  <li><b>Engage with curiosity</b> - The site becomes more interesting the more you question what you’re seeing and how it functions.</li>
</ul>

{/* FACTS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Interesting Facts About Jantar Mantar Delhi
</h2>

<SectionImage src="/Image/jantar-mantar-delhi-travel-guide-06.jpg" />

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li>The shadow on the Samrat Yantra moves at approximately 1 millimetre per second, allowing precise time measurement.</li>
  <li>The instruments are carefully aligned with true north, ensuring accuracy in observations.</li>
  <li>Their large scale helps minimize observational errors and improve precision.</li>
  <li>The design reflects a blend of Indian, Islamic and European astronomical knowledge.</li>
  <li>Although smaller than the Jantar Mantar Jaipur, it remains historically significant.</li>
  <li>The entire system functions without any modern technology, relying purely on geometry and sunlight.</li>
</ul>

{/* TIMINGS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Jantar Mantar Delhi Timings & Entry Fee
</h2>

<p className="text-gray-700 mb-4">
  If you’re planning your visit, here is the essential information.
</p>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>Timings:</b> Sunrise to Sunset</li>
  <li><b>Indians:</b> ₹25, ₹20 (online)</li>
  <li><b>Foreigners:</b> ₹300, ₹250 (online)</li>
</ul>

{/* BEST TIME */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Best time to Visit Jantar Mantar
</h2>

<SectionImage src="/Image/jantar-mantar-delhi-travel-guide-07.jpg" />

<p className="text-gray-700 mb-6">
  October to March is the best time with pleasant weather and comfortable conditions. Mornings between 9 AM to 11 AM are quieter, so you can explore and understand the instruments better.
</p>

<p className="text-gray-700 mb-6">
  Evening from 4 PM to 6 PM offers the best lighting for photography and shadow observation. It’s better to avoid peak summer afternoons, as the heat can make the visit uncomfortable.
</p>

{/* HOW TO REACH */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  How to Reach Jantar Mantar, Delhi
</h2>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>By Metro:</b> Rajiv Chowk and Patel Chowk Metro Station, both within walking distance.</li>
  <li><b>By Bus:</b> Well-connected by DTC buses with nearby stops like Janpath and Sansad Marg.</li>
  <li><b>By Road:</b> Autos and app-based cabs are also easily available.</li>
</ul>

{/* TIPS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Common Mistakes to Avoid & Pro Travel Tips
</h2>

<SectionImage src="/Image/jantar-mantar-delhi-travel-guide-08.jpg" />

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li>Don’t treat it as just a photo spot - take time to understand how the instruments work.</li>
  <li>Avoid rushing through. Spend at least 5–10 minutes observing each structure.</li>
  <li>Try visiting on a sunny day for clearer shadow movement and a better experience, but avoid visiting during extreme heat for a more comfortable experience.</li>
  <li>Compare what you see with your phone to understand how accurate the instruments are.</li>
  <li>Wear comfortable footwear, as you’ll be walking and standing a lot.</li>
  <li>Plan your visit with nearby places to make the most of your time.</li>
</ul>

{/* NEARBY */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Nearby Places to Visit
</h2>

<SectionImage src="/Image/jantar-mantar-delhi-travel-guide-09.jpg" />

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li>Connaught Place – perfect for cafes, restaurants and shopping</li>
  <li>India Gate – a great place for an evening visit</li>
  <li>Agrasen ki Baoli – a historic stepwell with a unique atmosphere</li>
  <li>Janpath Market – ideal for street shopping and local finds</li>
</ul>

<p className="text-gray-700 mb-6">
  Start your morning at Jantar Mantar and spend some time understanding how at least one instrument works. From there, head to Connaught Place for lunch or a coffee break, explore Janpath Market for shopping and wrap up your day with a relaxed visit to India Gate in the evening.
</p>

{/* CONCLUSION IMAGE */}
<SectionImage src="/Image/jantar-mantar-delhi-travel-guide-10.jpg" />

{/* FINAL TEXT */}
<p className="text-gray-700 mb-6">
  Jantar Mantar Delhi may not impress you instantly and that is exactly what makes it special. It belongs to a time when curiosity led to creation, when people observed patiently and tried to understand the universe using nothing but intelligence and careful design.
</p>

<p className="text-gray-700 mb-6">
  Most visitors walk through, take a few photos and move on. But if you slow down even a little, the place begins to feel different. You start noticing how everything is built with purpose, how light and shadow are used to measure something as complex as time.
</p>

<p className="text-gray-800 font-medium">
  It is not just a monument. It is a reminder that human curiosity can turn simple materials into something meaningful and precise. That is why Jantar Mantar is not just worth visiting, it is worth understanding.
</p>
        {/* FAQ */}
        {/* FAQ */}
<h2 className="text-2xl font-bold mt-10 mb-6">
  Frequently Asked Questions (FAQs) about Jantar Mantar
</h2>

<div className="space-y-4 text-gray-700">

  <div className="p-4 bg-gray-50">
    <p className="font-bold">1. What is Jantar Mantar and who built it?</p>
    <p className="mt-2">
      Jantar Mantar is an astronomical observatory built in 1724 by Maharaja Jai Singh II. It was designed to study the movement of celestial bodies like the sun, moon, and planets.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">2. Why is Jantar Mantar famous?</p>
    <p className="mt-2">
      It’s famous for its massive geometric instruments that can measure time, predict eclipses, and track stars - all without modern technology. It’s a blend of science, architecture, and history.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">3. What are the main instruments inside Jantar Mantar?</p>
    <p className="mt-2">
      Some key instruments include:<br/>
      Samrat Yantra – a giant sundial that tells accurate time<br/>
      Jai Prakash Yantra – used to study the position of stars<br/>
      Ram Yantra – measures altitude and direction of celestial objects
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">4. What are the visiting timings and entry fee?</p>
    <p className="mt-2">
      Timings: Sunrise to Sunset (open all days)<br/>
      Entry Fee:<br/>
      Indians: ₹25, ₹20 (online)<br/>
      Foreigners: ₹300, ₹250 (online)
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">5. What is the best time to visit Jantar Mantar?</p>
    <p className="mt-2">
      The best time is from October to March when the weather in Delhi is pleasant. Early morning or late afternoon visits are ideal to avoid crowds and harsh sunlight.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">6. What is Jantar Mantar in Delhi?</p>
    <p className="mt-2">
      Jantar Mantar is an 18th-century astronomical observatory built to study time, celestial movements, and planetary positions using large architectural instruments.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">7. Who built Jantar Mantar Delhi?</p>
    <p className="mt-2">
      Jantar Mantar was built by Maharaja Jai Singh II in 1724, who was known for his deep interest in astronomy.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">8. What is Jantar Mantar famous for?</p>
    <p className="mt-2">
      Jantar Mantar is famous for its unique architectural instruments used for astronomical observations, including one of the world’s largest sundials.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">9. What are the timings of Jantar Mantar Delhi?</p>
    <p className="mt-2">
      Jantar Mantar is open daily from 6:00 AM to 6:00 PM. It is advisable to visit during daylight hours to understand the instruments better.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">10. What is the entry fee for Jantar Mantar?</p>
    <p className="mt-2">
      The entry fee is approximately ₹25 for Indian citizens and ₹300 for foreign tourists. Prices may change, so checking official sources is recommended.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">11. How much time is needed to visit Jantar Mantar?</p>
    <p className="mt-2">
      You can explore Jantar Mantar comfortably in about 1 to 2 hours, depending on your interest in astronomy and architecture.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">12. What is the main instrument in Jantar Mantar?</p>
    <p className="mt-2">
      The most famous instrument is the Samrat Yantra, a massive sundial used to measure time with great accuracy.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">13. Is Jantar Mantar a UNESCO World Heritage Site?</p>
    <p className="mt-2">
      Yes, Jantar Mantar is recognized as a UNESCO World Heritage Site for its scientific and historical significance.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">14. Where is Jantar Mantar located in Delhi?</p>
    <p className="mt-2">
      Jantar Mantar is located near Connaught Place in central Delhi, making it easily accessible by metro and road.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">15. What is the best time to visit Jantar Mantar?</p>
    <p className="mt-2">
      The best time to visit is during the morning or late afternoon when the sunlight helps in observing the instruments clearly.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">16. Can we visit Jantar Mantar with family?</p>
    <p className="mt-2">
      Yes, Jantar Mantar is a great place for families, students, and anyone interested in history and science.
    </p>
  </div>

  <div className="p-4 bg-gray-50">
    <p className="font-bold">17. Why is Jantar Mantar important?</p>
    <p className="mt-2">
      Jantar Mantar is important because it represents India’s advanced understanding of astronomy and scientific innovation during the 18th century.
    </p>
  </div>

</div>

        {/* AUTHOR */}
       <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="/Image/kritisingh.jpg"
              alt="Kriti Singh"
              className="w-40 h-40 object-cover rounded-md"
            />

            <p className="text-gray-800 leading-relaxed">
              Kriti Singh began writing out of curiosity but it soon became her way of observing and making sense of the world
              around her. Originally from Bihar and now living in Delhi for her studies, 
              her perspective is shaped by both, where rooted culture meets the fast pace of city life. 
              She finds stories in everyday spaces, from crowded streets to familiar food corners, not to 
              romanticize them but to understand and capture them as they are. Her writing reflects this in-between space,
               personal yet grounded, thoughtful yet unfiltered. She doesn’t claim expertise but writes with honesty, 
               clarity and a sharp eye for detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JantarMantar;