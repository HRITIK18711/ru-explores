import React from "react";

const SectionImage = ({ src, source }) => (
  <div className="my-6">
    <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt="Tughlaqabad Fort Landscape" />
    <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
  </div>
);

const Tughlaqabadfort = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Tughlaqabad Fort Delhi – History, Ruins, Mystery & the Story of a Forgotten City
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 06 May, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-01.jpg"
          source="Incredible India"
        />

        <p className="mb-4 text-gray-700">
          Delhi has no shortage of monuments. Many are restored, crowded and easy to admire within the first few minutes. But Tughlaqabad Fort feels completely different. There is no carefully designed tourist path here. No perfectly preserved courtyards. No single structure that immediately grabs your attention the moment you enter.
        </p>

        <p className="mb-4 text-gray-700">
          At first, it almost feels like endless ruins, broken walls, scattered stone pathways, massive gateways and open land stretching under the sky. But the longer you stay, the more the fort slowly begins to change. The silence starts feeling deliberate instead of empty. The scale becomes difficult to ignore. You begin realizing that this was not just a military fort but an entire fortified city built with enormous ambition, meant to survive invasions, protect a dynasty and stand for generations.
        </p>

        <p className="mb-6 text-gray-700">
          But somehow, it did not last long. And maybe that is what makes Tughlaqabad Fort so memorable even today. Not just its ruins, but the strange feeling of walking through a city that was built to become powerful and then slowly faded into silence.
        </p>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          History of Tughlaqabad Fort
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-02.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          Tughlaqabad Fort was built in the early 14th century by Ghiyas-ud-din Tughlaq, the founder of the Tughlaq dynasty. At the time, Delhi was facing repeated threats especially from Mongol invasions. Instead of simply strengthening older settlements, Ghiyas-ud-din decided to build an entirely new fortified capital from scratch which would be larger, stronger and designed purely for defense and control.
        </p>

        <p className="mb-4 text-gray-700">
          The scale of the project was enormous. Massive stone walls stretched across the rocky landscape, defensive bastions guarded different sections of the city and huge gateways controlled movement into the complex. The fort was built using hard quartzite stone, giving the structure its heavy and rugged appearance even today. But Tughlaqabad was never planned as just a military fort. It was designed as a complete fortified city with royal spaces, administrative areas, markets, water systems, living quarters and defensive zones all protected within one massive boundary. Even now, while walking through the ruins, the scale still feels difficult to fully absorb.
        </p>

        <p className="mb-6 text-gray-700">
          Some sections feel almost endless. And perhaps that is what makes the story of the fort even more surprising. Despite the enormous effort behind its construction, Tughlaqabad did not remain the centre of power for very long. After the death of Ghiyas-ud-din Tughlaq, the city slowly began losing importance. Over time, parts of it were abandoned and the massive fortified capital that was meant to represent strength and permanence gradually turned into ruins. Today, what survives is not just a fort but the remains of an unfinished ambition that once tried to reshape Delhi itself.
        </p>

        {/* WALKING THROUGH */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Walking Through a Forgotten City
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-03.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          One of the most unusual things about exploring Tughlaqabad Fort is how quickly the outside city begins to disappear. Delhi traffic still exists somewhere beyond the walls but once you start walking deeper into the ruins, the atmosphere changes almost completely. The pathways become quieter, the stone walls begin rising around you from different directions and large empty sections of the fort start opening one after another.
        </p>

        <p className="mb-4 text-gray-700">
          At first, the fort feels confusingly huge. There are broken gateways leading nowhere, scattered ruins across rocky ground, watchpoints overlooking empty land and long stretches of walls that seem to continue endlessly across the landscape. In many places, there are no signs explaining exactly what once existed there which makes the exploration feel even more raw and open.
        </p>

        <p className="mb-6 text-gray-700">
          And honestly, that uncertainty becomes part of the experience. Unlike monuments where visitors move quickly from one famous structure to another, Tughlaqabad feels more like wandering through the remains of an abandoned city and slowly trying to imagine what once stood there. Some areas feel completely exposed under the sky while others suddenly become narrow, enclosed and silent between heavy stone walls. Certain sections still carry traces of old passages, defence routes, elevated viewpoints and hidden corners that make the fort feel closer to a military landscape than a typical tourist site.
        </p>

        {/* HAUNTED STORIES */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Is Tughlaqabad Fort Really Haunted? - The Curse & Haunted Stories
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-04.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          Walk into the fort as the sun begins to set and the question doesn’t feel so simple anymore. The place becomes very quiet, the wind passes through the broken walls and for a moment, it feels like the place is holding onto something. It does not take long to understand why so many stories and rumours became attached to Tughlaqabad Fort over the centuries.
        </p>

        <p className="mb-4 text-gray-700">
          According to popular tradition, the saint Nizamuddin Auliya was overseeing the construction of a baoli around the same time Ghiyas-ud-din Tughlaq was building Tughlaqabad Fort. Stories suggest that tension developed between the Sultan and the saint over labour and resources being used for both projects.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-600">
          "Ya rahe ujjar, ya base gujjar." <br />
          (Interpretation: "May the city remain deserted or be inhabited only by herdsmen.")
        </blockquote>

        <p className="mb-6 text-gray-700">
          Over time, this statement became deeply connected to the identity of the fort, especially after the city was abandoned not very long after its construction. While walking through the ruins today, the silence, broken gateways, and empty watchpoints make it feel mysterious. However, there is no historical or scientific evidence proving that Tughlaqabad Fort is actually haunted. Most ghost stories come from personal experiences, local storytelling, and the raw atmosphere of the ruins themselves.
        </p>

        {/* EXPLORING THE RUINS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Exploring the Ruins
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-05.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          A large part of exploring Tughlaqabad Fort is simply walking without a fixed direction. Different sections of the fort slowly reveal themselves as you move deeper into the complex. Built with thick stone walls and heavy defensive design, the gateways still feel massive even in ruins.
        </p>

        <p className="mb-6 text-gray-700">
          Toward sunset, the atmosphere changes once again. The golden light falling across the rough quartzite walls gives the ruins a completely different appearance—quieter, heavier and even more dramatic against the open sky.
        </p>

        {/* WHAT MAKES IT DIFFERENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Makes Tughlaqabad Fort Different
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-06.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          This is where Tughlaqabad becomes even more interesting:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Tughlaqabad Fort was planned as an entire fortified city and not just a military fort, with space for people, markets, and administrative areas.</li>
          <li>The fort was built within a very short period, but it started losing importance not long after its construction.</li>
          <li>The massive sloping walls of the fort were designed strategically to make enemy attacks and climbing more difficult.</li>
          <li>The fort had an advanced water storage system with reservoirs and tanks, but maintaining water supply for such a large city remained a challenge.</li>
          <li>The nearby Tomb of Ghiyas-ud-din Tughlaq was connected to the fort through a causeway and was once surrounded by water for added protection.</li>
          <li>Tughlaqabad Fort still retains much of its original ruined character, with large sections of the complex remaining largely untouched over the centuries.</li>
          <li>The nearby Adilabad Fort shows that Tughlaqabad was part of a much larger defensive and architectural network built during the Tughlaq period.</li>
        </ul>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-07.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          Most historical monuments in Delhi are remembered for beauty, decoration or royal grandeur. Tughlaqabad Fort leaves an impression for completely different reasons. The fort does not feel polished or carefully preserved in the way many famous monuments do. Large sections remain broken, uneven, exposed and almost untouched by modern restoration. Instead of looking refined, the architecture feels heavy, harsh and built purely for survival. That changes the entire atmosphere of the place.
        </p>

        <p className="mb-4 text-gray-700">
          The walls are taller than most visitors expect. The open spaces feel unusually empty. And because the fort spreads across such a massive area, many sections still feel isolated even during the daytime. Unlike monuments where visitors mostly gather around one central structure, Tughlaqabad feels scattered across the landscape like the remains of an abandoned city slowly disappearing into stone and silence. Its military design also makes it feel very different from Mughal-era monuments in Delhi. There are no delicate marble details or ornamental gardens here. The sloping walls, narrow entry points, watchtowers and defensive layouts were all designed with protection in mind.
        </p>

        <p className="mb-4 text-gray-700">
          Even after centuries, the architecture still feels defensive rather than decorative. And then there is the strange contrast the fort creates with modern Delhi around it. Just beyond the ruins, traffic moves constantly across highways and crowded neighbourhood. But once you step deeper inside the fort, the noise begins fading away surprisingly quickly. The silence inside the ruins feels almost disconnected from the city outside. That atmosphere stays with people. Not because the fort is visually perfect, but because it still feels wild, unfinished, and strangely untouched compared to many other historical places in Delhi.
        </p>

        <p className="mb-6 text-gray-700">
          And maybe that is exactly why Tughlaqabad Fort feels so memorable even today. It does not feel like a monument frozen neatly in history. It feels like the remains of a city that was simply left behind.
        </p>

        {/* THINGS TO SEE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Things to See at Tughlaqabad Fort
        </h2>
        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-08.jpg"
          source="Rohit Upadhyay"
        />
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Giant Defensive Gates:</strong> Thick stone entries built to meticulously control inner access.</li>
          <li><strong>Massive Sloping Walls & Bastions:</strong> Sweeping architectural boundaries optimized against warfare.</li>
          <li><strong>Royal Ruins:</strong> Traces of older courts, audience chambers, and historic living quarters.</li>
          <li><strong>Hidden Pathways & Stairways:</strong> Narrow stone paths that preserve a strong medieval fort layout.</li>
          <li><strong>Water Reservoirs:</strong> Ancient rainwater capture systems built to sustain the localized population.</li>
          <li><strong>Tomb of Ghiyas-ud-din Tughlaq:</strong> A nearby red sandstone tomb known for symmetry and Afghan styling.</li>
        </ul>

        {/* QUICK FACTS TABLE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Tughlaqabad Fort Timings and Entry Fee
        </h2>
        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-09.jpg"
          source="Rohit Upadhyay"
        />

        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300 text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Detail Item</th>
                <th className="border p-3 text-left">Information Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Opening Hours</td>
                <td className="border p-3">9:30 AM - 6:00 PM Daily</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Indian Entry Fee</td>
                <td className="border p-3">₹25 (Cash / Offline) | ₹20 (Online Booking)</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Foreign Entry Fee</td>
                <td className="border p-3">₹300 (Cash / Offline) | ₹250 (Online Booking)</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Nearest Metro</td>
                <td className="border p-3">Tughlakabad Metro Station (Violet Line)</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Exploration Time</td>
                <td className="border p-3">Approx. 1.5 to 3 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* TRAVEL TIPS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
         Travel Tips
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-10.jpg"
          source="Rohit Upadhyay"
        />

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Wear comfortable walking or trekking shoes due to the uneven, weathered rocky layout.</li>
          <li>Carry your own water bottles since structural shaded points and vendors are minimal inside.</li>
          <li>Arrive in early morning or late afternoons to bypass harsh overhead midday sunshine.</li>
          <li>Plan to leave before sunset as large interior ruined sections become completely dark and isolated.</li>
        </ul>

        {/* NEARBY PLACES */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Nearby Places to Visit Around Tughlaqabad Fort 
        </h2>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-11.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-6 text-gray-700">
          Exploring Tughlaqabad Fort rarely feels limited to just one monument. The entire surrounding area still carries traces of Delhi’s older defensive and historical landscape, which is why many visitors continue exploring nearby ruins and structures after leaving the fort.
        </p>

        <div className="space-y-6 mb-6 text-gray-700">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">Tomb of Ghiyas-ud-din Tughlaq</h3>
            <p>
              Located just outside the main fort complex, Tomb of Ghiyas-ud-din Tughlaq is one of the most important nearby sites connected to the history of Tughlaqabad. Built in red sandstone and white marble, the tomb feels far more compact and symmetrical compared to the massive ruined fort nearby. The structure was originally connected to Tughlaqabad through a raised causeway and was once surrounded by water for additional protection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Adilabad Fort</h3>
            <p>
              A short distance away lies Adilabad Fort, another lesser-known fortification built during the Tughlaq period. Compared to Tughlaqabad, Adilabad Fort feels quieter, smaller and even more isolated. But visiting both places together gives a better sense of how extensive the defensive network of the Tughlaq dynasty once was across this part of Delhi.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Asola Bhatti Wildlife Sanctuary</h3>
            <p>
              For visitors interested in nature and photography, Asola Bhatti Wildlife Sanctuary lies relatively close to the fort area. The rocky terrain, forest sections and quieter landscape around the sanctuary create an interesting contrast with the heavy stone architecture of Tughlaqabad. During winter mornings especially, the area feels surprisingly removed from the crowded image usually associated with Delhi.
            </p>
          </div>
        </div>

        <SectionImage
          src="/Image/tughlaqabad-fort-delhi-travel-guide-12.jpg"
          source="Rohit Upadhyay"
        />

        <p className="mb-4 text-gray-700">
          In a city full of crowded monuments and polished tourist spots, Tughlaqabad Fort feels completely different. The broken walls, empty pathways and silence of the fort make it feel less like a tourist attraction and more like a forgotten city frozen in time.
        </p>

        <p className="mb-4 text-gray-700">
          Maybe that’s what makes this place so memorable. It’s not perfect, restored or easy to understand at first glance. But once you walk through its massive ruins and quiet corners, you start feeling the scale of what once existed here.
        </p>

        <p className="mb-6 text-gray-700">
          Tughlaqabad was built to become one of the greatest cities of its time. Even though that dream didn’t last long, the fort still leaves strong impression centuries later, not because it survived perfectly but because its ruins still have a story to tell.
        </p>

        {/* FAQ SECTION */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Frequently Asked Questions (FAQs) about Tughlaqabad Fort
        </h2>

        <div className="space-y-4 mb-6 text-gray-700">
          <div>
            <p className="font-semibold text-black">1. Why is Tughlaqabad Fort famous?</p>
            <p>Tughlaqabad Fort is famous for its massive ruined walls, abandoned-city atmosphere and connection with the Tughlaq dynasty. It is also well known for the popular “curse” story linked to Sufi saint Nizamuddin Auliya.</p>
          </div>
          <div>
            <p className="font-semibold text-black">2. Is Tughlaqabad Fort really haunted?</p>
            <p>No, there is no scientific or historical evidence proving that Tughlaqabad Fort is haunted. The fort feels mysterious mainly because of its huge abandoned ruins, silence, isolated atmosphere and the legends connected to its history.</p>
          </div>
          <div>
            <p className="font-semibold text-black">3. What is the curse of Tughlaqabad Fort?</p>
            <p>According to popular tradition, Nizamuddin Auliya is believed to have said: “Ya rahe ujjar, ya base gujjar.” The line is commonly interpreted as: “May the city remain deserted or be inhabited only by herdsmen.” Over time, this story became closely connected with the identity of the fort after the city was abandoned.</p>
          </div>
          <div>
            <p className="font-semibold text-black">4. Who built Tughlaqabad Fort?</p>
            <p>The fort was built by Ghiyas-ud-din Tughlaq in the early 14th century after he established the Tughlaq dynasty in Delhi.</p>
          </div>
          <div>
            <p className="font-semibold text-black">5. Why was Tughlaqabad Fort abandoned?</p>
            <p>Historians believe the fort gradually lost importance because of water supply issues, political changes and shifting priorities after the death of Ghiyas-ud-din Tughlaq. The city was not actively used for very long.</p>
          </div>
          <div>
            <p className="font-semibold text-black">6. What are the timings of Tughlaqabad Fort?</p>
            <p>The fort is generally open daily from 9:30 AM to 6:00 PM, though timings may slightly vary depending on ASI regulations and seasonal conditions.</p>
          </div>
          <div>
            <p className="font-semibold text-black">7. What is the entry fee for Tughlaqabad Fort?</p>
            <p>According to current ASI ticket rates: Indian visitors: ₹25 offline / ₹20 online | Foreign visitors: ₹300 offline / ₹250 online</p>
          </div>
          <div>
            <p className="font-semibold text-black">8. Which metro station is closest to Tughlaqabad Fort?</p>
            <p>The nearest metro station is Delhi Metro’s Tughlakabad Metro Station on the Violet Line.</p>
          </div>
          <div>
            <p className="font-semibold text-black">9. How much time is needed to explore Tughlaqabad Fort?</p>
            <p>Most visitors usually need around 1.5 to 3 hours to properly explore the fort because the complex is very large and spread across uneven terrain.</p>
          </div>
          <div>
            <p className="font-semibold text-black">10. What makes Tughlaqabad Fort different from other forts in Delhi?</p>
            <p>Unlike heavily restored monuments, Tughlaqabad Fort still feels raw, massive and relatively untouched. The silence, ruined architecture, abandoned-city atmosphere and huge defensive walls make it feel very different from places like Red Fort or Purana Qila.</p>
          </div>
          <div>
            <p className="font-semibold text-black">11. Is photography allowed inside Tughlaqabad Fort?</p>
            <p>Yes, photography is allowed inside the fort. The monument is especially popular for wide-angle shots, dramatic stone architecture, sunset photography and atmospheric ruin photography.</p>
          </div>
          <div>
            <p className="font-semibold text-black">12. What is the best time to visit Tughlaqabad Fort?</p>
            <p>Morning and late afternoon are usually the best times to visit. The weather feels more comfortable, the lighting is better for photography and the fort’s atmosphere feels especially striking during sunset hours.</p>
          </div>
        </div>

        {/* AUTHOR BIO */}
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

export default Tughlaqabadfort;