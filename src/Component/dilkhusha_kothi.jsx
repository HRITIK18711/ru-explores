import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const DilkushaKothi = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Dilkusha Kothi Lucknow: History, Architecture & the Story Behind the Palace
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 30 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Saniya Mishra</span>
                </p>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-01.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    The gates of Dilkusha open into a wide stretch of green, making it hard to believe that a royal palace once stood here. A few steps ahead, the ruins slowly come into view. The palace still looks grand but the missing roof, broken walls and empty windows remind you that its story did not have the ending it was meant to have. Every part of the structure seems to hold on to its past without trying to hide what happened here.
                </p>

                <p className="mb-6 text-gray-700">
                    Surrounded today by the peaceful Dilkusha Garden, the palace feels very different from Lucknow's busier monuments. People come here for a morning walk, to photograph the ruins or simply spend some quiet time. Built as a royal retreat for the Nawabs of Awadh, Dilkusha Kothi later became one of the many landmarks affected by the Revolt of 1857. More than two centuries later, the ruins continue to preserve both stories, the grandeur of the palace it once was and the history that shaped what remains today.
                </p>

                {/* History */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    The Story Behind Dilkusha Kothi
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-02.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Dilkusha Kothi was built during the reign of Nawab Saadat Ali Khan II in the early nineteenth century as a hunting lodge and a royal retreat. Unlike the grand palaces where the Nawabs lived and governed, this was a place to slow down, spend time outdoors and escape the routine of court life. The open surroundings made it an ideal location for hunting, private gatherings and leisure.
                </p>
                <p className="mb-4 text-gray-700">
                    The name Dilkusha itself means "heart pleasing" or "one that delights the heart," a fitting name for a place created for relaxation rather than royal ceremonies. Surrounded by gardens and greenery, the palace offered a peaceful setting that felt far removed from the busy streets of Lucknow. One of the most interesting things about Dilkusha Kothi is that it does not look like the other Nawabi monuments in the city.
                </p>
                <p className="mb-6 text-gray-700">
                    The palace was inspired by Seaton Delaval Hall, an eighteenth-century country house in England. Its tall towers, large windows and symmetrical design reflected a European style that was rarely seen in Lucknow at the time. For several decades, Dilkusha remained one of the finest royal retreats of Awadh. It represented a different side of Nawabi life where comfort, leisure and architecture came together in a peaceful setting. Looking at the palace today, it is easy to understand why it must have been considered one of the most beautiful retreats of its time. That chapter however, was shorter than anyone could have imagined. The events of 1857 changed the future of the palace forever, leaving behind the structure that people see today.
                </p>

                {/* When History Changed */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    When History Changed Everything
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-03.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    The peaceful days of Dilkusha Kothi did not last long. In 1856, the British annexed Awadh, bringing an end to Nawabi rule. Just a year later, the Revolt of 1857 reached Lucknow and transformed the city into one of the main centres of the uprising. Dilkusha Kothi soon found itself caught in the middle of the conflict.
                </p>
                <p className="mb-4 text-gray-700">
                    Its location on the eastern side of Lucknow made the palace strategically important. The British forces used it as a military position during the siege, while the surrounding area witnessed intense fighting as rebel forces and the British army battled for control of the city. Heavy artillery fire caused extensive damage to the palace, leaving large sections of the building beyond repair.
                </p>
                <p className="mb-6 text-gray-700">
                    When the fighting finally came to an end, Dilkusha Kothi was no longer the elegant retreat it had once been. Parts of the palace had collapsed, the interiors had been destroyed and the roof had disappeared. Unlike several other historical buildings in Lucknow, Dilkusha was never restored to its original form. The damaged structure remained exactly where it stood, preserving the marks left behind by one of the most defining events in India's history. More than 160 years later, those walls continue to tell the same story. Every arch, every tower and every empty window standing today has survived the events of 1857.
                </p>

                {/* Architecture */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    A Palace Unlike Any Other in Lucknow
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-04.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-6 text-gray-700">
                    Domes, minarets and intricate carvings are often associated with the monuments of Lucknow. Dilkusha Kothi followed a completely different design. The palace was inspired by Seaton Delaval Hall, an eighteenth-century country house in Northumberland, England. Captain Gore Ouseley introduced its design to Nawab Saadat Ali Khan II, who admired its architecture and decided to build a similar royal retreat in Lucknow. Tall corner towers, large windows and clean, symmetrical lines gave Dilkusha Kothi an appearance rarely seen in Awadh during that period. It was a remarkable departure from the architectural style of other royal buildings in the city and reflected the Nawab's willingness to experiment with new ideas.
                </p>

                {/* What Remains */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    What Remains Today at Dilkusha
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-05.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    Dilkusha Kothi is not a monument that takes hours to explore. Most people can walk through the entire palace in less than an hour. The experience, however, is very different when you slow down.
                </p>
                <p className="mb-4 text-gray-700">
                    The palace still has enough to keep you looking around. The surviving towers immediately catch your attention while the large windows, old staircases and roofless rooms give you a sense of how impressive the building must have looked in its prime. Every side of the palace offers a different view, making it worth walking all the way around instead of stopping after the first photograph.
                </p>
                <p className="mb-6 text-gray-700">
                    The gardens surrounding Dilkusha Kothi add a different character to the place. Morning walkers pass through the park, children play on the lawns and photographers patiently wait for the right light to fall on the old walls. It is a quiet corner of the city where history and everyday life continue to exist side by side. If you are carrying a camera, you will probably spend more time here than you expected. The palace looks different from every angle and the changing light throughout the day gives the old walls a completely different appearance. Early mornings and late afternoons are especially rewarding for photography.
                </p>

                {/* Planning */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-06.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-6 text-gray-700">
                    An hour is usually enough to walk around the Dilkusha Kothi, admire its unique architecture and spend some time in the surrounding gardens. If you enjoy history or photography, you may find yourself staying a little longer. Morning is one of the best times to visit especially between October and March when the weather is pleasant. The soft natural light also makes it an excellent time for photography. Late afternoons are equally enjoyable if you prefer a quieter visit before sunset. Dilkusha Kothi is open every day from 8:00 AM to 6:00 PM and entry is free for all.
                </p>

                {/* Logistics & How to Reach */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach Dilkusha Kothi
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-07.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    Dilkusha Kothi is located on Bibiapur Marg in the Cantonment area of Lucknow about approximately 7 km from Hazratganj. Reaching the site is quite convenient through various modes of transport:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li><strong>By Metro:</strong> You can get down at Hazratganj Metro Station and hire a cab or auto-rickshaw to reach the palace in around 10–15 minutes depending on traffic.</li>
                    <li><strong>By Train:</strong> Visitors arriving by train can reach Dilkusha Kothi in about 20–25 minutes from Charbagh Railway Station.</li>
                    <li><strong>By Air:</strong> The drive from Chaudhary Charan Singh International Airport usually takes 30–40 minutes via taxi or app-based cab services.</li>
                </ul>
                <p className="mb-6 text-gray-700">
                    App-based cabs and auto-rickshaws are easily available across the city. If you are driving, parking is available near the entrance to Dilkusha Garden.
                </p>

                {/* Continue Exploring */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Continue Exploring Lucknow
                </h2>

                <SectionImage
                    src="/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-08.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    A visit to Dilkusha Kothi is a great way to begin exploring Lucknow's rich history but it is only one chapter of a much larger story. The city is filled with monuments, gardens and neighbourhoods that each reveal a different side of its past and present.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li><strong>The Residency:</strong> If the story of the Revolt of 1857 interests you, make your next stop The Residency. The preserved ruins, museum and cemetery offer a deeper understanding of the siege of Lucknow.</li>
                    <li><strong>Sikandar Bagh:</strong> Another important landmark where one of the fiercest battles of the uprising took place. Today, its peaceful gardens stand in sharp contrast to the history they witnessed.</li>
                    <li><strong>La Martiniere College:</strong> Architecture lovers should visit this landmark known for its grand European-style design and striking appearance, well worth seeing from the outside.</li>
                    <li><strong>Hazratganj:</strong> Head towards Hazratganj to experience the city as it is today. Spend some time "Ganjing", enjoy a cup of tea at local cafes, browse bookstores, or shop at Janpath Market.</li>
                </ul>
                <p className="mb-6 text-gray-700">
                    If you have more time, continue your journey to Bara Imambara, Rumi Darwaza, Chota Imambara and the bustling lanes of Chowk. Each place adds a new perspective to Lucknow, making every visit to the city feel a little different from the last.
                </p>

                {/* Conclusion Summary */}
                <p className="mb-4 text-gray-700">
                    Looking at Dilkusha Kothi today, it is hard to believe that these walls once belonged to one of the finest royal retreats in Awadh. Time has changed the palace but it has not taken away its story. Every part of the palace has a purpose. The towers remind you of its remarkable architecture. The empty windows speak of a building that once overlooked gardens instead of open skies. The missing roof tells the story of 1857 without a single word. Nothing here feels ordinary once you know what stood here before.
                </p>
                <p className="mb-6 text-gray-700">
                    Many people come to Dilkusha expecting to see an old monument. They leave knowing they have seen one of the most remarkable chapters in Lucknow's history preserved in its original form. The palace was never rebuilt and that is what makes it so special even today. Lucknow has many monuments that celebrate the city's grandeur. Dilkusha Kothi quietly preserves its resilience.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Dilkusha Kothi Lucknow
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Why is Dilkusha Kothi famous?</p>
                        <p className="mt-2">Dilkusha Kothi is famous for its unique European-style architecture, its association with the Nawabs of Awadh and its important role during the Revolt of 1857. Today, it is one of Lucknow's best-preserved historical ruins.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Who built Dilkusha Kothi?</p>
                        <p className="mt-2">Dilkusha Kothi was built during the reign of Nawab Saadat Ali Khan II in the early nineteenth century. It was designed with inspiration from Seaton Delaval Hall in England and served as a royal hunting lodge and leisure retreat.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What happened to Dilkusha Kothi?</p>
                        <p className="mt-2">The palace suffered extensive damage during the Revolt of 1857 when heavy fighting took place around Lucknow. It was never rebuilt, which is why people see the original surviving walls and towers today.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Why does Dilkusha Kothi look different from other monuments in Lucknow?</p>
                        <p className="mt-2">Unlike the traditional Nawabi architecture seen across Lucknow, Dilkusha Kothi was inspired by an English country house. Its tall towers, large windows and symmetrical design make it one of the city's most distinctive historical buildings.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. What are the timings of Dilkusha Kothi?</p>
                        <p className="mt-2">Dilkusha Kothi is open every day from 8:00 AM to 6:00 PM.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is there an entry fee for Dilkusha Kothi?</p>
                        <p className="mt-2">No. Entry to Dilkusha Kothi is free for all.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. How much time is needed to explore Dilkusha Kothi?</p>
                        <p className="mt-2">Most people spend around 45 minutes to one hour exploring the palace and the surrounding gardens. Photography enthusiasts and history lovers may want to stay longer.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. What is the best time to visit Dilkusha Kothi?</p>
                        <p className="mt-2">The best time to visit is between October and March, when the weather is pleasant. Early mornings and late afternoons are also ideal for photography and a quieter visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Is Dilkusha Kothi worth visiting?</p>
                        <p className="mt-2">Yes. If you enjoy history, heritage architecture and peaceful historical sites away from large crowds, Dilkusha Kothi is well worth visiting. It offers a different perspective on Lucknow's Nawabi and colonial past.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Which metro station is closest to Dilkusha Kothi?</p>
                        <p className="mt-2">Hazratganj Metro Station is one of the most convenient metro stations for reaching Dilkusha Kothi. From there, you can hire a cab or auto-rickshaw to reach the palace in about 10–15 minutes, depending on traffic.</p>
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

export default DilkushaKothi;