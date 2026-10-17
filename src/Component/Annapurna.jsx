import React from "react";

const SectionImage = ({ src, source, alt = "Annapurna Region Nepal" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const Annapurna = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Annapurna Region Nepal: The Complete Guide to Trekking, Adventure & Mountain Life
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <h3 className="text-xl font-bold mb-3 text-black">Annapurna Range</h3>

                <SectionImage
                    src="/Image/01-annapurna-range-nepal.jpg"
                    source="Wikipedia"
                    alt="Annapurna Range"
                />

                <p className="mb-4 text-gray-700">
                    The Annapurna Region is not a destination you experience from one viewpoint. It is a vast mountain landscape where the journey changes as you move through it. Green valleys give way to rhododendron forests, high mountain trails and the dry valleys of Manang and Mustang. Villages, rivers, mountain roads and old trading routes connect these very different landscapes.
                </p>

                <p className="mb-4 text-gray-700">
                    That variety is what makes Annapurna appeal to such a wide range of travellers. Trekkers come for routes such as the Annapurna Circuit, Annapurna Base Camp and Mardi Himal. Riders take on mountain roads, photographers follow changing landscapes and wildlife, while mountaineers come to a region shaped by some of the world's highest peaks.
                </p>

                <p className="mb-6 text-gray-700">
                    The experience also demands more from a traveller than simply reaching a viewpoint. Altitude, weather, distance and changing terrain become part of the journey itself. Understanding that difference is the key to exploring Annapurna well.
                </p>

                {/* Annapurna Region at a Glance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Annapurna Region at a Glance
                </h2>

                <SectionImage
                    src="/Image/02-upper-mustang-tangye.jpg"
                    source="Wikimedia Commons"
                    alt="Upper Mustang Tangye"
                />

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Detail</th>
                                <th className="border p-3 text-left">Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3 font-semibold">Location</td>
                                <td className="border p-3">Gandaki Province, central Nepal</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Main Gateway</td>
                                <td className="border p-3">Pokhara</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Protected Area</td>
                                <td className="border p-3">Annapurna Conservation Area</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Area</td>
                                <td className="border p-3">7,629 sq km</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Elevation Range</td>
                                <td className="border p-3">About 790 m to 8,091 m at Annapurna I</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Best Known For</td>
                                <td className="border p-3">Himalayan trekking, mountain landscapes, traditional villages, Mustang, Manang and adventure travel</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Major Trekking Routes</td>
                                <td className="border p-3">Annapurna Circuit, Annapurna Base Camp and Mardi Himal</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Other Major Places</td>
                                <td className="border p-3">Ghandruk, Ghorepani, Poon Hill, Manang, Tilicho Lake, Nar Phu, Jomsom, Marpha, Kagbeni, Muktinath and Upper Mustang</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Main Activities</td>
                                <td className="border p-3">Trekking, hiking, mountain photography, motorcycle travel, wildlife watching and cultural exploration</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Best Seasons</td>
                                <td className="border p-3">Spring (March–May) and autumn (September–November) for most trekking routes</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">High-Altitude Highlights</td>
                                <td className="border p-3">Tilicho Lake and Thorong La</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Highest Point in the Region</td>
                                <td className="border p-3">Annapurna I – 8,091 m</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Accommodation</td>
                                <td className="border p-3">Teahouses, lodges, guesthouses and hotels depending on the area</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Permits</td>
                                <td className="border p-3">Annapurna Conservation Area entry permit; TIMS and additional permits may apply depending on the route</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Travel Style</td>
                                <td className="border p-3">From short village hikes to demanding high-altitude treks and remote mountain journeys</td>
                            </tr>
                            <tr>
                                <td className="border p-3 font-semibold">Best Suited For</td>
                                <td className="border p-3">Trekkers, hikers, adventure travellers, photographers, riders, nature enthusiasts and mountaineers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Understanding Annapurna */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Understanding Annapurna
                </h2>

                <SectionImage
                    src="/Image/03-kali-gandaki-river-kagbeni.jpg"
                    source="Wikimedia Commons"
                    alt="Kali Gandaki River north of Kagbeni"
                />

                <p className="mb-4 text-gray-700">
                    You start noticing the difference in Annapurna long before you reach the high mountains. The green hills around the lower valleys gradually give way to forests, narrower trails and bigger views. Continue farther and the landscape changes again. By the time you reach the higher valleys of Manang or cross towards Mustang, the greenery has thinned out and the mountains begin to feel much closer.
                </p>

                <p className="mb-4 text-gray-700">
                    This variety comes from an enormous change in altitude. The Annapurna Conservation Area stretches from about 790 metres to 8,091 metres at Annapurna I, covering 7,629 sq km across Kaski, Lamjung, Myagdi, Manang and Mustang.
                </p>

                <p className="mb-4 text-gray-700">
                    The mountains are only one part of the story. The Kali Gandaki corridor cuts through the Himalaya between the Annapurna and Dhaulagiri ranges, while the northern valleys of Manang and Mustang sit in the rain shadow of the mountains. That is why the same journey can take you from wet, forested hills to a much drier landscape farther north.
                </p>

                <p className="mb-6 text-gray-700">
                    For a traveller, this means Annapurna never feels like one continuous landscape. The route keeps changing, and with it the villages, vegetation, weather and way of travelling. That is what makes the region much more than a collection of famous trekking routes.
                </p>

                {/* Places & Landscapes to Explore */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places & Landscapes to Explore
                </h2>

                <p className="mb-6 text-gray-700">
                    The easiest way to understand Annapurna is to travel through it. Start in the lower hills and you will find terraced fields, forests and villages spread across the slopes. Keep walking and the trees become thinner, the valleys wider and the mountains closer. Go farther north and the landscape changes again, becoming dry and rocky around Manang and Mustang. You can experience these changes on a long trek, through shorter hikes, by road or by combining different routes.
                </p>

                <h4 className="font-semibold text-black mb-1">Ghandruk and the Southern Hills</h4>
                <SectionImage
                    src="/Image/04-ghandruk-southern-hills.jpg"
                    source="Wikipedia"
                    alt="Ghandruk and the Southern Hills"
                />
                <p className="mb-4 text-gray-700">
                    Ghandruk lies high above the valleys with stone houses, terraced fields and mountain views that open up around the settlement. On a clear morning, Annapurna South, Hiunchuli and Machhapuchhre rise behind the hills. Ghandruk trails continue towards Landruk and Tadapani, important points on routes heading towards Annapurna Base Camp.
                </p>
                <p className="mb-4 text-gray-700">
                    Further along, Ghorepani brings a different kind of mountain experience. The village is surrounded by forests and sits on the route to Poon Hill where many travellers make an early morning climb for the mountain views. The walk begins before sunrise, but as the light reaches the peaks, the reason becomes clear. You are watching the Annapurna and Dhaulagiri ranges appear gradually rather than seeing them all at once.
                </p>
                <p className="mb-4 text-gray-700">
                    The southern side also has places suited to shorter journeys. Dhampus and Australian Camp are popular choices for travellers who want to walk through the hills and spend time around mountain villages without taking on a long high-altitude trek. Sikles offers another village-based experience while Jhinu Danda is known for its natural hot springs.
                </p>
                <p className="mb-6 text-gray-700">
                    If you want to go farther but still explore the southern side away from the busiest routes, Khopra Ridge and Mohare Danda offer longer ridge walks with wide mountain views. Chhomrong is an important stop for anyone heading towards Annapurna Base Camp.
                </p>

                <h4 className="font-semibold text-black mb-1">Moving Towards Manang</h4>
                <SectionImage
                    src="/Image/05-buddhist-temple-upper-pisang.jpg"
                    source="Wikipedia"
                    alt="Buddhist Temple Upper Pisang"
                />
                <p className="mb-4 text-gray-700">
                    The journey changes as you move towards Chame and Pisang. The lower forests begin to give way to more open slopes and the mountains start occupying much more of the view. Manang is at a much higher elevation surrounded by dry mountain slopes and high peaks. This is also where many trekkers on the Annapurna Circuit spend extra time adjusting to the altitude before continuing towards the higher part of the route.
                </p>
                <p className="mb-4 text-gray-700">
                    From this side, Tilicho Lake is one of the region's major destinations. At about 4,919 metres, it sits high above the surrounding valleys. Getting there involves a demanding journey but the changing landscape along the way is a large part of why people make the trip.
                </p>
                <p className="mb-6 text-gray-700">
                    For travellers looking for something peaceful, the Nar Phu Valley leads into a more remote part of the region. The villages, trails and mountain surroundings feel quite different from the southern Annapurna routes. The high route eventually reaches Thorong La at about 5,416 metres. The pass is one of the defining points of the Annapurna Circuit and crossing it is a very different experience from the easier walks around the lower villages.
                </p>

                <h4 className="font-semibold text-black mb-1">Following the Kali Gandaki</h4>
                <SectionImage
                    src="/Image/06-hot-spring-tatopani.jpg"
                    source="Wikimedia Commons"
                    alt="Hot Spring in Tatopani"
                />
                <p className="mb-4 text-gray-700">
                    From the high mountains, the landscape changes once again as the journey follows the Kali Gandaki Valley. Tatopani is one of the better-known stops in the lower part of the valley especially for its hot springs. Farther north, Tukuche and Marpha bring you into villages shaped by the old trading routes through the valley.
                </p>
                <p className="mb-4 text-gray-700">
                    Marpha is particularly enjoyable on foot. Its stone-paved lanes, whitewashed houses and mountain backdrop make it tempting to simply slow down for a while instead of treating it as another overnight stop.
                </p>
                <p className="mb-4 text-gray-700">
                    Then comes Jomsom, an important gateway to the northern side of the Annapurna region. The town connects the lower valley with Mustang and is also a common stopping point for travellers moving through the Kali Gandaki corridor.
                </p>
                <p className="mb-6 text-gray-700">
                    Further north, Kagbeni feels like a clear change in both landscape and architecture. Its narrow lanes and old mud-and-stone houses sit at the meeting point of routes leading towards Muktinath and Upper Mustang.
                </p>

                <h4 className="font-semibold text-black mb-1">Muktinath and Upper Mustang</h4>
                <SectionImage
                    src="/Image/07-muktinath-temple.jpg"
                    source="Wikipedia"
                    alt="Muktinath Temple"
                />
                <p className="mb-4 text-gray-700">
                    Muktinath is one of the most important places in the region for pilgrims. Located at around 3,800 metres, the place is sacred to both Hindus and Buddhists. For trekkers travelling through the area, it also marks another major change in the journey as the landscape becomes increasingly dry and open.
                </p>
                <p className="mb-4 text-gray-700">
                    Beyond Muktinath lies Upper Mustang where the Annapurna landscape takes on an entirely different appearance. The green hills of the south have disappeared. In their place are bare cliffs, rocky valleys, caves, old monasteries and villages built around the harsh conditions of the high desert.
                </p>
                <p className="mb-6 text-gray-700">
                    At the centre of this region is Lo Manthang, the historic walled settlement and one of the best-known places in Mustang. Upper Mustang also requires a special permit, so this is a journey that needs more planning than most of the southern Annapurna routes.
                </p>

                {/* Major Trekking Destinations of Annapurna Region */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Major Trekking Destinations of Annapurna Region
                </h2>

                <SectionImage
                    src="/Image/08-annapurna-base-camp.jpg"
                    source="Wikimedia Commons"
                    alt="Annapurna Base Camp Nepal"
                />

                <p className="mb-4 text-gray-700">
                    The Annapurna Circuit connects the lower valleys Manang, Thorong La and the Kali Gandaki side. It is one of the best ways to experience how dramatically the landscape changes across the region from the greener southern hills to the high mountains and the dry valleys beyond the pass.
                </p>

                <p className="mb-4 text-gray-700">
                    Annapurna Base Camp takes a different route into the mountains, passing through villages and forests before reaching the high mountain sanctuary. The journey brings you progressively closer to the peaks, making the approach itself an important part of the experience.
                </p>

                <p className="mb-6 text-gray-700">
                    Mardi Himal offers another way to experience the southern side with a route that climbs towards the high ridges below Machhapuchhre. It is a shorter option than the Annapurna Circuit and offers a different experience of the southern mountain landscape.
                </p>

                {/* How to Experience Annapurna */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Experience Annapurna
                </h2>

                <SectionImage
                    src="/Image/09-lake-tilicho-manang.jpg"
                    source="Wikipedia"
                    alt="Lake Tilicho Manang Nepal"
                />

                <h4 className="font-semibold text-black mb-1">Start with the Trail</h4>
                <p className="mb-6 text-gray-700">
                    For most travellers, Annapurna is experienced on foot. But “trekking in Annapurna” can mean very different things. A short hike through the lower hills, a multi-day village-to-village trek and a high-altitude crossing such as Thorong La are completely different experiences. The lower trails let you spend more time around villages, farms and forests. As you climb higher, the walking becomes slower and the landscape becomes more open. At altitude, even a simple climb can take much more effort than it appears to from the trail.
                </p>

                <h4 className="font-semibold text-black mb-1">Walk Beyond the Main Trail</h4>
                <p className="mb-6 text-gray-700">
                    One of the best ways to experience Annapurna is to leave some time for walking without a fixed destination. A short village trail, a climb to a viewpoint or a walk around a settlement can show you things that disappear when the only goal is reaching the next overnight stop. This is particularly valuable around places such as Ghandruk, Manang and the villages of the Kali Gandaki valley. You may notice a farm, an old house, a monastery, a local trail or simply a change in the landscape that you would have missed while rushing through.
                </p>

                <h4 className="font-semibold text-black mb-1">Ride Through the Mountains</h4>
                <p className="mb-6 text-gray-700">
                    Annapurna can also be explored on two wheels. Roads now reach places that were once connected mainly by walking trails, particularly across the Kali Gandaki valley and towards Mustang. For riders, the attraction is not simply reaching Jomsom or Muktinath. It is the changing road itself. Green valleys give way to dry mountain slopes, river crossings, villages and long stretches with very little around you. But this is where we should be realistic. Mountain roads can be rough, exposed and affected by weather and road conditions.
                </p>

                <h4 className="font-semibold text-black mb-1">Bring a Camera, But Don't Forget to Look Around</h4>
                <p className="mb-6 text-gray-700">
                    Annapurna gives photographers an unusual range of subjects within one journey. Early morning and late afternoon can change the appearance of the mountains completely. But photography here is not only about the big mountain panorama. Village life, changing vegetation, birds, old buildings and the small details along the trail can tell you just as much about Annapurna. For wildlife and bird photographers, the Annapurna Conservation Area protects a wide range of ecosystems, giving patient observers opportunities beyond the usual mountain photographs.
                </p>

                <h4 className="font-semibold text-black mb-1">For Those Who Want to Go Higher</h4>
                <p className="mb-6 text-gray-700">
                    Annapurna also attracts people for whom trekking is only the beginning. The region has long been important to mountaineers and high-altitude adventurers with Annapurna I and other major peaks forming part of Nepal's mountaineering history. This is a completely different level of travel from walking a popular trekking route. High-altitude climbing requires technical skills, acclimatization, equipment, experience and careful planning.
                </p>

                {/* Food, Culture & Local Life */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Food, Culture & Local Life
                </h2>

                <p className="mb-4 text-gray-700">
                    A journey through Annapurna is also a journey through the communities that have made these mountains their home. The people, food, houses and traditions change as you move from the greener southern hills towards Manang and Mustang. Staying in villages and eating where local families cook gives you a much better sense of this change than simply passing through.
                </p>

                <p className="mb-6 text-gray-700">
                    The Gurung communities are closely associated with many villages in the southern Annapurna area while Thakali communities have a strong presence along the Kali Gandaki Valley. Farther north, the culture of Manang and Mustang reflects a stronger Tibetan Buddhist influence. You will notice this in monasteries, prayer flags, mani walls, chortens and the design of homes.
                </p>

                <h4 className="font-semibold text-black mb-1">Food Becomes Part of the Journey</h4>
                <SectionImage
                    src="/Image/10-food-in-annapurna.jpg"
                    source="Wikimedia Commons"
                    alt="Food in Annapurna"
                />
                <p className="mb-4 text-gray-700">
                    After several hours on a trail, food feels different. A hot plate of dal bhat, a bowl of soup or a plate of momo can become one of the most satisfying parts of the day.
                </p>
                <p className="mb-4 text-gray-700">
                    Dal bhat remains one of the most common meals on the trekking routes usually served with rice, lentils, vegetables and pickle. Momo, thukpa, noodles, soups and potato dishes are also common. In the lower villages, you may find a wider choice while food options can become simpler as you travel farther and higher.
                </p>
                <p className="mb-6 text-gray-700">
                    The Thakali community is particularly known for its food and trying a Thakali-style meal around the Kali Gandaki Valley can add another layer to the journey. Sel roti, the traditional ring-shaped rice bread may also appear in local homes and during festivals.
                </p>

                <h4 className="font-semibold text-black mb-1">Life Around the Teahouse</h4>
                <SectionImage
                    src="/Image/11-teahouse-life-annapurna.jpg"
                    source="Wikipedia"
                    alt="Life Around the Teahouse"
                />
                <p className="mb-4 text-gray-700">
                    A teahouse is more than a bed for the night. It becomes a small social space where trekkers, guides, porters and local families come together at the end of the day. People talk about the trail ahead, check the weather, charge their phones, share meals and wait for the cold outside to ease.
                </p>
                <p className="mb-4 text-gray-700">
                    Many lodges are family-run, so staying there also gives travellers a chance to meet the people whose homes and businesses are part of the trekking economy. As you move higher or into more remote valleys, facilities can become simpler. Hot showers, reliable electricity, heating and internet access should not always be expected.
                </p>
                <p className="mb-6 text-gray-700">
                    This is also where the reality of mountain life becomes easier to understand. Tourism is an important source of income but it exists alongside farming, livestock, local trade and other traditional livelihoods.
                </p>

                <h4 className="font-semibold text-black mb-1">Villages Tell Their Own Story</h4>
                <SectionImage
                    src="/Image/12-manang-village-nepal.jpg"
                    source="Wikipedia"
                    alt="Manang Village Nepal"
                />
                <p className="mb-6 text-gray-700">
                    The architecture changes as the landscape changes. In the southern hills, you will see houses surrounded by farms and greenery. Farther north, stone and mud houses become more common, often built closely together to provide shelter from the colder and drier conditions. Places such as Marpha, Kagbeni and villages around Manang show how communities adapted their homes and settlements to mountain conditions over generations. Old trails also reveal the region's history as a place of movement and trade between the hills and the Tibetan plateau.
                </p>

                <h4 className="font-semibold text-black mb-1">Festivals and Local Traditions</h4>
                <SectionImage
                    src="/Image/13-tiji-festival-lo-manthang.jpg"
                    source="Wikimedia Commons"
                    alt="Tiji Festival Lo Manthang Nepal"
                />
                <p className="mb-6 text-gray-700">
                    Religion is part of everyday life across Annapurna. Hindu and Buddhist traditions meet at places such as Muktinath while Buddhist monasteries and prayer walls are common across the northern valleys. Festivals bring families and communities together at different times of the year, often with music, food, religious ceremonies and traditional dress. For travellers, the important thing is to remember that these are living traditions, not tourist performances. The best cultural experience is much simpler, sharing a meal with a host, talking to someone beside the trail or sitting outside a village teahouse as the mountains disappear into the evening light. Those small moments often become the part of Annapurna you remember long after the trek is over.
                </p>

                {/* A Region Rich in Wildlife */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    A Region Rich in Wildlife
                </h2>

                <SectionImage
                    src="/Image/14-bharal-blue-sheep.jpg"
                    source="Wikipedia"
                    alt="Bharal (Blue Sheep) Annapurna"
                />
                <p className="mb-6 text-gray-700">
                    The Annapurna Conservation Area protects a wide range of Himalayan habitats and wildlife. Himalayan tahr, blue sheep (bharal), Himalayan musk deer, Himalayan serow and Himalayan black bear are among the mammals found in the region. The higher mountains are also home to the elusive snow leopard, although seeing one is a matter of patience and luck rather than something a traveller should expect.
                </p>

                <h4 className="font-semibold text-black mb-1">Himalayan Monal</h4>
                <SectionImage
                    src="/Image/15-himalayan-monal.jpg"
                    source="Wikipedia"
                    alt="Himalayan Monal"
                />
                <p className="mb-6 text-gray-700">
                    The birdlife can be just as interesting. Himalayan monal (Danphe), blood pheasant, Himalayan griffon and lammergeier are among the birds that make the region particularly interesting for birdwatchers and photographers. Different species appear at different elevations, so even a long trekking day can take you through several bird habitats.
                </p>

                <h4 className="font-semibold text-black mb-1">Why Conservation Matters</h4>
                <SectionImage
                    src="/Image/16-himalayan-tahr.jpg"
                    source="Wikipedia"
                    alt="Himalayan Tahr"
                />
                <p className="mb-6 text-gray-700">
                    The Annapurna Conservation Area was created to protect this natural diversity while allowing local communities to continue living and working in the region. That balance is central to Annapurna because this is not an untouched wilderness. Villages, farms, livestock, roads, trekking routes and tourism all exist alongside forests and wildlife habitats.
                </p>

                {/* Plan Your Visit to the Annapurna Region */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Plan Your Visit to the Annapurna Region
                </h2>

                <SectionImage
                    src="/Image/17-dhamkar-caves-mustang.jpg"
                    source="Wikipedia"
                    alt="Dhamkar Caves Mustang"
                />
                <p className="mb-6 text-gray-700">
                    Planning Annapurna is different from planning a city trip. Weather can change, roads can be slow, a trail can take longer than expected and your body may need time to adjust to the altitude. The good thing is that Annapurna can be explored in very different ways. A short hike around the lower hills, a week-long trek, the Annapurna Circuit, a journey into Mustang or a high-altitude adventure are all possible. The right plan depends on how much time you have and how far you want to go.
                </p>

                <h4 className="font-semibold text-black mb-1">Best Time to Visit Annapurna</h4>
                <p className="mb-6 text-gray-700">
                    For most of Annapurna, March to May and September to November are the main recommended seasons. Spring brings flowering plants including rhododendrons while autumn generally brings clearer mountain views. Winter is much colder with snow possible at higher elevations. Some routes can become difficult because of snow and freezing temperatures. The monsoon needs a little more thought. The southern side of Annapurna receives substantial rain which can affect trails and roads. Upper Mustang and parts of the northern Annapurna area are different because they lie in the rain shadow, making them considerably drier and possible to visit during the monsoon.
                </p>

                <h4 className="font-semibold text-black mb-1">Time Needed for an Annapurna Journey</h4>
                <p className="mb-6 text-gray-700">
                    This depends entirely on the experience you want. Shorter journeys around Ghandruk, Ghorepani, Poon Hill, Dhampus, Australian Camp or Sikles can introduce you to the mountains without committing to a long high-altitude trek. Longer routes such as the Annapurna Circuit, Annapurna Base Camp, Mardi Himal, Khopra and Nar Phu need more time and preparation. If your route includes high passes or remote valleys, don't plan your days so tightly that one delay ruins the entire journey.
                </p>

                <h4 className="font-semibold text-black mb-1">How to Reach the Annapurna Region</h4>
                <p className="mb-6 text-gray-700">
                    For most travellers, Pokhara is the main gateway to Annapurna. Many treks begin from or pass through the Pokhara area while roads and other transport options connect travellers with different parts of the region. The exact starting point depends on your route. Some journeys head towards the southern trekking villages while others continue towards Manang or Mustang.
                </p>

                <h4 className="font-semibold text-black mb-1">Annapurna Trekking Permits and TIMS Card</h4>
                <p className="mb-6 text-gray-700">
                    Entry into the Annapurna Conservation Area requires the applicable conservation-area entry fee (ACAP). Currently the fee is NPR 2,000 for foreign nationals and NPR 200 for SAARC nationals. Trekkers' Information Management System (TIMS) requirements depend on the trekking route. Several Annapurna routes including Annapurna Circuit, Nar Phu Annapurna Circuit, Mesokanto/Tilicho Pass, Poon Hill (ABC), Khopra, Mardi Himal and Sikles Tara Hill require trekkers to be accompanied by a licensed trekking guide and carry a TIMS card issued through a registered trekking agency. Upper Mustang is a restricted area and requires a separate trekking permit. The current Department of Immigration fee table lists the Upper Mustang permit at USD 50 per person per day. Requirements and fees can change, so check the current Nepal Tourism Board and Department of Immigration information before travelling.
                </p>

                <h4 className="font-semibold text-black mb-1">Altitude and Acclimatization in Annapurna</h4>
                <p className="mb-6 text-gray-700">
                    Distance is not the only thing that determines how difficult an Annapurna journey will feel. Altitude can change the experience completely. It is always advised to travellers to be alert to acute mountain sickness (AMS) above 2,500 metres. Headache, nausea, dizziness, unusual tiredness and loss of appetite can be early warning signs. If symptoms appear or become worse, continuing higher is not something to push through. The basic rule is simple: Climb gradually and give your body time to adjust. This becomes particularly important on routes involving Manang, Tilicho Lake, Nar Phu or Thorong La. A slower day is far better than turning a trekking schedule into a race.
                </p>

                <h4 className="font-semibold text-black mb-1">What to Pack for Annapurna</h4>
                <p className="mb-6 text-gray-700">
                    Your packing list should depend on your route and season. Good walking footwear, warm layers, rain protection, sun protection, a reusable water bottle, personal medicines, a basic first-aid kit and a power bank are sensible essentials. Higher routes can be cold even when lower parts of the region feel comfortable, so layers are more useful than carrying one extremely heavy jacket. If you are travelling by motorcycle or road, your preparation is different. Mountain roads can be rough and conditions can change with weather. Allow more time than you would for the same distance on a normal highway.
                </p>

                <h4 className="font-semibold text-black mb-1">Guides, Connectivity, Money and Other Essentials</h4>
                <p className="mb-6 text-gray-700">
                    Mobile connectivity and electricity can become less reliable as you move farther into the mountains. Carry some cash, keep copies of important documents and don't make your entire navigation or communication plan dependent on an internet connection. Most popular Annapurna routes have teahouse or lodge accommodation while camping is also available on some routes. A guide is particularly valuable on longer, remote or demanding routes and on routes where Nepal's current rules require one. A good local guide brings more than route knowledge. They understand the terrain, weather, villages and the practical realities of travelling through the mountains.
                </p>

                <h4 className="font-semibold text-black mb-1">Keep Your Annapurna Itinerary Flexible</h4>
                <p className="mb-6 text-gray-700">
                    Perhaps the most useful piece of advice is also the simplest. Don't plan Annapurna down to the last hour. Give yourself some flexibility for weather, transport delays, altitude adjustment and the occasional day when you simply want to stay longer in a village or stop walking before sunset. Annapurna is not a collection of points that you have to connect as quickly as possible. The route itself is part of the destination. Build a plan that leaves enough room to actually experience it. That little bit of flexibility can turn a carefully planned trek into a much better journey.
                </p>

                {/* Safety in the Annapurna Region */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Safety in the Annapurna Region
                </h2>

                <p className="mb-6 text-gray-700">
                    Annapurna is a well-established trekking destination but it remains a mountain environment where conditions can change faster than your plans. Weather, altitude, trail conditions and road travel can all affect a journey. The safest approach is to pay attention to what is happening around you and be willing to change your plan when necessary.
                </p>

                <h4 className="font-semibold text-black mb-1">Mountain Weather and Trail Conditions</h4>
                <p className="mb-4 text-gray-700">
                    Rain, snowfall, strong winds and poor visibility can affect trails, particularly at higher elevations. It is advised to trekkers to stay informed about mountain conditions and safety before and during their journey.
                </p>
                <p className="mb-4 text-gray-700">
                    If the weather turns bad or visibility drops, waiting for conditions to improve can be a better decision than trying to reach the next village according to your original schedule. This matters even more on high passes and exposed sections of trail.
                </p>
                <p className="mb-6 text-gray-700">
                    Keep a raincoat, torch and basic first-aid kit accessible rather than buried at the bottom of your backpack.
                </p>

                <h4 className="font-semibold text-black mb-1">High-Altitude Trekking Safety</h4>
                <p className="mb-6 text-gray-700">
                    Headache, loss of appetite, nausea, fatigue and dizziness are among the early symptoms of acute mountain sickness (AMS). If symptoms worsen, particularly with severe headache, vomiting, difficulty walking, altered mental state, severe fatigue or breathlessness at rest, the advice is to descend. This is especially important on routes around Manang, Tilicho Lake, Nar Phu and Thorong La where altitude becomes a major part of the journey.
                </p>

                <h4 className="font-semibold text-black mb-1">Roads, Landslides and Mountain Travel</h4>
                <p className="mb-6 text-gray-700">
                    Road access has changed how people travel through parts of Annapurna but reaching a destination by road does not make the journey risk-free. Mountain roads can be rough and rain or other weather conditions can affect travel. If you are travelling by motorcycle, give yourself more time than you would on an ordinary highway and adjust your riding to the road and weather. If local information suggests that a road or route is unsafe, wait or change your plan rather than taking unnecessary risks.
                </p>

                <h4 className="font-semibold text-black mb-1">Communication and Emergencies</h4>
                <p className="mb-6 text-gray-700">
                    Don't assume your phone will work everywhere. Keep important documents accessible, carry some cash and let someone know your planned route when heading into less-connected areas. Travel insurance is also important particularly if your journey includes high-altitude trekking or activities that may require emergency evacuation. For high-altitude medical assistance, the Himalayan Rescue Association operates an aid post in Manang during the main trekking seasons.
                </p>

                <h4 className="font-semibold text-black mb-1">Simple Habits That Make a Difference</h4>
                <div className="space-y-2 text-gray-700 mb-6">
                    <p>• Start early when the day's route is long.</p>
                    <p>• Avoid unfamiliar trails after dark.</p>
                    <p>• Stay on designated routes.</p>
                    <p>• Carry a torch even if you expect to finish before sunset.</p>
                    <p>• Keep drinking water regularly.</p>
                    <p>• Give yourself enough time to reach your destination without rushing.</p>
                    <p>• Don't take unnecessary risks for a photograph or viewpoint.</p>
                    <p>• Never feed or approach wildlife.</p>
                    <p>• If your physical condition, altitude or weather makes continuing unsafe, turn back.</p>
                </div>

                <SectionImage
                    src="/Image/18-annapurna-base-camp-abc.jpg"
                    source="Wikimedia Commons"
                    alt="Annapurna Base Camp (ABC) Nepal"
                />

                <p className="mb-4 text-gray-700">
                    A long day on the trail, a conversation with someone you meet along the way, an unexpected change in the weather or a quiet evening in a mountain village can become as memorable as the view you travelled so far to see. You may come here with one clear goal. It could be a trek you have wanted to complete, a mountain you want to photograph, a road you want to ride or simply the curiosity to see what lies beyond the familiar trails. But somewhere along the way, the journey itself starts to matter just as much as the goal.
                </p>

                <p className="mb-6 text-gray-700">
                    And perhaps that is the best way to experience Annapurna. Give yourself time to walk, stop, look around and let the mountains set the pace. You may remember the big mountain views long after you leave. But chances are you will also remember the small moments in between. You come to Annapurna looking for the mountains. Somewhere along the way, you realize it was the journey you came for.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions About the Annapurna Region
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Where is the Annapurna Region in Nepal?</p>
                        <p className="mt-2">The Annapurna Region is in Gandaki Province of central Nepal, with Pokhara serving as its main gateway. The region includes the Annapurna mountain range, Manang, Mustang, the Kali Gandaki Valley and several major trekking routes.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. How do you reach the Annapurna Region from Kathmandu?</p>
                        <p className="mt-2">Most travellers first travel from Kathmandu to Pokhara, either by flight or road. From Pokhara, roads and trekking routes lead towards different parts of the Annapurna Region, including Ghandruk, Dhampus, Jomsom and the starting points of major treks.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What is the best time to visit the Annapurna Region?</p>
                        <p className="mt-2">Spring (March to May) and autumn (September to November) are generally the best seasons for trekking, with better visibility and more favourable conditions on most routes. Conditions vary considerably with altitude, so the best time also depends on the particular trek.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. How many days are needed to explore the Annapurna Region?</p>
                        <p className="mt-2">There is no single answer because Annapurna includes short hikes as well as long, high-altitude treks. A short trip can cover places such as Dhampus, Australian Camp or Poon Hill, while the Annapurna Circuit, Annapurna Base Camp and other longer routes require considerably more time.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. What are the best places to visit in the Annapurna Region?</p>
                        <p className="mt-2">Some of the best-known places include Ghandruk, Ghorepani, Poon Hill, Dhampus, Australian Camp, Sikles, Manang, Tilicho Lake, Nar Phu Valley, Jomsom, Marpha, Kagbeni, Muktinath, Upper Mustang and Lo Manthang.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. What are the most popular treks in the Annapurna Region?</p>
                        <p className="mt-2">The Annapurna Circuit, Annapurna Base Camp (ABC) and Mardi Himal are among the region's best-known treks. Poon Hill, Khopra Ridge and Nar Phu Valley are other important trekking experiences.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Is Annapurna suitable for first-time trekkers?</p>
                        <p className="mt-2">Yes. The Annapurna Region has trails ranging from relatively short and accessible hikes to demanding high-altitude crossings. Poon Hill, Dhampus and Australian Camp can be suitable for travellers looking for shorter experiences, while longer routes require greater preparation.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. What is the Annapurna Circuit?</p>
                        <p className="mt-2">The Annapurna Circuit is a long-distance trekking route that travels through different landscapes of the Annapurna Region, including the Manang area, Thorong La and the Kali Gandaki side. Its major attraction is the dramatic change in scenery and altitude along the journey.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What is Annapurna Base Camp?</p>
                        <p className="mt-2">Annapurna Base Camp (ABC) is a high-altitude trekking destination reached by a route through villages and mountain forests before entering the high mountain sanctuary. The trek brings travellers progressively closer to the surrounding Annapurna peaks.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. What is the highest point in the Annapurna Region?</p>
                        <p className="mt-2">Annapurna I is 8,091 metres high and is the highest mountain in the Annapurna massif. For trekkers, Thorong La, at about 5,416 metres, is one of the highest points reached on the classic Annapurna Circuit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. Is Annapurna safe for travellers?</p>
                        <p className="mt-2">The Annapurna Region is widely travelled, but conditions can change quickly, particularly at higher elevations. Altitude, weather, difficult terrain and mountain roads require proper preparation. Travellers should choose routes appropriate to their experience and allow enough time for acclimatisation.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Do you need a permit to trek in the Annapurna Region?</p>
                        <p className="mt-2">Yes. Trekkers generally need an Annapurna Conservation Area entry permit, while additional permits or requirements can apply depending on the route. Upper Mustang and restricted areas such as Nar Phu have additional permit requirements.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. Can you explore the Annapurna Region by motorcycle?</p>
                        <p className="mt-2">Yes. Roads now connect several parts of the region, particularly along the Kali Gandaki Valley and towards Mustang. Motorcycle travel can be an adventurous way to experience Jomsom, Marpha, Kagbeni and Muktinath, although mountain roads can be rough and weather-dependent.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. What is the best place for mountain views in the Annapurna Region?</p>
                        <p className="mt-2">There are many viewpoints rather than one single best location. Poon Hill is particularly popular for wide sunrise views, while routes around Ghandruk, Mardi Himal and the higher trekking areas offer very different perspectives of the mountains.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. What is the difference between Annapurna and the Everest region?</p>
                        <p className="mt-2">The Annapurna Region is known for its variety of landscapes and communities within a relatively connected trekking area, from green lower hills to the high mountains and dry valleys of Manang and Mustang. The Everest region has a different landscape, culture and trekking experience centred around the Everest massif.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">16. What is special about Manang in the Annapurna Region?</p>
                        <p className="mt-2">Manang marks a major change in the journey towards the high mountains. The landscape becomes drier and more open, the altitude increases significantly, and the village is an important acclimatisation stop for travellers continuing towards the higher parts of the Annapurna Circuit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">17. Is Upper Mustang part of the Annapurna Region?</p>
                        <p className="mt-2">Yes. Upper Mustang lies within the wider Annapurna Conservation Area and forms the dry, trans-Himalayan side of the region. Kagbeni, Muktinath and Jomsom provide important access points towards Mustang, while Lo Manthang is its best-known historic settlement.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">18. What makes the Annapurna Region different from other trekking destinations in Nepal?</p>
                        <p className="mt-2">Its biggest strength is variety. A single journey can take you from green hills and Gurung villages through rhododendron forests and high mountain passes to the dry valleys of Manang and Mustang. The region also offers experiences beyond trekking, including mountain riding, photography, wildlife observation, cultural exploration and mountaineering.</p>
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
                            Hi, I am Rohit, the explorer behind RU Explores. For me, travel is not just about reaching a destination but about understanding its culture, people, food and stories. I enjoy exploring places deeply, from mountain villages to local streets and sharing those experiences in a way that helps others travel with purpose. RU Explores is my attempt to turn travel into something more meaningful than just ticking locations off a list.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Annapurna;