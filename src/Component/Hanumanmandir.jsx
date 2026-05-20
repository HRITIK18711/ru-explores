import React from "react";

const SectionImage = ({ src, source }) => (
  <div className="my-6">
    <img
      src={src}
      className="w-full h-[420px] object-cover rounded-lg"
      alt=""
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const Hanumanmandir = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Pracheen Hanuman Mandir Delhi – History, Timings & the Soul of Connaught Place
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-bold">
            Published On: 06 May, 2026
          </span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-bold">Pragya Singh</span>
        </p>

        {/* HERO IMAGE */}
        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-01.jpg"
          source="Delhi Tourism"
        />

        <p className="mb-4 text-black">
          There are temples in Delhi that feel historical. And then there are temples that feel lived in.
          Pracheen Hanuman Mandir belongs to the second kind.
        </p>

        <p className="mb-4 text-black">
          Located just a few minutes away from the constant movement of Connaught Place, the temple exists in striking contrast to everything around it. Outside, traffic circles endlessly around Rajiv Chowk. Office crowds move quickly through the colonnades. Cafes fill with conversation, music and evening rush.
        </p>

        <p className="mb-4 text-black">
          Then suddenly, the rhythm changes.
          The scent of incense replaces the smell of traffic. Temple bells blend into the uninterrupted chanting of “Sri Ram, Jai Ram, Jai Jai Ram.”
        </p>

        <p className="mb-6 text-black">
          Pracheen Hanuman Mandir does not rely on monumental scale or architectural spectacle. Its presence comes from something far more enduring i.e. repetition, devotion, ritual and the feeling that prayer here never fully pauses.
        </p>

        {/* VISITOR INFO */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Visitor Information
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300">
            <tbody>
              <tr>
                <td className="border p-3 font-bold">Location</td>
                <td className="border p-3">
                  Baba Kharak Singh Marg, Connaught Place
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-bold">
                  Nearest Metro
                </td>
                <td className="border p-3">Rajiv Chowk</td>
              </tr>

              <tr>
                <td className="border p-3 font-bold">
                  Entry Fee
                </td>
                <td className="border p-3">Free</td>
              </tr>

              <tr>
                <td className="border p-3 font-bold">
                  Best Time
                </td>
                <td className="border p-3">
                  Early mornings & evenings
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-bold">
                  Peak Days
                </td>
                <td className="border p-3">
                  Tuesday & Saturday
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          History of Pracheen Hanuman Mandir
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-02.jpg"
          source="The Times of India"
        />

        <p className="mb-4 text-black">
         The word “Pracheen” means ancient and in the case of Pracheen Hanuman Mandir, the name carries more than symbolic meaning. According to long-standing local belief, the temple traces its origins back to the era of the Mahabharata, when Delhi was believed to be Indraprastha, the legendary capital of the Pandavas. It is often counted among the five ancient temples traditionally associated with that period. Whether viewed historically or spiritually, the connection feels deeply fitting.        </p>

        <p className="mb-4 text-black">
            The temple’s association with the Mahabharata is linked through Bhima and Lord Hanuman, both believed to be sons of Vayu, the wind god. One of the most widely remembered stories describes Bhima encountering an old Vanara quietly resting across his path in the forest.        </p>

        <p className="mb-4 text-black">
            Annoyed by the obstruction, Bhima asks him to move aside. The Vanara calmly replies that Bhima may move the tail himself if he wishes to pass. Confident in his immense strength, Bhima tries and fails. What first appears to be a simple encounter slowly reveals itself as something far deeper. The Vanara is revealed to be Lord Hanuman himself, reminding Bhima that strength without humility carries little meaning. That sense of devotion over pride still feels closely connected to the spiritual atmosphere of the temple today.        </p>

        <p className="mb-4 text-black">
            Historically, the present structure is believed to have been established during the reign of Mughal emperor Akbar by Maharaja Man Singh I, one of Akbar’s most prominent Rajput generals. Later in 1724, the temple was rebuilt and expanded under Maharaja Jai Singh II, the same ruler associated with Jantar Mantar in Delhi.        </p>

        <p className="mb-6 text-black">
            But perhaps the most unusual aspect of the temple’s history is the crescent moon placed atop its shikhar. Unlike most Hindu temples, where symbols such as the Om or Kalash dominate the spire, Pracheen Hanuman Mandir carries an Islamic crescent instead, a feature that immediately stands out against the Delhi skyline.        </p>

        {/* CRESCENT */}
        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-03.jpg"
          source="Wikipedia"
        />
        <p className="mb-6 text-black">
According to popular tradition, the crescent was gifted by a Mughal emperor after the saint-poet Tulsidas performed a miracle in the royal court. Historical versions of the story differ but the legend has remained deeply tied to the identity of the temple for generations.
Today, the crescent continues to overlook Connaught Place as a quiet reminder of Delhi’s layered past, a city where different faiths, rulers, traditions and stories have continued to exist beside one another across centuries.
        </p>

        {/* INSIDE TEMPLE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Inside Pracheen Hanuman Mandir
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-04.jpg"
          source="YouTube / Ekal Bharat"
        />

        <p className="mb-4 text-black">
            The entrance to the temple is easy to miss if you are moving too quickly through Connaught Place. Then suddenly, it isn’t. A short climb up the marble steps creates an immediate shift from the movement of the city below. Traffic noise still exists somewhere outside but it begins to blend into something else. Temple bells, chanting, footsteps and the low rhythm of prayer that seems to move continuously through the complex.        </p>

        <p className="mb-4 text-black">
          The transition feels less like entering a monument and more like stepping into a space that has remained spiritually active for generations. Before reaching the sanctum, the silver-plated entrance doors immediately draw attention. Scenes from the Ramayana are carved across their surface in remarkable detail, rewarding anyone who pauses long enough to observe them carefully instead of rushing past.
        </p>

        <p className="mb-4 text-black">
          Inside, the temple opens gradually. Painted depictions of Lord Hanuman appear across the upper sections of the foyer while verses from the Sundar Kand are inscribed into the marble walls below. These details do not feel arranged for display alone. They feel woven naturally into the devotional atmosphere of the temple itself. The sanctum is positioned along the northern wall, where the idol of Baal Hanuman Ji faces south, a direction traditionally associated with protection and strength in many Hanuman Ji temples.
        </p>

        <p className="mb-4 text-black">
          And then comes the moment most visitors remember longest. The idol does not appear sharply defined or heavily ornamented. Over centuries, layers of sindoor offered by devotees have completely covered the original form beneath. Under the temple lamps, the figure appears as a glowing vermilion presence rather than carved stone.
The tradition is connected to a well-known story from the Ramayana, where Lord Hanuman covers himself in sindoor after learning that Goddess Sita applies it as a symbol of devotion to Lord Ram. Wanting to express even greater devotion, he covers his entire body in vermilion. That association still continues here through every offering placed before the idol.

        </p>

        <p className="mb-6 text-black">
          Around the main sanctum, smaller shrines dedicated to Lord Shiva, Maa Durga and Santoshi Mata extend the experience outward into quieter corners of the complex where devotees often pause longer for prayer. Above it all rises the temple’s 108-foot shikhara and at its peak rests the crescent moon that continues to make the temple one of the most visually distinctive spiritual landmarks in Delhi.
        </p>

        {/* CONTINUOUS CHANTING */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Continuous Chanting Tradition
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-05.jpg"
          source="YouTube / Travel with Nitin Dagar"
        />

        <p className="mb-4 text-black">
          What makes Pracheen Hanuman Mandir truly unforgettable is not visible immediately.
        </p>

        <p className="mb-4 text-black">
          Somewhere beneath the temple bells and footsteps, a continuous chant keeps flowing through the complex:
          “Sri Ram, Jai Ram, Jai Jai Ram.”
        </p>

        <p className="mb-6 text-black">
          Day and night, the chanting continues uninterrupted for decades as part of the temple’s devotional tradition, earning recognition in the Guinness Book of World Records.
        </p>

        {/* DIFFERENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Makes This Temple Different
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-06.jpg"
          source="YouTube / Travel with Nitin Dagar"
        />

        <ul className="list-disc pl-6 text-black mb-6 space-y-3">
          <li>The uninterrupted chanting running day and night.</li>
          <li>The crescent moon atop the shikhara.</li>
          <li>The Baal Hanuman idol covered entirely in sindoor.</li>
          <li>The contrast between Connaught Place and the spiritual atmosphere inside.</li>
          <li>The temple still feels actively woven into the rhythm of Delhi.</li>
        </ul>

        {/* THINGS TO NOTICE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Things to Notice Inside
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-07.jpg"
          source="Delhi Tourism"
        />

        <h4 className="font-bold text-black mb-1">
          The Baal Hanuman Idol
        </h4>

        <p className="mb-4 text-black">
          Covered entirely in sindoor, carrying the weight of repeated devotion.
        </p>

        <h4 className="font-bold text-black mb-1">
          The Entrance Doors
        </h4>

        <p className="mb-4 text-black">
          Beautiful Ramayana carvings detailed across silver-plated doors.
        </p>

        <h4 className="font-bold text-black mb-1">
          Sundar Kand on the Walls
        </h4>

        <p className="mb-4 text-black">
          Verses from Ramcharitmanas inscribed directly into the structure.
        </p>

        <h4 className="font-bold text-black mb-1">
          The Crescent Spire
        </h4>

        <p className="mb-6 text-black">
          One of the most visually distinctive features of the temple.
        </p>

        {/* FESTIVALS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Festivals and Weekly Rhythm
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-08.jpg"
          source="X / ANI"
        />

        <p className="mb-4 text-black">
          Tuesdays and Saturdays transform the atmosphere completely as both days hold special significance in the worship of Lord Hanuman.
        </p>

        <p className="mb-4 text-black">
          The marble steps fill with devotees carrying garlands, coconuts, sindoor and besan laddoos.
        </p>

        <p className="mb-6 text-black">
          Shri Hanuman Jayanti brings the temple to its most vibrant form with devotional singing, flower decorations and long queues throughout the day.
        </p>

        {/* PLAN VISIT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Planning Your Visit
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-09.jpg"
          source="YouTube / Abhishek Vashisth Travel Vlogs"
        />

        <h4 className="font-bold text-black mb-1">
          Best Time to Visit
        </h4>

        <p className="mb-4 text-black">
          Weekday mornings between 6 AM and 9 AM offer the most peaceful experience.
        </p>

        <h4 className="font-bold text-black mb-1">
          How to Reach
        </h4>

        <p className="mb-4 text-black">
          The temple is located near Rajiv Chowk Metro Station and can easily be reached by metro, cab or auto-rickshaw.
        </p>

        <h4 className="font-bold text-black mb-1">
          Things to Keep in Mind
        </h4>

        <ul className="list-disc pl-6 mb-6 text-black space-y-2">
          <li>Footwear must be removed before entering.</li>
          <li>Photography inside the sanctum is restricted.</li>
          <li>Modest clothing is recommended.</li>
          <li>Besan laddoo is the most common prasad.</li>
          <li>Tuesdays and Saturdays are usually crowded.</li>
        </ul>

        {/* NEARBY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Places to Explore Nearby
        </h2>

        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-10.jpg"
          source="Pragya Singh"
        />
        <p className="mb-4 text-black">
         Around the main sanctum, smaller shrines dedicated to Lord Shiva, Maa Durga and Santoshi Mata extend the experience outward into quieter corners of the complex where devotees often pause longer for prayer. Above it all rises the temple’s 108-foot shikhara and at its peak rests the crescent moon that continues to make the temple one of the most visually distinctive spiritual landmarks in Delhi.

        </p>

        <h4 className="font-bold text-black mb-1">
          Connaught Place
        </h4>

        <p className="mb-4 text-black">
         The temple sits directly beside Connaught Place, one of Delhi’s most recognizable commercial and cultural hubs. Stepping out of the temple and into the circular colonnades of CP creates an immediate shift in atmosphere. Prayer and chanting give way to cafes, bookstores, restaurants, offices, street performers and constant movement.        </p>

        <h4 className="font-bold text-black mb-1">
          Janpath Market
        </h4>

        <p className="mb-4 text-black">
            A short walk away lies Janpath Market, one of Delhi’s most popular street markets. The market moves with its own rhythm, textiles hanging from crowded stalls, handcrafted jewellery, street bargaining, Tibetan shops and the constant sound of people negotiating prices from one corner to another.        </p>

        <h4 className="font-bold text-black mb-1">
          Gurudwara Bangla Sahib
        </h4>

        <p className="mb-4 text-black">
            Located nearby, Gurudwara Bangla Sahib offers a completely different spiritual experience. Where Pracheen Hanuman Mandir feels rhythmic and devotional, Bangla Sahib feels expansive and reflective. The sarovar, white marble pathways, kirtan and community kitchen create a calmness that contrasts beautifully with the movement of Connaught Place nearby.        </p>

        <h4 className="font-bold text-black mb-1">
          India Gate
        </h4>

        <p className="mb-6 text-black">
            A short drive from the temple leads to India Gate and the wider ceremonial avenues of Lutyens’ Delhi. The broad roads, government buildings and open public spaces around India Gate create yet another version of the city, one shaped by colonial planning and national symbolism rather than the dense rhythm of old markets and temples.        </p>

        
        <h4 className="font-bold text-black mb-1">
            Food Around Connaught Place

        </h4>
        <p className="mb-6 text-black"> The area surrounding the temple is also one of the easiest places in Delhi to continue exploring through food. Connaught Place and nearby streets offer everything from old sweet shops, North Indian restaurants, street snacks, cafes, modern eateries and quick prasad stalls outside the temple itself. That mixture of devotional spaces and urban food culture is part of what makes central Delhi feel constantly active and layered.
Few places in Delhi allow you to move between devotion, history, food, markets, and modern city life within such a small distance.

</p>
        {/* CONCLUSION */}
        <SectionImage
          src="/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-11.jpg"
          source="YouTube / News Diggy"
        />

        <p className="mb-4 text-black">
Pracheen Hanuman Mandir does not try to compete with the scale of Delhi’s grand monuments or the visual spectacle of newer temples.
Its presence feels different. What makes the temple memorable is not a single architectural feature or historical claim, but the feeling of continuity that runs quietly through every part of the experience, the uninterrupted chanting, the repeated rituals, the steady movement of devotees and the sense that prayer here has never fully paused despite the constantly changing city outside.
        </p>

        <p className="mb-4 text-black">
People still stop here before work, after difficult days, during festivals, on Tuesdays, on Saturdays or simply because the temple has remained part of their routine for years. That ongoing relationship between the city and the temple gives the space a presence that feels deeply lived rather than historically distant.
        </p>

        <p className="mb-6 text-black">
And maybe that is what truly defines Pracheen Hanuman Mandir. Not simply age. Not mythology alone. But continuity carried forward through devotion, repetition and memory across generations of Delhi itself.
In a city constantly rebuilding itself, Pracheen Hanuman Mandir remains one of the rare places where devotion still feels uninterrupted by time.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Frequently Asked Questions (FAQs) about Pracheen Hanuman Mandir Delhi
        </h2>

        <div className="space-y-4 text-black">

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold">
              1. Where is Pracheen Hanuman Mandir located?
            </p>
            <p className="mt-2">
              The temple is located on Baba Kharak Singh Marg in Connaught Place, Central Delhi.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold">
              2. What are the timings of Pracheen Hanuman Mandir?
            </p>
            <p className="mt-2">
              Usually from 5:00 AM to 12:00 PM and 4:00 PM to 10:00 PM.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold">
              3. Is there an entry fee?
            </p>
            <p className="mt-2">
              No, entry is completely free.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold">
              4. Which metro station is nearest?
            </p>
            <p className="mt-2">
              Rajiv Chowk Metro Station.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold">
              5. Why does the temple have a crescent moon?
            </p>
            <p className="mt-2">
              According to tradition, it was gifted by a Mughal emperor after Tulsidas performed a miracle.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold">
              6. What is the Guinness World Record associated with the temple?
            </p>
            <p className="mt-2">
              Continuous chanting of “Sri Ram, Jai Ram, Jai Jai Ram” since 1964.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hanumanmandir;