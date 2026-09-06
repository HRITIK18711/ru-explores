import React from "react";

const SectionImage = ({ src, source, alt = "Mustang Nepal" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        {source && <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>}
    </div>
);

const Mustang = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Mustang Nepal: Complete Travel Guide to Places, Culture & Things to Do
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/01-tsarang-chorten-charang-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Tsarang Chorten Charang Mustang Nepal"
                />

                <p className="mb-4 text-gray-700">
                    Mustang begins where Nepal's green valleys start giving way to dry mountain slopes, wide valleys and small patches of farmland. The Kali Gandaki runs through the region with high mountains rising on both sides. Villages such as Marpha, Tukuche and Kagbeni carry strong Thakali traditions while Upper Mustang reflects the culture of the former Kingdom of Lo. Whitewashed houses, stone walls, monasteries, prayer flags and fields of barley and buckwheat are part of everyday life here. Further north, Lo Manthang brings together old palaces, monasteries and the remains of Mustang's royal past.
                </p>

                <p className="mb-6 text-gray-700">
                    This journey brings together mountain scenery, local food, old trade routes and a culture that is still closely connected to Nepal.
                </p>

                {/* Mustang at a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Mustang at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-upper-mustang-nepal.jpg"
                    alt="Upper Mustang Nepal"
                />

                <div className="overflow-x-auto mb-8">
                    <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
                        <thead className="bg-gray-100 font-semibold text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 border-r border-gray-200">Category</th>
                                <th className="px-4 py-3">Details</th>
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
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">District Headquarters</td>
                                <td className="px-4 py-2">Jomsom</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Area</td>
                                <td className="px-4 py-2">3,573 sq. km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Elevation</td>
                                <td className="px-4 py-2">Approximately 1,300 m to 8,167 m</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Best Time to Visit</td>
                                <td className="px-4 py-2">March to May and September to November; Upper Mustang is also suitable during the monsoon</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Ideal Duration</td>
                                <td className="px-4 py-2">5–7 days for Lower Mustang; 10–14 days or more for Upper Mustang</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Famous For</td>
                                <td className="px-4 py-2">Kali Gandaki Valley, Lo Manthang, ancient monasteries, cave settlements, Muktinath, apple-growing villages and Tibetan-influenced culture</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Conservation Area</td>
                                <td className="px-4 py-2">Annapurna Conservation Area</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Nearest Airport</td>
                                <td className="px-4 py-2">Jomsom Airport</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Main River</td>
                                <td className="px-4 py-2">Kali Gandaki</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Languages</td>
                                <td className="px-4 py-2">Nepali, Thakali, Lhopa/Lowa and other local languages</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Currency</td>
                                <td className="px-4 py-2">Nepalese Rupee (NPR)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium bg-gray-50 border-r border-gray-200">Time Zone</td>
                                <td className="px-4 py-2">Nepal Time (UTC +5:45)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Why Mustang Feels Different */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Mustang Feels Different
                </h2>

                <SectionImage
                    src="/Image/03-walled-city-of-lo-manthang-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Walled City of Lo Manthang Mustang Nepal"
                />

                <p className="mb-4 text-gray-700">
                    There is a mystic peace around Mustang. The roads pass through wide valleys, small villages and long stretches of open land but the mountains remain a constant part of the view. The strong wind moves through the Kali Gandaki valley. Travel in Mustang feels closely connected to the places you pass through. People still work around the seasons, farms and animals while travellers share the same roads, tea houses and village spaces. Even the way houses are built reflects the conditions of the region.
                </p>

                <p className="mb-6 text-gray-700">
                    In the villages, you see fields, stone walls, old houses and monasteries alongside new roads and guest houses. That mix of dramatic landscape and everyday village life is what makes travelling through Mustang feel different from many other mountain destinations in Nepal.
                </p>

                {/* Places to Visit in Lower Mustang */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Lower Mustang
                </h2>

                <p className="mb-6 text-gray-700">
                    Lower Mustang is the easier way to experience the region with no Upper Mustang restricted area permit required. The road follows the Kali Gandaki through some of the most scenic parts of the valley, moving from the green surroundings towards the dry, rugged landscape around Kagbeni and Muktinath. You can experience the journey by motorcycle, 4x4 car or a mix of road travel and short walks, stopping at villages, monasteries, orchards and viewpoints along the way.
                </p>

                {/* Tatopani to Lete to Kowang */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Tatopani to Lete to Kowang</h3>
                <SectionImage
                    src="/Image/04-hot-spring-tatopani-gandaki-province-nepal.jpg"
                    source="Wikipedia"
                    alt="Tatopani Hot Spring Gandaki Province Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Tatopani is where you can take a proper break on the road from Pokhara. The name itself means “hot water” and the village is known for its natural hot springs. After a long ride, sitting in the warm water is a welcome change especially before taking on the rougher mountain road ahead. The road also passes Rupse Waterfall, one of the memorable sights on this stretch.
                </p>
                <p className="mb-4 text-gray-700">
                    Further north, you reach Lete where the scenery starts changing noticeably. Forests, fields and streams still surround parts of the valley while the dry mountain slopes ahead give you a first taste of the Mustang landscape.
                </p>
                <p className="mb-6 text-gray-700">
                    Kowang comes next along the Kali Gandaki. It is a small Thakali village and part of the traditional Thak Khola villages of Lower Mustang. The surrounding mountains and old settlement give you a feel for this part of the valley. Here, just enjoy the surroundings and keep moving towards Tukuche.
                </p>

                {/* Tukuche */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Tukuche</h3>
                <SectionImage
                    src="/Image/05-sambha-gompa-tukuche-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Sambha Gompa Tukuche Nepal"
                />
                <p className="mb-6 text-gray-700">
                    By the time you reach Tukuche, it is worth putting the brakes on here. This old Thakali village grew along the historic Kali Gandaki trade route and still has its white-plastered houses and old village aura. Walk through the old village of Tukuche and visit Qpar Gompa, Rani Gompa and Sambha Gompa. If you have more time, the Tukuche Toga Museum and Thak Library offer a look at the area's history and heritage. The Tukuche Distillery is connected with the village's apple products while Jhongo Apple Orchard, Manchin Khola and Ghindung give you a reason to explore a little beyond the main settlement. Tukuche is also a good place to stay overnight if you are travelling from Pokhara by bike or car. Starting early gives you enough time for Tatopani and Rupse Waterfall, Lete and Kowang can be enjoyed along the drive.
                </p>

                {/* Marpha */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Marpha</h3>
                <SectionImage
                    src="/Image/06-marpha-gompa-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Marpha Gompa Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Leave Tukuche early and head towards Marpha. The drive is short enough and this is the place where simply walking around is the better way to see it. Marpha is known for its whitewashed houses, stone-paved lanes and apple orchards. The Samten Choling Gompa (Marpha Monastery) is worth a walk up from the village. It sits slightly above the houses and gives you a good view back over Marpha and the valley. Around the monastery are smaller chortens. The monastery itself has Buddhist paintings and images and remains an important religious place in the village.
                </p>
                <p className="mb-4 text-gray-700">
                    Marpha's apple orchards are everywhere around the village and are closely tied to local life. Apples are used for several local products including cider and brandy.
                </p>
                <p className="mb-6 text-gray-700">
                    If you have enough time, walk south from Marpha to Chhairo Gompa. It is roughly a 20–30 minute walk and takes you to a peaceful part of the valley across the Kali Gandaki. The old monastery and village is associated with the Nyingma tradition and is considered one of the oldest Nyingma monasteries in Mustang.
                </p>

                {/* Jomsom */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Jomsom</h3>
                <SectionImage
                    src="/Image/07-dhumba-lake-jomsom-mustang-nepal.jpg"
                    alt="Dhumba Lake Jomsom Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Marpha, the road takes you to Jomsom, the administrative centre of Mustang and one of the main stops on the journey. Jomsom has hotels, restaurants, shops and the airport, so it is a practical place to rest and prepare for the road ahead.
                </p>
                <p className="mb-4 text-gray-700">
                    The Mustang Eco Museum is a good place to understand the region's people, culture and natural environment. Jomsom Bon Monastery gives you a look at the Bon tradition that is still followed in parts of Mustang. For a little more exploration cross towards Thini, one of the old settlements around Jomsom. Its stone houses, fields, chortens and mani walls give it a very different feel from the busier town. The Thini Gompa is the main religious site and the old Kot Ghar associated with the village's earlier history and weapons, is another interesting stop.
                </p>
                <p className="mb-4 text-gray-700">
                    From Thini, continue towards Dhumba Lake, about five kilometres west of Jomsom. The small blue lake lies below Nilgiri and is considered sacred. Local religious traditions are closely connected with its water. Above the lake is Kuchup Terenga Gompa, a Nyingma monastery with old religious images and murals. From the monastery you get wide views towards Jomsom, Thini, Syang and Marpha.
                </p>
                <p className="mb-6 text-gray-700">
                    Another nearby village worth considering is Syang, which has two monasteries, Syang Gompa (Tashi Lha Khang) and Ani Gompa (Dhi Che Ling). If you have time for another short walk, the ruins of Gharab Dzong can be reached through Thini. The old fort is linked with the history of the Thini rulers and gives you another glimpse into the older political history of this valley. From here, the road towards Muktinath takes you into another important part of Lower Mustang.
                </p>

                {/* Lupra to Kagbeni to Jharkot */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Lupra to Kagbeni to Jharkot</h3>
                <SectionImage
                    src="/Image/08-kag-chode-monastery-kagbeni-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Kag Chode Monastery Kagbeni Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Jomsom, go to Lupra where Mustang's old Bon tradition is still visible. The main reason to come here is Yungdung Phuntsok Ling, an old Bon monastery with wall paintings and statues. Around the village, you will find traditional houses and chortens. The old walnut tree and cliffs around the village are also worth seeing and local homestays offer a chance to experience village life if you have more time.
                </p>
                <p className="mb-4 text-gray-700">
                    From Lupra, return to the main road and continue towards Kagbeni which is the meeting point of the Kali Gandaki and Jhong rivers and is also the route towards Upper Mustang. Walk through the old village where mud-brick houses, narrow lanes, chortens and traditional buildings are packed closely together. The main place to visit is Kag Chode Thupten Samphel Ling Monastery, an important Buddhist monastery with old murals and religious objects.
                </p>
                <p className="mb-6 text-gray-700">
                    From Kagbeni, the road climbs towards Jharkot, a traditional village on the way to Muktinath. It is worth getting out and walking through its old stone lanes where the remains of the old fort still tell something of the village's earlier importance. The main landmarks here are the Kani Chorten and Jharkot Monastery also known as Ngor Gompa or Jhar Chode. The monastery follows the Sakya tradition and remains an active place of worship for the surrounding communities. From the village, you also get good views across the Muktinath Valley.
                </p>

                {/* Muktinath */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Muktinath</h3>
                <SectionImage
                    src="/Image/09-muktinath-temple-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Muktinath Temple Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Jharkot, continue towards Muktinath, one of the most important stops in Lower Mustang. The Muktinath temple sits at around 3,710 metres and is sacred to both Hindus and Buddhists. Hindus worship it as a shrine of Lord Vishnu and Buddhists know it as Chumig Gyatsa or “Hundred Waters”. Start with Muktinath Temple, the 108 Muktidhara water spouts behind it and the Mukti Kunda and Lakshmi-Saraswati Kunda in front. Nearby, Jwala Mai Temple inside Dhola Mebar Gompa is known for its continuously burning flame. Mharme Lha Khang Gompa associated with Guru Rinpoche is another important Buddhist site. The religious story of Muktinath also connects with the Kali Gandaki and Shaligram, the sacred stones found in the river and worshipped by Hindus as a form of Vishnu.
                </p>
                <p className="mb-6 text-gray-700">
                    After Muktinath, make your way back towards Kagbeni, from where we begin the Upper Mustang route.
                </p>

                {/* Places to Visit in Upper Mustang */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Visit in Upper Mustang
                </h2>

                <p className="mb-6 text-gray-700">
                    After exploring Lower Mustang, return to Jomsom and prepare for the next part of the journey. Upper Mustang is a restricted area, so foreign travellers need a special permit and must travel with a licensed guide through a registered trekking agency. The permit should be arranged before entering the restricted area. Kagbeni is the entry checkpoint where it is checked. Once you cross Kagbeni, the road takes you deeper into the dry valleys, old villages, caves and monasteries of Upper Mustang.
                </p>

                {/* Tangbe */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Tangbe</h3>
                <SectionImage
                    src="/Image/10-thangbe-chortens-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Thangbe Chortens Mustang Nepal"
                />
                <p className="mb-6 text-gray-700">
                    After Kagbeni, the road continues to Tangbe, a small village that is easy to pass without stopping but worth a short walk if you have the time. Its whitewashed houses, narrow lanes, cultivated fields and apple orchards give the village a simple, traditional feel. Look out for the red, white and black chortens around the settlement and the old fortress ruins on the upper side of the village.
                </p>

                {/* Chhusang, Chele, Tetang and Ghyakar */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Chhusang, Chele, Tetang and Ghyakar</h3>
                <SectionImage
                    src="/Image/11-caves-of-chhusang-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Caves of Chhusang Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Tangbe, the road takes you to Chhusang, where the Narshing River joins the Kali Gandaki. This is the place worth stopping the vehicle and walking around. The old mud-and-stone houses sit below red, orange and grey cliffs and you can see farmland and old cave dwellings cut into the rock. The Thagsing Grangma caves are among the main things to see here. Look up at the red cliffs for Minchi Lhwang Monastery, built inside a cave. Local families still look after the monastery and continue daily worship here. The statues are believed to be more than 1,200 years old, although their exact age is uncertain. Gompa Gang, also called Convent Ridge is another old religious site in the area.
                </p>
                <p className="mb-4 text-gray-700">
                    Continue towards Chele after crossing the Kali Gandaki. The road itself is interesting here, passing below cliffs filled with old cave dwellings and rows of openings. In Chele, take a short walk through the mud-and-stone houses, narrow lanes and terraced fields. Chortens and prayer flags are scattered around the village and the cliffs give you wide views towards the Kali Gandaki gorge.
                </p>
                <p className="mb-4 text-gray-700">
                    Tetang is worth the extra time. It is an old fortified village with large mud-and-stone houses, terraced fields and colourful chortens. At the northern end, you can see the remains of Tetang Dzong along with Tetang Monastery and a long mani wall. There are also caves in the cliffs above the village. Look closely at the older houses and you will notice small holes in their walls, once used for wooden scaffolding.
                </p>
                <p className="mb-6 text-gray-700">
                    You can also visit Ghyakar by crossing a suspension bridge over a gorge. Compared with the dry slopes around it, Ghyakar has more greenery with fields and houses gathered around the village.
                </p>

                {/* Samar, Syanboche, Ghiling and Ghami */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Samar, Syanboche, Ghiling and Ghami</h3>
                <SectionImage
                    src="/Image/12-ghami-chorten-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Ghami Chorten Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Ghyakar, continue towards Samar, a small village with green fields and trees standing out against the dry hills of Upper Mustang. The village has traditional houses, chortens and mani walls and the main reason to spend more time around here is Ranchung Chungsi Cave, located on the route between Samar and Syangboche. This natural cave is an important Buddhist pilgrimage site and is traditionally linked with Guru Rinpoche (Padmasambhava) who is believed to have meditated here. A small monastery stands above the cave. Inside, you can see Buddhist images, chortens and naturally formed figures that are regarded as sacred.
                </p>
                <p className="mb-4 text-gray-700">
                    Reaching Chungsi Cave means taking a separate trail through the canyon, so plan the stop according to the time you have.
                </p>
                <p className="mb-4 text-gray-700">
                    From Samar, the road climbs through the Bhena La and Yamda La area before reaching Syanboche. It is a small stop with a few houses and lodges but there is one place here that is worth looking for, Rangchyung Chorten, an ancient Buddhist shrine considered sacred by the local people. Some traditions describe the chorten as self-manifested.
                </p>
                <p className="mb-4 text-gray-700">
                    From Syanboche, continue to Ghiling. This is a larger village with barley fields, stone-and-mud houses, chortens and mani walls spread across the valley. The main place to visit is Thrangu Tashi Choling Monastery, an important Buddhist monastery of the Kagyu tradition. The monastery along with the fields and old village around it, is worth some time before you leave for Ghami.
                </p>
                <p className="mb-6 text-gray-700">
                    Ghami is another place where you should get out and walk. The village has fields, trees, old houses, colourful chortens, prayer walls and a communal water tap. The big attraction here is the Ghami Mani Wall, a 305-metre-long wall covered with carved Buddhist prayer stones, regarded as the longest mani wall in Mustang. Large chortens stand beyond the wall with the grey, ochre and red cliffs behind them. Inside Ghami, you can also visit Ghami Shedrub Dhargey Ling Monastery, an important Buddhist centre belonging to the Sakya School.
                </p>

                {/* Tange */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Tange</h3>
                <SectionImage
                    src="/Image/13-tange-chorten-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Tange Chorten Mustang Nepal"
                />
                <p className="mb-6 text-gray-700">
                    From the Ghami side, head towards Tange. It is a small village surrounded by terraced barley fields and the dry, sculpted hills of eastern Mustang. The village is best explored on foot, especially around its old religious structures. You will notice the long mani walls and large chortens running through the village. Among them, the Raja Chorten and Rani Chorten stand out. Their shapes and details are different and some of the older chortens still have faded frescoes inside. There is also a lhato wall and smaller chortens while the mani stones carry old Buddhist carvings and inscriptions.
                </p>

                {/* Dhamkar, Lo Gekar Gompa, Saukre and Tsarang */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Dhamkar, Lo Gekar Gompa, Saukre and Tsarang</h3>
                <SectionImage
                    src="/Image/14-dhamkar-caves-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Dhamkar Caves Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Ghami, another route continues towards Dhamkar, where the red cliffs immediately change the look of the valley. The village has old mud-and-stone houses, fields, chortens and caves in the surrounding rocks. Local stories connect these cliffs with Guru Rinpoche (Padmasambhava) and his fight with a demon. It is a small village, so a short walk is enough to see its main sights.
                </p>
                <p className="mb-4 text-gray-700">
                    A little farther on is Lo Gekar Gompa, also known as Ghar Gompa. It is one of the oldest monasteries in Mustang and is traditionally linked with Guru Rinpoche. Inside, you can see old murals, statues, rock carvings and carved mani stones. There are also large chortens and natural springs around the monastery. This is one place where it is worth taking your time rather than just stopping for a photograph.
                </p>
                <p className="mb-4 text-gray-700">
                    The road then passes through Saukre, a small settlement on the way to Tsarang.
                </p>
                <p className="mb-6 text-gray-700">
                    Tsarang deserves more time. The Tsarang Dzong and Samdrup Gedphel Palace stand on the hill while the palace still has religious images and objects connected with the area's royal history. Nearby, Thubten Shedrup Dhagyeling Monastery has old murals, thangkas, sculptures and Buddhist manuscripts and is one of the important monasteries in this part of Mustang. Before leaving this stretch, look for the Sungda Chorten, another old Buddhist monument along the route.
                </p>

                {/* Yara and Luri Gumba */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Yara and Luri Gumba</h3>
                <SectionImage
                    src="/Image/15-luri-gompa-yara-mustang-nepal.jpg"
                    alt="Luri Gompa Yara Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Tsarang, head towards Yara, a small village surrounded by the dry cliffs and open valleys of Upper Mustang. The village is known for its old houses, fields and caves cut into the cliffs above the settlement. These caves are one of the reasons to stop here, as many of them were once used as homes, meditation spaces and burial places.
                </p>
                <p className="mb-6 text-gray-700">
                    The main attraction around Yara is Luri Gumba, one of the most unusual monasteries in Upper Mustang. It is built high inside a cliff and is reached by a trail from the village. The walk takes some effort but the setting alone makes it worthwhile. Luri Gumba has two parts, Luri Gumba I and Luri Gumba II with caves and old Buddhist paintings and statues around them. The main cave shrine is especially important for its ancient murals, statues and carved details.
                </p>

                {/* Lo Manthang */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Lo Manthang</h3>
                <SectionImage
                    src="/Image/16-lo-manthang-royal-palace-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Lo Manthang Royal Palace Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    After the long drive through Upper Mustang, Lo Manthang feels like a place where you should stop rushing. This was the capital of the former Kingdom of Lo and the old town still sits behind its earthen walls and square towers. Walk through the narrow lanes and you will find old houses, courtyards, chortens and prayer walls all packed into the settlement. The old town is also known as the Medieval Earthen Walled City of Lo Manthang.
                </p>
                <p className="mb-4 text-gray-700">
                    Inside the old town, make time for its three main monasteries, Jampa Lhakhang, Thubchen Lhakhang and Chode Lhakhang. Jampa and Thubchen date back to the 15th century, while Chode was built later. The former Royal Palace is another important stop and gives you a glimpse into Lo Manthang's royal past.
                </p>
                <p className="mb-6 text-gray-700">
                    If you have time, go beyond the main town to Thinggar (Thingkar) in the nearby Chhonhup Valley. Its Thingkar Palace was once the summer residence of the kings of Lo. There is also a village monastery and remains of two old Bon monasteries in the area. Lo Manthang is the base for the Upper Mustang Trek. This gives you the chance to explore the surrounding valleys, villages, monasteries and landscapes on foot rather than seeing them only from the road.
                </p>

                {/* Chhoser */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Chhoser</h3>
                <SectionImage
                    src="/Image/17-jhong-cave-chhoser-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Jhong Cave Chhoser Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    From Lo Manthang, continue towards Chhoser. This valley is known for its cliffs, caves and small villages and you should give it more time than a quick roadside stop. The main attraction is Shija Jhong also called Jhong Cave. The cave complex is cut into an ochre-coloured cliff and spreads across five storeys, with around 40 rooms connected by narrow passages, stairs and wooden ladders. Some of the upper rooms open towards the Chhoser Valley, giving you a good sense of how people once lived inside these cliffs.
                </p>
                <p className="mb-6 text-gray-700">
                    There is more to Chhoser than Jhong Cave. Nyiphuk (Niphu) Gompa is built into the cliffs while Garphu Gompa is another cave monastery in the valley. If you have enough time, also look for Rinchenling, known for its old mandala paintings and Kunchokling, which is noted for its striking landscape. The wider area also includes Garphu, Nyiu, Samjhong and Shija villages, so it is better to keep a good part of the day for Chhoser rather than trying to squeeze it into a short stop.
                </p>

                {/* Damodar Kunda */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Damodar Kunda</h3>
                <SectionImage
                    src="/Image/18-damodar-kund-mustang-nepal.jpg"
                    alt="Damodar Kund Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    If you want to go beyond the main Upper Mustang route, Damodar Kunda is one of the most demanding places on this journey. At around 4,890 metres, it is a group of sacred high-altitude lakes in the Damodar Himal close to the Tibetan border. The landscape here is stark and wide open, with high mountain valleys all around.
                </p>
                <p className="mb-4 text-gray-700">
                    For Hindus, the lakes are associated with Lord Vishnu in his Damodar form. The site is also important to Buddhist pilgrims. Janai Purnima is an especially important time here, when devotees come for ritual bathing.
                </p>
                <p className="mb-6 text-gray-700">
                    This is not a place to add casually to a road-trip itinerary. Getting to Damodar Kunda involves high passes and rough, remote terrain and it lies within the restricted Upper Mustang area. The journey is therefore as much an expedition into Mustang's remote highlands as it is a visit to a sacred lake.
                </p>

                {/* Things to Do in and around Mustang */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Things to Do in and around Mustang
                </h2>

                <SectionImage
                    src="/Image/19-kali-gandaki-river-bed-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Kali Gandaki River Bed Mustang Nepal"
                />

                <div className="space-y-6 text-gray-700 mb-8">
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Trek through the Mustang landscape</h4>
                        <p className="mt-1">
                            Walking remains the most immersive way to experience Mustang. The pace lets you notice the changing terrain, from the Kali Gandaki valley and windswept cliffs to cultivated fields and quiet mountain villages. It also gives you more opportunities to interact with local people, mountain culture and experience everyday life beyond the main road.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Take a 4×4 car journey through the region</h4>
                        <p className="mt-1">
                            A 4×4 drive is a practical choice for travellers who want to cover more of Mustang without committing to a long trek. The road itself becomes part of the experience with dusty tracks, rough stretches, river crossings, deep valleys and constantly changing views. It is also a good option for combining several parts of Mustang within a shorter trip.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Ride through Mustang on a motorcycle</h4>
                        <p className="mt-1">
                            For experienced riders, a motorcycle journey adds a different sense of adventure. You are more exposed to the wind, altitude and terrain but also get a greater sense of travelling through the landscape rather than simply passing through it. The rough roads and changing conditions mean this is best suited to riders comfortable with high-altitude mountain routes.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Spend time in Mustang’s villages</h4>
                        <p className="mt-1">
                            Don't make the mistake of treating the villages as quick stops between attractions. Walk through the lanes, observe farming and local routines, stay in locally run accommodation where possible and take time to speak with residents. Much of Mustang's appeal lies in its living culture, not just its historic monuments.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Experience Mustang’s Buddhist culture</h4>
                        <p className="mt-1">
                            Prayer wheels, mani walls, monasteries, festivals and everyday religious practices are woven into life across the region. Take time to understand these traditions rather than treating religious sites simply as photo stops. If your trip coincides with a major festival such as Tiji, experiencing it in person adds another dimension to the journey.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Photograph the landscape and give it time</h4>
                        <p className="mt-1">
                            Mustang rewards travellers who slow down. The changing colours of the cliffs, broad valleys, riverbeds, high passes, villages and mountain views create very different scenes through the day. Sunrise, late afternoon and the quieter stretches between settlements can be particularly rewarding.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Travel slowly when you can</h4>
                        <p className="mt-1">
                            The best Mustang experience is not necessarily the one that covers the most ground. Whether you are trekking, driving a 4×4 car or riding a motorcycle, leave some time to stop, walk around, explore beyond the obvious sights and simply take in the landscape. That slower pace is what allows Mustang to feel like a journey rather than a checklist.
                        </p>
                    </div>
                </div>

                {/* Culture, Food, Festivals and Local Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Culture, Food, Festivals and Local Traditions
                </h2>

                <SectionImage
                    src="/Image/20-ranchung-chungsi-cave-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Ranchung Chungsi Cave Nepal"
                />

                <p className="mb-4 text-gray-700">
                    Mustang has a culture that changes as you travel through the district. Thakali culture is especially strong in the lower Kali Gandaki region while Upper Mustang has a deep Tibetan Buddhist influence. You will see this in the monasteries, prayer wheels, mani walls, chortens and in the way religious practices are part of everyday life.
                </p>

                <p className="mb-6 text-gray-700">
                    Village life is closely linked to farming and livestock. Barley, buckwheat, wheat and potatoes are among the crops grown in Mustang while apples and other fruits are important in the lower valleys. The short growing season and limited water mean that farming here is very different from the plains.
                </p>

                {/* Food */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Food</h3>
                <SectionImage
                    src="/Image/21-thakali-food-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Thakali Food Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Food in Mustang is simple, filling and suited to the cold mountain climate. Thakali dal bhat is the best-known local meal and usually comes with rice, lentils, vegetables, pickles and other side dishes. In Upper Mustang, you will also find momo, thukpa, Tibetan bread and buckwheat-based dishes.
                </p>
                <p className="mb-6 text-gray-700">
                    The lower Mustang villages are particularly known for their apples, apricots and pears. Marpha is famous for its apple products including dried apples, juice, jams and locally made apple brandy. Food can become more basic as you travel into the higher and more remote parts of Mustang, so it is worth trying local dishes wherever you stay.
                </p>

                {/* Festivals */}
                <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Festivals</h3>
                <SectionImage
                    src="/Image/22-tiji-festival-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Tiji Festival Mustang Nepal"
                />
                <p className="mb-4 text-gray-700">
                    Festivals are an important part of Mustang's social and religious life. The best known is the Tiji Festival in Lo Manthang, a three-day Buddhist festival featuring masked dances, prayers and religious ceremonies. The festival is held according to the Tibetan lunar calendar, so its dates change every year.
                </p>
                <p className="mb-4 text-gray-700">
                    Yartung is another major festival particularly in the Mustang region and is known for horse racing, music and community celebrations. Losar, the Tibetan New Year, is also celebrated in Upper Mustang with prayers, family gatherings and traditional ceremonies.
                </p>
                <p className="mb-6 text-gray-700">
                    Remember that these are local religious and community events, not tourist shows. Dress respectfully at monasteries and festivals, ask before photographing people or ceremonies and follow local customs when entering religious places.
                </p>

                {/* Planning Your Visit to Mustang */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit to Mustang
                </h2>
                <SectionImage
                    src="/Image/23-chorten-gumba-charang-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Chorten Gumba Charang Mustang Nepal"
                />

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Best Time to Visit</p>
                        <p>March to May and September to November are the best months for Mustang. Spring brings pleasant days while autumn usually has the clearest mountain views. June to August can also work for Upper Mustang because it lies in the rain shadow, although rain around Pokhara and road conditions can still affect the journey. Winter is much colder and some higher areas have limited services.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">How to Reach Mustang</p>
                        <p>Most journeys start from Pokhara. You can fly to Jomsom or travel by road. The flight saves time but can be affected by weather while the road journey is slower but lets you see the landscape change as you move towards Mustang.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Permits for Upper Mustang</p>
                        <p>Lower Mustang does not need the Upper Mustang Restricted Area Permit. Foreign travellers going beyond Kagbeni need a Restricted Area Permit (RAP) and an Annapurna Conservation Area Permit (ACAP). As of 2026, the RAP costs US$50 per person per day. A licensed guide is still required, although the earlier minimum group requirement has been removed. Check the latest rules before travelling because permit conditions can change.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Days Do You Need to Explore Mustang</p>
                        <p>For Lower Mustang, 4–6 days is enough for a good trip. If you are going into Upper Mustang, plan around 10–14 days, especially if you want to explore the villages rather than simply drive through them. Road conditions, altitude and stops along the way can make the journey slower than it looks on a map.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Stay in Mustang</p>
                        <p>Jomsom and Marpha have more comfortable hotels and lodges, although all the villages on the route have comfortable home stays. Farther into Upper Mustang, accommodation becomes simpler, with small lodges and locally run guest houses. During busy months, booking ahead is a good idea.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">What to Pack for Mustang</p>
                        <p>Carry warm layers, a windproof jacket, comfortable walking shoes, sunglasses, sunscreen, a reusable water bottle, personal medicines, basic first-aid supplies and a power bank. If you are trekking, you will need additional trekking gear. Do not underestimate the wind, it can make Mustang feel much colder than the temperature suggests.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Altitude</p>
                        <p>Altitude matters in Mustang. Jomsom is already at a high elevation and Upper Mustang goes much higher, so avoid rushing between places. Give yourself time to adjust, drink enough water and pay attention to how you feel. Headache, nausea, dizziness or unusual tiredness should not be ignored. If symptoms become serious, descending is more important than following the itinerary.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Travel Budget</p>
                        <p>Mustang can be affordable if you travel simply and share transport. Keep around NPR 35,000–40,000 per person as a starting budget for basic accommodation, food and shared road transport. A private vehicle will increase the cost. Upper Mustang costs more, mainly because of the Restricted Area Permit (RAP), Annapurna Conservation Area Project (ACAP) permit, a licensed guide and transport. The current Upper Mustang permit is US$50 per person per day while a private 4×4 car can add considerably to the total. Sharing a vehicle with other travellers can bring the cost down.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Safety and Travel Tips</p>
                        <p>Mustang is remote and the road can be rough, particularly as you travel deeper into the mountains. Keep some extra time in your itinerary because weather, road conditions and unexpected delays can change your plans. If you are riding a motorcycle, be prepared for rough roads, strong winds, altitude and changing weather. By road, a 4×4 car is the more practical choice for travelling deeper into Mustang. If you are travelling by car or motorcycle, don't treat the mountain road like a normal highway. Take your time, especially around bends, river crossings and steep sections. Do not rush simply because two places look close on the map. Stay hydrated, give your body time to adjust and don't ignore symptoms such as headache, nausea, dizziness or unusual tiredness. If symptoms become serious, descending is more important than sticking to your itinerary.</p>
                    </div>
                </div>

                

                <SectionImage
                    src="/Image/24-mani-walls-ghami-mustang-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Mani Walls Ghami Mustang Nepal"
                />

                <p className="mb-4 text-gray-700">
                    Take your time in Mustang. Drive through the mountains, walk through the villages, stop for tea, talk to the locals and enjoy the views along the way. Some roads will be rough, the wind can be strong and the journey may take longer than expected. But that is part of the fun. One moment you are driving through a dry mountain valley and the next you are looking at an old village or a snow-covered peak in the distance. Mustang gives you plenty of moments like these.
                </p>

                <p className="mb-6 text-gray-700">
                    So pack well, keep your plans flexible and leave some room for adventure. The best memories here often come from the parts of the journey you did not plan.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions About Mustang Nepal
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. What is Mustang famous for?</p>
                        <p className="mt-2">Mustang is known for its dramatic mountain landscape, Tibetan-influenced culture, ancient monasteries, cave sites, historic villages and Lo Manthang. The region also has a long connection with the Kali Gandaki trade route and is known for its distinctive dry landscape.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. What is the best time to visit Mustang?</p>
                        <p className="mt-2">March to May and September to November are generally the best periods. Upper Mustang also remains relatively dry during the monsoon, making June to August possible for travellers who don't mind stronger winds and changing conditions.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. How many days are enough for Mustang?</p>
                        <p className="mt-2">For Lower Mustang, 4–6 days can give you a good introduction. For Upper Mustang, plan around 10–14 days, depending on whether you trek, drive or combine both.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Do I need a permit to visit Upper Mustang?</p>
                        <p className="mt-2">Yes. Upper Mustang is a restricted area, so foreign travellers need a Restricted Area Permit as well as the required conservation-area permit. A licensed guide is also required. Check the latest government rules before travelling because permit conditions can change.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Can I travel to Upper Mustang without a guide?</p>
                        <p className="mt-2">No. Foreign travellers entering the restricted Upper Mustang area still need to travel with a licensed guide, even though Nepal has changed some of its earlier group-permit requirements.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is Mustang suitable for first-time trekkers?</p>
                        <p className="mt-2">Yes, Upper Mustang can suit first-time trekkers who are reasonably fit, as the standard route does not involve technical climbing. The bigger challenges are altitude, long walking days, wind and rough terrain.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Can I explore Mustang by road?</p>
                        <p className="mt-2">Yes. 4×4 vehicles are widely used, particularly for travelling deeper into Mustang. Road conditions vary, so journeys can take longer than the distance on a map suggests.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Can I visit Mustang on a motorcycle?</p>
                        <p className="mt-2">Yes. Motorcycle trips are possible and can be a great option for experienced riders. Rough roads, altitude, strong winds and changing weather mean proper preparation is important.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What should I pack for Mustang?</p>
                        <p className="mt-2">Carry warm layers, a windproof jacket, comfortable walking shoes, sunglasses, sunscreen, personal medicines, a reusable water bottle and a power bank. Trekkers will need additional trekking gear depending on their route and season.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Is Mustang expensive to visit?</p>
                        <p className="mt-2">It depends on how you travel. Shared transport and simple accommodation can keep costs manageable, while private 4×4 vehicles, longer Upper Mustang trips and permits for foreign travellers increase the budget.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. Is Mustang very cold?</p>
                        <p className="mt-2">It can be. Days can feel pleasant under the sun but mornings, evenings and higher areas can become very cold, particularly outside the warmer months. Strong winds can also make it feel much colder.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Is Upper Mustang open during the monsoon?</p>
                        <p className="mt-2">Yes. Upper Mustang lies in the rain shadow of the Himalayas, so it receives much less monsoon rain than many other parts of Nepal. However, roads and flights connecting Mustang with Pokhara can still be affected by heavy rain elsewhere.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. What is the main town of Upper Mustang?</p>
                        <p className="mt-2">Lo Manthang is the historic centre of Upper Mustang and the former capital of the Kingdom of Lo. It is one of the region's main cultural and historical attractions.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. Is Muktinath in Upper Mustang?</p>
                        <p className="mt-2">No. Muktinath is in Lower Mustang, although it is commonly included in the same Mustang journey. It is one of the most important pilgrimage sites in the region and can be combined with a trip towards Upper Mustang.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. What food should I try in Mustang?</p>
                        <p className="mt-2">Try Thakali dal bhat, momos, thukpa and buckwheat-based dishes. Mustang is also known for its apples and apple products, particularly around Marpha.</p>
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

export default Mustang;