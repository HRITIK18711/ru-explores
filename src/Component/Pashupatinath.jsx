import React from "react";

const SectionImage = ({ src, source = "Wikipedia", alt = "Pashupatinath Temple Kathmandu Nepal" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const Pashupatinath = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Pashupatinath Temple, Kathmandu: History, Timings, Entry Fee & Travel Guide
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 15 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/01-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    The journey to Pashupatinath Temple begins even before you step inside. The sound of temple bells, the fragrance of incense, the chants of devotees and the sight of the Bagmati River together create an atmosphere unlike anywhere else in Kathmandu. Every day, thousands of people arrive here to pray, seek blessings or simply witness the traditions that have shaped this sacred place for centuries.
                </p>

                <p className="mb-4 text-gray-700">
                    Dedicated to Lord Shiva, Pashupatinath Temple is one of the most important Hindu pilgrimage sites in the world and a UNESCO World Heritage Site. But beyond its religious importance, it is also a place where Nepal's history, culture and daily life come together. Ancient shrines, sacred rituals, festivals and centuries-old traditions continue much as they have for generations.
                </p>

                <p className="mb-6 text-gray-700">
                    Whether you visit for spiritual reasons or cultural curiosity, Pashupatinath Temple offers an experience that stays with you long after you leave. In this guide, we will explore its history, architecture, religious significance, visitor information, nearby attractions and everything else you need to plan your visit.
                </p>

                {/* Why Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Visit Pashupatinath Temple?
                </h2>

                <SectionImage
                    src="/Image/03-sadhu-pashupatinath-temple-kathmandu-nepal-01.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    As you stand near the entrance of Pashupatinath Temple for a few minutes, you will realize that everyone arrives with a different purpose. Some carry flowers and offerings, some pause quietly to take blessings. Others simply wander through the complex, taking in every detail. For Hindus, Pashupatinath is among the holiest places dedicated to Lord Shiva, worshipped here as Pashupatinath, the Lord of All Living Beings. Conch shells echo through the complex, incense rises from the courtyards and the Bagmati River flows quietly beside the ghats. Nearby, families gather for age-old rituals and even those passing through often pause for a while.
                </p>

                <p className="mb-4 text-gray-700">
                    The more time you spend here, you will find that the main shrine is only one part of the story. Small temples stand around quiet courtyards, saffron-clad sadhus sit beneath old trees sharing stories with visitors, monkeys move effortlessly across rooftops and finely carved stone sculptures reveal details that are easy to miss at first sight. Every turn offers something different to notice.
                </p>

                <p className="mb-6 text-gray-700">
                    Some of the most memorable moments are often found away from the main shrine, beside the river, in quiet conversations or while simply watching the rhythms of everyday life unfold.
                </p>

                {/* History */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    History of Pashupatinath Temple
                </h2>

                <SectionImage
                    src="/Image/02-pashupatinath-temple-kathmandu-nepal-02.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    The exact origin of Pashupatinath Temple is still unknown. Historians believe it is one of the oldest temples dedicated to Lord Shiva, while inscriptions from the Licchavi period confirm that it was already an important place of worship by the 5th century CE.
                </p>

                <p className="mb-4 text-gray-700">
                    According to Hindu tradition, Lord Shiva once took the form of a deer and wandered through the forests of the Kathmandu Valley. When the gods recognized him, one of his antlers broke and became a sacred Shivling. It is believed that the temple was later established at the same place.
                </p>

                <p className="mb-6 text-gray-700">
                    Over the centuries, different rulers helped preserve and rebuild the temple. The Malla kings played an important role in shaping much of the present-day complex while later Shah rulers continued to support its upkeep. Today, Pashupatinath remains one of Nepal's most important Hindu pilgrimage sites and is part of the UNESCO World Heritage Site in the Kathmandu Valley.
                </p>

                {/* Architecture */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Architecture of Pashupatinath Temple
                </h2>

                <SectionImage
                    src="/Image/04-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Pashupatinath Temple is built in the traditional Nepali pagoda style making it look quite different from the stone temples found across much of India that follow Nagara Style. The main temple stands on a square platform with a two-tiered roof covered in gold-plated copper. Four silver-plated doors mark the entrances while a golden pinnacle rises above the roof. This form of architecture developed in the Kathmandu Valley, is known for its carved wooden struts, sloping roofs and detailed metalwork.
                </p>

                <p className="mb-6 text-gray-700">
                    Inside the sanctum is the Chaturmukha (four-faced) Shiva Lingam with four faces representing different aspects of Lord Shiva. Devotees worship Lord Shiva here in the form of Pashupatinath and only Hindus are permitted to enter the main shrine. Facing the main shrine is a large bronze statue of Nandi, Shiva's sacred bull, placed in the traditional position of devotion towards the deity. Stone sculptures, wooden windows, carved doorways and small courtyards appear throughout the complex, reflecting the craftsmanship of Newari artisans.
                </p>

                {/* What to See */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    What to See at Pashupatinath Temple
                </h2>

                <SectionImage
                    src="/Image/06-ghat-pashupatinath-temple-kathmandu-nepal-01.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    The main temple is where almost every visit begins. The four silver-plated doors, carved wooden struts and the Chaturmukha Shivling at its centre hold everyone's attention while the bronze statue of Nandi sits quietly facing Lord Pashupatinath. Even with hundreds of people around, this part of the complex has a stillness that is difficult to ignore.
                </p>

                <p className="mb-4 text-gray-700">
                    The Bagmati River flows beside the temple where Arya Ghat and the other cremation ghats remain an inseparable part of daily life. Pilgrims gather for prayers, families perform final rites, priests continue age-old rituals and the river keeps flowing through it all. It is a place that asks for quiet respect rather than curiosity.
                </p>

                <SectionImage
                    src="/Image/07-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Away from the river, the temple complex opens into a network of small temples and shrines. Some are busy with devotees while others remain almost unnoticed until the sound of a bell or the fragrance of fresh flowers draws attention to them. Walking through these pathways often reveals a different side of Pashupatinath, one that cannot be understood by standing only in front of the main shrine.
                </p>

                <p className="mb-6 text-gray-700">
                    Saffron-clad sadhus have become one of the familiar faces of Pashupatinath, each with a story, a tradition or simply a quiet place to sit. The nearby deer park offers a peaceful corner within the sacred grounds.
                </p>

                {/* Religious Importance */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Religious Importance of Pashupatinath Temple
                </h2>

                <SectionImage
                    src="/Image/05-shivling-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    For devotees, Pashupatinath is not simply a temple, it is a place they have longed to stand before. Many arrive after making a vow, some come to offer thanks while others quietly fold their hands before the temple after years of waiting. From the first prayer of the morning to the final aarti of the day, faith remains the constant presence here.
                </p>

                <p className="mb-4 text-gray-700">
                    Lord Shiva is worshipped here as Pashupatinath, the "Lord of All Living Beings". For Hindus, this is one of the most sacred forms of Shiva and offering prayers at Pashupatinath is considered deeply auspicious. Pilgrims travel from every corner of Nepal, neighbouring India and many other parts of the world, carrying flowers, bel leaves and prayers that often pass from one generation to the next.
                </p>

                <p className="mb-6 text-gray-700">
                    The temple's spiritual significance extends beyond worship alone. Along the banks of the Bagmati River, final rites are performed with the belief that Lord Pashupatinath watches over every stage of life including its final farewell. According to Hindu belief, prayers offered here and cremation beside the sacred river help the soul continue its journey towards moksha (liberation). It is this faith, held by millions over centuries, that gives Pashupatinath a presence unlike almost any other temple in the Himalayas.
                </p>

                {/* Daily Rituals and Festivals */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Daily Rituals and Festivals at Pashupatinath Temple
                </h2>

                <SectionImage
                    src="/Image/04-bagmati-river-pashupatinath-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Before sunrise, devotees begin gathering at Pashupatinath with flowers, bel leaves and quiet prayers. The rhythm of worship continues through the day. By evening, the Bagmati Aarti draws people to the river where flickering lamps, temple bells and chants come together at the end of another day of worship.
                </p>

                <SectionImage
                    src="/Image/08-pilgrims-pashupatinath-temple-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Everything changes during Maha Shivaratri. The quiet courtyards disappear beneath a sea of devotees. Sadhus from Nepal and India gather at the temple, prayers continue through the night and every path inside the complex fills with people waiting for a moment before Lord Pashupatinath.
                </p>

                <p className="mb-6 text-gray-700">
                    During Teej, thousands of women dressed in red arrive with songs and prayers, filling the temple complex from morning onwards. Bala Chaturdashi brings families carrying seven kinds of grains in remembrance of loved ones and the Mondays of Shravan keep the temple filled with Shiva devotees throughout the holy month.
                </p>

                {/* Plan Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Plan Your Visit
                </h2>

                <SectionImage
                    src="/Image/09-pashupatinath-temple-kathmandu-nepal-04.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    The temple begins to fill long before the city is fully awake. By sunrise, devotees are already standing in line with flowers, bel leaves and offerings in their hands. The same courtyards look very different again by evening, when people gather along the Bagmati River for the daily Aarti.
                </p>

                <p className="mb-6 text-gray-700">
                    A couple of hours are usually enough to explore the temple complex without feeling rushed. The main temple is open only to Hindus while people from other faiths can walk through much of the surrounding complex and view the shrine from designated areas. Clothing that covers the shoulders and knees is appropriate, footwear should be removed before entering temple areas where required and cameras are best kept away from the sanctum and funeral ceremonies along the Bagmati River.
                </p>

                {/* How to Reach */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach Pashupatinath Temple
                </h2>

                <SectionImage
                    src="/Image/10-pashupatinath-temple-kathmandu-nepal-05.jpg"
                    source="Wikipedia"
                />

                <p className="mb-4 text-gray-700">
                    Pashupatinath Temple is located in eastern Kathmandu, about 5 kilometres from Tribhuvan International Airport. The journey usually takes 15–20 minutes by taxi, depending on traffic, making it one of the first places many travellers visit after arriving in Nepal.
                </p>

                <p className="mb-6 text-gray-700">
                    The temple is also well connected to popular parts of the city, including Thamel, Boudhanath and Kathmandu Durbar Square. Taxis, ride-hailing services and local buses regularly serve the area, while those staying near Boudhanath often choose to walk.
                </p>

                {/* Nearby Attractions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nearby Attractions
                </h2>

                <SectionImage
                    src="/Image/11-bagheshwari-temple-pashupatinath-kathmandu-nepal.jpg"
                    source="Wikipedia"
                />

                <div className="space-y-4 text-gray-700 mb-6">
                    <div>
                        <p className="font-bold text-black">Guhyeshwari Temple</p>
                        <p>Located just across the Bagmati River, Guhyeshwari Temple is one of Nepal's most revered Shakti Peethas. The temple holds deep religious significance in Hindu tradition and has been closely associated with Pashupatinath for centuries.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Boudhanath Stupa</p>
                        <p>Around 2 kilometres from Pashupatinath, Boudhanath Stupa is one of the largest spherical stupas in the world and a UNESCO World Heritage Site. Prayer wheels, Buddhist monasteries and fluttering prayer flags surround the white dome throughout the year.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Kirateshwar Mahadev Temple</p>
                        <p>Situated along the banks of the Bagmati River, Kirateshwar Mahadev Temple is dedicated to Lord Shiva in his Kirat form. The temple is especially associated with the Kirat community and remains an active place of worship.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Kathmandu Durbar Square</p>
                        <p>About 5 kilometres away, Kathmandu Durbar Square preserves the historic heart of the old city. Ancient palaces, pagoda-style temples and intricately carved courtyards reflect the craftsmanship of the Malla period.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Narayanhiti Palace Museum</p>
                        <p>Located near the city centre, the former royal palace now serves as a museum documenting Nepal's modern monarchy. Its galleries display royal residences, ceremonial halls and exhibits connected with the country's political history.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Garden of Dreams</p>
                        <p>A short drive from Pashupatinath, the Garden of Dreams is a restored early twentieth-century garden known for its pavilions, fountains and landscaped lawns. It offers a quieter setting in the middle of Kathmandu.</p>
                    </div>
                    <div>
                        <p className="font-bold text-black">Swayambhunath Stupa</p>
                        <p>Often called the Monkey Temple, Swayambhunath stands atop a hill overlooking Kathmandu Valley. The stupa is an important pilgrimage site for both Buddhists and Hindus, with shrines, monasteries and panoramic views of the city.</p>
                    </div>
                </div>

                <p className="mb-4 text-gray-700">
                    Pashupatinath Temple remains one of Kathmandu's most important landmarks where faith, history and everyday life come together on the banks of the Bagmati River. From centuries-old rituals and Newari craftsmanship to the rhythm of daily prayers, every part of the complex reflects a tradition that continues to shape the city's identity.
                </p>

                <p className="mb-6 text-gray-700">
                    The temple remains one of the clearest windows into Kathmandu's religious and cultural life, where traditions continue much as they have for centuries.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Pashupatinath Temple
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Where is Pashupatinath Temple located?</p>
                        <p className="mt-2">Pashupatinath Temple is located on the banks of the Bagmati River in eastern Kathmandu, Nepal. It is about 5 kilometres from Tribhuvan International Airport.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Why is Pashupatinath Temple famous?</p>
                        <p className="mt-2">The temple is one of the most sacred shrines dedicated to Lord Shiva and is regarded as an important pilgrimage site for Hindus. It is also a UNESCO World Heritage Site and one of Kathmandu's best-known landmarks.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. Can non-Hindus enter Pashupatinath Temple?</p>
                        <p className="mt-2">Non-Hindus are not allowed inside the main temple where the Shiva Linga is housed. However, they can explore much of the surrounding temple complex and view the main shrine from designated areas across the Bagmati River.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. What is the best time to visit Pashupatinath Temple?</p>
                        <p className="mt-2">Early mornings are known for daily prayers, while evenings attract visitors for the Bagmati Aarati. Maha Shivaratri and Teej are among the busiest times of the year.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. How much time should I spend at Pashupatinath Temple?</p>
                        <p className="mt-2">Most visitors spend two to three hours exploring the temple complex. Those interested in the surrounding shrines and the Bagmati riverfront may choose to stay longer.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is photography allowed inside the temple?</p>
                        <p className="mt-2">Photography is generally permitted in the outer areas of the complex. Cameras are not allowed inside the main sanctum, and visitors are expected to respect the privacy of funeral ceremonies along the Bagmati River.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. What should I wear when visiting Pashupatinath Temple?</p>
                        <p className="mt-2">Clothing that covers the shoulders and knees is considered appropriate while visiting the temple complex. Footwear must be removed before entering temple areas where required.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Why are cremation ceremonies performed at Pashupatinath?</p>
                        <p className="mt-2">The Bagmati River has long been associated with Hindu funeral rites. Many families perform the last rites here because of the temple's religious importance and the belief that it is a sacred place for these ceremonies.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Is there an entry fee for Pashupatinath Temple?</p>
                        <p className="mt-2">Entry to the temple complex is free for Nepali citizens and Indians while foreign visitors are required to purchase an entry ticket. Ticket prices may change, so it's best to check the latest rates before your visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Which places can I visit near Pashupatinath Temple?</p>
                        <p className="mt-2">Guhyeshwari Temple, Boudhanath Stupa, Kirateshwar Mahadev Temple, Kathmandu Durbar Square and Swayambhunath Stupa are among the well-known attractions nearby.</p>
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

export default Pashupatinath;