import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const SikandarBagh = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Sikandar Bagh Lucknow: History, Battle of 1857, Virangana Uda Devi, Timings & Visitor Guide
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 25 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Saniya Mishra</span>
                </p>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-01.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Nothing about Sikandar Bagh prepares you for its past. Walk through the entrance today and you'll find shaded pathways, old trees and people enjoying a quiet afternoon. It feels more like a peaceful garden than one of the most important historical sites in Lucknow. If no one told you what happened here, you could easily spend an hour exploring the grounds without realizing that this was once the scene of one of the fiercest battles of the Revolt of 1857.
                </p>

                <p className="mb-4 text-gray-700">
                    That's what makes Sikandar Bagh different. Some places impress you the moment you arrive. Sikandar Bagh asks for a little more of your time. The longer you walk through the garden, the more its story begins to unfold. What started as a royal retreat during the Nawabi era later became a battlefield that changed the course of Lucknow's history. It is also closely linked to the remarkable courage of Virangana Uda Devi, whose story continues to inspire people more than a century later.
                </p>

                <p className="mb-4 text-gray-700">
                    Today, the battle is over, the noise has disappeared and the garden has returned to being a place of peace. Yet the past has never really left. Every pathway, old wall and shaded corner reminds you that this quiet stretch of greenery has lived many different lives.
                </p>

                <p className="mb-6 text-gray-700">
                    If you're looking beyond Lucknow's famous Imambaras and gateways, Sikandar Bagh is one place that deserves your time. Not because it is the grandest landmark in the city but because few places tell such a powerful story without saying a word.
                </p>

                {/* History */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How a Royal Garden Became a Battlefield
                </h2>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-02.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    It's hard to imagine today but Sikandar Bagh was never meant to be remembered for war. It began as a royal garden built by Nawab Wajid Ali Shah, the last Nawab of Awadh. Named after Sikandar Mahal Begum, one of his wives, the garden was created as a quiet retreat where members of the royal family could spend time away from the formal life of the palace. Music, poetry and gardens were an important part of Lucknow's culture during the Nawabi era and Sikandar Bagh reflected that way of life.
                </p>

                <p className="mb-4 text-gray-700">
                    Everything changed in 1856 when the British East India Company annexed Awadh and removed Wajid Ali Shah from power. The decision sparked widespread resentment across the region and within a year, the Revolt of 1857 had spread to Lucknow. What had once been a peaceful garden suddenly became a strategic position. Surrounded by high walls, Sikandar Bagh offered protection to rebel forces defending the city. The same pathways that had once echoed with conversations and music were now preparing for battle.
                </p>

                <p className="mb-6 text-gray-700">
                    In November 1857, British troops launched a major assault on Sikandar Bagh while advancing through Lucknow. Fierce fighting followed and hundreds of rebel soldiers lost their lives defending the garden. The battle became one of the defining moments of the uprising in Lucknow and changed the identity of Sikandar Bagh forever.
                </p>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-03.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    Among the many stories linked to this battle, one continues to inspire people even today. According to historical accounts, Virangana Uda Devi, a fearless warrior from the Pasi community, climbed a pipal tree inside the garden and took position with a firearm. Hidden among the branches, she fired at advancing British soldiers, making it difficult for them to locate where the shots were coming from.
                </p>

                <p className="mb-6 text-gray-700">
                    Only after the battle ended did British troops discover that the skilled sharpshooter they had been searching for was a woman. Her courage has since become one of the most powerful stories associated with the Revolt of 1857 and a memorial inside Sikandar Bagh honours her sacrifice. Today, the sounds of battle have long disappeared. The trees have grown back, people walk peacefully through the gardens and the site has regained the calm it was originally created for. Yet once you know its history, it's impossible to see Sikandar Bagh as just another garden. Every quiet corner reminds you that this peaceful place has witnessed one of the most dramatic chapters in Lucknow's past.
                </p>

                {/* What You'll Notice */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    What You'll Notice When You Walk In
                </h2>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-04.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    The first thing you'll notice isn't a monument. It's the silence. For a place that played such an important role in the Revolt of 1857, Sikandar Bagh feels surprisingly peaceful. Tall trees provide shade across the pathways, birds are easier to hear than traffic and people move through the garden without the crowds you'll find at many of Lucknow's better-known attractions.
                </p>

                <p className="mb-4 text-gray-700">
                    As you walk further, the historic gateway, old boundary walls and scattered information panels begin to tell the story of the place. Nothing here demands your attention. Instead, Sikandar Bagh encourages you to slow down, read a little, look around and connect the landscape with the events that once unfolded here.
                </p>

                <p className="mb-4 text-gray-700">
                    One of the reasons the garden looks so well maintained is its association with the National Botanical Research Institute (NBRI), which now occupies part of the historic complex. The presence of mature trees, carefully maintained greenery and seasonal plants keeps the garden true to the purpose for which it was originally created, a place where people could step away from the bustle of the city.
                </p>

                <p className="mb-6 text-gray-700">
                    If you're interested in photography, don't just focus on the entrance gate. Some of the most interesting photographs come from the quieter corners of the garden, where old walls disappear behind trees and narrow pathways lead through the greenery. These small details capture the character of Sikandar Bagh far better than a single wide-angle photograph. You probably won't leave Sikandar Bagh with dozens of photographs. What you'll take back instead is a better understanding of how one place can hold so many different stories, first as a royal garden, then as a battlefield and today as one of Lucknow's most peaceful green spaces.
                </p>

                {/* Evaluation */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Is Sikandar Bagh Worth Visiting?
                </h2>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-05.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    That depends on what you're looking for. If you're expecting grand halls, towering monuments or the kind of architecture that immediately grabs your attention, Sikandar Bagh may not be your favourite stop in Lucknow. It doesn't compete with Bara Imambara, Chhota Imambara or Rumi Darwaza in terms of scale. But that's not why people remember it.
                </p>

                <p className="mb-4 text-gray-700">
                    Sikandar Bagh is for those who enjoy discovering the stories behind a place. Instead of rushing from one photo spot to another, you will spend time walking through a garden that quietly connects the Nawabi era, the Revolt of 1857 and present-day Lucknow. The more you know about its past, the more meaningful your visit becomes.
                </p>

                <p className="mb-4 text-gray-700">
                    It's also one of the city's quieter heritage sites. You won't usually find large crowds here which means you can explore at your own pace, read the information displayed around the garden and take a break under the shade of old trees without feeling hurried.
                </p>

                <p className="mb-6 text-gray-700">
                    If you have just one day in Lucknow, don't visit Sikandar Bagh on its own. Combine it with nearby attractions like the Residency, Hazratganj or the Bara Imambara and Husainabad Heritage Walk. Together, they tell a much richer story of the city than any single monument can. By the time you leave, you probably won't remember Sikandar Bagh for a particular building. You'll remember it for the story hidden behind an ordinary-looking garden and that's exactly what makes it different.
                </p>

                {/* Before You Go */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Before You Go
                </h2>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-06.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    Sikandar Bagh isn't the kind of place where you'll spend an entire day but it's well worth setting aside an hour or two if you're interested in Lucknow's history. Most people explore the garden in 60 to 90 minutes, giving themselves enough time to walk through the grounds, read the information panels and spend a few quiet moments reflecting on the stories connected with the site. If you're someone who enjoys history or photography, you may want to stay a little longer.
                </p>

                <p className="mb-4 text-gray-700">
                    The best time to visit is between October and March, when the weather is pleasant and the garden is at its greenest. During the summer months, it's better to arrive early in the morning or later in the afternoon, as the open pathways can become quite warm.
                </p>

                <p className="mb-6 text-gray-700">
                    Sikandar Bagh works best as part of a larger day out in Lucknow. You can begin your day at the Residency, continue to Sikandar Bagh, stop for lunch or coffee in Hazratganj and then head towards Bara Imambara and the Husainabad Heritage Walk in the evening. This route lets you experience different sides of the city, from the events of 1857 to the grandeur of the Nawabs and the lively streets of old Lucknow. Wear comfortable shoes, especially if you're planning to combine multiple attractions in a single day. There's no need to rush here. Sit for a while, walk through the shaded pathways and take in the surroundings. Sikandar Bagh is one of those places that reward patience more than speed.
                </p>

                {/* Logistics */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Timings, Entry Fee & Visitor Information
                </h2>

                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-07.jpg"
                    source="Wikipedia"
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
                                <td className="border p-3">8:00 AM – 5:00 PM (Daily)</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Entry Fee</td>
                                <td className="border p-3">Free</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Time Required</td>
                                <td className="border p-3">1–2 Hours</td>
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
                            <tr>
                                <td className="border p-3">Parking</td>
                                <td className="border p-3">Available nearby</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mb-6">Note: Timings and visitor information may change over time. It's always a good idea to check the latest details before planning your visit.</p>

                {/* Nearby Places */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Continue Exploring Lucknow
                </h2>
                <p className="mb-6 text-gray-700">
                    Sikandar Bagh is one chapter in Lucknow's story. Once you've explored the garden, there are several nearby places that help you understand the city from different perspectives.
                </p>

                <h4 className="font-semibold text-black mb-1">The Residency</h4>
                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-08.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    If there is one place you should visit after Sikandar Bagh, it is the Residency. Both are closely linked to the events of the Revolt of 1857 but each tells a different part of the story. While Sikandar Bagh reflects the Battle of 1857 and the courage of its defenders, the Residency helps you understand the longer siege that shaped Lucknow's history. Visiting both on the same day gives you a much deeper appreciation of this remarkable period.
                </p>

                <h4 className="font-semibold text-black mb-1">Hazratganj</h4>
                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-09.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    After a morning surrounded by history, Hazratganj offers a welcome change of pace. Spend some time exploring its shops, cafes and restaurants or simply enjoy a leisurely walk through one of Lucknow's best-known neighbourhoods. It's an ideal place to pause before continuing your journey.
                </p>

                <h4 className="font-semibold text-black mb-1">Bara Imambara</h4>
                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-10.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    No visit to Lucknow feels complete without seeing Bara Imambara. From the famous Bhool Bhulaiya to one of the world's largest arched halls, it showcases the grandeur of Nawabi architecture and offers an experience completely different from Sikandar Bagh.
                </p>

                <h4 className="font-semibold text-black mb-1">Husainabad Heritage Walk</h4>
                <SectionImage
                    src="/Image/Sikandar-bagh-lucknow-travel-guide-11.jpg"
                    source="Pexels/Unsplash/Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    If you still have a few hours left, continue from Rumi Darwaza into the Husainabad Heritage Walk. The route takes you through Chhota Imambara, the Husainabad Clock Tower, Ghanta Ghar Talab, Satkhanda and the Picture Gallery, revealing another side of old Lucknow that complements everything you have learned at Sikandar Bagh.
                </p>

                <h4 className="font-semibold text-black mb-2">RU Explores Suggestion</h4>
                <p className="mb-6 text-gray-700">
                    If you're spending just one day in Lucknow, this route works beautifully:<br />
                    <strong>Residency → Sikandar Bagh → Lunch at Hazratganj → Bara Imambara → Husainabad Heritage Walk</strong><br />
                    It combines the city's colonial history, Nawabi architecture and the vibrant streets of old Lucknow into one memorable day.
                </p>

                {/* Conclusion */}
                <p className="mb-4 text-gray-700">
                    Sikandar Bagh does not look like a place that changed history. Walk through the garden today and you will see trees, shaded pathways and people enjoying a quiet afternoon. Nothing immediately suggests that this space witnessed one of the fiercest battles of the Revolt of 1857. That's what stays with you. The buildings of Lucknow tell stories through their architecture. Sikandar Bagh tells its story through memory. Every path, every old wall and every patch of greenery reminds you that this place has lived many different lives, from a royal garden to a battlefield and now to one of the city's calmest public spaces.
                </p>
                <p className="mb-6 text-gray-700">
                    You won't leave talking about grand halls or towering gateways. You'll leave thinking about how an ordinary-looking garden carries an extraordinary past. And perhaps that's the best reason to visit Sikandar Bagh.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Sikandar Bagh
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Why is Sikandar Bagh famous?</p>
                        <p className="mt-2">Sikandar Bagh is best known for the Battle of Sikandar Bagh, one of the fiercest battles fought during the Revolt of 1857. Originally built as a royal garden by Nawab Wajid Ali Shah, it later became an important battlefield and is closely associated with the bravery of Virangana Uda Devi.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Who built Sikandar Bagh?</p>
                        <p className="mt-2">Sikandar Bagh was built by Nawab Wajid Ali Shah, the last Nawab of Awadh. The garden was named after Sikandar Mahal Begum, one of his wives and was originally designed as a royal retreat.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. How much time do you need to explore Sikandar Bagh?</p>
                        <p className="mt-2">Most people spend one to two hours exploring the garden, reading the historical information and walking through the peaceful surroundings.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Is there an entry fee for Sikandar Bagh?</p>
                        <p className="mt-2">No. Entry to Sikandar Bagh is generally free, making it one of the easiest historical places to visit in Lucknow.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. What are the timings of Sikandar Bagh?</p>
                        <p className="mt-2">Sikandar Bagh is usually open daily from 8:00 AM to 5:00 PM. Morning and late afternoon are the most comfortable times to visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. When is the best time to visit Sikandar Bagh?</p>
                        <p className="mt-2">The best time to visit is between October and March, when Lucknow enjoys pleasant weather. If you're visiting in summer, plan your trip early in the morning or later in the afternoon.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Is photography allowed inside Sikandar Bagh?</p>
                        <p className="mt-2">Yes. Photography for personal use is generally allowed. The garden's greenery, historic gateway and old walls make it a rewarding place for photography.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Which metro station is closest to Sikandar Bagh?</p>
                        <p className="mt-2">Hazratganj Metro Station is the nearest metro station. From there, you can reach Sikandar Bagh in a few minutes by auto-rickshaw, e-rickshaw or cab.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Which places can I visit along with Sikandar Bagh?</p>
                        <p className="mt-2">Sikandar Bagh is close to several popular attractions, including the Residency, Hazratganj, Bara Imambara and the Husainabad Heritage Walk. Together, they make an excellent full-day itinerary in Lucknow.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Is Sikandar Bagh worth visiting?</p>
                        <p className="mt-2">Yes, especially if you enjoy places with meaningful stories. Unlike Lucknow's grand monuments, Sikandar Bagh is remembered for its connection to the Revolt of 1857, the courage of Virangana Uda Devi and the surprising contrast between its peaceful gardens and dramatic past.</p>
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

export default SikandarBagh;