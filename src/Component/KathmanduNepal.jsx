import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt="Kathmandu Nepal" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const KathmanduNepal = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Kathmandu Nepal: Best Places, Shopping, Food, Cafes & Complete Travel Guide
                </h1>

                {/* <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 15 May, 2026</span>
                </p> */}

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>
                <h3 className="text-xl font-bold mb-3 text-black">A City You Slowly Discover</h3>

                <SectionImage
                    src="/Image/01-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Walk through Kathmandu for the first time and you will soon realize that no two streets feel the same. One moment you are passing a small shrine where locals have stopped for a quick prayer before work. A few minutes later, you find yourself in the busy lanes of Asan Bazaar where shopkeepers are arranging fresh vegetables, spices and household goods for the day. Turn into another lane and you might come across a quiet Newar courtyard that feels untouched by time. That's Kathmandu. Every turn brings something different.
                </p>

                <p className="mb-4 text-gray-700">
                    As the capital of Nepal, Kathmandu is the first stop for many people exploring the country while others come here with no plans beyond discovering the city itself. Whatever brings you here, give Kathmandu a little time. The city is in no hurry and that is exactly what makes exploring it so rewarding. Life here has always moved around temples, markets and neighbourhoods. Morning prayers at Pashupatinath, conversations over a cup of chiya, local shops opening for the day and people going about their daily routine are all part of daily life. Alongside centuries-old monuments, you will find cafes in Thamel, family-run shops in the old city and businesses serving locals for generations.
                </p>

                <p className="mb-6 text-gray-700">
                    You may spend hours exploring Kathmandu Durbar Square, join pilgrims walking around Boudhanath Stupa, stop for a plate of Newari khaja or simply wander through the old streets without a plan. Every visit feels a little different and that's one of the reasons people return.
                </p>

                {/* Kathmandu at a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Kathmandu at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-swayambhunath-stupa-kathmandu-nepal.jpg"
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
                                <td className="border p-3">Around 1,400 metres (4,600 ft) above sea level</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Best Time to Visit</td>
                                <td className="border p-3">March to May and September to November</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Ideal Duration</td>
                                <td className="border p-3">2–3 days</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Famous For</td>
                                <td className="border p-3">UNESCO World Heritage Sites, ancient temples, Newar culture, vibrant markets and the gateway to the Himalayas</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">UNESCO Status</td>
                                <td className="border p-3">Kathmandu Valley is home to seven UNESCO World Heritage Monument Zones</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Nearest Airport</td>
                                <td className="border p-3">Tribhuvan International Airport (KTM)</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Languages Spoken</td>
                                <td className="border p-3">Nepali is the official language. English is widely understood in tourist areas.</td>
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

                {/* Why Kathmandu Feels Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Kathmandu Feels Different
                </h2>

                <SectionImage
                    src="/Image/03-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    The first thing you notice about Kathmandu is its energy. Stay a little longer and you begin to notice the little things that give the city its character. The city sits in the Kathmandu Valley surrounded by green hills that have watched it grow for centuries. It is also one of South Asia's oldest continuously inhabited cities and many parts of the old city still reflect that long history. People still gather in local squares, shop at traditional markets, celebrate festivals with their communities and stop at small shrines during the day. Here, tradition is not preserved for visitors. It remains part of everyday life.
                </p>

                <p className="mb-4 text-gray-700">
                    Much of Kathmandu's identity comes from the Newar community whose craftsmanship, architecture, festivals and cuisine have shaped the city for centuries. The beautifully carved wooden windows, brick courtyards, temples and old houses found across places like Kathmandu Durbar Square, Asan and Indra Chowk reflect that heritage. Even today, many families continue traditions passed down through generations.
                </p>

                <p className="mb-4 text-gray-700">
                    For centuries, people travelling between India and Tibet passed through Kathmandu, bringing new ideas, traditions, skills and beliefs that helped shape the city into Nepal's cultural heart. Their influence can still be seen in its temples, palace squares and traditional markets. Hindu temples and Buddhist stupas often stand only a short distance apart, reflecting the harmony that has shaped Kathmandu for generations.
                </p>

                <p className="mb-4 text-gray-700">
                    A walk through Kathmandu often brings unexpected contrasts. A centuries-old temple may stand beside a cafe. A busy shopping street can suddenly open into a peaceful courtyard. It is common to see local residents pause for a quick prayer at a roadside shrine while visitors quietly explore the same neighbourhood. These moments don't feel unusual here, they simply feel like Kathmandu.
                </p>

                <p className="mb-6 text-gray-700">
                    This living heritage is one of the reasons the Kathmandu Valley is recognized around the world. Its seven UNESCO World Heritage Monument Zones continue to serve as places of worship, celebration and community life where history remains part of everyday life.
                </p>

                {/* Places to Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Kathmandu
                </h2>

                <h4 className="font-semibold text-black mb-1">Pashupatinath Temple</h4>
                <SectionImage
                    src="/Image/04-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    It is Nepal's most sacred Hindu temple and one of the country's most important religious landmarks. Standing on the banks of the Bagmati River, the temple complex includes sacred ghats, centuries-old shrines and traditional Nepali architecture. Even if you cannot enter the main temple, there is plenty to explore in the surrounding courtyards and along the river.
                </p>

                <h4 className="font-semibold text-black mb-1">Boudhanath Stupa</h4>
                <SectionImage
                    src="/Image/05-swayambhunath-stupa-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    It is one of the most peaceful places to visit in Kathmandu. Colourful prayer flags stretch across the sky while rows of prayer wheels surround the white dome. Monks, pilgrims and local families walk around the stupa, keeping centuries-old Buddhist traditions alive. The cafes and rooftop terraces around the square offer some of the best views especially after sunset when the stupa begins to glow.
                </p>

                <h4 className="font-semibold text-black mb-1">Swayambhunath (Monkey Temple)</h4>
                <SectionImage
                    src="/Image/06-swayambhunath-stupa-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    It sits on a hill overlooking Kathmandu and has been an important Buddhist site for centuries. Stone steps, fluttering prayer flags and playful monkeys welcome visitors on the climb to the top. The mix of Buddhist and Hindu traditions gives the hilltop an atmosphere unlike anywhere else in the city. Many visitors come at sunrise or sunset, when changing light transforms the valley.
                </p>

                <h4 className="font-semibold text-black mb-1">Kathmandu Durbar Square</h4>
                <SectionImage
                    src="/Image/07-darbar-square-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    It brings together palaces, temples and courtyards that reflect Nepal's royal past. Finely carved wooden windows, stone idols and historic buildings stand alongside everyday life, as locals gather here to pray, meet friends or simply pass through. Every corner reveals something worth noticing from quiet courtyards to centuries-old temples.
                </p>

                <h4 className="font-semibold text-black mb-1">Thamel</h4>
                <SectionImage
                    src="/Image/08-thamel-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    It is Kathmandu's busiest tourist place where cafes, local restaurants, bookstores, handicraft shops and trekking stores line narrow streets that stay lively from morning until late at night. You'll hear different languages, meet travellers from around the world and find everything from traditional souvenirs to live music within a short walk.
                </p>

                <h4 className="font-semibold text-black mb-1">Asan–Indra Chowk Heritage Walk</h4>
                <SectionImage
                    src="/Image/09-asan-bazaar-indra-chowk-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    A walk through Asan and Indra Chowk offers a glimpse of Kathmandu as locals know it. Narrow lanes are lined with spice shops, vegetable vendors, old temples, traditional houses and family-run businesses that have served the neighbourhood for generations. Every turn brings the scent of freshly ground spices, colourful market stalls and hidden courtyards. Unlike many of Kathmandu's popular attractions, this area moves to the rhythm of everyday life.
                </p>

                <h4 className="font-semibold text-black mb-1">Garden of Dreams</h4>
                <SectionImage
                    src="/Image/10-garden-of-dreams-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    Hidden behind the busy streets of central Kathmandu, the Garden of Dreams offers a quiet break from the city's constant movement. Restored pavilions, shaded walkways, fountains and well-kept gardens make it an ideal place to relax. Students, families and travellers come here to read, unwind or enjoy a peaceful afternoon. Its elegant design reflects a different side of Kathmandu where history meets European-inspired architecture.
                </p>

                <h4 className="font-semibold text-black mb-1">Kirtipur</h4>
                <SectionImage
                    src="/Image/11-kirtipur-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Kirtipur sits on a hill southwest of central Kathmandu, where old brick houses, narrow lanes and centuries-old temples still shape the town's character. Life moves at a slower pace, offering a refreshing contrast to the city's busier neighbourhoods. Traditional Newari architecture, local squares and small shops reflect its long-standing cultural roots while the hilltop offers wide views of the Kathmandu Valley.
                </p>

                <h4 className="font-semibold text-black mb-1">Narayanhiti Palace Museum</h4>
                <SectionImage
                    src="/Image/12-narayanhiti-palace-museum-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Once the official residence of Nepal's royal family, Narayanhiti Palace Museum offers a glimpse into the country's monarchy before Nepal became a republic. Its preserved halls, meeting rooms and royal chambers still display the furniture, decor and personal spaces used by the royal family. Closely linked to one of Nepal's most talked-about events in modern history, the palace offers a perspective on Kathmandu beyond its temples and heritage streets.
                </p>

                <h4 className="font-semibold text-black mb-1">National Museum of Nepal</h4>
                <SectionImage
                    src="/Image/13-national-museum-of-nepal-kathmandu.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It offers a deeper understanding of the country's history beyond its temples and monuments. Its galleries display ancient sculptures, traditional paintings, historical weapons, coins and archaeological discoveries from different periods of Nepal's past. Spread across several buildings, the museum is best explored at a relaxed pace, making it a worthwhile stop for anyone interested in history and culture.
                </p>

                <h4 className="font-semibold text-black mb-1">Kaiser Library</h4>
                <SectionImage
                    src="/Image/14-kaiser-library-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Located inside the historic Kaiser Mahal, it is one of Kathmandu's most overlooked places. The reading rooms are lined with wooden bookshelves, old furniture and thousands of books collected over many decades. While many people come here to read or research, the building itself is just as interesting as the collection it houses. The quiet surroundings make it a pleasant stop for anyone looking to escape the city's busy streets for a while.
                </p>

                <h4 className="font-semibold text-black mb-1">Ranipokhari</h4>
                <SectionImage
                    src="/Image/15-ranipokhari-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is a historic pond in the heart of Kathmandu surrounded by the city's busy streets. Built in the 17th century by King Pratap Malla in memory of his son, it remains one of Kathmandu's best-known landmarks. At its centre stands the restored Balgopaleshwor Temple which opens to the public only on special occasions. The illuminated pond offers a different perspective on the city's history.
                </p>

                <h4 className="font-semibold text-black mb-1">Nag Pokhari</h4>
                <SectionImage
                    src="/Image/16-nagpokhari-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Nag Pokhari is a small historic pond in one of Kathmandu's quieter neighbourhoods. Surrounded by trees and open space, it provides a peaceful break from the city's traffic. Closely associated with the serpent deity Nag, it holds special religious importance during the annual Nag Panchami festival. Though less visited than Kathmandu's major landmarks, its calm setting and local significance make it worth exploring.
                </p>

                <h4 className="font-semibold text-black mb-1">Budhanilkantha Temple</h4>
                <SectionImage
                    src="/Image/17-budhanilkantha-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is best known for its remarkable stone statue of Lord Vishnu reclining on a bed of serpents in a sacred pond. Carved from a single block of black stone, it is considered one of Nepal's finest examples of stone craftsmanship. Devotees gather daily to offer prayers, while visitors come to admire the temple's unique setting and peaceful atmosphere.
                </p>

                <h4 className="font-semibold text-black mb-1">Kopan Monastery</h4>
                <SectionImage
                    src="/Image/18-kopan-monastery-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It stands on a hill north of Kathmandu away from the city's constant movement. Home to hundreds of monks and nuns, it is one of Nepal's leading centres for Buddhist learning and meditation. Visitors can explore the monastery, spin prayer wheels and admire colourful murals while enjoying wide views across the Kathmandu Valley. Its peaceful atmosphere makes it easy to slow down and stay awhile.
                </p>

                <h4 className="font-semibold text-black mb-1">Dakshinkali Temple</h4>
                <SectionImage
                    src="/Image/19-dakshin-kali-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is one of Nepal's most revered shrines dedicated to Goddess Kali. Set in a wooded valley south of Kathmandu, it offers a different atmosphere from the city's crowded temples. Tuesdays and Saturdays are the busiest days, when devotees gather to offer prayers and seek blessings. Stone steps, small shrines and surrounding hills add to its distinctive setting.
                </p>

                <h4 className="font-semibold text-black mb-1">Seto Gumba (White Monastery)</h4>
                <SectionImage
                    src="/Image/20-seto-gumba-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Also known as the White Monastery, it stands on a hill overlooking Kathmandu and is easily recognized by its bright white buildings. Colourful Buddhist artwork, prayer halls and open courtyards contrast beautifully with the surrounding hills while wide views stretch across the valley. Usually quieter than many of Kathmandu's major attractions, it offers a relaxed place to appreciate Buddhist architecture and photography.
                </p>

                <h4 className="font-semibold text-black mb-1">Seto Machindranath Temple</h4>
                <SectionImage
                    src="/Image/21-seto-machindranath-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is one of Kathmandu's oldest shrines standing quietly amid the busy streets of the old city. Revered by both Hindus and Buddhists, it reflects the close connection between the two faiths in Nepal. Its pagoda-style architecture, intricate wood carvings and peaceful courtyard make it a rewarding stop while exploring the historic centre. During the annual Seto Machindranath Jatra, a grand chariot procession passes through the city's streets.
                </p>

                <h4 className="font-semibold text-black mb-1">Kaal Bhairav Temple</h4>
                <SectionImage
                    src="/Image/22-kaal-bhairav-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Located in Kathmandu Durbar Square, Kaal Bhairav Temple is dedicated to the fierce form of Lord Shiva. It is best known for its massive stone image of Kaal Bhairav, long regarded as a symbol of justice and protection. Tradition held that people swore oaths before the deity, believing false promises would bring divine punishment. Today, it remains an important stop for both worshippers and visitors.
                </p>

                <h4 className="font-semibold text-black mb-1">Taleju Temple</h4>
                <SectionImage
                    src="/Image/23-taleju-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is one of the most important royal temples in Kathmandu Durbar Square closely linked to Nepal's former kings. Built in the 16th century, it is known for its multi-tiered pagoda roof and fine Newari craftsmanship. The temple opens to the public only during the Dashain festival but its striking architecture makes it one of the square's most recognizable landmarks year-round.
                </p>

                <h4 className="font-semibold text-black mb-1">Chandragiri Hills</h4>
                <SectionImage
                    src="/Image/24-chandragiri-hills-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It is one of the best viewpoints near Kathmandu offering sweeping views of the Himalayas and the valley below. A cable car carries visitors to the top where walking trails, landscaped gardens and Bhaleshwor Mahadev Temple await. On clear days, snow-capped peaks stretch across the horizon, making it a favourite destination for nature lovers and photographers.
                </p>

                <h4 className="font-semibold text-black mb-1">Shivapuri National Park</h4>
                <SectionImage
                    src="/Image/25-shivapuri-national-park-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    It marks the point where Kathmandu's busy streets give way to forests, mountain trails and fresh air. Home to diverse wildlife, birds and native plants, it is a favourite destination for hikers and nature lovers. Trails lead to scenic viewpoints, monasteries and Shivapuri Peak while the park also protects important water sources for the valley.
                </p>

                <h4 className="font-semibold text-black mb-1">Jamacho Gumba</h4>
                <SectionImage
                    src="/Image/26-jamacho-gumba-kathmandu-nepal-02.jpg"
                    source="Wikipedia"
                />
                <p className="mb-6 text-gray-700">
                    Reached through the forest trails of Shivapuri National Park, Jamacho Gumba rewards hikers with panoramic views of Kathmandu Valley and on clear days, the Himalayan peaks beyond. Prayer flags flutter around the peaceful monastery where hiking, nature and spirituality come together in a single visit.
                </p>

                <h4 className="font-semibold text-black mb-1">Taudaha Lake</h4>
               <SectionImage
                    src="/Image/27-taudaha-lake-kathmandu-nepal.jpg"
                    source="Wikipedia"
                /> 
                <p className="mb-6 text-gray-700">
                    It lies on the southern edge of Kathmandu Valley, offering a peaceful escape from the city's fast-paced streets. A favourite among birdwatchers and photographers, it attracts migratory birds during winter and is linked to local legends about the valley's origin. Its peaceful walking paths make it an ideal escape from the city's busy attractions.
                </p>

                {/* Things to Do */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Things to Do in Kathmandu
                </h2>
                <SectionImage
                    src="/Image/28-buddha-park-kathmandu-nepal-01.jpg"
                    source="Wikipedia"
                /> 

                <h4 className="font-semibold text-black mb-1">Wake Up Before the City Does</h4>
                <p className="mb-6 text-gray-700">
                    Kathmandu has a different charm in the early morning. The streets are quieter, the air feels fresher and temple bells slowly replace the silence of dawn. It's the best time to walk around, take photographs and watch the city come to life before the crowds arrive.
                </p>

                <h4 className="font-semibold text-black mb-1">Wander Without Looking at a Map</h4>
                <p className="mb-6 text-gray-700">
                    Some of the best discoveries happen when you stop following an itinerary. Walk through old neighbourhoods, step into narrow lanes, peek inside hidden courtyards and pause at the small shrines you come across. Every lane has something different to notice and that's part of Kathmandu charm.
                </p>

                <h4 className="font-semibold text-black mb-1">Discover the Flavours of Kathmandu</h4>
                <p className="mb-6 text-gray-700">
                    Most first-time visitors know about momo but Kathmandu's food has much more to offer. Try local dishes like bara, choila, chatamari and yomari to discover flavours that have been part of Newari kitchens for generations. Eating where local families gather often turns out to be more memorable than dining at popular tourist restaurants.
                </p>

                <h4 className="font-semibold text-black mb-1">Watch Everyday Local Life</h4>
                <p className="mb-6 text-gray-700">
                    You don't always need a famous attraction to understand a city. Spend time sitting in a public square, outside a temple or at a local tea shop and simply observe rhythm of everyday life. Children walking home from school, shopkeepers greeting regular customers and neighbours chatting across the street often leave a stronger impression than sightseeing alone.
                </p>

                <h4 className="font-semibold text-black mb-1">Take Time to Talk to People</h4>
                <p className="mb-6 text-gray-700">
                    Conversations often begin while ordering tea, shopping at a local market or asking for directions. Kathmandu is known for its warm hospitality and many locals are happy to share stories, recommend places or simply chat for a few minutes. Those unexpected conversations often become the most memorable parts of a trip.
                </p>

                <h4 className="font-semibold text-black mb-1">Join the Evening Buzz</h4>
                <p className="mb-6 text-gray-700">
                    As daylight fades, Kathmandu begins to buzz with life. Streets become livelier, cafes fill with conversation, music drifts through the air and people head out to meet friends or enjoy dinner. It's the wonderful time to explore on foot and enjoy the city's relaxed evening atmosphere.
                </p>

                <h4 className="font-semibold text-black mb-1">Bring Home Something Made in Nepal</h4>
                <p className="mb-6 text-gray-700">
                    Instead of picking up ordinary souvenirs, look for handmade products created by local artisans. Handcrafted paper, singing bowls, thangka paintings, wooden carvings, pashmina shawls and traditional handicrafts all tell a story and make meaningful reminders of your journey.
                </p>

                {/* Food & Local Life */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Food & Local Life
                </h2>

                <SectionImage
                    src="/Image/29-famous-food-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Food is woven into everyday life in Kathmandu. From busy morning tea stalls to family kitchens and neighbourhood eateries, every meal reflects the city's rich cultural heritage. While cuisines from around the world are easy to find, local dishes remain at the heart of Kathmandu's food culture.
                </p>

                <p className="mb-4 text-gray-700">
                    Momo may be the dish most travellers recognize first but Kathmandu's food goes far beyond dumplings. Try local favourites like bara, choila, chatamari, thukpa, sel roti and the sweet yomari to experience some of the city's best-loved flavours. Many of these dishes are closely linked to festivals, family gatherings and community traditions.
                </p>

                <p className="mb-4 text-gray-700">
                    People often look for local snacks and specialties but Dal Bhat is the meal that keeps Kathmandu going every day. A traditional plate usually includes steamed rice, lentil soup, seasonal vegetables, pickles and sometimes meat or curry. Simple, filling and served across the city, it offers one of the most authentic tastes of Nepali daily life.
                </p>

                <p className="mb-4 text-gray-700">
                    Tea is just as important as food in Kathmandu. Whether it's a cup of milk tea from a roadside stall or butter tea in a Himalayan-style cafe, sharing tea is part of everyday conversation. A short tea break often turns into a friendly chat.
                </p>

                <p className="mb-6 text-gray-700">
                    The best way to discover Kathmandu's food is to eat where locals eat. Step into a small local eatery, try a dish you havee never heard of and take your time enjoying the meal. The city's most memorable flavours are found in simple places that have been serving the same recipes for years.
                </p>

                {/* Festivals & Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Festivals & Traditions
                </h2>

                <SectionImage
                    src="/Image/30-pashupatinath-temple-kathmandu-nepal-03.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Kathmandu celebrates festivals with an energy that's hard to miss. Streets fill with music, temples become gathering places and homes are decorated as families come together to celebrate. Even if you're visiting for the first time, it's easy to feel part of the celebrations simply by walking through the city.
                </p>

                <p className="mb-4 text-gray-700">
                    Dashain, Nepal's biggest festival brings families together with prayers, blessings and traditional feasts. Tihar, often called the Festival of Lights, brightens the city with oil lamps, colourful decorations and celebrations that honour not only people but also animals like crows, dogs and cows.
                </p>

                <p className="mb-4 text-gray-700">
                    One of Kathmandu's most distinctive celebrations is Indra Jatra when masked dances, chariot processions and centuries-old rituals transform the old city into a lively cultural stage. The festival is also known for the procession of the Living Goddess Kumari, who appears before thousands of devotees in an elaborately decorated chariot. It is one of the best opportunities to witness one of Kathmandu's most distinctive cultural traditions.
                </p>

                <p className="mb-4 text-gray-700">
                    Buddhist festivals are equally important. During Buddha Jayanti, monasteries and stupas welcome worshippers who gather to offer prayers, light butter lamps and take part in religious ceremonies. Prayer flags, incense and the sound of chanting create a deeply spiritual atmosphere across many parts of the valley.
                </p>

                <p className="mb-4 text-gray-700">
                    Another important celebration is Losar, the Tibetan New Year, observed by Kathmandu's Buddhist communities with prayers, family gatherings and colourful cultural programmes. Monasteries come alive with traditional ceremonies while homes are decorated and families come together to welcome the New Year with joy and hope.
                </p>

                <p className="mb-6 text-gray-700">
                    Beyond the major festivals, traditions continue throughout the year. Morning prayers at neighbourhood temples, community gatherings and seasonal celebrations remain part of everyday life.
                </p>

                {/* Planning Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit
                </h2>

                <SectionImage
                    src="/Image/31-swayambhunath-stupa-kathmandu-nepal-02.jpg"
                    source="Wikimedia Commons"
                />

                <h4 className="font-semibold text-black mb-1">Best Time to Visit</h4>
                <p className="mb-6 text-gray-700">
                    Kathmandu can be visited throughout the year but the most comfortable months are March to May and September to November. Spring brings pleasant weather and blooming flowers while autumn usually offers clear skies and excellent views of the surrounding mountains. The monsoon season, from June to August brings frequent rain, and winter mornings can be chilly, especially in December and January.
                </p>

                <h4 className="font-semibold text-black mb-1">Getting Around</h4>
                <p className="mb-6 text-gray-700">
                    Walking is the best way to explore Kathmandu's older neighbourhoods where narrow streets and hidden courtyards are part of the city charm. For longer distances, taxis and ride-hailing services are widely available while local buses provide an affordable way to travel across the city. If you're planning day trips around the valley, hiring a private vehicle can save time.
                </p>

                <h4 className="font-semibold text-black mb-1">Currency and Payments</h4>
                <p className="mb-6 text-gray-700">
                    The official currency is the Nepalese Rupee (NPR). Digital payments are becoming more common but cash is still useful for local markets, small shops and neighbourhood eateries. ATMs are easy to find in most parts of the city.
                </p>

                <h4 className="font-semibold text-black mb-1">Local Etiquette</h4>
                <p className="mb-6 text-gray-700">
                    Kathmandu is home to many temples, monasteries and sacred sites, so dressing modestly is always a good idea. Remove your shoes before entering places where it is required. Ask permission before taking photographs of people and respect local customs during religious ceremonies. A simple "Namaste" is a polite greeting and is always appreciated.
                </p>

                <h4 className="font-semibold text-black mb-1">Language</h4>
                <p className="mb-6 text-gray-700">
                    Nepali is the official language but English is widely understood in hotels, restaurants and tourist areas. Learning a few simple Nepali greetings such as "Namaste" or "Dhanyabad" (thank you) is a thoughtful way to connect with local people during your visit.
                </p>

                <h4 className="font-semibold text-black mb-1">Internet and Connectivity</h4>
                <p className="mb-6 text-gray-700">
                    Most hotels, cafes and restaurants offer free Wi-Fi and mobile data is affordable for travellers who need internet on the go. Buying a local SIM card after arriving in Nepal is usually the easiest option for staying connected during your trip.
                </p>

                <h4 className="font-semibold text-black mb-1">Safety Tips</h4>
                <p className="mb-6 text-gray-700">
                    Kathmandu is generally a welcoming destination for travellers. As with any major city, keep an eye on your belongings in crowded areas, use licensed taxis when travelling late and carry a copy of your important documents while out in the city. Drinking bottled or filtered water is recommended during your stay.
                </p>

                {/* Nearby Places to Explore */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nearby Places to Explore
                </h2>

                <SectionImage
                    src="/Image/32-patan-darbar-square-nepal-01.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Kathmandu is a great base for exploring many of Nepal's most famous destinations. Several historic towns, mountain viewpoints and pilgrimage sites are just a short drive from the city, making them perfect for day trips or weekend getaways.
                </p>

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Bhaktapur</p>
                        <p>Bhaktapur is famous for its beautifully preserved old town, Newari architecture and lively squares. Walking through its narrow streets, you'll find ancient temples, pottery workshops and traditional Newari houses at almost every turn.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Patan (Lalitpur)</p>
                        <p>Just across the Bagmati River, Patan is celebrated for its remarkable temples, fine metal craftsmanship and one of the finest Durbar Squares in Nepal. It is a favourite destination for anyone interested in art, history and Newari culture.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Nagarkot</p>
                        <p>Nagarkot is one of the most popular hill stations near Kathmandu, best known for its sunrise views over the Himalayas. On clear days, visitors can enjoy panoramic mountain scenery, including distant views of Mount Everest.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Pharping</p>
                        <p>Pharping offers a quieter side of the Kathmandu Valley with ancient temples, Buddhist monasteries and sacred meditation caves. It attracts both pilgrims and travellers looking to spend time away from the city's busy streets.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Dhulikhel</p>
                        <p>Dhulikhel is a charming hill town with scenic walking trails, traditional houses and wide Himalayan views. It is a popular day trip from Kathmandu, especially for those who enjoy nature and photography.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Namo Buddha</p>

                        <p>Namo Buddha is one of Nepal's most important Buddhist pilgrimage sites surrounded by peaceful hills and monasteries. The monastery complex and its peaceful hilltop setting attract pilgrims, visitors and nature lovers throughout the year.</p>
                    </div>
                </div>
                <SectionImage
                    src="/Image/33-kopan-monastery-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                />

                <p className="mb-4 text-gray-700">
                    Kathmandu is a city where history, culture and everyday life come together in a way few places can match. From centuries-old temples and Buddhist monasteries to lively markets, local food and colourful festivals, every corner of the city offers something worth discovering. If you are planning a longer stay, Kathmandu has plenty to explore at your own pace. You can follow its famous landmarks, wander through historic neighbourhoods or simply slow down and enjoy the city's unique atmosphere. We hope this guide has answered your questions and made planning your visit easier. Enjoy your time in Kathmandu, travel responsibly and make the most of everything the city has to offer.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Kathmandu Nepal
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Where is Kathmandu located?</p>
                        <p className="mt-2">Kathmandu is the capital city of Nepal, situated in the Kathmandu Valley in the central part of the country. It is the main gateway for international travellers visiting Nepal.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. What is Kathmandu famous for?</p>
                        <p className="mt-2">Kathmandu is famous for its ancient temples, UNESCO World Heritage Sites, Buddhist stupas, lively markets, Newari culture and its role as the starting point for many Himalayan adventures.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. How many days are enough to explore Kathmandu?</p>
                        <p className="mt-2">A stay of 2 to 3 days is enough to explore Kathmandu's major attractions, enjoy local food and visit nearby destinations. If you plan to include day trips or hiking, consider staying for 5 to 6 days.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. What is the best time to visit Kathmandu?</p>
                        <p className="mt-2">The best time to visit Kathmandu is during March to May and September to November, when the weather is pleasant and mountain views are usually at their clearest.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Is Kathmandu safe for tourists?</p>
                        <p className="mt-2">Yes. Kathmandu is generally considered safe for travellers. Like any large city, it's wise to stay alert in crowded places, keep valuables secure and use licensed taxis when travelling late.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is Kathmandu expensive to visit?</p>
                        <p className="mt-2">No. Kathmandu is suitable for every budget. You'll find affordable guesthouses, mid-range hotels and luxury accommodation, along with dining options ranging from local eateries to fine restaurants.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. What food should I try in Kathmandu?</p>
                        <p className="mt-2">Don't miss momos, dal bhat, bara, choila, chatamari, yomari, sel roti and thukpa. These dishes offer a great introduction to Kathmandu's local and Newari cuisine.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Which currency is used in Kathmandu?</p>
                        <p className="mt-2">The official currency is the Nepalese Rupee (NPR). Although digital payments are becoming more common, carrying some cash is useful for local markets and small businesses.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Can I use Indian Rupees in Kathmandu?</p>
                        <p className="mt-2">Some hotels and larger shops accept Indian Rupees, but the Nepalese Rupee is the preferred currency. It's best to exchange money or withdraw local currency after arriving.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Do Indian citizens need a visa to visit Kathmandu?</p>
                        <p className="mt-2">No. Indian citizens do not need a visa to enter Nepal. However, they should carry a valid government-issued identity document accepted by Nepali authorities before travelling. Travel requirements may change, so checking the latest official guidelines is always recommended.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. Is English spoken in Kathmandu?</p>
                        <p className="mt-2">Yes. English is widely understood in hotels, restaurants, tourist attractions and travel agencies. Learning a few Nepali greetings is always appreciated.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. How can I get around Kathmandu?</p>
                        <p className="mt-2">Walking is the best way to explore older parts of the city. For longer distances, taxis, ride-hailing services and local buses are readily available.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. Is Kathmandu worth visiting?</p>
                        <p className="mt-2">Absolutely. Kathmandu combines ancient history, living culture, local markets, religious landmarks and vibrant street life, making it one of South Asia's most rewarding destinations.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. What are the best places to visit near Kathmandu?</p>
                        <p className="mt-2">Popular day trips include Bhaktapur, Patan, Nagarkot, Dhulikhel, Pharping and Namo Buddha, all located within easy reach of the city.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. Is Kathmandu suitable for solo travellers?</p>
                        <p className="mt-2">Yes. Kathmandu is a popular destination for solo travellers thanks to its welcoming atmosphere, good tourist infrastructure and active backpacker community. Basic precautions are recommended, just as they are in any major city.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">16. What should I wear in Kathmandu?</p>
                        <p className="mt-2">Comfortable clothing is suitable for most places. When visiting temples and monasteries, it's respectful to dress modestly by covering your shoulders and knees.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">17. Can I drink tap water in Kathmandu?</p>
                        <p className="mt-2">It is recommended to drink bottled or filtered water rather than tap water during your visit to avoid stomach-related illnesses.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">18. What souvenirs should I buy in Kathmandu?</p>
                        <p className="mt-2">Popular souvenirs include pashmina shawls, singing bowls, handmade paper products, thangka paintings, prayer flags, wooden carvings and traditional Nepali handicrafts.</p>
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

export default KathmanduNepal;