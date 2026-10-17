import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const Kedarkantha = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Kedarkantha Trek Uttarakhand – Best Time, Itinerary & Complete Snow Trek Guide
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 22 April, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-01.jpg"
                    source="Pexels/Umarand Rabi"
                />

                <p className="mb-4 text-gray-700">
                    Deep in the snow-covered mountains of Uttarakhand lies a trekking trail that feels like walking through a winter dream. Imagine stepping into silent pine forests wrapped in white snow, camping under a sky full of stars, and waking up early to witness a magical Himalayan sunrise from a summit above the clouds.
                </p>

                <p className="mb-4 text-gray-700">
                    This is the experience of the Kedarkantha Trek in Uttarakhand, one of the most beautiful and beginner-friendly winter treks in India. Located in the Govind Wildlife Sanctuary of the Garhwal Himalayas, this trek offers the perfect blend of adventure, scenic beauty and Himalayan camping.
                </p>

                <p className="mb-6 text-gray-700">
                    Every year, thousands of trekkers visit Kedarkantha to experience snow trekking, summit climbing and peaceful mountain landscapes. Whether you are a first-time trekker or an adventure enthusiast, this trek provides memories that stay with you for a lifetime.
                </p>

                <p className="mb-6 text-gray-700">
                    In this complete guide, you will discover everything about the Kedarkantha Trek Uttarakhand including best time to visit, trek route, distance, difficulty, packing list, budget and travel tips.
                </p>

                {/* Juda Ka Talab */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Juda Ka Talab: The Most Beautiful Stop on Kedarkantha Trek
                </h2>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-02.jpg"
                    source="Pexels/Pawan Sehgal"
                />

                <p className="mb-4 text-gray-700">
                    One of the most magical highlights of the Kedarkantha Trek is Juda Ka Talab, a serene high-altitude lake surrounded by dense pine forests. Located at around 2,700 meters, this lake serves as a popular campsite for trekkers on their way to the summit.
                </p>

                <p className="mb-4 text-gray-700">
                    During winter, Juda Ka Talab freezes completely, creating a breathtaking landscape of snow and ice. In contrast, during spring and autumn, the lake reflects the surrounding trees and mountains, offering a peaceful and scenic environment.
                </p>

                <p className="mb-6 text-gray-700">
                    Most trekking itineraries include an overnight stay at Juda Ka Talab, where campers experience star-filled skies, bonfire nights and the quiet beauty of the Himalayas. For many trekkers, this campsite becomes one of the most memorable parts of the entire journey.
                </p>

                {/* Why Special */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Kedarkantha Trek is So Special
                </h2>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-03.jpg"
                    source="Anjana Rawat"
                />

                <h4 className="font-semibold text-black mb-1">
                    One of the Best Winter Snow Treks in India
                </h4>

                <p className="mb-4">
                    Kedarkantha is famous for its snow-covered trails during winter, making it one of the most popular Himalayan snow treks.
                </p>

                <h4 className="font-semibold text-black mb-1">
                    Beginner-Friendly Summit Trek
                </h4>

                <p className="mb-4">
                    Unlike many difficult Himalayan treks, Kedarkantha allows beginners to experience the thrill of reaching a Himalayan summit at 3,810 meters.
                </p>

                <h4 className="font-semibold text-black mb-1">
                    Beautiful Pine Forest Trails
                </h4>

                <p className="mb-4">
                    The trek passes through dense pine and oak forests, creating a peaceful and magical trekking atmosphere.
                </p>

                <h4 className="font-semibold text-black mb-1">
                    Camping in Snow
                </h4>

                <p className="mb-4">
                    Trekkers get the chance to camp in snowy meadows, enjoy bonfire nights and experience true Himalayan adventure.
                </p>

                <h4 className="font-semibold text-black mb-1">
                    Early Morning Summit & 360-Degree Summit View
                </h4>

                <p className="mb-6">
                    From the summit, you can witness stunning views of peaks like Swargarohini, Bandarpoonch and Black Peak. While the Kedarkantha summit is popular, the real magic lies in the early morning silence before sunrise. Standing at the top, surrounded by endless Himalayan peaks, you experience a moment of calm that is hard to describe.
                </p>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-04.jpg"
                    source="Pexels/Vikash Kr"
                />

                <h4 className="font-semibold text-black mb-1">
                    Starry Nights at the Campsite
                </h4>

                <p className="mb-6">
                    Away from city lights, the campsites on the Kedarkantha trek offer a breathtaking view of the night sky. On clear nights, you can witness thousands of stars, making it a perfect moment for reflection and connection with nature.
                </p>

                {/* Location */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Where is Kedarkantha Located in Uttarakhand
                </h2>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-05.jpg"
                    source="NDTV/euttaranchal.com"
                />

                <p className="mb-4">
                    Kedarkantha is located near the village of Sankri in the Uttarkashi district of Uttarakhand. The trek is part of the Govind Wildlife Sanctuary known for its rich biodiversity and scenic beauty.
                </p>

                <h4 className="font-semibold text-black mb-1">Quick Facts</h4>

                <ul className="list-disc pl-6 mb-6">
                    <li>Location: Uttarkashi district, Uttarakhand</li>
                    <li>Base Camp: Sankri Village</li>
                    <li>Altitude: 3,810 meters</li>
                    <li>Mountain Range: Garhwal Himalayas</li>
                </ul>

                {/* Best Time */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Best Time to Visit Kedarkantha Trek
                </h2>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-06.JPG"
                    source="Anjana Rawat"
                />

                <h4 className="font-semibold text-black mb-1">
                    Winter (December to February)
                </h4>

                <p className="mb-6">
                    Best time for snow trekking. Trails and campsites are covered in thick snow.
                </p>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-07.jpg"
                    source="Anjana Rawat"
                />

                <h4 className="font-semibold text-black mb-1">
                    Spring (March to April)
                </h4>

                <p className="mb-4">
                    Snow begins to melt and forests become green and vibrant.
                </p>

                <h4 className="font-semibold text-black mb-1">
                    Autumn (October to November)
                </h4>

                <p className="mb-6">
                    Clear skies and cold weather with beautiful mountain views.
                </p>

                {/* Distance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Kedarkantha Trek Distance and Difficulty
                </h2>

                <div className="overflow-x-auto mb-8">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Detail</th>
                                <th className="border p-3 text-left">Information</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border p-3">Total Trek Distance</td>
                                <td className="border p-3">Approx. 20 km</td>
                            </tr>

                            <tr>
                                <td className="border p-3">Maximum Altitude</td>
                                <td className="border p-3">3,810 meters</td>
                            </tr>

                            <tr>
                                <td className="border p-3">Difficulty Level</td>
                                <td className="border p-3">Easy to Moderate</td>
                            </tr>

                            <tr>
                                <td className="border p-3">Trek Duration</td>
                                <td className="border p-3">4–5 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Reach */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach Kedarkantha Base Camp
                </h2>

                <p className="mb-4">
                    Nearest city: Dehradun
                </p>

                <p className="mb-4">
                    Route: Dehradun → Mussoorie → Purola → Sankri
                </p>

                <p className="mb-6">
                    Distance: Approx. 200 km by road.
                </p>

                {/* Itinerary */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    5-Day Itinerary of Kedarkantha Trek Route
                </h2>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-08.jpg"
                    source="Pexels/Sanket Barik"
                />

                <h4 className="font-semibold text-black mb-1">
                    Day 1: Dehradun to Sankri
                </h4>

                <ul className="list-disc pl-6 mb-6">
                    <li>Start your journey from Dehradun</li>
                    <li>Drive through Mussoorie, Purola and Mori</li>
                    <li>Reach Sankri by evening</li>
                    <li>Explore the village and relax</li>
                    <li>Overnight stay in Sankri</li>
                </ul>

                <h4 className="font-semibold text-black mb-1">
                    Day 2: Sankri to Juda Ka Talab
                </h4>

                <ul className="list-disc pl-6 mb-6">
                    <li>Begin trek through pine and oak forests</li>
                    <li>Gradually ascend towards higher altitude</li>
                    <li>Reach Juda Ka Talab campsite</li>
                    <li>Enjoy views of the frozen lake (in winter)</li>
                    <li>Overnight stay in camps</li>
                </ul>

                <h4 className="font-semibold text-black mb-1">
                    Day 3: Juda Ka Talab to Kedarkantha Base Camp
                </h4>

                <ul className="list-disc pl-6 mb-6">
                    <li>Start trek after breakfast</li>
                    <li>Walk through open meadows and snow trails</li>
                    <li>Reach Kedarkantha base camp</li>
                    <li>Enjoy sunset views over Himalayan peaks</li>
                    <li>Overnight stay at base camp</li>
                </ul>

                <h4 className="font-semibold text-black mb-1">
                    Day 4: Kedarkantha Summit & Return to Sankri
                </h4>

                <ul className="list-disc pl-6 mb-6">
                    <li>Start early morning (around 3–4 AM)</li>
                    <li>Trek towards Kedarkantha summit</li>
                    <li>Witness breathtaking sunrise from the top</li>
                    <li>Enjoy 360° views of Himalayan peaks</li>
                    <li>Descend back to Sankri and overnight stay here</li>
                </ul>

                <h4 className="font-semibold text-black mb-1">
                    Day 5: Sankri to Dehradun
                </h4>

                <ul className="list-disc pl-6 mb-6">
                    <li>Have breakfast at Sankri</li>
                    <li>Begin return journey to Dehradun</li>
                    <li>End of trek with unforgettable memories</li>
                </ul>
                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-09.JPG"
                    source="Anjana Rawat"
                />
                <p className="mb-4 text-gray-700">
                    This 4–5 day Kedarkantha Trek itinerary is ideal for beginners looking to
                    experience snow trekking, camping and a Himalayan summit adventure. The trek
                    begins with gradual forest trails and river streams. As you move higher,
                    snow starts appearing on the path. Nights are spent in camps surrounded by
                    mountains.
                </p>
                <p className="mb-6 text-gray-700">
                    The summit day starts early morning. Walking through snow in cold wind and
                    watching sunrise from the top is the most unforgettable moment of the trek.
                </p>
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Accommodation and Food
                </h2>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Homestays in Sankri</li>
                    <li>Trekking camps on trail</li>
                    <li>Simple nutritious meals provided by trek organizers</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Things to Carry for Kedarkantha Trek
                </h2>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Waterproof trekking shoes</li>
                    <li>Warm jackets</li>
                    <li>Gloves and woolen cap</li>
                    <li>Sunglasses</li>
                    <li>Backpack</li>
                    <li>Power bank</li>
                    <li>Personal medicines</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Weather and Safety Tips
                </h2>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Temperature may drop to -10°C in winter</li>
                    <li>Walk slowly on snow</li>
                    <li>Follow trek guide instructions</li>
                    <li>Stay hydrated</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Budget for Kedarkantha Trek
                </h2>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Travel to Sankri: ₹2000–4000</li>
                    <li>Trek package: ₹5000–8000</li>
                    <li>Total budget: ₹8000–12000</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Photography Spots
                </h2>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Juda Ka Talab lake</li>
                    <li>Snow forest trails</li>
                    <li>Kedarkantha summit</li>
                    <li>Himalayan sunset views</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Kedarkantha Trek in Winter vs Summer
                </h2>

                <div className="overflow-x-auto mb-8">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Winter Trek</th>
                                <th className="border p-3 text-left">Summer Trek</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border p-3">Snow covered trails</td>
                                <td className="border p-3">Green meadows</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Magical camping</td>
                                <td className="border p-3">Easier trail</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Challenging conditions</td>
                                <td className="border p-3">Clear mountain views</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Self-Trek vs Trek Package
                </h2>

                <div className="overflow-x-auto mb-8">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Self-Trek</th>
                                <th className="border p-3 text-left">Trek Package</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border p-3">Cheaper</td>
                                <td className="border p-3">Safe</td>
                            </tr>
                            <tr>
                                <td className="border p-3">
                                    Requires navigation knowledge
                                </td>
                                <td className="border p-3">
                                    Includes guide, food, camps
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-3">Riskier in snow</td>
                                <td className="border p-3">
                                    Recommended for beginners
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Kedarkantha Trek Should Be on Your Bucket List
                </h2>

                <SectionImage
                    src="/Image/Kedarkantha-trek-uttarakhand-travel-guide-10.jpg"
                    source="Pexels/Serinus"
                />

                <p className="mb-4 text-gray-700">
                    The Kedarkantha Trek is a journey of adventure, natural beauty and
                    self-discovery. From walking through snow forests to witnessing sunrise from
                    the summit, every moment feels magical.
                </p>

                <p className="mb-6 text-gray-700">
                    As you walk through snow-covered pine forests, the silence of the mountains
                    creates a peaceful yet thrilling atmosphere. Nights at the campsite under a
                    sky full of stars feel surreal. The summit push, especially before sunrise,
                    tests your endurance but rewards you with one of the most breathtaking views
                    in the Himalayas.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Kedarkantha Trek
                </h2>

                <div className="space-y-4 text-gray-700">

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            1. Is Kedarkantha Trek suitable for beginners?
                        </p>
                        <p className="mt-2">
                            Yes, the Kedarkantha Trek is one of the best beginner-friendly treks in
                            India. The trail is well-defined, and the gradual ascent makes it
                            manageable for first-time trekkers with basic fitness.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            2. What is the best time to visit Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            The best time depends on your preference. Visit from December to February
                            for snow trekking and from March to April for pleasant weather and clear
                            views.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            3. What is the total distance of Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            The total trek distance is approximately 20 km, usually completed over
                            4 to 5 days.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            4. What is the height of Kedarkantha summit?
                        </p>
                        <p className="mt-2">
                            The Kedarkantha summit is located at an altitude of around
                            3,810 meters above sea level.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            5. How difficult is the Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            The trek is classified as easy to moderate. While it is
                            beginner-friendly, the summit climb can be slightly challenging,
                            especially in snow.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            6. Is Kedarkantha Trek safe?
                        </p>
                        <p className="mt-2">
                            Yes, Kedarkantha Trek is generally safe if you follow proper
                            precautions, carry the right gear, and trek with a guide or
                            experienced group.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            7. Do I need a guide for Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            A guide is not mandatory for experienced trekkers, but it is
                            highly recommended, especially during winter when trails are
                            covered in snow.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            8. What is special about Juda Ka Talab?
                        </p>
                        <p className="mt-2">
                            Juda Ka Talab is a beautiful high-altitude lake and one of the
                            main highlights of the trek. It freezes in winter and offers
                            stunning reflection views in other seasons.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            9. How cold does it get on Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            In winter, temperatures can drop to -5°C to -10°C at night,
                            especially at higher camps.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            10. What should I carry for Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            Carry warm clothes, waterproof trekking shoes, gloves,
                            sunglasses, backpack, water bottle, and essential medicines.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            11. Can I do Kedarkantha Trek without a package?
                        </p>
                        <p className="mt-2">
                            Yes, you can do it independently if you have trekking experience
                            and proper planning. However, beginners should opt for a guided
                            package.
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">
                            12. How long does it take to complete Kedarkantha Trek?
                        </p>
                        <p className="mt-2">
                            The trek usually takes 4 to 5 days, including travel to and from
                            Sankri.
                        </p>
                    </div>

                </div>

                <div className="mt-6 pt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <img
                            src="/Image/rohit.jpeg"
                            alt="Rohit Upadhyay"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        <p className="text-gray-800 leading-relaxed text-justify text-lg">
                            Hi, I’m Rohit, the explorer behind RU Explores. For me, travel is not just
                            about reaching a destination but about understanding its culture, people,
                            food and stories. I enjoy exploring places deeply, from mountain villages to
                            local streets and sharing those experiences in a way that helps others travel
                            with purpose. RU Explores is my attempt to turn travel into something more
                            meaningful than just ticking locations off a list.          </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Kedarkantha;