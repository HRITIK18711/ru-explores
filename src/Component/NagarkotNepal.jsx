import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt="Nagarkot Nepal" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const NagarkotNepal = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Nagarkot, Nepal: Best Places to Visit, Things to Do & Complete Travel Guide
                </h1>

                {/* <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 15 May, 2026</span>
                </p> */}

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>
                <h3 className="text-xl font-bold mb-3 text-black">A Place Where the Mountains Slow You Down</h3>

                <SectionImage
                    src="/Image/01-nagarkot-himalayan-view-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    The drive to Nagarkot feels like a gentle transition from the busy streets of city to the quiet hills of the valley. Pine forests begin to line the roadside, small villages appear along the hills and the air grows cooler with every turn. Before long, the distant views of the Himalayas begin to emerge, reminding you that this journey is as rewarding as the destination itself.
                </p>

                <p className="mb-4 text-gray-700">
                    Located at an elevation of about 2,175 metres (7,136 feet), Nagarkot is one of Nepal's most popular hill stations known for its sweeping mountain views, peaceful surroundings and scenic walking trails. On clear days, you can enjoy panoramic views of the Himalayan range including several of the country's highest peaks. Yet the true charm of Nagarkot lies beyond the mountains. It is found in the quiet village roads, forests filled with birdsong, terraced fields stretching across the hillsides and the slower pace of life that encourages you to pause and simply take in your surroundings.
                </p>

                <p className="mb-4 text-gray-700">
                    People visit Nagarkot to watch the sunrise over the Himalayas, for hiking, photography or a relaxing break from the city's fast pace. As the day descends, the landscape changes with the shifting light, offering a different view each time you step outside. Mornings are often crisp and peaceful, afternoons invite leisurely walks through nature and evenings bring colourful sunsets before the hills settle into silence.
                </p>

                <p className="mb-6 text-gray-700">
                    Whether you are planning a day trip from Kathmandu or staying overnight to experience both sunrise and sunset, Nagarkot offers a refreshing escape into nature. This guide will help you discover the best places to visit, memorable experiences, local food, practical travel tips and everything else you need to make the most of your time in one of Nepal's most scenic hill destinations.
                </p>

                {/* At a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nagarkot at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-sunrise-nagarkot-nepal.jpg"
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
                                <td className="border p-3 font-semibold">Country</td>
                                <td className="border p-3">Nepal</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Province</td>
                                <td className="border p-3">Bagmati Province</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Elevation</td>
                                <td className="border p-3">About 2,175 metres (7,136 ft) above sea level</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Best Time to Visit</td>
                                <td className="border p-3">October to April for the clearest Himalayan views</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Ideal Duration</td>
                                <td className="border p-3">1–2 days</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Famous For</td>
                                <td className="border p-3">Himalayan sunrise and sunset views, nature trails, hiking and peaceful hilltop stays</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Nearest Airport</td>
                                <td className="border p-3">Tribhuvan International Airport (KTM), Kathmandu</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Distance from Kathmandu</td>
                                <td className="border p-3">Around 27 km</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Languages Spoken</td>
                                <td className="border p-3">Nepali is the official language. English is commonly understood in hotels and tourist areas.</td>
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

                {/* Why Nagarkot Feels Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Nagarkot Feels Different
                </h2>

                <SectionImage
                    src="/Image/03-aerial-view-nagarkot-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Nagarkot welcomes you with cool mountain air, refreshing surroundings and views that encourage you to pause for a while. Early in the morning, local residents begin their day while the hills slowly emerge from the mist and the first rays of sunlight touch the Himalayan peaks. As the day goes on, you can set out on quiet walks, stop at viewpoints overlooking the valley or relax with a cup of chiya while enjoying the changing mountain views. The landscape around Nagarkot is shaped by forests, terraced farms and small villages. Walking along the Nagarkot Nature Trail or the trail leading towards Changunarayan, you will pass local homes, grazing animals, prayer flags fluttering in the breeze and fields where farmers continue their daily work. These everyday scenes make the journey just as memorable as the viewpoints themselves.
                </p>

                <p className="mb-6 text-gray-700">
                    The mountains are always part of the experience but they rarely look the same twice. A clear winter morning offers distant snow-covered peaks, spring brings colourful rhododendrons to the surrounding hills while the monsoon transforms the landscape into a blanket of lush green. Every season gives Nagarkot a different personality, encouraging travellers to return at different times of the year. It is this simple way of experiencing nature and village life that gives Nagarkot its own identity.
                </p>

                {/* Places to Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Nagarkot
                </h2>

                <h4 className="font-semibold text-black mb-1">Nagarkot Viewpoints</h4>
                <SectionImage
                    src="/Image/04-devighat-nagarkot-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    Your first stop in Nagarkot should be one of its many viewpoints. The Nagarkot View Tower is the most popular and offers a wide view of the Himalayan range, rolling hills and the Kathmandu Valley. If you're an early riser, head to the Sunrise Viewpoint before dawn and watch the mountains slowly appear as daylight spreads across the sky. In the evening, the Sunset Viewpoint offers a completely different scene, with the hills turning shades of orange and gold before darkness settles in. Don't stop after visiting just one viewpoint. Several panoramic viewpoints are scattered along the ridge, and each offers a slightly different perspective of the landscape. On a clear day, you may be able to spot peaks from the Langtang range, Ganesh Himal and even parts of the Everest region far in the distance. If clouds roll in, don't worry, the changing weather is part of the Nagarkot experience and the hills often look just as beautiful wrapped in drifting mist.
                </p>

                <h4 className="font-semibold text-black mb-1">Nagarkot Nature Trail</h4>
                <SectionImage
                    src="/Image/05-hike-trail-nagarkot-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-6 text-gray-700">
                    Once you have taken in the mountain views, set aside some time for the Nagarkot Nature Trail. This is where you will discover a more natural side of the hill station. The trail passes through forests, terraced fields and narrow village paths, with prayer flags fluttering above and the sound of birds replacing the traffic noise of the city. Every now and then, the trees open up to reveal another view of the mountains, giving you plenty of reasons to slow your walk and enjoy the surroundings. If you enjoy photography, carry your camera. You will find plenty of opportunities to capture village life, changing mountain views and the beauty of the hills.
                </p>

                <h4 className="font-semibold text-black mb-1">Buddha Peace Park</h4>
                <SectionImage
                    src="/Image/06-buddha-peace-park-nagarkot-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    If you are looking for a quiet corner away from the popular viewpoints, spend some time at Buddha Peace Park. A large Buddha statue overlooks the surrounding hills, creating a serene setting where many visitors pause to rest, meditate or simply enjoy the view. The peaceful atmosphere makes it a pleasant stop before continuing your journey through Nagarkot.
                </p>

                <h4 className="font-semibold text-black mb-1">Mahadev Pokhari</h4>
                <SectionImage
                    src="/Image/07-mahadev-pokhari-nagarkot-nepal-02.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    Mahadev Pokhari is one of those places that many travellers miss but it is worth including in your itinerary if you have extra time. Surrounded by greenery, this small pond is connected with local religious beliefs and offers a peaceful setting away from the busier tourist spots. It is a nice place to pause, take a few photographs and enjoy the calm side of Nagarkot.
                </p>

                <h4 className="font-semibold text-black mb-1">Jalapadevi Temple</h4>
                <SectionImage
                    src="/Image/08-jalapa-devi-temple-nagarkot-nepal-01.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-6 text-gray-700">
                    For a glimpse of Nagarkot's spiritual side, visit Jalapadevi Temple. Located away among the hills, the temple is an important place of worship for the local community and is especially lively during religious festivals. Even on normal days, the temple offers a chance to experience local traditions while enjoying the natural beauty that surrounds it.
                </p>

                {/* Experiences You Should Not Miss */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Experiences You Should Not Miss in Nagarkot
                </h2>
                <SectionImage
                    src="/Image/09-buddha-stupa-nagarkot-nepal-03.jpg"
                    source="Wikimedia Commons"
                />

                <h4 className="font-semibold text-black mb-1">Wake Up Early for the Sunrise</h4>
                <p className="mb-6 text-gray-700">
                    A sunrise in Nagarkot is worth waking up early for. Leave your hotel before dawn, find a comfortable spot at one of the viewpoints and simply wait. As the sky slowly changes colour, the Himalayan peaks begin to appear one after another. Some mornings are crystal clear while on others the mountains play hide and seek behind the clouds. Either way, it's a beautiful way to begin your day. Carry a light jacket, especially if you are visiting during the cooler months. The mornings can be chilly but watching the first light spread across the hills makes the early start worthwhile.
                </p>

                <h4 className="font-semibold text-black mb-1">Hike to Changunarayan Temple</h4>
                <p className="mb-6 text-gray-700">
                    If you have half a day to spare, take the trail to Changunarayan Temple instead of driving there. The route passes through forests, terraced farms and small villages where everyday life unfolds at its own rhythm. You will see farmers working in the fields, children walking to school and locals greeting one another along the way. By the time you reach Changunarayan Temple, you have experienced much more than a hike. You have seen a side of Nepal that many visitors miss and your walk ends at one of the country's oldest temples and a UNESCO World Heritage Site.
                </p>

                <h4 className="font-semibold text-black mb-1">Explore Nagarkot on Foot</h4>
                <p className="mb-6 text-gray-700">
                    Nagarkot is best explored without a hurry. Leave the main road for a while and follow the quieter paths through the hills. Walk along the Nature Trail, pause whenever a mountain view catches your eye and enjoy the fresh air that makes this hill station so refreshing.
                </p>

                <h4 className="font-semibold text-black mb-1">Spend a Night in Nagarkot</h4>
                <p className="mb-6 text-gray-700">
                    If you're planning your trip from Kathmandu, try to spend at least one night here. The atmosphere changes once the day visitors leave. Evenings become quieter, the hills grow still and the next morning begins with fresh mountain air and beautiful views. Many hotels and homestays also serve traditional Nepali meals, giving you a chance to enjoy local flavours before calling it a day.
                </p>

                <h4 className="font-semibold text-black mb-1">Visit During a Local Festival</h4>
                <p className="mb-6 text-gray-700">
                    Nagarkot feels even more special during festivals like Dashain, Tihar and Losar. Homes are decorated, temples become livelier and families come together to celebrate. If your visit happens to coincide with one of these occasions, you will get to experience a side of Nagarkot that goes beyond its mountain views. Even if you don't take part in the celebrations, simply watching the local traditions and festive atmosphere adds something memorable to your journey.
                </p>

                {/* Food & Local Life */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Food & Local Life
                </h2>

                <SectionImage
                    src="/Image/10-nepali-dal-bhat-nagarkot-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <h4 className="font-semibold text-black mb-1">A Taste of Everyday Life</h4>
                <p className="mb-6 text-gray-700">
                    Away from the viewpoints, Nagarkot is a small hill community where daily life follows its own rhythm. A warm cup of chiya is a part of everyday life here especially on cool mornings when the hills are still covered in mist. Take a walk through the villages around Nagarkot and you will notice stone houses, small farms and friendly faces that greet you with a smile. Life here is simple and that simplicity is one of the reasons many travellers leave with such fond memories of the place.
                </p>

                <h4 className="font-semibold text-black mb-1">Local Flavours to Try</h4>
                <p className="mb-6 text-gray-700">
                    The food in Nagarkot is simple, fresh and comforting. Most hotels, homestays and family-run cafés serve traditional Nepali meals prepared with locally available ingredients. Start with Dal Bhat, Nepal's everyday meal of rice, lentils, vegetables and seasonal side dishes. If you are looking for something warm after a walk in the hills, a bowl of Thukpa is a popular choice. Momo served steamed or fried with spicy chutney are easy to find and remain a favourite among both locals and visitors. If you're visiting during festivals, you may also get the chance to taste Sel Roti, traditional homemade rice bread prepared for special occasions.
                </p>

                <h4 className="font-semibold text-black mb-1">Where to Eat</h4>
                <p className="mb-6 text-gray-700">
                    You will not find large restaurant chains in Nagarkot and that's part of its appeal. Most visitors enjoy their meals at family-run cafes, hotels and homestays where freshly prepared Nepali food is served in a relaxed setting. Many places have outdoor seating, allowing you to enjoy breakfast with the sunrise or dinner as the hills slowly disappear into the evening light.
                </p>

                <h4 className="font-semibold text-black mb-1">The Warmth of Local Hospitality</h4>
                <p className="mb-6 text-gray-700">
                    One of the nicest parts of visiting Nagarkot is meeting the people who call these hills home. Hotel owners, cafe staff and local residents often welcome people with genuine warmth and are happy to share stories, travel tips or a simple conversation over a cup of chiya. Though mountain views fade from memory, it is often this warmth and hospitality that people remember most about Nagarkot.
                </p>

                {/* Festivals & Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Festivals & Traditions
                </h2>

                <SectionImage
                    src="/Image/11-tika-jamara-dashain-festival-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-6 text-gray-700">
                    If you travel to Nagarkot during a local festival, you will see the hill station in a completely different light. The quiet villages become livelier, homes are decorated and the sound of prayers and celebrations carries through the hills. It is a wonderful time to experience the local culture beyond the famous viewpoints. Dashain brings families together as people return to their hometowns to celebrate with loved ones. During Tihar, houses glow with rows of oil lamps, colourful rangoli designs brighten courtyards and villages come alive with music and celebration. Around Nagarkot, the Tamang community also celebrates Losar, the Tibetan New Year with traditional rituals, colourful clothing, music and dance. These moments often become just as memorable as the mountain views and make a visit to Nagarkot feel even more special.
                </p>

                {/* Planning Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit
                </h2>
                <SectionImage
                    src="/Image/12-devighat-nagarkot-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <h4 className="font-semibold text-black mb-1">Best Time to Visit</h4>
                <p className="mb-6 text-gray-700">
                    Nagarkot is beautiful throughout the year but every season offers a different experience. If clear Himalayan views are your priority, plan your visit between October and April when the skies are usually at their clearest. Spring (March to May) adds colourful rhododendrons to the surrounding hills. The monsoon season (June to September) covers the landscape in lush greenery though the mountains are often hidden behind clouds. Winter mornings can be quite cold, so carrying warm clothing is recommended.
                </p>

                <h4 className="font-semibold text-black mb-1">How to Reach</h4>
                <p className="mb-6 text-gray-700">
                    Nagarkot is about 27 kilometres from Kathmandu and can be reached in around 1.5 to 2 hours, depending on traffic and road conditions. The easiest option is to hire a taxi or drive yourself. Local buses are also available from Kathmandu and Bhaktapur, making Nagarkot an affordable destination for budget travellers.
                </p>

                <h4 className="font-semibold text-black mb-1">Where to Stay</h4>
                <p className="mb-6 text-gray-700">
                    Nagarkot offers accommodation for every type of traveller, from budget-friendly guesthouses and family-run homestays to comfortable hotels and luxury mountain resorts. Many properties are designed to make the most of the surrounding scenery, with rooms, gardens or terraces overlooking the Himalayan range. Booking your accommodation in advance is recommended during the peak travel seasons, especially in spring and autumn when Nagarkot attracts the highest number of visitors.
                </p>

                <h4 className="font-semibold text-black mb-1">Language & Local Etiquette</h4>
                <p className="mb-6 text-gray-700">
                    Nepali is the most widely spoken language in Nagarkot, though English is commonly understood in hotels, cafes and other tourist-friendly places. A warm greeting with "Namaste" is always appreciated. When visiting temples or religious sites, dress modestly, remove your shoes where required and respect local customs. If you like to photograph local people, it's always polite to ask for their permission first.
                </p>

                <h4 className="font-semibold text-black mb-1">Safety Tips</h4>
                <p className="mb-6 text-gray-700">
                    Nagarkot is considered a safe destination for families, solo travellers and couples. Even so, it is always a good idea to keep an eye on your belongings and avoid isolated walking trails after dark. If you plan to hike, wear comfortable footwear and carry enough drinking water. The weather in the hills can change quickly, so keeping a light jacket or rain protection with you is always a smart idea.
                </p>

                <h4 className="font-semibold text-black mb-1">Connectivity & Mobile Network</h4>
                <p className="mb-6 text-gray-700">
                    Mobile network coverage in Nagarkot is generally reliable and most hotels, resorts and cafes offer Wi-Fi for their guests. If you are staying for more than a day or travelling across Nepal, buying a local SIM card can make internet access easier and more affordable. Although connectivity is good in most parts of Nagarkot, you may occasionally experience slower internet speeds or weak signals on some hiking trails and remote viewpoints.
                </p>

                <h4 className="font-semibold text-black mb-1">Getting Around & Payments</h4>
                <p className="mb-6 text-gray-700">
                    Walking is one of the best ways to explore Nagarkot especially around the viewpoints, nature trails and nearby attractions. For places that are a little farther away, taxis are easily available. Most hotels and larger cafes accept digital payments or cards, but smaller shops and local businesses may prefer cash. Keeping some Nepalese Rupees (NPR) with you is useful, especially when visiting local markets or travelling by local transport.
                </p>

                {/* Nearby Places to Explore */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nearby Places to Explore
                </h2>

                <SectionImage
                    src="/Image/13-changu-narayan-temple-nagarkot-bhaktapur-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Nagarkot makes an excellent base for exploring some of the Kathmandu Valley's most fascinating destinations. If you have an extra day or two, these nearby places are well worth adding to your itinerary.
                </p>

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Bhaktapur</p>
                        <p>Around an hour's drive from Nagarkot, Bhaktapur is one of Nepal's best-preserved historic cities. Its ancient squares, traditional Newari architecture, pottery workshops and local cuisine offer a completely different experience from the peaceful hills of Nagarkot.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Changunarayan Temple</p>
                        <p>Just a short drive away, Changunarayan Temple is one of Nepal's oldest Hindu temples and a UNESCO World Heritage Site. The scenic hike between Nagarkot and Changunarayan is popular with travellers who enjoy walking through forests and traditional villages.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Dhulikhel</p>
                        <p>Located east of Nagarkot, Dhulikhel is another charming hill town known for its Himalayan views, old temples and relaxed atmosphere. It is a great choice if you like to continue exploring Nepal's quieter mountain destinations.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Kathmandu</p>
                        <p>If you are travelling from Nepal's capital, Nagarkot fits perfectly into your itinerary. After spending time among Kathmandu's heritage sites, lively markets and temples, the calm surroundings of Nagarkot offer a refreshing change of pace.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Panauti</p>

                        <p>Less visited than many other destinations in the valley, Panauti is a historic Newari town with beautifully preserved temples, traditional streets and a peaceful riverside setting. It is an excellent stop for travellers interested in local culture and heritage.</p>

                        <SectionImage
                            src="/Image/14-suspension-bridge-nagarkot-nepal-02.jpg"
                            source="Wikimedia Commons"
                        />
                    </div>
                </div>

                <p className="mb-4 text-gray-700">
                    Nagarkot may be known for its Himalayan sunrise but there is much more to discover once you are here. Forest trails, quiet villages, local cafes, peaceful temples and welcoming people make it a destination that is easy to enjoy at your own pace. Nagarkot offers a refreshing change of scenery and a chance to experience a quieter side of Nepal. A visit to Nagarkot is not about filling your day with activities. It is about enjoying beautiful views, fresh mountain air and the slower rhythm of life in Nepal's hills. Every sunrise, every walking trail and every quiet corner adds something to the journey. If you are looking beyond Nepal's busy cities, Nagarkot is a destination that deserves a place on your itinerary.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Nagarkot
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Where is Nagarkot located?</p>
                        <p className="mt-2">Nagarkot is a hill station in Bhaktapur District of Nepal, about 27 kilometres east of Kathmandu. It is best known for its Himalayan views and peaceful surroundings.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. What is Nagarkot famous for?</p>
                        <p className="mt-2">Nagarkot is famous for its sunrise views over the Himalayas. On clear days, visitors can enjoy panoramic views of snow-capped peaks, along with scenic walking trails, forests and traditional villages.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What is the best time to visit Nagarkot?</p>
                        <p className="mt-2">October to April is generally considered the best time for clear mountain views. Spring offers pleasant weather and blooming rhododendrons, while the monsoon brings lush green landscapes.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. How many days are enough for Nagarkot?</p>
                        <p className="mt-2">A one-day trip is enough to see the main attractions, but staying overnight allows you to experience both the sunset and the famous sunrise.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. How do I reach Nagarkot from Kathmandu?</p>
                        <p className="mt-2">You can reach Nagarkot by taxi, private vehicle or local bus from Kathmandu. The journey usually takes around 1.5 to 2 hours, depending on traffic and road conditions.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is Nagarkot worth visiting?</p>
                        <p className="mt-2">Yes. Nagarkot is one of the best places near Kathmandu for travellers looking to enjoy mountain views, nature walks and a peaceful atmosphere away from the city's crowds.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Can you see Mount Everest from Nagarkot?</p>
                        <p className="mt-2">On exceptionally clear days, Mount Everest is said to be visible from some viewpoints in Nagarkot. However, weather conditions greatly affect visibility, and many other Himalayan peaks are easier to see.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Is Nagarkot safe for solo travellers?</p>
                        <p className="mt-2">Nagarkot is generally considered a safe destination for solo travellers, families and couples. Following basic travel precautions is recommended, especially if you're hiking.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Are there hotels and homestays in Nagarkot?</p>
                        <p className="mt-2">Yes. Nagarkot offers a wide range of accommodation, including budget guesthouses, family-run homestays, comfortable hotels and luxury mountain resorts.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. What are the best things to do in Nagarkot?</p>
                        <p className="mt-2">Popular activities include watching the sunrise, hiking to Changunarayan Temple, exploring nature trails, visiting local temples and enjoying the mountain scenery.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. Is Nagarkot suitable for a family trip?</p>
                        <p className="mt-2">Yes. Nagarkot is a family-friendly destination with peaceful surroundings, easy viewpoints and accommodation suitable for travellers of all ages.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Is internet and mobile network available in Nagarkot?</p>
                        <p className="mt-2">Yes. Mobile network coverage is generally reliable, and most hotels, resorts and cafés provide Wi-Fi for guests.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. What language is spoken in Nagarkot?</p>
                        <p className="mt-2">Nepali is the primary language spoken in Nagarkot. English is commonly understood in hotels, restaurants and other tourist areas.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. Can Nagarkot be visited during the monsoon?</p>
                        <p className="mt-2">Yes. While mountain views may be limited because of clouds, the hills become lush and green, making it a good time for travellers who enjoy quieter surroundings and nature.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. Which places can I visit near Nagarkot?</p>
                        <p className="mt-2">Popular nearby destinations include Bhaktapur, Changunarayan Temple, Dhulikhel, Panauti and Kathmandu, making Nagarkot an excellent stop on a longer Nepal itinerary.</p>
                    </div>
                </div>

                {/* About the Author */}
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

export default NagarkotNepal;