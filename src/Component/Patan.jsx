import React from "react";

const SectionImage = ({ src, source, alt = "Patan Lalitpur Nepal" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        {source && <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>}
    </div>
);

const Patan = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Patan, Nepal: Best Places to Visit, Things to Do & Complete Travel Guide
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/01-patan-lalitpur-nepal-aerial-view.jpg"
                    source="Wikimedia Commons"
                    alt="Patan Durbar Square Lalitpur Nepal"
                />

                <p className="mb-4 text-gray-700">
                    A quiet courtyard hidden behind a busy street, a temple that has stood for centuries, the sound of craftsmen shaping metal by hand or a local gathering in a square that has been part of daily life for generations, it is the charm of Patan. Officially known as Lalitpur, Patan is one of the three historic cities of Nepal's Kathmandu Valley where centuries-old traditions remain an important part of daily life.
                </p>

                <p className="mb-6 text-gray-700">
                    From the famous Patan Durbar Square to peaceful monasteries, traditional neighbourhoods and authentic Newari food, there is much more to this city than what first meets the eye. Every street has something worth stopping for, whether it is a beautifully carved window, a local eatery or a corner that never appears in travel brochures. This guide will help you discover the best places to visit, local experiences, travel tips, and everything you need to make the most of your visit.
                </p>

                {/* Patan at a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Patan at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-patan-durbar-square-bell-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Patan at a Glance"
                />

                <div className="overflow-x-auto mb-8">
                    <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
                        <thead className="bg-gray-100 font-semibold text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 border-r border-gray-200">Information</th>
                                <th className="px-4 py-3">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Official Name</td>
                                <td className="px-4 py-2">Lalitpur Metropolitan City</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Popular Name</td>
                                <td className="px-4 py-2">Patan</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Province</td>
                                <td className="px-4 py-2">Bagmati Province</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">District</td>
                                <td className="px-4 py-2">Lalitpur District</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Location</td>
                                <td className="px-4 py-2">South of Kathmandu, Nepal</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Elevation</td>
                                <td className="px-4 py-2">Approximately 1,350 metres (4,429 feet) above sea level</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Best Time to Visit</td>
                                <td className="px-4 py-2">March to May and September to November</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Ideal Trip Duration</td>
                                <td className="px-4 py-2">Half a day to one full day</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Famous For</td>
                                <td className="px-4 py-2">Patan Durbar Square, traditional Newari architecture, metal craftsmanship, temples, monasteries and cultural heritage</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">UNESCO Status</td>
                                <td className="px-4 py-2">Patan Durbar Square is one of the monument zones of the UNESCO World Heritage Site of the Kathmandu Valley</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Nearest Airport</td>
                                <td className="px-4 py-2">Tribhuvan International Airport, Kathmandu (about 6 km away)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Languages Spoken</td>
                                <td className="px-4 py-2">Nepali, Nepal Bhasa (Newari) and English in most tourist areas</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Currency</td>
                                <td className="px-4 py-2">Nepalese Rupee (NPR)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Time Zone</td>
                                <td className="px-4 py-2">Nepal Time (NPT), UTC +5:45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Why Patan Feels Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Patan Feels Different
                </h2>

                <SectionImage
                    src="/Image/03-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Streets of Patan Nepal"
                />

                <p className="mb-4 text-gray-700">
                    Patan has a calmness that is easy to notice. Even though it is right next to Kathmandu, the city moves at its own pace. People gather in old squares, children play in neighbourhood courtyards, prayers continue inside temples and monasteries and local shops carry on with their daily routine. It feels less crowded and gives you more time to slow down and look around.
                </p>

                <p className="mb-4 text-gray-700">
                    One of the things that makes Patan special is many traditional skills are still part of everyday life. It is common to see craftsmen working with metal, carving wood or painting religious art in small workshops that have been run by the same families for generations. These are not demonstrations for tourists but a part of the city's daily life, making Patan one of Nepal's most important centres of traditional art.
                </p>

                <p className="mb-6 text-gray-700">
                    The city also reflects the close connection between Hinduism and Buddhism. Temples and monasteries stand just a short walk from each other and both are woven into the daily lives of local communities. As you explore Patan, you will notice that its heritage is not limited to famous landmarks. It can be found in old brick houses, carved windows, stone water spouts, quiet courtyards and the small details that many people pass by without noticing.
                </p>

                {/* Places to Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Patan
                </h2>

                {/* Patan Dhoka */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Patan Dhoka</h3>
                <SectionImage
                    src="/Image/04-patan-dhoka-gate-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Patan Dhoka Gateway"
                />
                <p className="mb-6 text-gray-700">
                    In Nepali, the word "Dhoka" means a gate or entrance. Patan Dhoka was one of the historic gateways that led into the old royal city of Patan and is still one of the most common entry points for visitors today. While the gateway itself is fairly simple, crossing it feels like stepping from the busy streets of modern Kathmandu Valley into the historic heart of Patan. From here, a short walk takes you to Patan Durbar Square, passing traditional neighbourhoods, small shops, temples and everyday scenes that offer the first glimpse of the city's heritage.
                </p>

                {/* Patan Durbar Square */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Patan Durbar Square</h3>
                <SectionImage
                    src="/Image/05-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Patan Durbar Square"
                />
                <p className="mb-6 text-gray-700">
                    Patan Durbar Square is the cultural and architectural heart of Patan and the city's most visited landmark. Once the royal palace of the Malla kings, the square is surrounded by beautifully carved temples, historic courtyards, stone sculptures and traditional Newari architecture that reflect centuries of craftsmanship. Recognized as a UNESCO World Heritage Site, it offers one of the finest collections of medieval architecture in Nepal.
                </p>

                {/* Krishna Mandir */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Krishna Mandir</h3>
                <SectionImage
                    src="/Image/06-krishna-mandir-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Krishna Mandir Patan"
                />
                <p className="mb-6 text-gray-700">
                    Standing at the centre of Patan Durbar Square, Lord Krishna Mandir is one of Nepal's most remarkable stone temples. The temple is built in Shikhara-style architecture entirely of stone and features finely carved pillars, sculptures and panels depicting scenes from the Mahabharata and Ramayana. Its three-tiered structure and detailed artistry make it one of the most photographed landmarks in Patan.
                </p>

                {/* Patan Museum */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Patan Museum</h3>
                <SectionImage
                    src="/Image/07-patan-museum-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Patan Museum"
                />
                <p className="mb-6 text-gray-700">
                    Widely regarded as one of the finest museums in South Asia, Patan Museum is housed in a beautifully restored Malla-era palace and showcases Nepal's rich religious art, wood carvings and centuries-old sculptures that reflect the cultural heritage of the Kathmandu Valley. The museum's galleries explain the history and symbolism behind Hindu and Buddhist art, making it an excellent place to understand the significance of the temples and monuments found across Patan.
                </p>

                {/* Mul Chowk */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Mul Chowk</h3>
                <SectionImage
                    src="/Image/08-mul-chowk-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Mul Chowk Patan Palace"
                />
                <p className="mb-6 text-gray-700">
                    Mul Chowk is the oldest and most important courtyard within the former royal palace complex of Patan. Once used for royal ceremonies and religious rituals, it is surrounded by beautifully carved wooden windows, brick buildings and decorated temples that showcase the finest skills of the Malla period. The courtyard remains an important religious site and is home to the Taleju Temple, the royal family's patron deity.
                </p>

                {/* Sundari Chowk */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Sundari Chowk</h3>
                <SectionImage
                    src="/Image/09-sundari-chowk-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Sundari Chowk Patan"
                />
                <p className="mb-6 text-gray-700">
                    Among the finest examples of Newari palace architecture, Sundari Chowk is one of the most beautifully preserved courtyards in the Patan palace complex, admired for its elegant Newari architecture and intricate wood and stone carvings. At its centre is the famous Tusha Hiti, a finely crafted sunken royal water fountain decorated with detailed stone sculptures and traditional motifs. Once reserved for the royal family, the courtyard reflects the artistic excellence of the Malla period.
                </p>

                {/* Keshav Narayan Chowk */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Keshav Narayan Chowk</h3>
                <SectionImage
                    src="/Image/10-keshav-narayan-chowk-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Keshav Narayan Chowk Patan"
                />
                <p className="mb-6 text-gray-700">
                    It is another historic courtyard within palace area, known for its traditional architecture and finely carved wooden balconies and windows. Today, the restored courtyard houses part of the Patan Museum, where visitors can explore additional galleries while admiring the well-preserved architecture.
                </p>

                {/* Hiranya Varna Mahavihar (Golden Temple) */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Hiranya Varna Mahavihar (Golden Temple)</h3>
                <SectionImage
                    src="/Image/11-hiranya-varna-mahavir-golden-temple-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Mahabouddha Temple Patan"
                />
                <p className="mb-6 text-gray-700">
                    Popularly known as the Golden Temple, it is one of Patan's oldest and most revered Buddhist monasteries. Built in the 12th century, it is famous for its richly decorated golden entrance, prayer wheels, complex metalwork and peaceful inner courtyard. The monastery remains an active place of worship, where monks and devotees gather for daily prayers and religious ceremonies.
                </p>

                {/* Mahabouddha Temple */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Mahabouddha Temple</h3>
                <SectionImage
                    src="/Image/12-mahabouddha-temple-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Mahabouddha Temple Patan"
                />
                <p className="mb-6 text-gray-700">
                    Mahabouddha Temple is among the most distinctive Buddhist monuments, often called the "Temple of a Thousand Buddhas". This temple is inspired by the Mahabodhi Temple in Bodh Gaya, India. Its brick exterior is decorated with thousands of carved terracotta tiles, each depicting an image of Buddha. The temple’s detailed carvings and historical significance make it one of the most important stops while exploring Patan's heritage streets.
                </p>

                {/* Rudra Varna Mahavihar */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Rudra Varna Mahavihar</h3>
                <SectionImage
                    src="/Image/13-rudravarna-mahavihar-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Rudra Varna Mahavihar Uku Bahal"
                />
                <p className="mb-6 text-gray-700">
                    Also known as Uku Bahal, it is one of Patan's oldest Buddhist monasteries, dating back to the 11th century. It is known for its beautifully carved wooden struts, stone sculptures and traditional Newari architecture, reflecting the city's rich artistic heritage. The monastery continues to serve as an active religious site and houses a remarkable collection of bronze images, prayer wheels and sacred shrines. Its peaceful courtyard and historic surroundings offer visitors a quieter experience away from the crowds.
                </p>

                {/* Kumbheshwar Temple */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Kumbheshwar Temple</h3>
                <SectionImage
                    src="/Image/14-kumbheshwar-temple-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Kumbheshwar Temple Patan"
                />
                <p className="mb-6 text-gray-700">
                    It is one of Patan's oldest Hindu temples and is believed to have been built in the 14th century during the Malla period. Dedicated to Lord Shiva, it is one of the few five-storeyed pagoda temples in Nepal, making it a distinctive landmark in the city. The temple complex also includes sacred ponds, smaller shrines and monasteries that add to its religious importance. During Janai Purnima, thousands of devotees visit Kumbheshwar Temple to take a holy dip in the temple pond before offering prayers, making it one of Patan's busiest pilgrimage sites.
                </p>

                {/* Manga Hiti */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Manga Hiti</h3>
                <SectionImage
                    src="/Image/15-manga-hiti-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Manga Hiti Water Spout Patan"
                />
                <p className="mb-6 text-gray-700">
                    Manga Hiti is one of the best-preserved traditional stone water spouts and an excellent example of Nepal's centuries-old water supply system. Built with carved stone sculptures, it once served as an important source of drinking water for the local community and continues to function even today. Surrounded by old houses and narrow streets, Manga Hiti offers a glimpse into the everyday life of historic Patan. It highlights how the city's heritage extends beyond temples and palaces to include the ingenious public water systems that supported its residents for generations.
                </p>

                {/* Tusha Hiti */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Tusha Hiti</h3>
                <SectionImage
                    src="/Image/16-tusha-hiti-patan-durbar-square-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Tusha Hiti Sundari Chowk Patan"
                />
                <p className="mb-6 text-gray-700">
                    It is a finely crafted royal stone water spout located within Sundari Chowk of the former palace complex. Originally reserved for the royal family, Tusha Hiti was an important part of the palace's water system. Today, it remains one of the finest examples of Nepal's traditional water architecture and is a highlight for visitors exploring the courtyards of Patan Durbar Square.
                </p>

                {/* Ashoka Stupas */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Ashoka Stupas</h3>
                <SectionImage
                    src="/Image/17-ashoka-stupa-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Ashoka Stupas Patan"
                />
                <p className="mb-6 text-gray-700">
                    The Ashoka Stupas are four ancient Buddhist monuments believed to have been built by Emperor Ashoka during his visit to the Kathmandu Valley in the 3rd century BCE. Located around the four corners of old Patan, these stupas are among the city's oldest surviving landmarks and hold great religious and historical significance. Their simple design and peaceful surroundings offer a glimpse into the early history of Buddhism in Patan and the city's enduring spiritual heritage.
                </p>

                {/* Rato Machhindranath Temple */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Rato Machhindranath Temple</h3>
                <SectionImage
                    src="/Image/18-rato-machhindranath-temple-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Rato Machhindranath Temple Patan"
                />
                <p className="mb-6 text-gray-700">
                    It is an important religious site and is dedicated to Rato Machhindranath, the deity of rain and prosperity, revered by both Hindus and Buddhists. The temple is best known as the starting point of the famous Rato Machhindranath Jatra, one of Nepal's longest and most celebrated chariot festivals, which attract thousands of devotees and visitors every year.
                </p>

                <p className="mb-6 text-gray-700">
                    If you have more time to explore, Patan has many other historic sites worth visiting. Monasteries such as Nag Bahal and Oku Bahal, temples including Bhimsen Temple, Vishwanath Temple and Char Narayan Temple, as well as landmarks like the Taleju Bell and Mani Mandap, offer a deeper look into the city's religious traditions and architectural heritage. Wandering through Patan's narrow lanes and traditional courtyards often leads to hidden shrines, old water spouts and beautifully carved buildings that are just as rewarding as its famous landmarks.
                </p>

                {/* Things to Do in Patan */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Things to Do in Patan
                </h2>

                <SectionImage
                    src="/Image/19-traditional-architecture-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Craftsmen and streets of Patan"
                />

                <div className="space-y-6 text-gray-700 mb-8">
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Watch Traditional Craftsmen Bring Art to Life</h4>
                        <p className="mt-1">
                            Patan is famous for the craftsmen who continue to build, carve, paint and shape woods and metals. As you explore the old city, you will come across small workshops where craftsmen still make bronze statues, carve wooden windows, paint traditional Paubha artworks and create religious objects using techniques passed down through generations. Unlike a museum, these workshops are real workplaces. It is one of the few experiences in Nepal where you get to see centuries-old artwork being created in front of you.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Join a Heritage Walk</h4>
                        <p className="mt-1">
                            Walking through the old neighbourhoods lets you discover quiet courtyards, centuries-old monasteries, traditional houses, stone water spouts and small shrines that do not always appear on tourist itineraries. Several local organizations and guides also offer heritage walks that share stories about Patan's history, architecture, festivals and Newari traditions. Whether you explore on your own or join a guided tour, walking through the old city is one of the best ways to understand its character beyond the famous landmarks.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Shop for Authentic Handmade Crafts</h4>
                        <p className="mt-1">
                            Patan is a great place to buy authentic handmade crafts. Around Patan Durbar Square and the surrounding streets, you will find family-run workshops and small galleries selling bronze statues, Paubha paintings, wood carvings, handmade jewellery, singing bowls, prayer wheels and other traditional Newari handicrafts. Many of these items are still made by local artisans using traditional techniques. Buying directly from a workshop supports the families who have kept these artistic traditions alive for generations.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Join a Paubha Painting Workshop</h4>
                        <p className="mt-1">
                            Paubha is one of Nepal's oldest and most respected painting traditions and Patan remains one of its leading centres. Several art studios and cultural organizations offer short workshops where visitors can learn about the symbolism, techniques and history behind these religious paintings. Even if you do not complete a full artwork, the experience offers a deeper appreciation of the patience and skill involved in this centuries-old tradition.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Capture Patan in the Early Morning or Late Evening</h4>
                        <p className="mt-1">
                            Patan has a different atmosphere before the crowds arrive and after the day begins to slow down. Early mornings bring soft light, quieter streets and local residents starting their daily routines while evenings offer beautifully illuminated temples, lively public squares and a relaxed pace. Whether you are interested in photography or simply want to enjoy the city's ambience, these quieter hours reveal a side of Patan that many visitors miss.
                        </p>
                    </div>
                </div>

                {/* Food & Local Life */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Food & Local Life
                </h2>

                <SectionImage
                    src="/Image/20-dal-bhat-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Newari food and local life in Patan"
                />

                <p className="mb-4 text-gray-700">
                    Food has always been an important part of Patan's culture and traditions. Whether it's a family celebration, a religious festival or a simple meal shared with friends, traditional Newari cuisine has been at the heart of the city's culture for generations. Many recipes are still prepared the same way they have been for decades, giving visitors a chance to experience flavours that have remained part of local life for centuries.
                </p>

                <p className="mb-4 text-gray-700">
                    When in Patan, try some of its traditional Newari dishes. Chatamari often called Newari pizza, Bara (Wo), Choila, Samay Baji and the sweet Yomari are among the local favourites that offer a true taste of the city's culinary heritage. If you visit during festivals or special occasions, you may also come across seasonal delicacies and traditional sweets prepared especially for community celebrations.
                </p>

                <p className="mb-6 text-gray-700">
                    As the day comes to an end, Patan takes on a different atmosphere. The cafes around Durbar Square begin to fill, families and friends gather in the open squares and the illuminated temples create a peaceful setting for an evening walk. It is a wonderful time to enjoy a meal, sip a cup of coffee overlooking the heritage streets or simply sit back and watch everyday life unfold in one of Nepal's most historic cities.
                </p>

                {/* Festivals & Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Festivals & Traditions
                </h2>

                <SectionImage
                    src="/Image/21-rato-machhindranath-jatra-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Festivals and Traditions in Patan"
                />

                <p className="mb-4 text-gray-700">
                    Patan celebrates festivals with the same enthusiasm that it preserves its heritage. Throughout the year, temples, monasteries and public squares become gathering places for religious ceremonies, cultural performances and community celebrations that reflect the city's deep-rooted Hindu and Buddhist traditions. The Rato Machhindranath Jatra is the most important festival in Patan. The massive wooden chariot carrying the deity Rato Machhindranath is pulled through different parts of the city, drawing thousands of devotees and visitors. It is one of Nepal's oldest and longest-running festivals and offers a remarkable glimpse into Patan's living traditions.
                </p>

                <p className="mb-6 text-gray-700">
                    Another major celebration is Krishna Janmashtami, when Krishna Mandir becomes the centre of worship with devotees gathering to offer prayers and celebrate the birth of Lord Krishna. Buddha Jayanti, Gunla and other Buddhist festivals are also observed with prayers, music, and traditional rituals at monasteries across the city. If your visit coincides with one of these celebrations, you will see Patan at its most vibrant with decorated temples, traditional processions, devotional music and a festive atmosphere that brings the city's heritage to life.
                </p>

                {/* Plan Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Plan Your Visit
                </h2>

                <SectionImage
                    src="/Image/22-bhandarkhal-garden-patan-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Plan your visit to Patan"
                />

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Best Time to Visit</p>
                        <p>The best time to visit Patan is from October to April, when the weather is pleasant and the skies are generally clear, making it ideal for sightseeing and walking around the old city. Spring (March to April) is also a great time to visit with comfortable temperatures and several cultural festivals taking place. The monsoon season, from June to September brings frequent rain, which can make exploring the narrow streets less convenient.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">How to Reach</p>
                        <p>Patan is located about 5 km south of central Kathmandu and is easily accessible from all parts of the Kathmandu Valley. The nearest airport is Tribhuvan International Airport around a 20–30 minute drive away, depending on traffic. Taxis and ride-sharing services are the most convenient way to reach Patan, while local buses also connect the city with Kathmandu and nearby areas.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Language and Local Etiquette</p>
                        <p>Nepali is the primary language spoken in Patan, although English is commonly understood in tourist areas, hotels, cafes and museums. When visiting temples and monasteries, dress modestly, remove your shoes where required and always ask permission before photographing people or religious ceremonies. Respecting local customs and maintaining a quiet atmosphere at places of worship is appreciated by both residents and devotees.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Safety Tips</p>
                        <p>Patan is considered one of the safest places to visit in Nepal. As with any popular destination, keep an eye on your belongings in crowded areas and avoid carrying large amounts of cash. Wear comfortable footwear, as most of the heritage area is best explored on foot over brick-paved streets and uneven pathways.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Getting Around and Payments</p>
                        <p>Most of Patan's major attractions are within walking distance of one another, making walking the best way to explore the city. Taxis are easily available for longer distances while local buses provide an affordable option for travelling within the Kathmandu Valley. Although many hotels, restaurants and larger shops accept digital payments and cards, carrying some Nepalese Rupees is recommended for small eateries, local markets and entrance tickets.</p>
                    </div>
                </div>

                <SectionImage
                    src="/Image/23-patan-aerial-view-lalitpur-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Patan heritage view"
                />

                <p className="mb-4 text-gray-700">
                    What begins as a visit to a UNESCO World Heritage Site soon becomes an experience filled with unexpected discoveries, warm conversations, wonderful crafts and a culture that continues to flourish. The beauty of Patan is not measured by how many places you tick off your itinerary. It is found in the time you spend exploring without a plan, pausing where something catches your eye and allowing the city to disclose itself at its own pace. That is when Patan feels less like a tourist destination and more like a place you will want to return to.
                </p>

                <p className="mb-6 text-gray-700">
                    When you plan your journey through Nepal, do not think of Patan as a short stop between Kathmandu and Bhaktapur. Give it the time it deserves. You may arrive to admire its heritage, but you will leave remembering its beauty.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Patan, Nepal
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Where is Patan located?</p>
                        <p className="mt-2">Patan, officially known as Lalitpur, is located in the Kathmandu Valley of Nepal, about 5 km south of central Kathmandu. It is one of the three historic cities of the valley and is easily accessible by taxi, ride-sharing services or local buses.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. What is Patan famous for?</p>
                        <p className="mt-2">Patan is famous for its rich Newari heritage, Patan Durbar Square, Krishna Mandir, traditional metal craftsmanship, Paubha paintings, ancient monasteries and beautifully preserved courtyards. It is also recognized as one of Nepal's most important centres of art and architecture.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. Is Patan Durbar Square a UNESCO World Heritage Site?</p>
                        <p className="mt-2">Yes. Patan Durbar Square is one of the seven Monument Zones within the UNESCO World Heritage Site of the Kathmandu Valley. It is renowned for its temples, royal courtyards and remarkable Newari architecture.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. How much time do you need to explore Patan?</p>
                        <p className="mt-2">A half-day visit is enough to see the main attractions around Patan Durbar Square but spending a full day allows you to explore museums, monasteries, artisan workshops, local markets and enjoy authentic Newari cuisine at a relaxed pace.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. What is the best time to visit Patan?</p>
                        <p className="mt-2">The best time to visit Patan is from October to April when the weather is pleasant and ideal for sightseeing. Spring (March–April) is particularly popular because of clear skies and vibrant cultural festivals.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is Patan worth visiting?</p>
                        <p className="mt-2">Yes. Patan offers a unique blend of history, art, culture and everyday local life. Unlike many heritage destinations, it remains a living city where traditional craftsmanship and centuries-old customs continue to thrive.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Is Patan different from Kathmandu?</p>
                        <p className="mt-2">Yes. While Kathmandu is larger and busier, Patan has a quieter atmosphere and is especially known for its artistic heritage, traditional craftsmanship and well-preserved Newari architecture.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Is Patan different from Bhaktapur?</p>
                        <p className="mt-2">Bhaktapur is known for its medieval squares and pottery traditions while Patan is widely recognized for its metal craftsmanship, Paubha paintings, monasteries and artistic heritage. Both cities offer distinct cultural experiences within the Kathmandu Valley.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What are the top attractions in Patan?</p>
                        <p className="mt-2">Some of the most popular attractions include Patan Durbar Square, Krishna Mandir, Patan Museum, Hiranya Varna Mahavihar (Golden Temple), Mahabouddha Temple, Kumbheshwar Temple, Rudra Varna Mahavihar and the Ashoka Stupas.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. What local food should I try in Patan?</p>
                        <p className="mt-2">Some must-try Newari dishes include Chatamari, Bara, Choila, Samay Baji and Yomari. Patan also has several traditional eateries and heritage cafés serving authentic local cuisine.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. Can you explore Patan on foot?</p>
                        <p className="mt-2">Yes. Most of Patan's major attractions are located within walking distance of each other, making it one of the best cities in Nepal to explore on foot.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Is Patan safe for tourists?</p>
                        <p className="mt-2">Yes. Patan is generally considered a safe destination for both domestic and international travellers. Basic precautions such as keeping an eye on your belongings in crowded areas, are usually sufficient.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. What can I buy in Patan?</p>
                        <p className="mt-2">Patan is one of the best places in Nepal to shop for authentic handmade crafts, including bronze statues, Paubha paintings, wood carvings, handmade jewellery, singing bowls, prayer wheels and other traditional Newari handicrafts.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. Which festival is most famous in Patan?</p>
                        <p className="mt-2">Rato Machhindranath Jatra is the most famous festival in Patan. It is one of Nepal's oldest and longest-running chariot festivals and attracts thousands of devotees and visitors every year.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. Why should I visit Patan during my Nepal trip?</p>
                        <p className="mt-2">Patan offers a different experience from other destinations in Nepal. Along with its historic temples and palaces, the city is known for its living artistic traditions, skilled craftsmen, welcoming local communities and authentic Newari culture, making it one of the most rewarding places to explore in the Kathmandu Valley.</p>
                    </div>
                </div>

                {/* About the Author */}
                <div className="mt-6 pt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <img
                            src="/Image/rohit.jpeg"
                            alt="Rohit Upadhyay"
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

export default Patan;