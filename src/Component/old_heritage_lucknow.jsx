import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const OldHeritageLucknow = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Heritage Walk in Lucknow: Exploring Rumi Darwaza, Chhota Imambara & Husainabad
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 20 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Saniya Mishra</span>
                </p>

                <SectionImage
                    src="/Image/01-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Unsplash/Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Most people stop at Rumi Darwaza. They take a few photographs, admire the gateway for a minute or two and head somewhere else. If that is your plan, you are going to miss the best part of old Lucknow. Walk through the gateway instead. A few minutes later, you will find yourself inside Chhota Imambara, looking up at crystal chandeliers that have fascinated people for generations.
                </p>

                <p className="mb-4 text-gray-700">
                    Walk a little further and India's tallest clock tower rises above the skyline. Right beside it, the calm waters of Ghanta Ghar Talab reflect the tower and the evening lights, creating one of the most beautiful views in this part of the city. Just around the corner stands Satkhanda, a monument that was never completed but still manages to catch everyone's attention. Nearby, an old picture gallery quietly preserves the faces of Awadh's nawabs while the streets outside are busy with food stalls, conversations and the aroma of kebabs and Kashmiri chai. This is not the kind of place where you rush from one monument to another.
                </p>

                <p className="mb-6 text-gray-700">
                    The real joy lies in walking without constantly checking the time. This heritage walk is not just about exploring old buildings. It's about discovering how history still finds a place in everyday life. By the end of the walk, you won't just remember the monuments, you will remember the streets that connect them.
                </p>

                {/* Before You Begin */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Before You Begin
                </h2>

                <SectionImage
                    src="/Image/02-old-lucknow-heritage-walk.jpg"
                    source="Unsplash/Rahul Mishra"
                />

                <p className="mb-6 text-gray-700">
                    Bara Imambara deserves a visit of its own. Between the Bhool Bhulaiya, the grand central hall and the surrounding complex, it's easy to spend two to three hours there. Trying to fit it into this walk would mean rushing through one of the city's finest monuments. If you have a full day in old Lucknow, begin your morning at Bara Imambara. Once you have explored the complex, walk across to Rumi Darwaza and continue with this heritage trail through Husainabad.
                </p>

                {/* Why Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why This Heritage Walk Is Different
                </h2>

                <SectionImage
                    src="/Image/03-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Muhammed Zeya"
                />

                <p className="mb-4 text-gray-700">
                    Everything in Husainabad sits surprisingly close together. Rumi Darwaza, Chhota Imambara, the Clock Tower, Satkhanda and the Picture Gallery are all within walking distance of one another. That means you spend less time travelling and more time noticing the neighbourhood itself.
                </p>
                <p className="mb-4 text-gray-700">
                    The walk changes every few minutes. One moment you are standing beneath an eighteenth-century gateway. A little later, you are looking up at crystal chandeliers inside Chhota Imambara. Walk a few more steps and you will find the Clock Tower reflected in the waters of Ghanta Ghar Talab. Around the next corner, an unfinished monument tells a story that was never completed.
                </p>
                <p className="mb-6 text-gray-700">
                    The streets connecting these landmarks are just as interesting. Small shops, tea stalls, local eateries and old buildings remind you that this is not an open-air museum. People still live and work here, giving the area energy that many historic sites loose over time. If you have three or four hours to spare, slow down. Stop where something catches your eye, take a break for chai and let the neighbourhood set the pace. That is the best way to experience Husainabad.
                </p>

                {/* First Stop */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    First Stop: Rumi Darwaza – The Gateway That Still Welcomes Lucknow
                </h2>

                <SectionImage
                    src="/Image/04-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Mohd Atir"
                />

                <p className="mb-4 text-gray-700">
                    Rumi Darwaza doesn't ask you to spend an hour here. In fact, there is nothing to explore inside the gateway itself. Yet almost everyone who visits old Lucknow stops here, looks up and reaches for their camera. Standing nearly 60 feet high, this grand gateway has been welcoming people into the historic heart of the city for more than two centuries. It's one of those rare landmarks that feels just as much a part of everyday life as it does of history.
                </p>
                <p className="mb-4 text-gray-700">
                    Rumi Darwaza was built in 1784 during the reign of Nawab Asaf-ud-Daula. The city was facing a severe famine and large construction projects like this were started to provide employment to thousands of people. What began as a relief effort eventually became one of Lucknow's most recognized symbols.
                </p>
                <p className="mb-6 text-gray-700">
                    The gateway is often called the Turkish Gate because its design is believed to have been inspired by gateways in ancient Constantinople, present-day Istanbul. Look closely and you will notice delicate floral patterns, carved details and the large central arch that gives the structure its distinctive appearance. At the top once stood a lantern that was lit at night, making the gateway even more striking after sunset. Spend a few minutes here before moving on. Walk through the arch instead of turning back. The road ahead leads to Chhota Imambara and that is where this heritage walk truly begins.
                </p>

                {/* Second Stop */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Second Stop: Chhota Imambara – Why It's Called the Palace of Lights
                </h2>

                <SectionImage
                    src="/Image/05-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Shubh Pix"
                />

                <p className="mb-4 text-gray-700">
                    The first thing you will probably notice inside Chhota Imambara is not its history. It's the chandeliers. Some hang low, others stretch across the hall and together they completely change the look of the interiors. Even if you have seen photographs before, standing beneath them feels very different. The sunlight filtering through coloured glass, the reflections from the crystal lamps and the quiet atmosphere inside make it easy to understand why this monument earned the name "The Palace of Lights."
                </p>
                <p className="mb-4 text-gray-700">
                    Built in 1838 by Nawab Muhammad Ali Shah, Chhota Imambara was designed as his mausoleum and later became the resting place of other members of his family. While Bara Imambara is remembered for its massive halls and the Bhool Bhulaiya, Chhota Imambara leaves a different impression. It is smaller, more decorative and full of intricate details that reward anyone willing to look closely.
                </p>
                <p className="mb-6 text-gray-700">
                    Take your time inside the main hall. The Belgian crystal chandeliers, elegant calligraphy, colourful glasswork and ornate decorations are easy to miss if you rush through. Outside, the white domes, manicured lawns and the long water tank create one of the most photographed views in old Lucknow. On a calm day, the monument reflects beautifully in the water, making it a favourite spot for photographers. Before moving on, take one last look at the monument from the entrance gate. It's one of the best viewpoints in the complex and a reminder that not every historic building impresses through its size. Some do it through their details.
                </p>

                {/* Third Stop */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Third Stop: The Clock Tower and Ghanta Ghar Talab
                </h2>

                <SectionImage
                    src="/Image/06-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Abdullah Ahmad"
                />

                <p className="mb-4 text-gray-700">
                    After leaving Chhota Imambara, you don't have to walk very far before another landmark catches your eye. Rising high above the surrounding buildings is the Husainabad Clock Tower, a structure that has watched over this neighbourhood for well over a century.
                </p>
                <p className="mb-4 text-gray-700">
                    Completed in 1881, the Clock Tower was built to commemorate the arrival of Sir George Couper, the first Lieutenant Governor of the North-Western Provinces and Oudh. Standing 221 feet tall, it remains the tallest clock tower in India. Its Victorian-Gothic design makes it look very different from the Nawabi monuments nearby, yet somehow it fits naturally into the skyline of old Lucknow.
                </p>
                <p className="mb-6 text-gray-700">
                    Don't just admire the tower from a distance. Walk towards the open area around it and you will notice Ghanta Ghar Talab right beside the monument. The water body adds a sense of openness to the neighbourhood and is one of the best places to pause during the walk. In the evening, the Clock Tower and the surrounding lights reflect on the water, creating a view that photographers and families rarely hurry past. If you are exploring this area around sunset, spend a few extra minutes here. The changing light, the reflection in the water, and the constant movement of people around the tower make this one of the liveliest parts of the heritage walk.
                </p>

                {/* Fourth Stop */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Fourth Stop: Satkhanda – Lucknow's Unfinished Landmark
                </h2>

                <SectionImage
                    src="/Image/07-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Madan Raj"
                />

                <p className="mb-4 text-gray-700">
                    A short walk from the Clock Tower stands a monument that tells a very different story. Unlike most historic buildings, Satkhanda was never completed. Construction began during the reign of Nawab Muhammad Ali Shah, who wanted to build a seven-storey watchtower overlooking the city. His death brought the work to a halt and only four storeys were ever finished. More than 180 years later, the structure still stands exactly as it was left, making it one of the most unusual landmarks in Lucknow.
                </p>
                <p className="mb-6 text-gray-700">
                    Its unfinished appearance is what draws people's attention. There are no grand chandeliers or decorated halls here. Instead, Satkhanda makes you wonder what it would have looked like if the original plan had been completed. The building was also intended to serve as an observation tower, where people could look over the city and study the night sky. Although entry inside the monument is not permitted today, it's still worth stopping for a closer look. Standing between the elegant Clock Tower and the unfinished Satkhanda, you get to see two completely different chapters of Lucknow's history within just a few minutes' walk.
                </p>

                {/* Fifth Stop */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Fifth Stop: The Picture Gallery – The Portrait That Seems to Watch You
                </h2>

                <SectionImage
                    src="/Image/08-old-lucknow-heritage-walk.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    After walking past grand gateways, towering monuments and historic buildings, the Husainabad Picture Gallery feels surprisingly different. From the outside, it looks like another old building. Step inside, however and you will find yourself standing face to face with the rulers who shaped the history of Awadh. The gallery houses life-size portraits of the Nawabs of Awadh, each painted with remarkable attention to detail. Their clothes, jewellery, expressions and even the smallest decorative elements have been carefully captured, giving you a glimpse of the royal lifestyle of the nineteenth century.
                </p>
                <p className="mb-4 text-gray-700">
                    One portrait, in particular, has become part of local folklore. Many people believe the eyes of Nawab Asaf-ud-Daula's portrait seem to follow them as they walk across the room. Walk from one side of the gallery to the other and judge for yourself. It's a simple illusion created by the artist's technique, but it continues to surprise first-time visitors.
                </p>
                <p className="mb-6 text-gray-700">
                    The building itself has an interesting story too. It originally served as the Baradari (a twelve-door pavilion) of the Husainabad complex before being converted into an art gallery. Today, it quietly preserves a part of Lucknow's history that often goes unnoticed. While the monuments outside tell stories through their architecture, this gallery tells them through the faces of the people who built and ruled the city. You probably won't spend hours here, but even a short visit adds another layer to the heritage walk. By the time you step back outside, the buildings you have already seen no longer feel like anonymous monuments. They feel connected to the people whose portraits you have just met.
                </p>

                {/* Evening Character */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    When Evening Changes Husainabad
                </h2>

                <SectionImage
                    src="/Image/09-old-lucknow-heritage-walk.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    If you are planning this heritage walk, try not to leave before sunset. The monuments are impressive during the day but the neighbourhood takes on a completely different character once the lights come on. As daylight fades, Chhota Imambara begins to glow, the Clock Tower stands out against the evening sky and the reflections in Ghanta Ghar Talab become even more striking. The roads are busier than they were an hour earlier, food stalls start filling up and the entire area feels more like a community gathering place than a tourist destination.
                </p>
                <p className="mb-6 text-gray-700">
                    One of the biggest attractions after dark is the musical fountain show near the Husainabad Clock Tower. At around 7:30 PM, the musical fountain show begins near the Clock Tower. Water dances in sync with music and colourful lights, creating one of the most enjoyable parts of the evening. Children line up near the railings for a better view while others find a place to sit and watch the show with a cup of tea or a quick snack from the nearby stalls. Instead of walking from one monument to another, spend a few minutes around the Clock Tower or Ghanta Ghar Talab and simply watch the neighbourhood. You will notice evening walkers, local families, street vendors preparing fresh snacks and people stopping for chai before heading home.
                </p>

                {/* Food Hubs */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Take a Break: Where to Eat Around Husainabad
                </h2>

                <SectionImage
                    src="/Image/10-old-lucknow-heritage-walk.jpg"
                    source="YouTube/Faiz Baba, Food For Everyone"
                />

                <p className="mb-4 text-gray-700">
                    A heritage walk through old Lucknow feels incomplete without stopping for something to eat. By the time you have explored around Husainabad, you will probably be ready for a break. Fortunately, some of Lucknow's best-known food spots are just a short walk or drive away.
                </p>
                <p className="mb-4 text-gray-700">
                    If you are visiting in the morning, start with a cup of Kashmiri Chai. Its pink colour and rich, creamy flavour make it different from the regular tea you will find elsewhere. Pair it with a freshly baked bun or a light snack and you have got the perfect excuse to slow down before continuing your walk.
                </p>
                <p className="mb-4 text-gray-700">
                    When it comes to non-vegetarian food, Rahim's Nihari is one of the most popular names in the area. Slow-cooked overnight and served with warm kulchas, the nihari has been drawing people here for decades. A little further away, Tunday Kababi remains a favourite for its famous Galouti Kebabs while Mubeen's is well known for its flavourful biryani and kebabs.
                </p>
                <p className="mb-6 text-gray-700">
                    If you prefer vegetarian food or simply want something light, the streets around Husainabad have plenty of options. Fresh chaat, kachori, samosas, jalebi and kulhad chai are easy to find, especially during the evening when the area becomes busier. You don't need to visit every famous restaurant in one day. Pick one place, enjoy your meal and let the walk end at its own pace. That is a much better way to remember old Lucknow than rushing from one food stop to another.
                </p>

                {/* Practical Planning */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Walk
                </h2>

                <SectionImage
                    src="/Image/11-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Manan Maheshwari"
                />

                <p className="mb-6 text-gray-700">
                    The best time to explore this heritage walk is between October and March when the weather is pleasant enough to walk comfortably between the monuments. Summers in Lucknow can be quite hot especially during the afternoon, so if you are visiting between April and June, start early in the morning or plan your walk after 6:00 PM. If possible, schedule your visit so that you are still around Husainabad at 7:30 PM, when the musical fountain show begins. Watching the monuments light up after sunset adds a completely different dimension to the walk. Give yourself three to four hours to explore the area at a relaxed pace. Since most of the route is on foot, wear comfortable shoes and carry a bottle of water, especially during the warmer months.
                </p>

                {/* Logistics */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Entry Fee & Timings
                </h2>

                <SectionImage
                    src="/Image/12-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Sumit Kumar"
                />

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Attraction</th>
                                <th className="border p-3 text-left">Timings</th>
                                <th className="border p-3 text-left">Entry Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3">Rumi Darwaza</td>
                                <td className="border p-3">Open 24 hours (view from outside)</td>
                                <td className="border p-3">Free</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Chhota Imambara</td>
                                <td className="border p-3">6:00 AM – 5:00 PM</td>
                                <td className="border p-3">₹60 (Indian Citizens)*</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Husainabad Picture Gallery</td>
                                <td className="border p-3">10:00 AM – 5:00 PM</td>
                                <td className="border p-3">Included with monument ticket*</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Clock Tower & Ghanta Ghar Talab</td>
                                <td className="border p-3">Open all day</td>
                                <td className="border p-3">Free</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Satkhanda</td>
                                <td className="border p-3">View from outside</td>
                                <td className="border p-3">Free</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Musical Fountain Show</td>
                                <td className="border p-3">Daily at 7:30 PM</td>
                                <td className="border p-3">Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* How to Reach */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach Husainabad Heritage Walk
                </h2>

                <SectionImage
                    src="/Image/13-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Yash Choudhary"
                />

                <p className="mb-4 text-gray-700">
                    Reaching the Husainabad heritage area is fairly straightforward whether you are travelling within Lucknow or arriving from another city.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li><strong>By Road:</strong> If you are already in Hazratganj, Gomti Nagar or Charbagh, the easiest option is to book a cab or take an auto-rickshaw. Depending on traffic, the journey usually takes 15 to 30 minutes.</li>
                    <li><strong>By Metro:</strong> If you are travelling by Lucknow Metro, get down at KD Singh Babu Stadium Metro Station, the nearest operational metro station. From there, an auto-rickshaw or e-rickshaw will take you to Rumi Darwaza in about 10–15 minutes, where this heritage walk begins.</li>
                    <li><strong>By Train:</strong> Coming by train? Lucknow Junction and Charbagh Railway Station are both around 5–6 kilometres from Husainabad. Auto-rickshaws, cabs and app-based taxis are available throughout the day.</li>
                    <li><strong>By Air:</strong> If you are arriving by air, Chaudhary Charan Singh International Airport is about 15 kilometres away. A taxi is the most convenient way to reach the heritage area and the drive usually takes 35–45 minutes, depending on traffic.</li>
                </ul>
                <p className="mb-6 text-gray-700">
                    If you are bringing your own vehicle, parking is available near the major monuments. On weekends, public holidays and during Muharram, the area attracts larger crowds, so arriving a little earlier can make parking much easier.
                </p>

                {/* Conclusion */}
                <SectionImage
                    src="/Image/14-old-lucknow-heritage-walk.jpg"
                    source="Pexels/Himanshu Verma"
                />
                <p className="mb-4 text-gray-700">
                    It is easy to think of this part of Lucknow as a collection of monuments. It is not. Walk through Husainabad once and you will realize that every landmark naturally leads to the next. Rumi Darwaza welcomes you into the old city, Chhota Imambara rewards you with its intricate interiors, the Clock Tower reminds you of another chapter in Lucknow's history, Satkhanda leaves behind an unanswered question and the Picture Gallery quietly introduces you to the people behind these monuments. Between them are the moments that rarely make it into guidebooks, a cup of Kashmiri chai, the reflections in Ghanta Ghar Talab, children waiting for the fountain show to begin and streets that never really lose their connection with the past.
                </p>
                <p className="mb-6 text-gray-700">
                    If you are visiting Lucknow for the first time, set aside an evening for this walk. And if you have lived in the city for years, there is a good chance you will notice something you had never stopped to look at before. Some journeys are remembered because of the places you visit. This one stays with you because of everything you notice along the way.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Husainabad Heritage Walk
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Can you complete the Husainabad Heritage Walk in one day?</p>
                        <p className="mt-2">Yes. If you set aside 3 to 4 hours, you can comfortably explore Rumi Darwaza, Chhota Imambara, the Husainabad Clock Tower, Ghanta Ghar Talab, Satkhanda and the Picture Gallery. If you are planning to watch the musical fountain show, start your walk in the late afternoon so you can stay until evening.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Is there an entry fee for the Husainabad Heritage Walk?</p>
                        <p className="mt-2">The walk itself is free, but some monuments have entry tickets. Rumi Darwaza, the Clock Tower, Ghanta Ghar Talab and Satkhanda can be viewed without an entry fee, while Chhota Imambara and the Picture Gallery require a ticket.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What is the best time to visit Husainabad?</p>
                        <p className="mt-2">The best months are October to March, when the weather is pleasant for walking. If you are visiting during summer, plan your walk after 5 PM to avoid the afternoon heat.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. What time does the musical fountain show begin?</p>
                        <p className="mt-2">The musical fountain show near the Husainabad Clock Tower begins at 7:30 PM every evening. If you are planning to watch it, try to reach the area a little early to find a good spot.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Is this heritage walk suitable for families?</p>
                        <p className="mt-2">Yes. The route is suitable for families, students, solo travellers and anyone interested in history, architecture or photography. Since the monuments are close to one another, the walk is comfortable for most people.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Which metro station is closest to the heritage walk?</p>
                        <p className="mt-2">KD Singh Babu Stadium Metro Station is the nearest metro station. From there, you can take an auto-rickshaw or e-rickshaw to Rumi Darwaza, where the walk begins.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Can I visit Bara Imambara and this heritage walk on the same day?</p>
                        <p className="mt-2">Yes. Bara Imambara is located very close to Rumi Darwaza, making it easy to include both in the same itinerary. If you have a full day in Lucknow, begin with Bara Imambara and then continue with the Husainabad Heritage Walk in the afternoon and evening.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Is photography allowed inside Chhota Imambara and the Picture Gallery?</p>
                        <p className="mt-2">Photography rules may change over time, especially inside monuments. It's always a good idea to check with the ticket counter before taking photographs inside the buildings. Photography in the open areas around Rumi Darwaza, Ghanta Ghar Talab and the Clock Tower is generally allowed.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Where can I try authentic food after the heritage walk?</p>
                        <p className="mt-2">The streets around Husainabad are home to several well-known eateries. You can try Rahim's Nihari, Tunday Kababi, Mubeen's, Kashmiri chai, local chaat and other Lucknow favourites, all within a short distance of the heritage area.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Is the Husainabad Heritage Walk worth it?</p>
                        <p className="mt-2">If you want to understand old Lucknow beyond its famous monuments, the answer is yes. In just a few hours, you will walk through centuries of history, see some of the city's most recognizable landmarks and discover a neighbourhood where heritage and everyday life continue side by side.</p>
                    </div>
                </div>

                {/* About Author */}
                <div className="mt-6 pt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <img
                            src="/Image/saniya.jpeg"
                            alt="Saniya Mishra"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        <p className="text-gray-800 leading-relaxed text-justify text-lg">
                            A curious and creative psychology and media student, I am also a proud fauji kid who grew up adapting to new places, people, and experiences. My love for travelling has taught me to find beauty in change, while writing has always been my way of expressing emotions and preserving memories. Through theatre, storytelling, and everyday moments, I continue learning, growing, and finding meaning in the world around me.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OldHeritageLucknow;