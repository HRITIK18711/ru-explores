import React from "react";

const SectionImage = ({ src, source, alt = "Pokhara Nepal" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        {source && <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>}
    </div>
);

const Pokhara = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Pokhara Nepal: Best Places, Food & Complete Travel Guide
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/01-phewa-lake-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Phewa Lake Pokhara Nepal"
                />

                <p className="mb-4 text-gray-700">
                    Pokhara is the kind of place where the view changes every time you turn your head. One side opens towards the quiet waters of Phewa Lake while the other brings the mountains closer with Machhapuchhre often standing above the city. Between them are old temples, small streets, caves, waterfalls, monasteries, cafes, markets and roads that lead into the hills.
                </p>

                <p className="mb-4 text-gray-700">
                    For some travellers, Pokhara is the starting point for a trek into the Annapurna region. For others, it is a place to spend a few slow days by the lake, watch the mountains at sunrise, ride through the hills, go paragliding or simply walk around Lakeside with nowhere particular to be.
                </p>

                <p className="mb-6 text-gray-700">
                    The city has grown into one of Nepal's most visited destinations but its appeal is not limited to the famous view from the lake. Spend a little more time here and Pokhara opens up in different ways through its old neighbourhoods, local communities, religious places, mountain culture and the many short trips that can be made around the valley.
                </p>

                {/* Pokhara at a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Pokhara at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-poon-hills-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Poon Hills Pokhara Nepal"
                />

                <div className="overflow-x-auto mb-8">
                    <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
                        <thead className="bg-gray-100 font-semibold text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 border-r border-gray-200">Detail</th>
                                <th className="px-4 py-3">Information</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Country</td>
                                <td className="px-4 py-2">Nepal</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Province</td>
                                <td className="px-4 py-2">Gandaki Province</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">District</td>
                                <td className="px-4 py-2">Kaski</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Elevation</td>
                                <td className="px-4 py-2">Around 822 m</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Best Time to Visit</td>
                                <td className="px-4 py-2">September–November and March–May</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Ideal Duration</td>
                                <td className="px-4 py-2">3–5 days</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Famous For</td>
                                <td className="px-4 py-2">Phewa Lake, Annapurna mountain views, adventure activities and as a gateway to the Annapurna region</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Nearest Airport</td>
                                <td className="px-4 py-2">Pokhara International Airport</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Languages Spoken</td>
                                <td className="px-4 py-2">Nepali, Gurung, Magar and English is widely understood in tourist areas</td>
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

                {/* Why Pokhara Feels Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Pokhara Feels Different
                </h2>

                <SectionImage
                    src="/Image/03-phewa-lake-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Phewa Lake Boating Pokhara Nepal"
                />

                <p className="mb-4 text-gray-700">
                    People come to Pokhara for different reasons. One person may be preparing for a trek, another has just returned from the mountains while others are here for a few relaxed days by the lake. Around Lakeside, these different travellers become part of the everyday scene.
                </p>

                <p className="mb-4 text-gray-700">
                    The city is closely connected with the Annapurna region, so trekking is part of daily life. Trekking shops, guides, buses and jeeps heading towards the hills are easy to find. At the same time, Pokhara is more than a starting point for the mountains. It is also a place to rest, eat, explore and spend time by the lake.
                </p>

                <p className="mb-6 text-gray-700">
                    Lakeside is busy and built around visitors, but walk away from the main road and you quickly find homes, local shops, temples and peaceful streets. Gurung and Magar communities have a strong presence around the valley while Thakali communities are closely linked with the Annapurna region. Their influence can be seen in food, festivals, village life and the people you meet beyond the city.
                </p>

                {/* Places to Visit in Pokhara */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Pokhara
                </h2>

                {/* Phewa Lake and Lakeside */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Phewa Lake and Lakeside</h3>
                <SectionImage
                    src="/Image/04-lakeside-phewa-lake-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Lakeside Phewa Lake Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Phewa Lake is one of Pokhara's best-known places and the centre of much of the city's visitor activity. Early mornings are a good time to see the lake with calmer water and clearer mountain views. You can take a boat across the lake, with the Annapurna range visible beyond the surrounding hills on clear days.
                </p>

                <SectionImage
                    src="/Image/04-tal-barahi-temple-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Tal Barahi Temple Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    The boat ride also takes you to Tal Barahi Temple, built on a small island in Phewa. Boats carrying visitors and worshippers travel between the shore and temple throughout the day. Around the lake, Lakeside, also known as Baidam, is the main tourist area, with trekking shops, cafes, restaurants and small stores. Walk beyond the busiest stretch and you will find quieter streets and local neighbourhoods. Barahi Ghat, Miteri Park, Pame and Khapaudi offer other places to explore around Phewa, while Kedareshwar Mahadev Temple can also be visited on this side of the city.
                </p>

                {/* World Peace Pagoda & Pumdikot */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">World Peace Pagoda & Pumdikot</h3>
                <SectionImage
                    src="/Image/05-world-peace-pagoda-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="World Peace Pagoda Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Phewa, the road begins to climb towards the southern hills of Pokhara. The first stop is the World Peace Pagoda standing above the lake on Anadu Hill. As you move higher, the busy streets around Lakeside gradually disappear and the view opens towards Phewa, the green hills and on a clear day, the mountains beyond. The white pagoda sits quietly at the top with the landscape.
                </p>
                <p className="mb-4 text-gray-700">
                    Spend some time around the pagoda. Look back towards Phewa and you can see how the lake sits between Pokhara and the hills. The setting also makes the pagoda a popular place for people who come to sit quietly, walk around the grounds or watch the changing light over the valley.
                </p>

                <SectionImage
                    src="/Image/06-shiva-temple-pumdikot-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Lord Shiva Statue Pumdikot Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From here continue towards Pumdikot, where a large statue of Lord Shiva stands on the hilltop. The open space around the statue gives another wide view of Pokhara and the surrounding hills. The two places offer different experiences even though they can be covered on the same southern-side trip.
                </p>
                <p className="mb-6 text-gray-700">
                    The road through Pumdi and Bumdi adds another side to this journey. These hill villages sit away from the busier parts of Pokhara with houses, farms and stretches of green land along the route. If you have time, Raniban also gives you a chance to spend some time among the forested hills around the pagoda.
                </p>

                {/* Davis Falls & Gupteshwor Mahadev Cave */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Davis Falls & Gupteshwor Mahadev Cave</h3>
                <SectionImage
                    src="/Image/07-gupteshwor-mahadev-cave-temple-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Gupteshwor Mahadev Cave and Temple Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    After the open views of the southern hills, the next stop brings you back into the city and into a very different place. Davis Falls is where the water from Phewa Lake disappears underground through a narrow rocky passage. The sound of the falling water is the first thing you notice as you walk towards the viewpoint and during the monsoon the falls become especially forceful. The waterfall is best seen from the viewing area where you can watch the water drop into the gorge below. The water does not simply fall and continue along the surface. It disappears into the ground, making the place feel connected to the underground world that you explore next.
                </p>

                <SectionImage
                    src="/Image/08-davis-falls-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Davis Falls Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    Just across the road is Gupteshwor Mahadev Cave, one of Pokhara's best-known caves. The entrance takes you below ground, where the passage becomes narrower and darker as you move deeper inside. The cave has natural rock formations along its walls and is also a Hindu pilgrimage site dedicated to Lord Shiva. A shrine dedicated to Gupteshwor Mahadev lies inside and the sound of water moving through the cave adds to the atmosphere. During the rainy season, parts of the cave can become wet, so walking down there needs a little care.
                </p>

                {/* Seti River Gorge */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Seti River Gorge</h3>
                <SectionImage
                    src="/Image/08-seti-river-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Seti River Channel Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    The Seti River Gorge gives you a closer look at the river as it cuts through the city and surrounding landscape. It flows through a narrow gorge in several parts of Pokhara, with steep rock walls and viewpoints where you can see the river below. It is a good short stop to add while exploring the city especially if you want to see a different side of Pokhara beyond the lakes and main attractions.
                </p>

                {/* Bhalam Suspension Bridge */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Bhalam Suspension Bridge</h3>
                <SectionImage
                    src="/Image/09-bhalam-suspension-bridge-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Bhalam Suspension Bridge Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    If you want to see Pokhara from a slightly different angle, head towards Bhalam Suspension Bridge. The bridge crosses the deep gorge of the Seti River and connects the Bhalam side with Lamachaur. The walk across it is short, but standing above the gorge gives you a very different feeling from the usual viewpoints around Pokhara.
                </p>

                {/* Museums of Pokhara */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Museums of Pokhara</h3>
                <SectionImage
                    src="/Image/09-international-mountain-museum-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="International Mountain Museum Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Pokhara's museums are worth adding to the journey because they show a side of the city that you cannot see from its lakes, hills or viewpoints. Start with the International Mountain Museum, especially if the mountains are one of the reasons you have come to Pokhara. The museum brings together stories of mountaineering, the Himalayas, mountain communities and the people who have travelled into these high-altitude landscapes.
                </p>
                <p className="mb-4 text-gray-700">
                    The Gurkha Memorial Museum takes you in another direction. It focuses on the history and service of Gurkha soldiers and displays uniforms, photographs, medals, weapons and other objects connected with their lives.
                </p>
                <p className="mb-4 text-gray-700">
                    At the Pokhara Regional Museum, the focus shifts closer to home. Its collections introduce the cultures, communities, traditional life and history of the wider Pokhara region.
                </p>
                <p className="mb-6 text-gray-700">
                    The Annapurna Natural History Museum, also known as the Butterfly Museum, offers something quite different. Its collection includes butterflies and other examples of the natural life found around the Annapurna region. The Province Museum can also be included if you want to explore Nepal's wider regional history and culture.
                </p>

                {/* Matepani: Temple & Monastery */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Matepani: Temple & Monastery</h3>
                <SectionImage
                    src="/Image/10-matepani-gumba-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Matepani Gumba Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Matepani gives you a peaceful side of Pokhara. Away from the movement of Lakeside, the area brings together two different religious traditions within a short distance of each other. The main stop here is Matepani Gumba, also known as Karma Kagyu Chhonkerling Monastery.
                </p>
                <p className="mb-4 text-gray-700">
                    The monastery sits on a hillside surrounded by greenery, with its traditional Buddhist architecture and colourful details standing out against the peaceful surroundings. The prayer wheels, paintings and peaceful setting give you a chance to see how Tibetan Buddhist traditions are practised in Pokhara.
                </p>
                <p className="mb-4 text-gray-700">
                    A short distance away is Bhadrakali Temple, an important Hindu temple in the area. The temple sits among trees and the place feels quite different from the busier temples around the centre of Pokhara.
                </p>
                <p className="mb-6 text-gray-700">
                    The surroundings are also worth noticing. The green cover around Matepani makes it a pleasant break from the more built-up parts of Pokhara, and the area can be interesting for travellers who enjoy birds, butterflies and short walks.
                </p>

                {/* Old Pokhara: Bazaar, Temples */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Old Pokhara: Bazaar, Temples</h3>
                <SectionImage
                    src="/Image/11-bindhyabasini-temple-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Bindhyabasini Temple Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Old Pokhara is best explored around Old Bazaar where traditional buildings, small shops and older streets give the area a different character from Lakeside. The Newari influence can be seen in the traditional houses, carved wooden windows and old street layout.
                </p>
                <p className="mb-6 text-gray-700">
                    Within the bazaar, Bhimsen Temple is associated with the Newar trading community and the deity linked with trade and business. From here, continue towards Bindhyabasini Temple, one of Pokhara's best-known Hindu temples. Set on a hilltop, it is an important place of worship and offers views across parts of the city.
                </p>

                {/* Northern Caves */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Northern Caves</h3>
                <SectionImage
                    src="/Image/12-mahendra-cave-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Mahendra Cave Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    The northern side of Pokhara has two caves that are easy to visit together: Mahendra Cave and Bat Cave or Chamere Gufa. They are close to each other, so you can see both without making a separate trip for each one.
                </p>
                <p className="mb-4 text-gray-700">
                    Mahendra Cave is the larger and better-known of the two. Once you enter, the daylight quickly gives way to a dark passage filled with limestone formations. Walk slowly, look up at the rock formations and notice how different the surroundings feel from the open landscapes you have been exploring around Pokhara.
                </p>

                <SectionImage
                    src="/Image/13-bat-cave-chamere-gufa-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Bat Cave Chamere Gufa Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    A short distance away is Bat Cave, locally known as Chamere Gufa. As the name suggests, bats are part of the experience here. The cave is smaller, darker and the narrow passages make the visit feel more like an underground exploration than a conventional sightseeing stop.
                </p>

                {/* Hilltops & Mountain Views */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Hilltops & Mountain Views</h3>
                <SectionImage
                    src="/Image/14-sarangkot-hill-view-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Sarangkot Hill View Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Sarangkot is the one most travellers know and for good reason. Go early in the morning and watch the sun reach the Annapurna range before it spreads across the hills below. From the top, Phewa Lake appears far below and Pokhara stretches across the valley.
                </p>
                <p className="mb-4 text-gray-700">
                    Kaskikot feels quite different. The hill is home to Kaskikot Durbar and Kaskikot Kalika Temple, so there is more to see than the view alone. The old palace area connects the hill with the history of the Kaski region while the temple remains an important local place of worship.
                </p>

                <SectionImage
                    src="/Image/15-kaskikot-durbar-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Kaskikot Durbar Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    Closer to the city, Kahun Danda or Kahunkot gives you another high point from which to look across Pokhara and towards the mountains. The hills continue towards Naudanda and Thulakot, where the views come with stretches of village life, fields and roadside stops. Mattikhan and Pangdhurkot are further options if you want to spend more time exploring the surrounding hills.
                </p>

                {/* Begnas & Rupa Lakes */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Begnas & Rupa Lakes</h3>
                <SectionImage
                    src="/Image/16-begnas-lake-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Begnas Lake Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    After the busier side of Pokhara, Begnas Lake feels like a change of pace. The road leaves the city behind and the surroundings become greener and more open. There are fewer buildings around the water and the lake has a quiet feel than Phewa. You can take a boat out, sit by the shore or simply spend some time watching the hills reflected in the water.
                </p>
                <p className="mb-4 text-gray-700">
                    The area around Begnas is also worth exploring. Begnas Bazaar is useful for seeing the everyday side of this part of Pokhara while the roads around the lake pass through villages, fields and small settlements.
                </p>
                <p className="mb-6 text-gray-700">
                    A short distance away is Rupa Lake, another of Pokhara Valley's important lakes. It is smaller and generally quieter with green hills surrounding much of its shoreline. The lake is closely connected with the villages and farmland around it, so the visit feels less like a stop at a tourist attraction and more like a short trip into the countryside.
                </p>

                {/* Other Lakes & Wetlands */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Other Lakes & Wetlands</h3>
                <SectionImage
                    src="/Image/17-dipang-lake-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Dipang Lake Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    Beyond Phewa, Begnas and Rupa, Pokhara has several smaller lakes and wetlands. Khaste Lake is known for its green surroundings and birdlife, while Neurani and Gunde lakes form part of the same wetland landscape. Dipang Lake is surrounded by farmland and hills, while Maidi Lake and Kamalpokhari add to the area's smaller water bodies. These places are best for travellers interested in birdwatching, photography and quieter parts of the valley.
                </p>

                {/* Monasteries & Tibetan Settlements */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Monasteries & Tibetan Settlements</h3>
                <SectionImage
                    src="/Image/18-pema-tsal-sakya-monastic-institute-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Pema Tsal Sakya Monastic Institute Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    Pokhara's Buddhist side can be explored through its monasteries and Tibetan settlements. Jangchub Choeling Monastery is one of the important monasteries to visit while Tashiling, Tashipalkhel and Paljor Ling give a closer look at Tibetan community life, homes, workshops and handicrafts. Other monasteries include Pema Tsal Sakya Monastic Institute, Nepal Shang Gadhen Choekhorling, Tashi Gay Gye Thaten Ling, Shree Gaden Dhargyeling and Karma Samtenling. Keep visits quiet and follow local instructions, particularly during prayers or ceremonies.
                </p>

                {/* Other Temples & Religious Places */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Other Temples & Religious Places</h3>
                <SectionImage
                    src="/Image/19-bhadrakali-temple-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Bhadrakali Temple Pokhara Nepal"
                />
                <p className="mb-6 text-gray-700">
                    Beyond Pokhara's better-known temples, smaller religious sites are spread across the city and surrounding hills. Ram Temple at Ramghat, Tulakot Temple, Akaladevi Temple, Bhadrakali Temple, Narayansthan Temple and Siddheshwar Mahadev Temple in Fulbari can be included if you want to explore this side of the city. Some are closely connected with local worship while Ramghat also has an important connection with Hindu rituals and cremation practices along the Seti River. You will also come across smaller shrines while walking through older neighbourhoods and villages.
                </p>

                {/* Things to Do in Pokhara */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Things to Do in Pokhara
                </h2>

                {/* Paragliding & Ultralight Flights */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Paragliding & Ultralight Flights</h3>
                <SectionImage
                    src="/Image/20-paragliding-pokhara-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Paragliding and Ultralight Flights in Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    If you want to see Pokhara from a completely different angle, take to the sky. Paragliding from Sarangkot puts you high above the valley with Phewa Lake below and the hills stretching out in every direction. You don't need any previous flying experience for a tandem flight. An experienced pilot handles the flying while you sit back and take in the view. The flight begins high on the hill and gradually brings you down towards the valley. On a clear day, the mountains appear beyond the hills, while the lake, fields, roads and houses become smaller below.
                </p>
                <p className="mb-6 text-gray-700">
                    For something different, ultralight flights offer a more open view of the landscape. You sit beside the pilot in a small aircraft with an open-sided cabin, giving you a wide view as the aircraft flies over Pokhara and the surrounding hills. Depending on the flight chosen, you can see Phewa Lake, the valley and the Himalayan range from above. The two experiences are quite different. Paragliding feels like you are floating through the air while an ultralight flight gives you the feeling of actually flying over the landscape.
                </p>

                {/* Boating, Kayaking & Water Activities */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Boating, Kayaking & Water Activities</h3>
                <SectionImage
                    src="/Image/21-phewa-lake-pokhara-nepal-lily-lili.jpg"
                    source="Pexels/Lily Lili"
                    alt="Phewa Lake Boating and Kayaking Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Phewa Lake is not only a place to look at from the shore. Get into a boat and Pokhara begins to feel different again. A traditional wooden boat ride is the easiest way to spend some time on the water. You can row across the lake, stop near the quieter stretches and enjoy the view without having to follow a fixed route.
                </p>
                <p className="mb-4 text-gray-700">
                    If you want something more active, kayaking gives you more control over where you go. Paddle away from the busier parts of the lake and you can spend time on the water at your own pace. Early mornings are particularly pleasant, when the lake is calmer and there is less movement around the shore.
                </p>
                <p className="mb-6 text-gray-700">
                    Boating and kayaking are also available on Begnas Lake, where the surroundings are peaceful and more open than Phewa. Here, the activity can easily become part of a longer visit to the lake, with time to explore the surrounding villages and countryside afterwards. For a different kind of water experience, Seti River activities can take you away from the lakes and into the river landscape. The river runs through Pokhara and offers opportunities for rafting and other water-based adventures at suitable stretches.
                </p>

                {/* Himalayan Treks from Pokhara */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Himalayan Treks from Pokhara</h3>
                <SectionImage
                    src="/Image/22-annapurna-base-camp-nepal-yohantha-gunawarna.jpg"
                    source="Pexels/Yohantha Gunawarna"
                    alt="Annapurna Base Camp Trek from Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    For many travellers, Pokhara is more than a place to see the Himalayas from a distance. It is where the road turns towards them. Trekkers arrive with backpacks, sort out their permits and gear, meet their guides and head towards the mountains. Others return to Pokhara after days on the trail, looking for a hot shower, a good meal and a comfortable bed. The Annapurna Base Camp (ABC) Trek is one of the best-known routes from the Pokhara side. The Annapurna Circuit is a much longer journey and takes you across several landscapes rather than following one valley. Pokhara often becomes the place where trekkers prepare before setting out or rest after returning from the mountains.
                </p>
                <p className="mb-4 text-gray-700">
                    For a shorter Himalayan experience, the Mardi Himal Trek has become a popular choice. It takes you towards high mountain views without requiring the same amount of time as some of the longer routes. The Ghorepani–Poon Hill Trek is another option for travellers who want a shorter trek with village trails and a famous mountain-view point along the way.
                </p>
                <p className="mb-6 text-gray-700">
                    There are other routes for those who want something quieter. Khopra Danda Trek and Mohare Danda Trek take you into less crowded parts of the Annapurna region while the Manaslu Circuit can also be accessed from Pokhara, although its starting point lies farther away.
                </p>

                {/* Hiking & Short Walks, Mountain Biking & Cycling */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Hiking, Mountain Biking & Cycling</h3>
                <SectionImage
                    src="/Image/23-sarangkot-pokhara-sunrise-view-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Sarangkot Sunrise View Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    You don't always need a multi-day trek to get out into the hills around Pokhara. There are plenty of shorter routes where you can spend a few hours walking through villages, fields and wooded stretches before coming back to the city the same day. Hiking to the World Peace Pagoda, walking around Pumdikot and taking the trails towards Sarangkot are some of the easier ways to get a taste of the hills. Routes around Kaskikot, Naudanda and the villages beyond the main roads give you a longer day out, with fewer buildings and more open countryside along the way.
                </p>
                <p className="mb-6 text-gray-700">
                    Cycling gives you the same freedom at a faster pace. You can take a bicycle around Phewa Lake, ride towards Pame and Khapaudi or head into the surrounding villages and hill roads. More experienced riders can take on steeper routes towards places such as Sarangkot, Kaskikot and Naudanda.
                </p>

                {/* Birdwatching, Camping & Outdoor Nights */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Birdwatching, Camping & Outdoor Nights</h3>
                <SectionImage
                    src="/Image/24-khaste-lake-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Khaste Lake Birdwatching Pokhara Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Pokhara's smaller lakes and wetlands, particularly Khaste, Neurani and Dipang, are good places for birdwatching. Carry binoculars if you have them and choose a quiet spot near the water.
                </p>
                <p className="mb-6 text-gray-700">
                    Camping is possible around Panchase and nearby hill areas, where it can be combined with walking and mountain views. Conditions depend on the season and campsite, so arrange your stay in advance rather than arriving with a tent. For a peaceful outdoor evening, staying away from the city lights gives you a chance to enjoy the hills and night sky.
                </p>

                {/* Food and Local Life */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Food and Local Life
                </h2>

                <SectionImage
                    src="/Image/25-thakali-khana-pokhara-nepal.jpg"
                    alt="Thakali Khana Pokhara Nepal"
                />

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">What to Eat in Pokhara</h4>
                        <p className="mt-1">
                            Pokhara brings together food traditions from the hills, older communities of the valley and Tibetan settlements. Start with dal bhat, Nepal's everyday meal of rice, lentils, vegetables, pickle and other sides. Thakali food is especially worth trying in the Annapurna region with Thakali thali offering rice, dal, vegetables and pickles.
                        </p>
                        <p className="mt-2">
                            Newari food adds another layer, with dishes such as bara, chatamari, choila and yomari. Momo and thukpa are easy to find across the city while sel roti, aloo chop and samosa make simple snacks when exploring local markets and neighbourhoods.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Eating Around Lakeside</h4>
                        <p className="mt-1">
                            Lakeside has the widest range of food in Pokhara. Alongside Nepali eateries, you will find bakeries, cafes and restaurants serving Indian, Chinese, Tibetan and international food. Breakfast options include eggs, toast, pancakes, Tibetan-style breads and lighter Nepali meals.
                        </p>
                        <p className="mt-2">
                            For a local experience, try smaller eateries away from the busiest tourist streets. The lakefront also has plenty of places for dinner, coffee or a quick snack.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Pokhara After Dark</h4>
                        <p className="mt-1">
                            Lakeside is the main area for evenings out. Pubs, bars and cafes often have live music, while clubs offer a later and livelier option. Cafes that stay open late are available for those who prefer a quieter evening.
                        </p>
                        <p className="mt-2">
                            Weekends are generally busier, while streets away from the main tourist strip are quieter. You can keep the evening simple with dinner and a walk by the lake or spend it listening to live music.
                        </p>
                    </div>
                </div>

                {/* Festivals & Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Festivals & Traditions
                </h2>

                <SectionImage
                    src="/Image/26-tamu-lhosar-festival-pokhara-tangbo-vlog.jpg"
                    source="YouTube/Tangbo Vlog"
                    alt="Tamu Lhosar Festivals and Traditions in Pokhara"
                />

                <p className="mb-4 text-gray-700">
                    Dashain and Tihar are widely celebrated across Pokhara, with family gatherings, worship, decorations and community activities. Maghe Sankranti is another important festival, associated with seasonal change, food and family traditions.
                </p>

                <p className="mb-4 text-gray-700">
                    Pokhara's strong Gurung (Tamu) presence makes Tamu Lhosar an important celebration, with music, traditional dress, dancing and community gatherings. Tibetan Buddhist communities celebrate Losar with prayers, food, traditional dress and gatherings.
                </p>

                <p className="mb-6 text-gray-700">
                    Depending on when you visit, you may also see religious processions, temple celebrations and ceremonies at monasteries and local shrines.
                </p>

                {/* Plan Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Plan Your Visit
                </h2>

                <SectionImage
                    src="/Image/27-ganesh-temple-sarangkot-pokhara-nepal.jpg"
                    source="Rohit Upadhyay"
                    alt="Ganesh Temple Sarangkot Pokhara Nepal"
                />

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Best Time to Visit Pokhara</p>
                        <p>October to November and March to April are generally the best months for comfortable weather, clearer skies and mountain views. These months are also popular for trekking. December to February brings colder mornings and evenings, while higher trekking routes can be much colder. June to September is the monsoon season, with frequent rain, clouds and muddy roads or trails. The valley is greener and quieter during this period, but mountain views are less reliable. For trekking, spring and autumn are the better choices. For sightseeing, winter and the quieter monsoon months can also work if you are comfortable with changing weather. Check festival dates separately because they change each year.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Getting Around Pokhara</p>
                        <p>Lakeside is easy to explore on foot. For places farther away, taxis are the most convenient option, while local buses are cheaper but can take longer. Scooters and motorcycles can be rented if you are comfortable riding in Nepal. Cycling works well around Lakeside, Phewa Lake and quieter roads towards nearby villages. For places such as Begnas, Rupa, Sarangkot and Kaskikot, plan your transport in advance, particularly during rainy weather.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Currency & Payments</p>
                        <p>The currency is the Nepalese Rupee (NPR). Cash is useful for local shops, markets, taxis, small eateries and places outside Lakeside. Cards are accepted at many hotels, cafes and larger businesses, but not everywhere. ATMs are available in tourist areas, and authorized money changers can exchange foreign currency. Keep some smaller notes handy for short taxi rides, snacks, local transport and small purchases.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Local Etiquette</p>
                        <p>At temples and monasteries, dress modestly, keep your voice down and remove your shoes where required. Ask before photographing people, ceremonies or private spaces. A simple “Namaste” is a polite greeting. In villages, respect homes, farmland and private property, and stay on established paths. Keep public displays of affection modest around religious places and carry your rubbish with you.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Language</p>
                        <p>Nepali is the main language, while Gurung, Magar and Tibetan languages are also spoken in different communities. English is widely understood in tourist areas, and Hindi is useful for many Indian travellers. “Namaste” means hello while “Dhanyabad” means thank you.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Internet & Connectivity</p>
                        <p>Wi-Fi is widely available around Lakeside in hotels, cafes, restaurants and guesthouses. Local SIM cards and eSIMs can provide mobile data, although coverage becomes less reliable in hills, villages and higher trekking areas. Download maps, bookings and other important information before heading into the mountains.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Safety Tips</p>
                        <p>If you are renting a scooter or motorcycle, ride carefully and avoid unfamiliar hill roads after dark. Traffic can be unpredictable while rain can make roads slippery. For trekking and hiking, check the weather before setting out and carry enough water, suitable footwear and basic supplies. Conditions can change quickly in the hills, particularly during the monsoon. On longer or higher routes, follow local advice and use a guide where appropriate. For activities such as rafting, paragliding and boating, choose reputable operators and follow the safety instructions. Do not take unnecessary risks for photographs or views. Keep your belongings secure in crowded areas and avoid carrying large amounts of cash. At night, stay on well-used streets and use a reliable taxi if you are travelling farther from Lakeside.</p>
                    </div>
                </div>

                {/* Nearby Places to Explore */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nearby Places to Explore
                </h2>

                <SectionImage
                    src="/Image/28-ghandruk-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Ghandruk Nepal"
                />

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Bandipur</p>
                        <p>Bandipur is a small hill town between Pokhara and Kathmandu known for its old Newari houses, traditional buildings, small temples and mountain views. Walk around the old bazaar, visit the temples and if you have time, stay overnight to explore the surrounding hills.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Ghandruk</p>
                        <p>Ghandruk is a Gurung village in the Annapurna foothills, known for its stone houses, mountain views and walking trails. An overnight stay gives you time to explore the village, see local life and enjoy views towards Annapurna and Machhapuchhre.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Sikles</p>
                        <p>Sikles is a traditional Gurung village northeast of Pokhara with stone-paved paths, traditional houses and views of the Annapurna range. It is best suited to an overnight stay, with village walks and Gurung culture forming the main experience.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Ghale Gaun</p>
                        <p>Ghale Gaun is a Gurung village in the Lamjung hills, known for traditional houses, mountain views and homestays. Staying overnight gives you time to walk through the village, try traditional food and experience local life at a slower pace.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Panchase</p>
                        <p>Panchase offers forests, villages, walking trails and mountain views without requiring a long trek. You can visit as a day trip or stay overnight with Panchase Dham adding a religious element to the visit.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Dhampus</p>
                        <p>Dhampus is a Gurung village in the Annapurna foothills with stone houses, village paths and views towards Annapurna and Machhapuchhre. It works well as a day trip or one-night stay for travellers looking for a short mountain escape.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Australian Camp</p>
                        <p>Australian Camp is a small settlement in the Annapurna foothills with wide mountain views and easy walking routes. An overnight stay gives you more time to walk through the surrounding forests and villages and see the mountains in the early morning and evening.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Annapurna Base Camp</p>
                        <p>The Annapurna Base Camp (ABC) Trek takes you through mountain villages, forests and the Annapurna foothills before reaching the base camp. It is a multi-day trek with Pokhara commonly used to prepare, arrange transport and collect supplies before heading into the mountains.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Annapurna Circuit</p>
                        <p>The Annapurna Circuit is a longer journey around the Annapurna massif, passing through different landscapes and communities before reaching the Thorong La Pass. It needs proper preparation and several days, with Pokhara often used to arrange transport, guides, permits and other trekking requirements. If you have around two weeks or more, it can become the main adventure of your Nepal trip.</p>
                    </div>
                </div>

                <SectionImage
                    src="/Image/29-pokhara-nepal-aerial-view.jpg"
                    source="Wikimedia Commons"
                    alt="Pokhara Nepal Aerial View"
                />

                <p className="mb-4 text-gray-700">
                    Pokhara is the kind of place where you can make your day as busy or as slow as you want. You can spend the morning outdoors, stop for a local meal, walk through older parts of the city, sit by the water in the afternoon and still have plenty to see when evening arrives.
                </p>

                <p className="mb-4 text-gray-700">
                    What makes the city worth more than a quick stop is the mix of quiet corners, busy streets, local communities, old religious sites, lakes, forests and hill roads. Give yourself more time and the journey can continue into the surrounding villages or deep into the Annapurna region.
                </p>

                <p className="mb-6 text-gray-700">
                    You may arrive in Pokhara because you want to see the Himalayas. Stay a little longer, and you start noticing everything that happens between the mountains and the city. That is where Pokhara becomes more than a stop on a Nepal itinerary, it becomes a place you actually get to experience.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions About Pokhara Nepal
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. What is Pokhara famous for?</p>
                        <p className="mt-2">Pokhara is known for Phewa Lake, Himalayan mountain views, Lakeside, caves, waterfalls, temples, monasteries and outdoor activities. It is also one of the main bases for exploring the Annapurna region.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. How many days should I spend in Pokhara?</p>
                        <p className="mt-2">Three to four days is a good starting point for exploring Pokhara. Add extra days if you want to include nearby villages, outdoor activities or a Himalayan trek.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What are the best places to visit in Pokhara?</p>
                        <p className="mt-2">Phewa Lake, World Peace Pagoda, Pumdikot, Davis Falls, Gupteshwor Mahadev Cave, International Mountain Museum, Bindhyabasini Temple and Matepani are among the main places to visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. When is the best time to visit Pokhara?</p>
                        <p className="mt-2">October to November and March to April are generally the best months for clear mountain views, comfortable weather and trekking. Winter is good for sightseeing, while the monsoon brings more rain and cloud.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Can I visit Pokhara during the monsoon?</p>
                        <p className="mt-2">Yes, but expect frequent rain, cloudy mountain views and wet or muddy trails. The valley is greener and usually quieter, but monsoon is less suitable for long treks and activities that depend on clear weather.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Can you see the Himalayas from Pokhara?</p>
                        <p className="mt-2">Yes. On clear days, you can see Machhapuchhre (Fishtail), Annapurna South and other peaks of the Annapurna range from several viewpoints around Pokhara.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. What are the best things to do in Pokhara besides sightseeing?</p>
                        <p className="mt-2">You can go boating, kayaking, rafting, paragliding, hiking, cycling, mountain biking, birdwatching or camping. Pokhara is also a starting point for several Himalayan treks.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Is Pokhara a good base for trekking?</p>
                        <p className="mt-2">Yes. Pokhara is an important base for trekking in the Annapurna region, with routes ranging from shorter treks to longer journeys such as Annapurna Base Camp and the Annapurna Circuit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What food should I try in Pokhara?</p>
                        <p className="mt-2">Try dal bhat, Thakali food, Newari dishes, momo and thukpa. Sel roti and other local snacks are also worth trying, while Lakeside has Nepali, Tibetan and international food.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Where is the nightlife in Pokhara?</p>
                        <p className="mt-2">Lakeside is the main nightlife area, with live music, pubs, bars, late-night cafes and clubs. Weekend evenings are generally busier than quieter nights during the week.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. How do I get around Pokhara?</p>
                        <p className="mt-2">You can walk around Lakeside, use taxis for places farther away and take local buses to surrounding areas. Bicycles, scooters and motorcycles are also options for exploring the valley.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Can I use cards and ATMs in Pokhara?</p>
                        <p className="mt-2">Yes. Many hotels, cafes and larger businesses accept cards, particularly around Lakeside. Cash is still useful for taxis, local shops, markets, smaller eateries and places outside the main tourist areas.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. What currency should I carry in Pokhara?</p>
                        <p className="mt-2">The Nepalese Rupee (NPR) is the local currency. Keep some smaller notes for everyday expenses and use cards where they are accepted.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. Is Pokhara safe for tourists?</p>
                        <p className="mt-2">Pokhara is generally easy to travel around, but take care on hill roads, trekking routes and around outdoor activities. Check weather conditions and use reputable operators for activities such as rafting and paragliding.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. What places can I visit from Pokhara?</p>
                        <p className="mt-2">For a longer stay, you can travel to Bandipur, Ghandruk, Sikles, Ghale Gaun, Panchase, Dhampus and Australian Camp. With more time, Pokhara can also be the starting point for the Annapurna Base Camp Trek or Annapurna Circuit.</p>
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

export default Pokhara;