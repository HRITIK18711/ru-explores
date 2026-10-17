import React from "react";

const SectionImage = ({ src, source, alt = "Boudhanath Stupa Kathmandu Nepal" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const Boudhanath = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Boudhanath Stupa, Kathmandu: History, Timings, Entry Fee & Travel Guide
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                <SectionImage
                    src="/Image/01-boudhanath-temple-ariel-view-kathmandu-nepal-pexels-volker-meyer.jpg"
                    source="Pexels/Volker Meyer"
                    alt="Boudhanath Stupa Kathmandu"
                />

                <p className="mb-4 text-gray-700">
                    Boudhanath Stupa is one of those places in Kathmandu where daily life and devotion share the same space. Before the cafes fill with tourists and the souvenir shops open for the day, pilgrims have already begun walking around the stupa, prayer wheels are already turning and monks are making their way to nearby monasteries. The dome remains at the centre of it all, a constant presence in a tradition that has continued here for centuries. This stupa is the largest in Nepal and one of the country's most important centres of Buddhism.
                </p>

                <p className="mb-6 text-gray-700">
                    Its presence has shaped the neighbourhood around it where monasteries, small businesses and family-run cafes stand alongside homes that have been part of this community for generations. Boudhanath was an important stop for traders and pilgrims travelling between Nepal and Tibet long before it became one of Kathmandu's most visited landmarks. People visit Boudhanath to offer prayers, to learn about Tibetan Buddhist traditions or simply enjoy spending time in one of Kathmandu's most recognizable public squares. Whatever brings them here, most leave remembering the calm rhythm of the place as much as the monument itself.
                </p>

                {/* Why Visit Boudhanath Stupa */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Visit Boudhanath Stupa?
                </h2>

                <SectionImage
                    src="/Image/02-boudhanath-temle-eye-view-kathmandu-nepal-pexels-sushant-bista.jpg"
                    source="Pexels/Sushant Bista"
                    alt="Why Visit Boudhanath Stupa"
                />

                <p className="mb-4 text-gray-700">
                    Boudhanath offers liveliness which many historic landmarks gradually lose with time. Rather than being preserved as a monument, it remains the centre of a neighbourhood where religious practices continue every single day. From the first kora in the morning to the butter lamps lit after sunset, traditions continue to shape the square throughout the day. The longer you spend around Boudhanath, the more the square begins to reveal about itself. A prayer ceremony inside a monastery, artists painting thangka scrolls or the quiet glow of butter lamps after sunset often become the memories people carry home.
                </p>

                <p className="mb-4 text-gray-700">
                    Another reason Boudhanath stands apart is the opportunity to understand Tibetan culture without stepping into a museum. Many monasteries around the stupa welcome visitors at selected times, allowing them to observe traditional murals, prayer halls and centuries-old Buddhist practices in their original setting. These are customs that continue because they remain an active part of the community.
                </p>

                <p className="mb-6 text-gray-700">
                    Even after earning UNESCO World Heritage status, it continues to serve the people who gather here to pray, study and celebrate festivals that have been observed for generations. That connection between heritage and everyday life gives Boudhanath a place of its own among Kathmandu's many historic sites.
                </p>

                {/* History & Architecture */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    History & Architecture of Boudhanath Stupa
                </h2>

                <SectionImage
                    src="/Image/03-boudhanath-architecture-kathmandu.jpg"
                    source="Wikimedia Commons"
                    alt="History and Architecture of Boudhanath Stupa"
                />

                <p className="mb-4 text-gray-700">
                    The exact origins of Boudhanath Stupa remain uncertain with different historical records and local traditions offering varying accounts. Most historians believe the present structure was built or expanded during the Licchavi period between the 5th and 7th centuries CE, although the site itself is thought to be much older. Over the centuries, the stupa has survived earthquakes, political change and periods of restoration.
                </p>

                <p className="mb-4 text-gray-700">
                    Its architecture follows a design that is rich in Buddhist symbolism rather than decoration alone. The massive white dome represents the earth, forming the foundation of the structure. Rising above it is the square tower, known as the Harmika, painted with the all-seeing eyes of Lord Buddha facing the four cardinal directions. Above the Harmika, thirteen golden tiers lead towards the pinnacle, symbolizing the stages a person must pass through on the path to enlightenment. The overall layout follows the principles of a Buddhist mandala, a symbolic representation of the universe in Buddhist philosophy.
                </p>

                <p className="mb-6 text-gray-700">
                    Boudhanath has no central prayer hall. The monument is meant to be experienced from the outside with devotees walking clockwise along the circular path. This design reflects an important Buddhist tradition, where movement itself becomes part of prayer rather than simply a way of reaching the monument. Although the stupa has been restored several times including after the 2015 Nepal earthquake, great care has been taken to preserve its original form and religious symbolism.
                </p>

                {/* What to Explore */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    What to Explore Around Boudhanath Stupa
                </h2>

                <SectionImage
                    src="/Image/04-kora-boudhanath-stupa.jpg"
                    source="Wikimedia Commons"
                    alt="Walk the Kora Boudhanath"
                />

                <h4 className="font-semibold text-black mb-1">Walk the Kora</h4>
                <p className="mb-6 text-gray-700">
                    Walk around the circular path around Boudhanath, known as the Kora, a clockwise walk followed by Buddhist devotees as an act of prayer and reflection. Along the route, rows of prayer wheels line the outer wall of the stupa. Many devotees gently spin every wheel as they complete their circuit.
                </p>

                <SectionImage
                    src="/Image/05-monasteries-near-boudhanath.jpg"
                    source="Wikimedia Commons"
                    alt="Monasteries around Boudhanath"
                />

                <h4 className="font-semibold text-black mb-1">Visit the Monasteries</h4>
                <p className="mb-6 text-gray-700">
                    Several Tibetan Buddhist monasteries stand within a short walk of the stupa, each offering a glimpse into Buddhist learning and traditions. Shechen Monastery is known for its murals, monastery courtyard and cultural programmes. Ka-Nying Shedrub Ling Monastery attracts people with its peaceful prayer halls and Tibetan Buddhist teachings. Entry rules and photography policies may differ, so it is always worth checking before stepping inside.
                </p>

                <SectionImage
                    src="/Image/06-thangka-workshops-boudhanath.jpg"
                    source="Wikimedia Commons"
                    alt="Thangka Artists at Boudhanath"
                />

                <h4 className="font-semibold text-black mb-1">Watch Thangka Artists at Work</h4>
                <p className="mb-6 text-gray-700">
                    The streets around Boudhanath are home to workshops where traditional Thangka paintings are still created by hand. These paintings often take weeks or even months to complete, following techniques passed down through generations. Some studios welcome people to observe the artists at work, offering a closer look at one of the region's most respected art forms.
                </p>

                <h4 className="font-semibold text-black mb-1">Light a Butter Lamp</h4>
                <p className="mb-6 text-gray-700">
                    Dedicated butter lamp houses near the stupa allow worshippers to light lamps as a symbol of prayer, remembrance or hope. Even for those simply observing, the rows of softly glowing lamps offer a quiet glimpse into a tradition that continues throughout the day.
                </p>

                <h4 className="font-semibold text-black mb-1">View the Stupa from Above</h4>
                <p className="mb-6 text-gray-700">
                    Several rooftop terraces around the square provide a different perspective of Boudhanath. From above, the circular layout of the monument and the movement around the Kora become much easier to appreciate than from ground level. It is one of the best places to understand how the stupa sits at the heart of the surrounding neighbourhood.
                </p>

                <h4 className="font-semibold text-black mb-1">Explore the Local Streets</h4>
                <p className="mb-6 text-gray-700">
                    Beyond the main square, the narrow lanes around Boudhanath reveal a quieter side of the neighbourhood. Small bookshops specializing in Buddhist literature stand alongside stores selling handmade incense, prayer flags, singing bowls, ritual objects and traditional Tibetan handicrafts. Many of these family-run businesses have served the local community for decades, making the surrounding streets an important part of Boudhanath's identity.
                </p>

                {/* Religious Importance and Festive Traditions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Religious Importance and Festive Traditions
                </h2>

                <SectionImage
                    src="/Image/07-festivals-traditions-boudhanath.jpg"
                    source="Pexels/Volker Meyer"
                    alt="Religious Importance and Traditions"
                />

                <p className="mb-4 text-gray-700">
                    For Buddhists across the Himalayan region, Boudhanath is one of the most important centres of Tibetan Buddhism outside Tibet and a major pilgrimage destination where devotees travel throughout the year to offer prayers, seek blessings and take part in religious ceremonies. Many monasteries surrounding the stupa belong to different schools of Tibetan Buddhism, making Boudhanath not only a place of worship but also a centre for Buddhist learning, meditation and the preservation of religious traditions.
                </p>

                <p className="mb-4 text-gray-700">
                    Pilgrimage at Boudhanath is closely linked to the practice of the Kora, believing the practice to be an expression of compassion, mindfulness and spiritual merit. On auspicious days, it is common to see people completing several circuits around the stupa before visiting nearby monasteries for prayers and teachings.
                </p>

                <SectionImage
                    src="/Image/08-ceremonies-boudhanath-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Festivals at Boudhanath"
                />

                <p className="mb-4 text-gray-700">
                    The religious calendar brings an even greater sense of devotion to Boudhanath. During Losar, the Tibetan New Year, monasteries around Boudhanath organize special prayers, traditional rituals and community celebrations. Some monasteries, including Shechen Monastery and Ka-Nying Shedrub Ling Monastery, also perform sacred Cham (masked) dances as part of the celebrations. Buddha Jayanti, celebrating the birth, enlightenment and Mahaparinirvana of Lord Buddha draws thousands of worshippers who participate in prayer gatherings, processions and butter lamp offerings around the stupa.
                </p>

                <p className="mb-4 text-gray-700">
                    Other important occasions, including Saga Dawa and Lhabab Duchen, are also observed with deep reverence. During Saga Dawa, Buddhists choose this sacred month for pilgrimage, prayer, acts of generosity and completing the Kora. Lhabab Duchen, which commemorates the Buddha's descent from the heavenly realm after teaching the Dharma to his mother, is marked by special religious teachings, prayers and acts of charity organized by the surrounding monasteries.
                </p>

                <p className="mb-6 text-gray-700">
                    Monasteries regularly host prayer sessions, meditation programmes, scriptural teachings and community gatherings, ensuring that the stupa remains not only a symbol of faith but also a living centre of Buddhist spiritual life.
                </p>

                {/* Plan Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Plan Your Visit
                </h2>

                <SectionImage
                    src="/Image/09-plan-your-visit-boudhanath.jpg"
                    source="Wikimedia Commons"
                    alt="Planning Your Visit to Boudhanath"
                />

                <p className="mb-4 text-gray-700">
                    For Boudhanath, around two hours is usually enough to complete the kora, spend some time inside a monastery, explore the smaller streets around the stupa and enjoy the view from one of the rooftop terraces. Those interested in photography, Buddhist art or local cultures often stay longer. The experience changes with the time of day. Mornings are quieter as monks, pilgrims and local residents begin their daily prayers around the stupa. By evening, the square becomes livelier as butter lamps begin to glow, prayers continue in the surrounding monasteries and rooftop cafes fill with people overlooking the stupa. October, November, March and April usually offer the clearest skies, although Boudhanath remains active throughout the year, including the monsoon.
                </p>

                <p className="mb-4 text-gray-700">
                    The open square around Boudhanath remains accessible throughout the day while monasteries, museums and nearby businesses follow their own opening hours. Entry to the monument area is currently NPR 400 for foreign nationals and NPR 100 for SAARC nationals. Nepali citizens and children below the age of ten can enter free of charge. If you plan to leave and return later the same day, keep your entry ticket.
                </p>

                <p className="mb-6 text-gray-700">
                    As Boudhanath is an active place of worship, a few simple courtesies help visitors blend naturally into the surroundings. Walk clockwise around the stupa, avoid interrupting prayer ceremonies and remove your shoes before entering monastery buildings where required. If you wish to photograph monks or worshippers, ask permission first. Climbing onto the stupa or handling religious objects should always be avoided.
                </p>

                {/* How to Reach Boudhanath Stupa */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach Boudhanath Stupa
                </h2>

                <SectionImage
                    src="/Image/10-transport-kathmandu-nepal.jpg"
                    source="Wikimedia Commons"
                    alt="Reaching Boudhanath Stupa"
                />

                <p className="mb-4 text-gray-700">
                    Boudhanath lies about 5 km from Tribhuvan International Airport and around 6–7 km from Thamel, making it one of the easiest heritage sites to reach in Kathmandu. Taxis are the most convenient option from both locations, while ride-hailing services such as Pathao and InDrive are also widely used in the city.
                </p>

                <p className="mb-6 text-gray-700">
                    Public buses travelling towards Jorpati, Boudha or nearby neighbourhoods stop within a short walk of the stupa, offering an economical way to reach the area. If you're staying in Thamel, Lazimpat or nearby parts of central Kathmandu, cycling is another option, although traffic can be heavy during peak hours.
                </p>

                {/* Nearby Attractions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nearby Attractions
                </h2>

                <SectionImage
                    src="/Image/11-nearby-attractions-pashupatinath.jpg"
                    source="Wikimedia Commons"
                    alt="Nearby Attractions to Boudhanath"
                />

                <p className="mb-4 text-gray-700">
                    Boudhanath is often the starting point for exploring some of Kathmandu Valley's most important cultural and religious landmarks. The closest is Pashupatinath Temple, one of the holiest Hindu temples dedicated to Lord Shiva and another UNESCO World Heritage Site. Visiting both on the same day offers a glimpse into two of Nepal's most significant religious traditions.
                </p>

                <p className="mb-4 text-gray-700">
                    A few kilometres north of the stupa, Kopan Monastery provides a quieter setting for meditation, Buddhist learning and views across the Kathmandu Valley. Closer to Boudhanath itself, Taragaon Museum explores the region's architectural, cultural and photographic heritage, adding another layer to the story of the surrounding neighbourhood.
                </p>

                <p className="mb-6 text-gray-700">
                    If you're continuing your journey through Kathmandu, Swayambhunath, Kathmandu Durbar Square and Patan Durbar Square each offer a different perspective on the valley's history, religion and architecture. For cafes, restaurants and local markets, many travellers also spend time exploring Thamel, Kathmandu's best-known tourist district.
                </p>

                <SectionImage
                    src="/Image/12-boudhanath-reflection.jpg"
                    source="Wikimedia Commons"
                    alt="Boudhanath Stupa Overview"
                />

                <p className="mb-6 text-gray-700">
                    It is easy to admire Boudhanath for its architecture or its place in history. Stay a bit longer and you will notice, a monk pausing beside a row of prayer wheels, an artist adding another careful brushstroke to a Thangka, families gathering for evening prayers as the light slowly fades across the white dome. These are simply part of everyday life around one of the world's great Buddhist monuments. And perhaps that is the best way to remember Boudhanath, not as a place that preserves the past but as one that continues to live it every single day in simplicity, devotion and with vibrancy.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Boudhanath Stupa
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. How much time is needed to visit Boudhanath Stupa?</p>
                        <p className="mt-2">Most visitors spend around two hours exploring Boudhanath. This is usually enough to walk the kora, visit a monastery, explore the surrounding streets and enjoy the view from one of the rooftop terraces.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Is Boudhanath Stupa a UNESCO World Heritage Site?</p>
                        <p className="mt-2">Yes. Boudhanath is one of the UNESCO World Heritage Sites in the Kathmandu Valley and is recognized as one of the largest Buddhist stupas in the world.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. Why do people walk clockwise around Boudhanath?</p>
                        <p className="mt-2">Walking clockwise around the stupa, known as the Kora, is a long-standing Buddhist practice. Devotees complete the circuit while offering prayers, spinning prayer wheels and reciting sacred mantras.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Can non-Buddhists visit Boudhanath?</p>
                        <p className="mt-2">Yes. Visitors of all faiths are welcome, provided they respect local customs, religious ceremonies and monastery rules.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Is photography allowed inside Boudhanath?</p>
                        <p className="mt-2">Photography is generally allowed in the open square, but some monasteries may restrict photography inside prayer halls. It is always best to ask before photographing monks, worshippers or religious ceremonies.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. What is the best time of day to visit Boudhanath?</p>
                        <p className="mt-2">Morning offers a quieter atmosphere with pilgrims beginning the day's prayers, while evenings are known for butter lamps, chanting and a more vibrant atmosphere around the stupa.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Can Boudhanath and Pashupatinath be visited on the same day?</p>
                        <p className="mt-2">Yes. The two UNESCO World Heritage Sites are only a short drive apart and are commonly included in the same itinerary.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Are there restaurants and cafes around Boudhanath?</p>
                        <p className="mt-2">Yes. The streets surrounding the stupa have cafes, restaurants and rooftop terraces serving Nepali, Tibetan and international cuisine, many with views of the monument.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What should visitors wear when visiting Boudhanath?</p>
                        <p className="mt-2">Comfortable clothing that respects the religious setting is recommended. Shoes should be removed before entering monasteries or prayer halls where required.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. Is Boudhanath suitable for families and elderly visitors?</p>
                        <p className="mt-2">Yes. The circular path around the stupa is mostly level and easy to walk, making it suitable for families, senior visitors and most wheelchair users.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. What are the opening hours of Boudhanath Stupa?</p>
                        <p className="mt-2">The open square around Boudhanath is accessible throughout the day, allowing visitors to experience the stupa from early morning until late evening. However, monasteries, museums and nearby businesses follow their own opening hours, which may vary.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. How much is the entry fee for Boudhanath Stupa?</p>
                        <p className="mt-2">The current entry fee is NPR 400 for foreign nationals and NPR 100 for SAARC nationals. Nepali citizens and children below 10 years of age can enter free of charge. As entry fees may change over time, it is always a good idea to check the latest information before your visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. How far is Boudhanath Stupa from Tribhuvan International Airport?</p>
                        <p className="mt-2">Boudhanath is about 5 km from Tribhuvan International Airport, and the journey usually takes 15–20 minutes by taxi, depending on traffic.</p>
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

export default Boudhanath;