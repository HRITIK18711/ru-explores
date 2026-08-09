import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const BhaktapurNepal = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Bhaktapur, Nepal: Best Places to Visit, Things to Do & Complete Travel Guide
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 15 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/01-nyatpola-bhairav-temple-bhaktapur-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Bhaktapur, one of the three royal cities of the Kathmandu Valley, has a way of making every walk feel memorable. As you walk through its narrow lanes and open squares, you will notice that history is not locked inside monuments here. It lives all around you, blending naturally with the people, traditions and spaces that have remained part of the city for centuries. The more time you spend here, the more you begin to notice the details that give the city its identity.
                </p>

                <p className="mb-6 text-gray-700">
                    Bhaktapur has long been a centre of art, culture, and tradition in Nepal. The city continues to preserve its original charm, where every street and every square reflects a story from its past. It is this simple, unhurried charm that makes Bhaktapur one of the most rewarding places to visit in the country.
                </p>

                {/* At a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Bhaktapur at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-bhaktapur-nepal-bhupal-shrestha.jpg"
                    source="Pexels/Bhupal Shrestha"
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
                                <td className="border p-3 font-semibold">Country</td>
                                <td className="border p-3">Nepal</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Province</td>
                                <td className="border p-3">Bagmati Province</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Elevation</td>
                                <td className="border p-3">Around 1,401 metres (4,596 ft) above sea level</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Best Time to Visit</td>
                                <td className="border p-3">March to May and September to November</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Ideal Duration</td>
                                <td className="border p-3">1–2 days</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Famous For</td>
                                <td className="border p-3">Bhaktapur Durbar Square, traditional Newar culture, ancient temples, pottery, wood carving, and medieval architecture</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">UNESCO Status</td>
                                <td className="border p-3">Part of the Kathmandu Valley UNESCO World Heritage Site (one of the seven Monument Zones)</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Nearest Airport</td>
                                <td className="border p-3">Tribhuvan International Airport (KTM)</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Languages Spoken</td>
                                <td className="border p-3">Nepali is the official language. Nepal Bhasa (Newari) is widely spoken, and English is commonly understood in tourist areas.</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Currency</td>
                                <td className="border p-3">Nepalese Rupee (NPR)</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Time Zone</td>
                                <td className="border p-3">Nepal Time (NPT), UTC +5:45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Why Bhaktapur Feels Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Bhaktapur Feels Different
                </h2>

                <SectionImage
                    src="/Image/03-bhaktapur-nepal-alix-lee.jpg"
                    source="Pexels/Alix Lee"
                />

                <p className="mb-4 text-gray-700">
                    Bhaktapur is a city that doesn't ask you to follow an itinerary. The moment you step into its old neighbourhoods, the urge to keep checking maps and ticking off attractions slowly fades away because every lane has something worth noticing. A turn through Taumadhi Square may lead you to a quiet residential lane where centuries-old houses, small shrines and daily life exist side by side without demanding your attention.
                </p>

                <p className="mb-4 text-gray-700">
                    The streets themselves are part of the experience, leading you past centuries-old temples, peaceful courtyards, beautifully carved wooden windows and homes that have stood here for generations. Some of the most memorable moments are not found at famous landmarks but between them, often when you least expect them. An intricately carved doorway or a hidden Bahal (traditional Newari courtyard) can leave just as strong an impression as the city's best-known attractions.
                </p>

                <p className="mb-4 text-gray-700">
                    Traditional craftsmanship continues to be part of everyday life. In artisan workshops across the city, clay still takes shape on traditional wheels, while wooden windows, temple doors and stone sculptures reflect skills that local craftsmen continue to practice. Spend a few minutes in Bhaktapur Durbar Square or Dattatreya Square and you will notice people chatting on temple steps, children playing nearby, devotees offering prayers and locals pausing for conversation before continuing with their day. Watching the city for a few minutes often tells you more than walking through it for hours.
                </p>

                <p className="mb-4 text-gray-700">
                    Bhaktapur also reminds you that beauty is not always found in grand monuments. Sometimes it is a row of clay pots drying under the sun, pigeons circling above an old temple, colourful marigold garlands decorating a shrine or an elderly craftsman patiently carving wood outside his workshop. These small moments quietly become some of the strongest memories of the city.
                </p>

                <p className="mb-6 text-gray-700">
                    Perhaps that's why Bhaktapur stays with so many travellers long after they leave. A visit planned for a few hours often stretches much longer, not because there are more attractions to tick off but because every unexpected discovery invites you to slow down for a while. That is what makes every visit feel personal.
                </p>

                {/* Places to Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Bhaktapur
                </h2>

                <SectionImage
                    src="/Image/04-bhaktapur-durbar-square-nepal.jpg"
                    source="Wikipedia"
                />

                <h4 className="font-semibold text-black mb-1">Bhaktapur Durbar Square</h4>
                <p className="mb-6 text-gray-700">
                    It is where most journeys through the city begin. Surrounded by centuries-old palaces, temples and courtyards, it gives you the best introduction to Bhaktapur's royal heritage and traditional Newari architecture. It is also a UNESCO World Heritage Site, making it one of Nepal's most important cultural landmarks. The square is full of beautifully carved wooden windows and stone sculptures to quiet courtyards hidden behind the main pathways.
                </p>

                <h4 className="font-semibold text-black mb-1">55 Window Palace</h4>
                <SectionImage
                    src="/Image/05-55-window-palace-bhaktapur-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is one of the finest examples of traditional Newari craftsmanship in Bhaktapur. Rather than looking at the palace from a distance, walk a little closer and notice how every window is carved with remarkable precision. No two sections look exactly alike and the level of detail reflects the craftsmanship for which Bhaktapur is known. The palace once served as the residence of Malla kings and remains an important part of the city's royal heritage. Since it stands within Bhaktapur Durbar Square, it is easy to include in your visit without making a separate stop.
                </p>

                <h4 className="font-semibold text-black mb-1">Golden Gate</h4>
                <SectionImage
                    src="/Image/06-golden-gate-bhaktapur-nepal-mehmet-turgut-kirkgoz.jpg"
                    source="Pexel/Mehmet Turgut Kirkgoz"
                />
                <p className="mb-6 text-gray-700">
                    Standing beside the 55 Window Palace, the Golden Gate is often regarded as one of the finest examples of metal craftsmanship in Nepal. Despite its name, it is not made entirely of gold. The richly decorated gilded doorway is covered with beautiful carvings of deities, mythical creatures and traditional symbols that showcase the exceptional skill of Newari artisans. The gate once marked the entrance to the royal palace and continues to be one of the most photographed landmarks in the city.
                </p>

                <h4 className="font-semibold text-black mb-1">National Art Museum</h4>
                <SectionImage
                    src="/Image/07-national-art-gallery-museum-bhaktapur-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Housed inside the former royal palace, the National Art Museum displays a rich collection of traditional paintings, stone sculptures, wooden carvings and religious artifacts that reflect Nepal's artistic and cultural heritage. The exhibits help explain many of the details you will notice while exploring the city. After seeing the craftsmanship preserved inside the museum, you will begin to appreciate the carvings, statues and temples across Bhaktapur with a different perspective.
                </p>

                <h4 className="font-semibold text-black mb-1">Vatsala Temple</h4>
                <SectionImage
                    src="/Image/08-vatsala-bhagwati-bhaktapur-durbar-square-bhaktapur-nepal_Rajesh_Dhungana.jpg"
                    source="Wikipedia/Rajesh Dhungana"
                />
                <p className="mb-6 text-gray-700">
                    As you walk through the square, you will see Vatsala Temple's graceful stone architecture and the open space around it. Unlike the taller pagoda-style temples nearby, this temple stands out for its elegant design and quieter setting. It is also closely associated with the famous Taleju Bell, whose sound once marked important occasions and could be heard across the city. Although the original Vatsala Temple was badly damaged in the 2015 earthquake, it continues to hold an important place in Bhaktapur's history and heritage.
                </p>

                <h4 className="font-semibold text-black mb-1">Taumadhi Square</h4>
                <SectionImage
                    src="/Image/09-taumadhi-square-bhaktapur-nepal-mehmet-turgut-kirkgoz.jpg"
                    source="Pexels/Mehmet Turgut Kirkgoz"
                />
                <p className="mb-6 text-gray-700">
                    After exploring Durbar Square, the streets naturally lead you to Taumadhi Square, one of the liveliest parts of Bhaktapur. Local shops, cafes and daily life blend with centuries-old temples, giving the square energy that change throughout the day. Even if you are not visiting during a festival, there is always something happening, from locals gathering in the open space to visitors pausing to admire the surrounding architecture. Taumadhi Square feels more like the city's living heart.
                </p>

                <h4 className="font-semibold text-black mb-1">Nyatapola Temple</h4>
                <SectionImage
                    src="/Image/10-nyatapola-temple-taumadhi-square-bhaktapur-nepal-ranjit-shrestha.jpg"
                    source="Pexels/Ranjit Shrestha"
                />
                <p className="mb-6 text-gray-700">
                    Nyatapola Temple is the tallest temple in Nepal and one of Bhaktapur's most recognizable landmarks. Its five-tiered pagoda stands high above the surrounding buildings, making it almost impossible to miss as you enter the square. Before climbing the stone steps, take a moment to notice the impressive statues guarding each level. These figures are arranged in pairs and are believed to represent increasing levels of strength, adding both meaning and character to the temple's entrance. Once you reach the top, you get a beautiful view of Taumadhi Square and the traditional rooftops of Bhaktapur.
                </p>

                <h4 className="font-semibold text-black mb-1">Bhairavnath Temple</h4>
                <SectionImage
                    src="/Image/11-bhairav-temple-bhaktapur-nepal.jpg"
                    source="Wikipedia/Ganesh Paudel"
                />
                <p className="mb-6 text-gray-700">
                    Just a short walk from Nyatapola Temple, Bhairavnath Temple is dedicated to Bhairav, the fierce form of Lord Shiva. The temple has a strong identity of its own and remains an important place of worship for the local community. If you visit during Bisket Jatra, the temple becomes the centre of one of Bhaktapur's biggest celebrations. The grand chariot procession of Bhairav fills the square with music, rituals and thousands of devotees, offering a glimpse into traditions that have been followed for generations.
                </p>

                <h4 className="font-semibold text-black mb-1">Pottery Square</h4>
                <SectionImage
                    src="/Image/12-pottery-square-bhaktapur-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    A short walk from Taumadhi Square brings you to Pottery Square, where one of Bhaktapur's oldest traditions continues to thrive. This square offers a chance to see local artisans at work, shaping clay into pots, lamps and household items using techniques passed down through generations. Watching this process is often just as interesting as the finished products, giving you a glimpse into a craft that remains part of everyday life in Bhaktapur. Many workshops also display handmade pottery for sale, making it a good place to pick up an authentic souvenir while supporting local artisans.
                </p>

                <h4 className="font-semibold text-black mb-1">Dattatreya Square</h4>
                <SectionImage
                    src="/Image/13-dattatreya-square-bhaktapur-nepal.jpg"
                    source="Pexels/ Mehmet Turgut Kirkgoz"
                />
                <p className="mb-6 text-gray-700">
                    Dattatreya Square offers a quieter side of Bhaktapur. According to local tradition, the Dattatreya Temple was built from the wood of a single tree, a story that continues to fascinate many visitors. The square is also surrounded by beautifully preserved traditional buildings, narrow lanes and small shrines that reflect Bhaktapur's rich cultural heritage without the larger crowds found elsewhere in the city.
                </p>

                <h4 className="font-semibold text-black mb-1">Pujari Math</h4>
                <SectionImage
                    src="/Image/14-pujari-math-bhaktapur-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    Located within Dattatreya Square, Pujari Math is a beautiful monastery that reflects the fine craftsmanship for which Bhaktapur is known. While many visitors come here to see the famous Peacock Window, the building itself deserves equal attention for its elegant wooden carvings, traditional brickwork and peaceful courtyard. Inside, you can also visit small museum collections that display traditional wood carvings and metal artworks, offering a closer look at the skills that have shaped Bhaktapur's artistic heritage for centuries.
                </p>

                <h4 className="font-semibold text-black mb-1">Peacock Window</h4>
                <SectionImage
                    src="/Image/15-peacock-window-pujari-math-bhaktapur-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    Located within the walls of Pujari Math, the Peacock Window is one of Bhaktapur's most celebrated works of wood carving. Every curve, feather and pattern has been carved with remarkable precision, making it a favourite among photographers and architecture enthusiasts. The craftsmanship is so refined that it is often regarded as one of the finest carved wooden windows in Nepal. It is easy to see why this single window has become a symbol of Bhaktapur's artistic heritage.
                </p>

                <h4 className="font-semibold text-black mb-1">Siddha Pokhari</h4>
                <SectionImage
                    src="/Image/16-siddha-pokhari-bhaktapur-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-4 text-gray-700">
                    Your walk through Bhaktapur ends at Siddha Pokhari, a large historic pond that offers a welcome change from the busy streets and temple squares. Built in the 15th century, it has long served as an important water reservoir and continues to be a peaceful gathering place for both locals and visitors. The stone steps around the pond make it an ideal place to sit and take a break after exploring the city. On calm days, the reflections of nearby trees and surrounding buildings create a pleasant setting, especially during the early morning or around sunset. You will often see local residents enjoying a quiet walk, families spending time together and children feeding the fish.
                </p>
                <p className="mb-6 text-gray-700">
                    If you have extra time, Bhaktapur has several lesser-known attractions that are worth exploring. Yaksheshwar Mahadev Temple, Nava Durga Temple, Chuma Ganesh Temple, Kamal Binayak Temple and Indrayani Temple offer a quieter glimpse into the city's religious and cultural life, while the traditional Newari bahals (courtyards) provide a chance to experience Bhaktapur beyond its main heritage squares. These places may not attract the same crowds as the city's famous landmarks, but they add another layer to Bhaktapur's rich heritage.
                </p>

                {/* Things to Do */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Things to Do in Bhaktapur
                </h2>

                <SectionImage
                    src="/Image/17-handicrafts-bhaktapur-nepal-kuldeep-who.jpg"
                    source="Pexels/Kuldeep Who"
                />

                <h4 className="font-semibold text-black mb-1">Taste Juju Dhau and Local Sweets</h4>
                <p className="mb-6 text-gray-700">
                    You will come across small shops all over Bhaktapur displaying rows of clay pots filled with Juju Dhau, the city's famous "King Curd". It is difficult to walk past without tasting this delicacy. Made using a traditional recipe, the curd is rich, creamy and lightly sweet, making it one of Bhaktapur's most loved local delicacies. While exploring the markets, keep an eye out for traditional treats like Yomari especially during festivals and winter and Lakhamari, a crunchy Newari sweet that has been enjoyed for generations.
                </p>

                <h4 className="font-semibold text-black mb-1">Enjoy Authentic Newari Cuisine</h4>
                <p className="mb-6 text-gray-700">
                    Food is an important part of Bhaktapur's identity and trying a traditional Newari meal adds another layer to the experience. Dishes such as Bara, Chatamari and Samay Baji have been prepared in local homes for generations and continue to be served in many traditional eateries. The flavours, ingredients and cooking styles reflect the culture of the city just as much as its temples and monuments.
                </p>

                <h4 className="font-semibold text-black mb-1">Watch Local Potters at Work</h4>
                <p className="mb-6 text-gray-700">
                    It is hard not to stop when you see a potter turning a lump of clay into a perfectly shaped pot within minutes. People often gather quietly around the spinning wheel, watching years of experience come alive through steady hands and simple tools. If you find a workshop offering pottery sessions, spend some time creating your own piece. It is a fun experience and a souvenir with a story behind it.
                </p>

                <h4 className="font-semibold text-black mb-1">Wander Through the Narrow Lanes and Bahals</h4>
                <p className="mb-6 text-gray-700">
                    The main squares tell only part of Bhaktapur's story. Turn into a narrow lane and you may find a quiet Bahal (traditional Newari courtyard), a small shrine decorated with fresh flowers or an elderly resident sitting outside a centuries-old brick house. There is no fixed route for this experience. The joy comes from walking without rushing and letting the city surprise you with small moments that many visitors never notice.
                </p>

                <h4 className="font-semibold text-black mb-1">Shop for Handmade Crafts</h4>
                <p className="mb-6 text-gray-700">
                    Many shops in Bhaktapur sell items made by local artisans rather than factory-produced souvenirs. Hand-carved wooden pieces, pottery, metal crafts, paubha paintings and traditional masks reflect skills that have been passed down through generations. Buying directly from these workshops not only gives you something authentic to take home but also supports the families keeping these traditional crafts alive.
                </p>

                <h4 className="font-semibold text-black mb-1">Explore Bhaktapur Early in the Morning</h4>
                <p className="mb-6 text-gray-700">
                    Bhaktapur wakes up slowly. Temple bells break the morning silence, shopkeepers begin opening their doors and the old brick streets remain peaceful before the day gets busy. The soft morning light brings out the warm colours of the city's buildings, making it one of the best times for photography. More importantly, it is when Bhaktapur feels most natural, before the crowds arrive and the city settles into its daily rhythm.
                </p>

                <h4 className="font-semibold text-black mb-1">Experience Bisket Jatra (Seasonal)</h4>
                <p className="mb-6 text-gray-700">
                    If you happen to visit in April, you may witness Bisket Jatra, one of Bhaktapur's biggest and most exciting festivals. Massive wooden chariots move through the streets, traditional music fills the air and thousands of local residents come together to celebrate a tradition that has continued for centuries. The energy, colours and community spirit make it an unforgettable experience and offer a side of Bhaktapur that few visitors get to see.
                </p>

                {/* Festivals and Local Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Festivals and Local Traditions
                </h2>

                <SectionImage
                    src="/Image/18-festival-jatra-bhaktapur-nepal-sudip-shrestha.jpg"
                    source="Pexels/Sudip Shrestha"
                />

                <p className="mb-4 text-gray-700">
                    Bhaktapur during festive season is a completely different side of the city. The quiet streets fill with music, temple bells ring more often than usual, homes are decorated and neighbourhoods come together to celebrate traditions that have been passed down for generations. Bisket Jatra is the celebration that defines Bhaktapur. Every April, the city comes alive as enormous wooden chariots move through the streets, thousands of people gather in the squares and age-old rituals unfold before your eyes. The energy is difficult to describe until you stand in the middle of it, surrounded by cheering crowds and centuries-old traditions that continue to thrive today. Throughout the year, festivals such as Gai Jatra, Dashain, Tihar and Yomari Punhi bring their own colours and customs to the city.
                </p>
                <p className="mb-4 text-gray-700">
                    One of the first things you may notice in Bhaktapur is the deep respect shown towards temples and shrines. Many local residents begin their day by offering prayers before heading to work, and it is common to see fresh flowers, oil lamps and incense placed at neighbourhood shrines throughout the city.
                </p>
                <p className="mb-6 text-gray-700">
                    Community life also remains an important part of Bhaktapur's identity. Festivals, religious ceremonies and neighbourhood celebrations are often organized collectively, reflecting a tradition of cooperation that has continued for centuries. People are welcomed to observe these customs with respect, offering a rare opportunity to experience a culture that remains deeply rooted in everyday life.
                </p>

                {/* Plan Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Plan Your Visit
                </h2>

                <SectionImage
                    src="/Image/19-bhaktapur-darbar-square-chandi-saha.jpg"
                    source="Pexels/Chandi Saha"
                />

                <h4 className="font-semibold text-black mb-1">Best Time to Visit Bhaktapur</h4>
                <p className="mb-6 text-gray-700">
                    Bhaktapur can be visited throughout the year, but October to April is generally the best time to explore the city. The weather is pleasant, the skies are clear and walking through the old squares, temples and brick lanes feels comfortable from morning till evening. If you are planning your trip around a festival, visit in April during Bisket Jatra. It is the time when Bhaktapur feels most alive. The streets fill with people, traditional music, towering wooden chariots and celebrations that have been part of the city for centuries. The monsoon brings a quieter side of Bhaktapur. The brick streets look freshly washed, the courtyards become calmer and there are fewer visitors around. Winter is equally enjoyable, with cool mornings, warm afternoon sunshine and peaceful streets that invite you to slow down and spend a little more time exploring.
                </p>

                <h4 className="font-semibold text-black mb-1">How to Reach</h4>
                <p className="mb-6 text-gray-700">
                    Bhaktapur is located about 15 kilometres east of Kathmandu and is one of the easiest day trips from Nepal's capital. The quickest way to reach the city is by taxi or ride-hailing service with the journey usually taking 30 to 45 minutes, depending on traffic. Budget travellers can use regular local buses and minibuses that operate between Kathmandu and Bhaktapur throughout the day. If you are travelling by private vehicle, parking is available near the city's main entrance after which the historic centre is best explored on foot.
                </p>

                <h4 className="font-semibold text-black mb-1">Language and Local Etiquette</h4>
                <p className="mb-6 text-gray-700">
                    Nepali is the official language while Newari is widely spoken by the local community. In hotels, restaurants and popular tourist areas, you will usually find people who can communicate in English. A little courtesy goes a long way in Bhaktapur. Remove your shoes before entering temples where required, dress modestly while visiting religious sites and ask for permission before photographing local people, especially during ceremonies. Many temples remain active places of worship, so speaking softly and respecting ongoing rituals helps preserve the peaceful atmosphere that makes Bhaktapur special.
                </p>

                <h4 className="font-semibold text-black mb-1">Safety Tips</h4>
                <p className="mb-6 text-gray-700">
                    Bhaktapur is considered one of the safer destinations in Nepal and is comfortable to explore independently, even for first-time visitors. Like any popular tourist destination, keep an eye on your belongings in crowded areas and avoid carrying unnecessary valuables. The city's streets are paved with old bricks and stone, so comfortable walking shoes are recommended, particularly during the rainy season when some paths can become slippery. Carry a reusable water bottle, stay hydrated while exploring and begin your sightseeing early if you plan to cover the city in a single day.
                </p>

                <h4 className="font-semibold text-black mb-1">Getting Around and Payments</h4>
                <p className="mb-6 text-gray-700">
                    The best way to experience Bhaktapur is simply by walking. Most of the city's major attractions are located within a compact historic area and wandering through its narrow lanes often leads to hidden courtyards, small shrines and local workshops that are easy to miss when travelling by vehicle. For longer journeys, taxis are readily available while local buses and minibuses connect Bhaktapur with Kathmandu and nearby towns at affordable fares. If you are staying overnight, many hotels can also arrange private transport for sightseeing or airport transfers. When it comes to payments, Nepali Rupees (NPR) remains the most convenient option. Small shops, cafes, local eateries and market stalls generally prefer cash while many hotels, larger restaurants and souvenir stores accept cards or digital payments. Carrying some cash is still a good idea, especially if you plan to explore local markets or travel by public transport.
                </p>

                <SectionImage
                    src="/Image/20-bisket-jatra-chariot-bhaktapur.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    There comes a moment in Bhaktapur when you stop looking at the map. You leave the main square behind, turn into a narrow brick lane and simply keep walking. Somewhere, a temple bell rings. A potter shapes clay outside his workshop. Children run across an old courtyard while an elderly man sits quietly on a wooden platform, watching the afternoon pass. That is the charm of Bhaktapur.
                </p>
                <p className="mb-4 text-gray-700">
                    Take a lane you had not planned to explore, sit for a while in one of its quiet squares and watch everyday life unfold around you. You will discover that the city's greatest attraction is not a single temple or palace. It is the feeling of being part of a place that has never forgotten its roots.
                </p>
                <p className="mb-6 text-gray-700">
                    When it is finally time to leave, you may carry home photographs of carved windows, ancient temples and sunlit courtyards. But the memory that stays with you is much simpler. It is the unhurried rhythm of Bhaktapur, a city that reminds you that sometimes the best journeys are not about seeing more but about slowing down enough to truly see.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Bhaktapur Nepal
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. What is Bhaktapur famous for?</p>
                        <p className="mt-2">Bhaktapur is famous for its well-preserved medieval architecture, traditional Newari culture, ancient temples, brick-paved streets and UNESCO-listed Bhaktapur Durbar Square. The city is also known for its skilled artisans, wood carvings, pottery and the popular Newari dessert, Juju Dhau.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Is Bhaktapur worth visiting from Kathmandu?</p>
                        <p className="mt-2">Yes. Located just 15 kilometres from Kathmandu, Bhaktapur is one of the most rewarding day trips in Nepal. Its compact historic centre, rich cultural heritage and relaxed atmosphere make it easy to explore within a day while offering a very different experience from the capital.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. Is one day enough for Bhaktapur?</p>
                        <p className="mt-2">Most visitors spend one full day exploring Bhaktapur. This gives you enough time to visit the main squares, temples and museums, enjoy local cuisine and wander through the city's quieter lanes. If you enjoy photography or slow travel, staying overnight offers a more peaceful experience after the day visitors leave.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. What is the best time to visit Bhaktapur?</p>
                        <p className="mt-2">The best time to visit Bhaktapur is between October and April, when the weather is cool, dry and comfortable for walking. If you would like to experience the city's biggest celebration, plan your visit around Bisket Jatra, which usually takes place in April.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Is there an entry fee for Bhaktapur Durbar Square?</p>
                        <p className="mt-2">Yes. Visitors are required to pay an entry fee to enter the heritage area around Bhaktapur Durbar Square. The fee varies for Nepali citizens, SAARC nationals and international visitors, so it is best to check the latest rates before your trip.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Can you explore Bhaktapur on foot?</p>
                        <p className="mt-2">Absolutely. Walking is the best way to explore Bhaktapur. Most attractions are located within a compact historic area, allowing visitors to move easily between temples, courtyards, museums and local markets while discovering hidden lanes along the way.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. What should you buy in Bhaktapur?</p>
                        <p className="mt-2">Bhaktapur is a great place to shop for handmade pottery, traditional wood carvings, metal crafts, Thangka paintings, handmade paper products and locally made souvenirs. Purchasing directly from local artisans also supports traditional craftsmanship.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Is Bhaktapur safe for solo travellers and families?</p>
                        <p className="mt-2">Yes. Bhaktapur is considered one of Nepal's safest heritage cities for solo travellers, couples and families. The city is generally peaceful and easy to navigate, though it is always wise to keep an eye on personal belongings in crowded areas and respect local customs while visiting religious sites.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What language is spoken in Bhaktapur?</p>
                        <p className="mt-2">Nepali is the official language, while Nepal Bhasa (Newari) is widely spoken by the local community. English is commonly understood in hotels, restaurants and tourist areas, making it easy for international visitors to communicate.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Can I use Indian currency or digital payments in Bhaktapur?</p>
                        <p className="mt-2">The official currency is the Nepali Rupee (NPR). While some businesses near the tourist area may accept digital payments or cards, carrying cash is recommended for local shops, cafés, markets and public transport. Indian visitors should exchange currency into Nepali Rupees, as acceptance of Indian currency is not guaranteed everywhere.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. Is Bhaktapur a UNESCO World Heritage Site?</p>
                        <p className="mt-2">Yes. Bhaktapur Durbar Square is one of the three royal palace squares in the Kathmandu Valley that form part of the UNESCO World Heritage Site. The city is recognized for its exceptional Newari architecture, historic temples, traditional craftsmanship and living cultural heritage.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Can I visit Bhaktapur and Patan on the same day?</p>
                        <p className="mt-2">Yes. Since both cities are located within the Kathmandu Valley, many travellers visit Bhaktapur and Patan on the same day. However, if you enjoy exploring at a relaxed pace, it is worth giving each city a full day. Bhaktapur in particular, rewards those who take time to wander beyond its main squares.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. Is Bhaktapur suitable for senior citizens and children?</p>
                        <p className="mt-2">Yes. Bhaktapur is suitable for families as well as senior travellers. Most attractions are within walking distance of one another, although the old brick streets and a few temple staircases may require comfortable footwear and a steady pace.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. What should I wear while visiting Bhaktapur?</p>
                        <p className="mt-2">Comfortable walking shoes are the most important thing to pack, as you will spend much of your time exploring on foot. When visiting temples and other religious sites, dress modestly out of respect for local customs. A hat and sunscreen are useful during warmer months.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. Can I stay overnight in Bhaktapur?</p>
                        <p className="mt-2">Yes. While many visitors come on a day trip from Kathmandu, staying overnight lets you experience Bhaktapur before the crowds arrive and after they leave. The quieter evenings and peaceful mornings offer a different side of the city that many day visitors miss.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">16. Are drones allowed in Bhaktapur?</p>
                        <p className="mt-2">Drone photography is regulated in Nepal and additional restrictions may apply in heritage areas such as Bhaktapur. Always obtain the required permissions from the relevant authorities before flying a drone and avoid operating it around temples, festivals or large gatherings without approval.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">17. Are there ATMs and money exchange facilities in Bhaktapur?</p>
                        <p className="mt-2">Yes. ATMs are available in and around the main tourist area, and money exchange services can also be found within the city. Even so, carrying some Nepali Rupees in cash is a good idea, especially for local markets, small cafés and public transport.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">18. What are the opening hours of Bhaktapur Durbar Square?</p>
                        <p className="mt-2">Bhaktapur Durbar Square itself is open throughout the day, while museums and some monuments inside the heritage area follow their own operating hours. Visiting early in the morning or late in the afternoon is often the most pleasant time to explore, with softer light and fewer crowds.</p>
                    </div>
                </div>

                <div className="mt-6 pt-8">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/Image/rohit.jpeg"
              alt="Pragya Singh"
              className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
            />

            <p className="text-gray-800 leading-relaxed text-justify text-lg">
              Hi, I’m Rohit, the explorer behind RU Explores. For me, travel is not just about reaching a destination but about understanding its culture, people, food and stories. I enjoy exploring places deeply, from mountain villages to local streets and sharing those experiences in a way that helps others travel with purpose. RU Explores is my attempt to turn travel into something more meaningful than just ticking locations off a list.
            </p>
          </div>
        </div>

            </div>
        </div>
    );
};

export default BhaktapurNepal;