import React from "react";

const SectionImage = ({ src, source = "Times of India / Pinterest" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="sarojini nagar market"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const Sarojini = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sarojini Nagar Market, Delhi: The Ultimate Budget Shopping Guide
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 1 May, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        <SectionImage src="/Image/sarojini-nagar-market-delhi-01.png" />

        <p className="text-gray-700 mb-6">
          A ₹200 outfit that looks like ₹2000? It might sound fake but it’s a normal day at Sarojini Nagar Market.
          One of the busiest and most loved street markets in Delhi, it’s a paradise for budget shoppers.
          With hundreds of stalls lined across narrow lanes, the market attracts everyone—from college students
          to fashion influencers—looking for trendy outfits at unbelievably low prices.
        </p>

        <p className="text-gray-700 mb-6">
          But Sarojini Nagar isn’t just about cheap shopping. It’s about the thrill of finding hidden gems, 
          mastering the art of bargaining and walking out with bags full of fashion without emptying your wallet. 
          If you’re planning a visit, this guide covers everything you need.
        </p>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">History & Background</h2>
        <SectionImage src="/Image/sarojini-nagar-market-delhi-02.png" />

        <p className="text-gray-700 mb-6">
          Sarojini Nagar was developed in the early 1950s as a residential colony for central government employees in New Delhi, 
          as part of post-independence urban planning. It was named after Sarojini Naidu, a prominent freedom fighter and poet.

        </p>

        <p className="text-gray-700 mb-6">
         The local market was originally created to serve the daily needs of residents, 
         offering basic goods and services. Over time, due to its central location and growing connectivity,
          the market expanded and began attracting a wider range of shoppers.

        </p>

        <p className="text-gray-700 mb-6">
          Its transformation into a major shopping hub happened gradually, 
          especially as traders started selling export surplus and overstock garments,
           products originally made for brands but available at lower prices due to excess production or minor defects. 
           This made trendy clothing accessible at affordable rates.
        </p>
        <p className="text-gray-700 mb-6">
          By the late 20th century, Sarojini Nagar had become widely known as a budget shopping destination, 
          particularly popular among students, young professionals and bargain hunters. 
          Today, it remains one of Delhi’s busiest street markets, known for its constantly changing stock,
           affordable fashion and lively atmosphere.
        </p>

        {/* WHY FAMOUS */}
        {/* WHY FAMOUS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  What Makes Sarojini Nagar Market So Famous?
</h2>

<SectionImage 
  src="/Image/sarojini-nagar-market-delhi-03.png" 
  source="India Today" 
/>

{/* Ultra-Low Prices */}
<h3 className="text-xl font-semibold mt-6 mb-2">Ultra-Low Prices</h3>
<p className="text-gray-700 mb-6">
  Sarojini Nagar is known for its unbeatable prices, with tops available for around ₹50–₹150,
  dresses ranging between ₹200–₹500 and winter wear starting from about ₹500.
  With such affordable options across categories, you can easily build an entire wardrobe
  here without spending much.
</p>

{/* Fast Fashion */}
<h3 className="text-xl font-semibold mt-6 mb-2">Fast & Trendy Fashion</h3>
<p className="text-gray-700 mb-6">
  The market is quick to pick up trends, often reflecting global styles within days or weeks.
  That’s why it attracts a wide range of shoppers—from college students to working professionals
  and fashion lovers looking for trendy styles at affordable prices.
</p>

{/* Export Surplus */}
<h3 className="text-xl font-semibold mt-6 mb-2">Export Surplus Finds</h3>
<p className="text-gray-700 mb-6">
  Many items here come from export surplus or factory rejects. You might spot pieces
  inspired by brands like Zara, H&M or Forever 21 at a fraction of their original price.
</p>

{/* Bargaining */}
<h3 className="text-xl font-semibold mt-6 mb-2">Bargaining Culture</h3>
<p className="text-gray-700 mb-6">
  Prices are rarely fixed and bargaining is part of the experience.
  Knowing how to negotiate can make a big difference in what you end up paying.
</p>
        {/* FOOD */}
        {/* EXPERIENCE */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  What to Expect When You Visit Sarojini Nagar Market
</h2>

<SectionImage 
  src="/Image/sarojini-nagar-market-delhi-04.png" 
  source="India TV News" 
/>

{/* Endless Shopping */}
<h3 className="text-xl font-semibold mt-6 mb-2">Endless Street Shopping</h3>
<p className="text-gray-700 mb-6">
  The market feels like a maze of narrow lanes lined with closely packed stalls.
  From trendy clothes to everyday essentials, every corner offers something new,
  making it easy to spend hours exploring. The variety keeps changing, so each
  visit brings a different experience.
</p>

{/* Accessories */}
<h3 className="text-xl font-semibold mt-6 mb-2">Accessories & Footwear</h3>
<p className="text-gray-700 mb-6">
  Beyond clothing, you will find a wide range of accessories and footwear.
  From oxidized jewellery and sunglasses to handbags, belts and sneakers,
  there’s plenty to complete your look without spending much.
</p>

{/* Treasure Hunt */}
<h3 className="text-xl font-semibold mt-6 mb-2">Treasure Hunt Experience</h3>
<p className="text-gray-700 mb-6">
  Shopping here is less about picking and more about discovering.
  The best pieces are often hidden among piles, so patience and a keen eye
  can help you find great deals that others might miss.
</p>

{/* Crowd */}
<h3 className="text-xl font-semibold mt-6 mb-2">Crowd & Energy</h3>
<p className="text-gray-700 mb-6">
  Sarojini Nagar is almost always busy, especially on weekends.
  Expect crowds, noise and constant movement, but that lively,
  slightly chaotic energy is what makes the experience fun and memorable.
</p>

{/* FOOD OPTIONS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Food Options in Sarojini Nagar (Must Try)
</h2>

<SectionImage 
  src="/Image/sarojini-nagar-market-delhi-05.png" 
  source="Pragya Gautam" 
/>

<p className="text-gray-700 mb-6">
  A shopping trip here is incomplete without a quick food break. The market
  offers plenty of options to keep you going while you explore.
</p>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>Momo & Spring Roll</b> – Affordable, quick and available everywhere</li>
  <li><b>Chaat & Golgappa</b> – Tangy, refreshing and perfect for a mid-shopping snack</li>
  <li><b>Cold Coffee & Shakes</b> – Great for a quick break during long shopping hours</li>
  <li><b>Street Chinese & Rolls</b> – Filling and budget-friendly</li>
</ul>

<p className="text-gray-700 mb-6">
  Small cafes and street stalls are scattered across the market, giving you
  plenty of places to pause, recharge and then head back into the crowd.
</p>

<p className="text-green-600 font-medium mb-6">
  Pro Tip: Go for stalls with a steady crowd — they usually serve fresher food
  and have better turnover.
</p>

        {/* TIMINGS */}
        {/* TIMINGS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Sarojini Nagar Market Timings & Best Time to Visit
</h2>

<SectionImage 
  src="/Image/sarojini-nagar-market-delhi-06.png" 
  source="Times of India" 
/>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>Closed on:</b> Monday</li>
  <li><b>Open on:</b> Tuesday to Sunday</li>
  <li><b>Timings:</b> 11:00 AM – 8:00 PM</li>
</ul>

<h3 className="text-xl font-semibold mt-6 mb-2">
  Best Time to Visit
</h3>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>Morning (11 AM – 2 PM):</b> Less crowded, better deals</li>
  <li><b>Winter months (October to February):</b> Comfortable weather</li>
  <li><b>Avoid weekends:</b> If you prefer a more relaxed experience</li>
</ul>

        {/* HOW TO REACH */}
        {/* HOW TO REACH */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  How to Reach Sarojini Nagar Market
</h2>

<SectionImage 
  src="/Image/sarojini-nagar-market-delhi-07.png" 
  source="DMRC" 
/>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>By Metro:</b> Sarojini Nagar Metro Station (Pink Line)</li>
  <li><b>By Bus:</b> Sarojini Nagar Bus Depot / Sarojini Nagar Market Stop</li>
  <li><b>By Road:</b> Autos and app-based cabs are easily available</li>
</ul>

{/* PRO TIPS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Pro Shopping Tips (Don’t Skip This)
</h2>

<ul className="list-disc pl-6 mb-6 text-gray-700">
  <li><b>Start bargaining smartly:</b> Begin at around 40–50% of the quoted price and negotiate calmly</li>
  <li><b>Check items carefully:</b> Look for stains, loose threads, broken zips or size issues</li>
  <li><b>Carry cash (and change):</b> Helps in smoother bargaining (UPI not everywhere)</li>
  <li><b>Bring a tote bag:</b> Avoid carrying multiple plastic bags</li>
  <li><b>Visit early or weekdays:</b> Fewer crowds and better shopping experience</li>
  <li><b>Stay alert in crowds:</b> Keep your belongings secure</li>
  <li><b>Don’t rush:</b> Explore multiple lanes before buying</li>
</ul>
        {/* NEARBY */}
        {/* NEARBY PLACES */}
<h2 className="text-2xl font-bold mt-10 mb-6">
  Nearby Places to Explore
</h2>
<SectionImage 
  src="/Image/sarojini-nagar-market-delhi-08.png" 
  source="Canva" 
/>
<div className="grid md:grid-cols-2 gap-4 mb-10">

  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg">🛍️ Dilli Haat INA</h3>
    <p className="text-gray-700 text-sm">
      Handicrafts and food from across India
    </p>
  </div>

  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg">🏛️ Safdarjung Tomb</h3>
    <p className="text-gray-700 text-sm">
      A peaceful historical escape
    </p>
  </div>

  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg">🌿 Chanakyapuri</h3>
    <p className="text-gray-700 text-sm">
      Clean streets, cafes and greenery
    </p>
  </div>

  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg">🛕 ISKCON Temple</h3>
    <p className="text-gray-700 text-sm">
      A peaceful spiritual spot
    </p>
  </div>

  <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
    <h3 className="font-semibold text-lg">🌸 Lotus Temple</h3>
    <p className="text-gray-700 text-sm">
      A modern architectural marvel known for its serene atmosphere
    </p>
  </div>

</div>

<p className="text-gray-700 mb-10">
  You can also explore <span className="font-semibold">Connaught Place</span> 
  for a more premium shopping and dining experience.
</p>

{/* CONCLUSION */}
<div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-lg shadow-sm">
  <h2 className="text-2xl font-bold mb-4">
    Final Thoughts
  </h2>

  <p className="text-gray-700 mb-4">
    If you love fashion but don’t want to spend a fortune, 
    <span className="font-semibold"> Sarojini Nagar Market </span> is unbeatable.
    It’s crowded, chaotic and sometimes overwhelming — but that’s exactly 
    what makes it exciting.
  </p>

  <p className="text-gray-700 mb-4">
    From scoring unbelievable deals to discovering unique fashion pieces, 
    every visit feels rewarding. Whether you’re visiting for the first time 
    or coming back again, Sarojini Nagar always has something new to offer.
  </p>

  <p className="text-gray-800 font-medium">
    So wear comfortable shoes, bring your bargaining skills and get ready 
    for one of the most exciting shopping experiences in Delhi — you’ll leave 
    with full bags and zero regrets.
  </p>
</div>

        {/* FAQ */}
       {/* FAQ */}
<h2 className="text-2xl font-bold mt-10 mb-6">
  Frequently Asked Questions (FAQs)  about Sarojini Nagar Market

</h2>

<div className="space-y-4">

  <div className=" p-4 bg-gray-50">
    <h3 className="font-semibold">Q1. Why is Sarojini Nagar Market so cheap?</h3>
    <p className="text-gray-700 mt-2">
      Because most items are export surplus or factory rejects with minor defects.
    </p>
  </div>

  <div className=" p-4 bg-gray-50">
    <h3 className="font-semibold">Q2. What is the nearest metro station?</h3>
    <p className="text-gray-700 mt-2">
      Sarojini Nagar Metro Station on the Pink Line.
    </p>
  </div>

  <div className=" p-4 bg-gray-50">
    <h3 className="font-semibold">Q3. Is Sarojini Nagar worth visiting?</h3>
    <p className="text-gray-700 mt-2">
      Yes, especially for budget-friendly fashion and trendy outfits.
    </p>
  </div>

  <div className=" p-4 bg-gray-50">
    <h3 className="font-semibold">Q4. Can we bargain here?</h3>
    <p className="text-gray-700 mt-2">
      Yes, bargaining is expected and part of the culture.
    </p>
  </div>

  <div className=" p-4 bg-gray-50">
    <h3 className="font-semibold">Q5. How much time is enough?</h3>
    <p className="text-gray-700 mt-2">
      Around 2–4 hours for a complete experience.
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

export default Sarojini;