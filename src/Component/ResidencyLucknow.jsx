import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const ResidencyLucknow = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    The Residency Lucknow: History, Museum, Timings, Ticket Price & Travel Guide
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 24 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Saniya Mishra</span>
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-01.jpg"
                    source="Incredible India"
                />

                <p className="mb-4 text-gray-700">
                    Most historical monuments are restored with time. The Residency was not. Walk through its gates today and you will still find shattered walls, broken arches and buildings marked by cannon fire. More than 160 years have passed since the Revolt of 1857, yet many of those battle scars remain exactly where they were. Nothing has been hidden to make the place look newer or more beautiful. That is what makes the Residency unlike any other historical site in Lucknow.
                </p>

                <p className="mb-4 text-gray-700">
                    Long before it became one of the city's most important landmarks, the Residency was the home of the British Resident and the administrative centre of the East India Company in Awadh. Everything changed during the Siege of Lucknow in 1857, when the complex became the centre of one of the longest and fiercest battles of the uprising. Instead of rebuilding the damaged structures after the conflict, much of the site was preserved as it was, allowing future generations to see history where it actually happened.
                </p>

                <p className="mb-6 text-gray-700">
                    Today, the Residency is more than a collection of old ruins. It is a place where every damaged wall, every empty corridor and every preserved building tells a part of Lucknow's story. If you take your time here, you will leave with much more than photographs, you will leave with a better understanding of one of the most defining moments in India's past.
                </p>

                {/* Attractions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Exploring the Residency: What You Will See Inside
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-02.jpg"
                    source="Incredible India"
                />

                <p className="mb-6 text-gray-700">
                    The Residency is much larger than most people expect. Spread across nearly 33 acres, it feels less like a single monument and more like an entire historical complex. Wide lawns connect the ruins, old trees provide shade across the pathways and almost every building you pass carries visible signs of the events of 1857. There is no fixed route to follow, which makes exploring the Residency feel more like discovering a forgotten part of Lucknow than visiting a traditional monument.
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-03.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    The Main Residency Building is usually the first structure that draws your attention. Although only a part of the original building survives today, its damaged walls, broken arches and cannon scars immediately remind you that this was once the centre of one of the longest sieges of the Revolt of 1857. It is difficult to stand here without wondering what the complex must have looked like before the conflict changed it forever.
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-04.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    As you continue walking, you will come across the remains of the Banquet Hall, where official receptions, social gatherings and important meetings once took place. Today, only its ruins remain, offering a striking contrast between the elegance of the Residency's early years and the destruction that followed during the siege.
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-05.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    The pathways lead you past several other historic buildings, including Dr. Fayrer's House, the Treasury, Begum Kothi, the remains of the Residency Church, residential quarters and administrative offices. Each played a different role when the Residency functioned as the headquarters of the British Resident in Awadh. Information panels placed across the complex explain the purpose of these buildings and how they were affected during the fighting, making it easy to understand the site even if you are visiting for the first time.
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-06.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    One place that many people quietly stop at is the Residency Cemetery, where several people who lost their lives during the siege were laid to rest. Unlike the larger buildings, it does not stand out from a distance, but it adds a deeply personal dimension to the story of the Residency and reminds you that the conflict affected far more than soldiers alone.
                </p>
                <p className="mb-6 text-gray-700">
                    As you explore further, take a closer look at the walls rather than only the buildings. Many of the bullet marks, cannon damage and shattered masonry that you see today are original. They have been preserved deliberately, allowing the Residency to remain one of the few historical sites where the physical evidence of the Revolt of 1857 is still clearly visible.
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-07.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    Do not rush through the complex. The Residency is best experienced slowly. Spend a few minutes at each building, read the information panels and allow yourself time to notice the smaller details. The more carefully you explore, the more the story of this remarkable place begins to come together.
                </p>

                {/* History */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    The Story Behind the Ruins
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-08.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    The Residency was never meant to become a battlefield. Its story began in the late eighteenth century, when Nawab Asaf-ud-Daula commissioned the construction of a residence for the British Resident, the official representative of the East India Company in the court of Awadh. Over the years, the complex expanded into a self-contained settlement with residential buildings, offices, banquet halls, a church, gardens, stables and other facilities. It was not just a residence. It was the administrative heart of the British presence in Lucknow.
                </p>
                <p className="mb-4 text-gray-700">
                    As the influence of the East India Company grew, so did political tensions in Awadh. In 1856, the British annexed the kingdom, removing Nawab Wajid Ali Shah from power. The decision created widespread resentment among soldiers, nobles and ordinary people, setting the stage for the Revolt of 1857. When the uprising reached Lucknow, the Residency became the centre of the conflict.
                </p>
                <p className="mb-6 text-gray-700">
                    British officers, soldiers, civilians, women and children took shelter inside the complex as rebel forces surrounded it. What followed was the Siege of Lucknow, one of the longest and most significant battles of the Revolt of 1857. For nearly 147 days, those inside the Residency lived under constant bombardment, with dwindling food supplies, limited medical care and little certainty about what the next day would bring.
                </p>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-09.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-4 text-gray-700">
                    The siege left the complex in ruins. Cannon fire shattered walls, buildings collapsed and much of the Residency was reduced to the damaged structures you see today. Unlike many historical sites that were rebuilt after conflict, the Residency was deliberately preserved in its ruined state. The bullet marks, cannon scars and broken walls remain as they were, allowing people to witness the physical impact of one of the defining events in India's colonial history.
                </p>
                <p className="mb-6 text-gray-700">
                    Today, those ruins are more than old buildings. They are a reminder of a turning point that changed the course of Lucknow's history. Once you know the story behind them, every damaged wall and every empty doorway becomes easier to understand.
                </p>

                {/* Museum */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Do Not Miss the Residency Museum
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-10.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    After exploring the ruins, make time for the Residency Museum before you leave. The museum helps you understand the stories hidden behind the buildings you have just walked through. Without it, you will see damaged walls and old ruins. After spending a little time inside, those same ruins begin to make much more sense.
                </p>
                <p className="mb-4 text-gray-700">
                    The galleries display historic photographs, paintings, maps, letters, official records and artefacts related to the Residency and the Revolt of 1857. One of the most fascinating parts of the collection is the series of old photographs showing how the Residency looked before the siege and how it appeared after months of relentless fighting. The museum also explains how the Residency functioned before 1857, introducing the people who lived and worked within the complex and the events that gradually led to the Siege of Lucknow.
                </p>
                <p className="mb-6 text-gray-700">
                    You do not need to spend hours here. Even 30 to 45 minutes is enough to understand why the Residency remains one of the most important historical landmarks in India. By the time you step outside again, the buildings around you no longer feel like abandoned ruins. They feel like places connected to real people and real events.
                </p>

                {/* Evaluation */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Is the Residency Worth Visiting?
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-11.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    That depends on what you hope to find. If you are looking for grand architecture, colourful interiors or the kind of monuments that immediately impress you, the Residency may not be your favourite stop in Lucknow. Time and conflict changed this place long ago and much of what you see today is in ruins. But if you enjoy places with stories, the Residency is one of the most rewarding historical sites in the city.
                </p>
                <p className="mb-4 text-gray-700">
                    There are no recreated battle scenes or modern displays trying to bring history to life. Instead, the ruins speak for themselves. The damaged walls, broken arches and preserved cannon scars remind you that the events of 1857 unfolded right where you are standing. It is this authenticity that makes the Residency so different from many other historical monuments.
                </p>
                <p className="mb-4 text-gray-700">
                    The peaceful surroundings are another reason to visit. Wide lawns, old trees and quiet pathways create an atmosphere that encourages you to slow down and explore at your own pace. Even on busier days, the complex rarely feels overcrowded, giving you time to stop, read the information panels and appreciate the history without feeling rushed.
                </p>
                <p className="mb-6 text-gray-700">
                    If this is your first trip to Lucknow, the Residency is best experienced as part of a larger itinerary. Combine it with Sikandar Bagh, Hazratganj, Bara Imambara and the Husainabad Heritage Walk to understand how different chapters of the city's history connect with one another. By the time you leave, you may not remember every building or every date. What stays with most people is the feeling that they have walked through a place where history has been left exactly as it was.
                </p>

                {/* Planning */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-12.jpg"
                    source="Incredible India"
                />

                <p className="mb-4 text-gray-700">
                    The Residency is not a place that you should rush through. Give yourself at least two to three hours to explore the complex at a comfortable pace. That gives you enough time to walk around the ruins, visit the museum, read the information panels and spend a few quiet moments appreciating the scale of the site.
                </p>
                <p className="mb-4 text-gray-700">
                    The best time to visit is between October and March, when Lucknow enjoys pleasant weather. The gardens are greener, walking is more comfortable and you can spend longer outdoors without the summer heat. If you are visiting during the warmer months, plan your trip early in the morning or later in the afternoon. The open grounds can become quite warm around midday, especially between April and June.
                </p>
                <p className="mb-4 text-gray-700">
                    If your schedule allows, stay until the evening for the Light & Sound Show. The Residency's bullet-scarred walls become the backdrop for an immersive presentation that brings the history of Awadh and the events of the Revolt of 1857 to life through narration, lights and projection mapping. Watching the story unfold in the very place where it happened adds a completely different dimension to the visit and is an experience many people remember long after they leave. The show is generally held in the evening around 6:30 PM, but it is always a good idea to confirm the latest timing before planning your visit.
                </p>
                <p className="mb-6 text-gray-700">
                    Wear comfortable walking shoes because the Residency covers a large area, and much of your visit will be on foot. Carry a bottle of water, particularly during summer and keep your camera or phone ready. The ruins, tree-lined pathways and open lawns offer plenty of opportunities for photography.
                </p>

                {/* Logistics */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Timings, Entry Fee & Visitor Information
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-13.jpg"
                    source="Rohit Upadhyay"
                />

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Information</th>
                                <th className="border p-3 text-left">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3">Opening Hours</td>
                                <td className="border p-3">07:00 AM – 6:00 PM (Daily)</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Museum Timing</td>
                                <td className="border p-3">10:00 AM – 5:00 PM (Daily)</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Entry Fee (Indian Citizens)</td>
                                <td className="border p-3">₹25</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Entry Fee (Foreign Nationals)</td>
                                <td className="border p-3">₹300</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Children below 15 years</td>
                                <td className="border p-3">Free</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Time Required</td>
                                <td className="border p-3">2–3 Hours</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Best Time to Visit</td>
                                <td className="border p-3">October to March</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Photography</td>
                                <td className="border p-3">Allowed for personal use</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Nearest Metro Station</td>
                                <td className="border p-3">Hazratganj Metro Station</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* How to Reach */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach the Residency
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-14.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    The Residency is located in the heart of Lucknow, making it one of the easiest historical attractions in the city to reach.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li><strong>From Hazratganj:</strong> If you are already in Hazratganj, the Residency is only a few minutes away by auto-rickshaw, cab or private vehicle. Many people combine both places in the same outing, spending the morning at the Residency before heading to Hazratganj for lunch or an evening stroll.</li>
                    <li><strong>By Metro:</strong> If you are travelling by Lucknow Metro, get down at Hazratganj Metro Station, the nearest metro station to the Residency. From there, an auto-rickshaw or e-rickshaw will take you to the entrance in about 5 to 10 minutes.</li>
                    <li><strong>By Train:</strong> Coming by train? Lucknow Junction (Charbagh Railway Station) is around 5 kilometres from the Residency. Taxis, app-based cabs, auto-rickshaws and city buses are available throughout the day and the journey usually takes 15 to 20 minutes, depending on traffic.</li>
                    <li><strong>By Air:</strong> If you are arriving by air, Chaudhary Charan Singh International Airport is approximately 14 kilometres away. A taxi is the most convenient option and the drive generally takes 30 to 40 minutes, depending on traffic conditions. Even metro runs from the airport so it is smoother and time saving to travel via metro.</li>
                </ul>
                <p className="mb-4 text-gray-700">
                    If you are travelling in your own vehicle, parking is available near the Residency. Since the complex is spread over a large area, it is worth arriving a little earlier on weekends and public holidays to avoid the busiest hours.
                </p>
                <h4 className="font-semibold text-black mb-1">RU Explores Suggestion</h4>
                <p className="mb-6 text-gray-700">
                    If you are planning to explore Lucknow's historical landmarks in a single day, begin your morning at the Residency. After spending a few hours here, continue to Sikandar Bagh, enjoy lunch in Hazratganj and then head towards Bara Imambara and the Husainabad Heritage Walk in the evening. The route is convenient, avoids unnecessary backtracking and gives you a well-rounded introduction to Lucknow's history and culture.
                </p>

                {/* Nearby Places */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Continue Exploring Lucknow
                </h2>

                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-15.jpg"
                    source="Pexels/Unsplash/Wikimedia Commons"
                />

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li><strong>Sikandar Bagh:</strong> Just a short drive from the Residency, Sikandar Bagh is closely connected to the events of the Revolt of 1857. Once a royal garden built by Nawab Wajid Ali Shah, it later became the site of one of the fiercest battles of the uprising.</li>
                    <li><strong>Hazratganj:</strong> After spending a few hours surrounded by history, head to Hazratganj for a change of pace. Whether you want to enjoy a leisurely lunch, explore local cafés, browse bookshops or simply walk through one of the city's most famous markets, Hazratganj offers a completely different side of Lucknow.</li>
                    <li><strong>Bara Imambara:</strong> No visit to Lucknow is complete without seeing Bara Imambara. From its magnificent central hall to the famous Bhool Bhulaiya, it showcases the architectural brilliance of the Nawabs and remains one of the city's most iconic landmarks.</li>
                    <li><strong>Husainabad Heritage Walk:</strong> Starting from Rumi Darwaza, the trail takes you to Chhota Imambara, the Husainabad Clock Tower, Ghanta Ghar Talab, Satkhanda and the Picture Gallery, bringing together history, architecture and everyday life in one memorable walk.</li>
                </ul>

                {/* Conclusion */}
                <SectionImage
                    src="/Image/Residency-lucknow-travel-guide-16.jpg"
                    source="lucknow.nic.in"
                />
                <p className="mb-4 text-gray-700">
                    The broken architecture and cannon scars have remained here for more than a century, reminding everyone who walks through the complex that some chapters of history cannot and should not be erased. Every ruin tells you that what happened here was real and that preserving these marks is just as important as preserving the buildings themselves.
                </p>
                <p className="mb-4 text-gray-700">
                    By the time you leave, the Residency no longer feels like a collection of old ruins. It becomes a place where history, memory and architecture come together in a way that very few monuments can offer.
                </p>
                <p className="mb-6 text-gray-700">
                    If you are exploring Lucknow beyond its Nawabi palaces and famous food, make time for the Residency. It may not be the most colourful landmark in the city, but it is certainly one of the most meaningful. The Residency is remembered for what it survived.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about the Residency Lucknow
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Why is the Residency in Lucknow famous?</p>
                        <p className="mt-2">The Residency is famous for its role in the Siege of Lucknow during the Revolt of 1857. Many of the buildings still retain their original bullet marks and cannon scars, making it one of the few historical sites in India where the visible impact of the conflict has been preserved.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Who built the Residency in Lucknow?</p>
                        <p className="mt-2">The Residency was constructed during the reign of Nawab Asaf-ud-Daula in the late eighteenth century. It served as the residence of the British Resident who represented the East India Company in the court of Awadh.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What can you see inside the Residency?</p>
                        <p className="mt-2">The Residency complex includes the Main Residency Building, Banquet Hall, Dr. Fayrer's House, Begum Kothi, the Residency Church, a cemetery, landscaped gardens and the Residency Museum, along with several other historic structures connected to the events of 1857.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Is there a museum inside the Residency?</p>
                        <p className="mt-2">Yes. The Residency Museum displays historical photographs, maps, paintings, official records and artefacts related to the Residency and the Revolt of 1857. It provides valuable context for understanding the ruins across the complex.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. How much time should you spend at the Residency?</p>
                        <p className="mt-2">Most people spend two to three hours exploring the Residency. This gives you enough time to walk around the complex, visit the museum and read the information panels placed throughout the site.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is the Light and Sound Show at the Residency worth watching?</p>
                        <p className="mt-2">Yes. The evening Light and Sound Show uses projection, narration and lighting to tell the story of the Residency and the Revolt of 1857. Watching it after exploring the complex gives you a deeper understanding of the site's history. It is a good idea to check the latest show timings before your visit, as schedules may change.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. What is the best time to visit the Residency?</p>
                        <p className="mt-2">The best time to visit is between October and March, when the weather is pleasant for walking through the large open complex. Morning and late afternoon are also excellent for photography.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Which metro station is closest to the Residency?</p>
                        <p className="mt-2">Hazratganj Metro Station is the nearest metro station. From there, the Residency is about 5 to 10 minutes away by auto-rickshaw, e-rickshaw or cab.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Can you visit the Residency, Sikandar Bagh and Bara Imambara on the same day?</p>
                        <p className="mt-2">Yes. These attractions are well connected and can comfortably be covered in a full-day itinerary. Many people begin with the Residency, continue to Sikandar Bagh, spend some time in Hazratganj, and then head to Bara Imambara and the Husainabad Heritage Walk later in the day.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Is the Residency worth visiting?</p>
                        <p className="mt-2">Yes, especially if you enjoy history. Unlike many historical monuments that have been restored over time, the Residency has been preserved in its ruined state, allowing you to see the visible impact of the Revolt of 1857 exactly where it happened.</p>
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

export default ResidencyLucknow;