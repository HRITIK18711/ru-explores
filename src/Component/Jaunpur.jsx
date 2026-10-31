import React from "react";

const SectionImage = ({ src, source, alt = "Jaunpur" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const Jaunpur = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Shiraj-E-Hind Jaunpur: A Journey Through Sharqi Grandeur
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Atika Bano</span>
                </p>

                <SectionImage
                    src="/Image/01-jaunpur-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Jaunpur City"
                />

                <p className="mb-6 text-gray-700">
                    Jaunpur also known as the Shiraz-e-Hind is an old city with plenty to see and explore. The city has grand historic buildings, old streets, busy markets and food that are closely connected with its local culture. A walk through Jaunpur gives you a good idea of how much of its old identity is still part of the city today. The best part is that many interesting places are close enough so you can spend the morning exploring old monuments, stop for local food, walk through the markets and continue exploring the city in the evening.
                </p>

                {/* Why Explore Jaunpur? */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Explore Jaunpur?
                </h2>

                <SectionImage
                    src="/Image/02-shahi-qila-gomti-bank-jaunpur-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Why Explore Jaunpur"
                />

                <p className="mb-6 text-gray-700">
                    Jaunpur becomes especially interesting for travellers who like looking beyond the usual tourist circuit. Its history is closely connected with the Sharqi rulers who made the city an important centre of learning and built many of its best-known monuments. The city also has a few places that are situated in older parts of the city which are best understood by looking at the details of their architecture. There is also a strong connection between Jaunpur and ittar, the traditional perfume made and sold here for generations. The city’s famous Jaunpur Imarti is another local speciality worth trying. For a short trip, Jaunpur gives enough variety to plan a day around its historic sites and still leave time to discover the less talked-about parts of the city.
                </p>

                {/* Places to Explore in Jaunpur */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Explore in Jaunpur
                </h2>

                <h4 className="font-semibold text-black mb-1">Shahi Qila</h4>
                <SectionImage
                    src="/Image/03-shahi-qila-jaunpur-fort-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Shahi Qila Jaunpur"
                />
                <p className="mb-6 text-gray-700">
                    Start with Shahi Qila if you want to understand Jaunpur before moving to its other monuments. The old gateway leads into a large open area with the remains of the fort, a mosque and the old Turkish bath. The Gomti can be seen from the fort. There is enough to look around here for an hour without rushing.
                </p>

                <h4 className="font-semibold text-black mb-1">Bhool Bhulaiya</h4>
                <SectionImage
                    src="/Image/04-hammam-shahi-qila-jaunpur-fort-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Hammam Inside Shahi Qila (Bhool Bhulaiya)"
                />
                <p className="mb-6 text-gray-700">
                    The Bhool Bhulaiya inside Shahi Qila is probably the part of the fort that will make you stop and look twice. It is actually connected with the old Turkish bath. Inside are small rooms, water channels and tubs with passages joining one space to another. Small openings in the domes let light into the structure. Walking around these passages gives the place its Bhool Bhulaiya name.
                </p>

                <h4 className="font-semibold text-black mb-1">The Mosques of Jaunpur</h4>
                <SectionImage
                    src="/Image/05-atala-masjid-jaunpur-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Atala Masjid Jaunpur"
                />
                <p className="mb-4 text-gray-700">
                    The mosques are one of the main reasons to spend time in Jaunpur. They belong to the same period, so some architectural features appear again and again but each mosque has something different to notice.
                </p>
                <p className="mb-4 text-gray-700">
                    Atala Masjid stands out as soon as its huge gateway comes into view. The entrance is massive and walking into the open courtyard makes the size of the structure even clearer. Take a little time to look at the stonework before taking a photograph at the entrance.
                </p>
                <p className="mb-4 text-gray-700">
                    Jama Masjid has a different feel because of its scale. The steps, large gateways and open space make it easy to spend time looking around. The details on the arches and walls are worth seeing closely instead of trying to cover the mosque in a few minutes.
                </p>
                <p className="mb-4 text-gray-700">
                    Lal Darwaza Masjid is smaller and feels more connected to the surrounding neighbourhood. Its courtyard, three gateways and old inscriptions are worth a look.
                </p>
                <p className="mb-4 text-gray-700">
                    Jhanjhri Masjid is a completely different stop. Only part of the original structure remains with its large central arch standing on its own. It is the kind of place that takes only a short time to see but the old stonework makes it worth adding to the route.
                </p>
                <p className="mb-6 text-gray-700">
                    Khalis Mukhalis or Char Angul Masjid can be added if there is time for another old mosque. It is smaller than the better-known monuments and works well as an additional stop while exploring the older parts of Jaunpur.
                </p>

                <h4 className="font-semibold text-black mb-1">Tombs and Mausoleums</h4>
                <SectionImage
                    src="/Image/06-qalich-khan-ka-maqbara-jaunpur-uttar-pradesh.jpg"
                    source="RU Explores"
                    alt="Qalich Khan Ka Maqbara Jaunpur"
                />
                <p className="mb-4 text-gray-700">
                    The tombs give the Jaunpur visit a different experience. Instead of rushing from one mausoleum to another, keep them together as a small part of the old-city exploration. The tombs of the Sharqi kings are particularly important because they belong to the rulers who made Jaunpur their capital. Qalich Khan ka Maqbara is another interesting stop with its dome and small chhatris on either side. Rouza of Shah Firoz is simpler with a single dome. The Tomb of Nawab Ghazi Khan has a much larger dome and a more imposing appearance.
                </p>
                <p className="mb-6 text-gray-700">
                    These places are better for travellers who enjoy looking at old buildings and small architectural details. They also give a different feel from the large mosques with smaller spaces and much less activity around them.
                </p>

                <h4 className="font-semibold text-black mb-1">Shahi Pul</h4>
                <SectionImage
                    src="/Image/07-shahi-pul-jaunpur-bridge-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Shahi Pul Jaunpur"
                />
                <p className="mb-6 text-gray-700">
                    A walk across Shahi Pul feels very different from visiting the city's monuments. The old bridge still carries everyday traffic while its historic pavilions and stone details remain along the structure. Look for the stone lion-and-elephant sculpture and spend some time around the bridge rather than simply crossing it. Towards evening, the river and the changing light make this a pleasant place to stop.
                </p>

                <h4 className="font-semibold text-black mb-1">Sheetla Chaukiya Dham</h4>
                <SectionImage
                    src="/Image/08-maa-sheetla-chaukiya-dham-jaunpur-uttar-pradesh.jpg"
                    source="RU Explores"
                    alt="Sheetla Chaukiya Dham Jaunpur"
                />
                <p className="mb-6 text-gray-700">
                    Sheetla Chaukiya Dham brings a completely different experience to the Jaunpur trip. This is a place of worship first and the atmosphere changes depending on the day. Mondays and Fridays see many devotees. Navratri brings much larger crowds. The temple is old and is associated with the worship of Maa Sheetla Devi along with Shiva and Shakti. There is also a pond within the temple area.
                </p>

                <h4 className="font-semibold text-black mb-1">Ghats of Jaunpur</h4>
                <SectionImage
                    src="/Image/09-gopi-ghat-jaunpur-uttar-pradesh.jpg"
                    source="RU Explores"
                    alt="Gopi Ghat Jaunpur"
                />
                <p className="mb-6 text-gray-700">
                    The ghats are worth seeing for a simple reason, they show Jaunpur away from its monuments. Ram Ghat, Gopi Ghat and Achala Devi Ghat reside along the Gomti. There is no need to plan a long stop here. Sit for a while, watch people enjoying and look at the river. In the evening, the ghats become more interesting especially when prayers and sandhya aarti take place along the riverbank.
                </p>

                <h4 className="font-semibold text-black mb-1">Raja Saheb Haveli</h4>
                <SectionImage
                    src="/Image/10-raja-saheb-haveli-jaunpur-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Raja Saheb Haveli Jaunpur"
                />
                <p className="mb-6 text-gray-700">
                    Raja Saheb Haveli is a local residence along one of the large medieval monuments with an old courtyard, carved doors and other details from the house's earlier days. This is a place to approach differently. It is a private property, so permission should be taken before entering and the residents' privacy should be respected. If access is available, it is worth looking at the house slowly rather than treating it as another quick sightseeing stop.
                </p>

                {/* Culture, Food and Local Life of Jaunpur */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Culture, Food and Local Life of Jaunpur
                </h2>

                <SectionImage
                    src="/Image/11-imarti-sweets-gi-jaunpur-uttar-pradesh.jpg"
                    source="RU Explores"
                    alt="Culture, Food and Local Life of Jaunpur"
                />
                
                <p className="mb-4 text-gray-700">
                    Jaunpur has more to its culture than its old buildings. The city has a long connection with learning, music, literature, local food and traditional trade. The old markets are worth exploring between the monuments. Sweet shops, perfume shops, small stores and busy streets give you a look at the Jaunpur that people live and work in every day.
                </p>
                <p className="mb-4 text-gray-700">
                    A visit to Jaunpur is incomplete without trying its Imarti. The sweet has been made in Jaunpur for generations and received a Geographical Indication (GI) registration in 2024. Try it fresh from a local sweet shop. A hot Imarti with its crisp edges and syrup inside is quite tasty.
                </p>
                <p className="mb-4 text-gray-700">
                    Ittar is another part of Jaunpur's culture. Small perfume shops sell traditional fragrances in small bottles. It is worth stopping at one if you like trying local products. Take your time with the different fragrances before buying one.
                </p>
                <p className="mb-6 text-gray-700">
                    Jaunpur was once an important centre of learning particularly during the Sharqi period. Arabic and Persian studies received considerable attention here. The city also became known for music, art and literature while the city continued to have Hindu religious centres and traditions alongside them. This part of Jaunpur is easy to miss because most visitors come for the old buildings, but it helps explain why the city came to be known as Shiraz-e-Hind.
                </p>

                {/* Planning Your Visit to Jaunpur */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit to Jaunpur
                </h2>

                <SectionImage
                    src="/Image/12-mosque-shahi-qila-jaunpur-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Mosque Inside Shahi Qila"
                />

                <h4 className="font-semibold text-black mb-1">Best Time to Visit</h4>
                <p className="mb-4 text-gray-700">
                    The cooler months from October to March are the most comfortable for exploring Jaunpur. Most of the sightseeing involves walking around old monuments and moving between different parts of the city, so winter makes the trip easier.
                </p>

                <h4 className="font-semibold text-black mb-1">How Much Time for Jaunpur</h4>
                <p className="mb-4 text-gray-700">
                    One full day is enough to cover the main places if the trip is planned well. Two days would be better for a relaxed visit. It gives enough time for the monuments, the ghats, local markets, food and places without having to rush from one stop to another.
                </p>

                <h4 className="font-semibold text-black mb-1">How to Reach Jaunpur</h4>
                <p className="mb-4 text-gray-700">
                    <strong>By Air:</strong> The nearest airport is Lal Bahadur Shastri International Airport, Varanasi at about 40–50 km from Jaunpur. From the airport, the rest of the journey can be covered by road.<br />
                    <strong>By Train:</strong> Jaunpur has Jaunpur Junction and Jaunpur City railway stations with trains connecting the city to several major cities.<br />
                    <strong>By Road:</strong> Jaunpur is connected by bus with cities including Varanasi, Lucknow, Gorakhpur and Prayagraj. The main bus stand is in the city, making it convenient for travellers arriving by road.
                </p>

                <h4 className="font-semibold text-black mb-1">Getting Around Jaunpur</h4>
                <p className="mb-4 text-gray-700">
                    For sightseeing inside the city, auto-rickshaws and e-rickshaws are the easiest options. They are available around both railway stations and the main parts of the city. Hiring a local auto or e-rickshaw for a few hours can also save time. Some of the older sites are in different parts of the city, so having local transport makes it easier to move between them.
                </p>

                <h4 className="font-semibold text-black mb-1">Where to Stay in Jaunpur</h4>
                <p className="mb-6 text-gray-700">
                    Staying in the city is useful if you want to explore the monuments without making the trip a rushed day visit. Hotels are available around the main city areas. Staying close to the main city or railway station is convenient.
                </p>

                {/* Places to Explore Near Jaunpur */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Explore Near Jaunpur
                </h2>

                <SectionImage
                    src="/Image/13-varanasi-ayodhya-uttar-pradesh.jpg"
                    source="Wikipedia"
                    alt="Places to Explore Near Jaunpur"
                />

                <h4 className="font-semibold text-black mb-1">Varanasi</h4>
                <p className="mb-4 text-gray-700">
                    Around 70 km from Jaunpur, Varanasi makes the easiest addition to a Jaunpur trip. The city is known for its ghats along the Ganga, evening Ganga Aarti, temples and old lanes.
                </p>

                <h4 className="font-semibold text-black mb-1">Sarnath</h4>
                <p className="mb-4 text-gray-700">
                    Sarnath can be combined with Varanasi. This is where Gautama Buddha gave his first sermon after attaining enlightenment. The Dhamek Stupa, Chaukhandi Stupa, Sarnath Museum and the remains of the ancient monastery are the main places to see.
                </p>

                <h4 className="font-semibold text-black mb-1">Mirzapur</h4>
                <p className="mb-4 text-gray-700">
                    Mirzapur is around 100 km from Jaunpur and is a good choice for travellers who want to add more natural places to the trip like Vindhya hills, waterfalls, temples and river views. Maa Vindhyavasini Temple, one of the important Shakti Peeth pilgrimage sites, is also close to Mirzapur.
                </p>

                <h4 className="font-semibold text-black mb-1">Prayagraj</h4>
                <p className="mb-4 text-gray-700">
                    Prayagraj is around 110 km from Jaunpur. The Sangam where the Ganga, Yamuna and the traditionally believed Saraswati meet, is the main attraction. The city also has Allahabad Fort, Anand Bhavan and Khusro Bagh for travellers who want to spend a full day exploring.
                </p>

                <h4 className="font-semibold text-black mb-1">Ayodhya</h4>
                <p className="mb-6 text-gray-700">
                    Around 130 km from Jaunpur, Ayodhya is close enough to explore The Ram Mandir, Hanuman Garhi, Kanak Bhawan and the Saryu ghats.
                </p>

                <SectionImage
                    src="/Image/14-jhanjhari-masjid-jaunpur-uttar-pradesh.jpg"
                    source="RU Explores"
                    alt="Jhanjhari Masjid Jaunpur"
                />
                
                <p className="mb-6 text-gray-700">
                    A day spent around Jaunpur’s old monuments, markets and riverfront gives enough to understand why the city has such a strong place in the history of Uttar Pradesh. The big monuments are certainly worth exploring but the trip becomes more enjoyable when there is time for the smaller things too such as an Imarti from a local shop, a bottle of ittar from the old market, an evening by the Gomti or a few quiet minutes inside an old tomb. For travellers who enjoy discovering old cities, Jaunpur makes a very good short trip.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Jaunpur Uttar Pradesh
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. What is Jaunpur, Uttar Pradesh famous for?</p>
                        <p className="mt-2">Jaunpur, Uttar Pradesh, is famous for its Sharqi-era architecture, historic mosques, Shahi Qila, the 16th-century Shahi Pul over the Gomti River, and Sheetla Chaukiya Dham. The city is particularly known for monuments that reflect the architectural legacy of the Sharqi rulers.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. What are the best places to visit in Jaunpur?</p>
                        <p className="mt-2">The best places to visit in Jaunpur include Atala Masjid, Shahi Qila, Jama Masjid, Shahi Pul, Jhanjhari Masjid, Lal Darwaza Masjid and Sheetla Chaukiya Dham. Most of the major attractions are within Jaunpur city, making it possible to explore several historic sites during a short visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What is special about Atala Masjid in Jaunpur?</p>
                        <p className="mt-2">Atala Masjid is one of Jaunpur's most important Sharqi monuments and was completed in 1408 during the reign of Ibrahim Shah Sharqi. Its imposing central gateway, galleries and distinctive architectural details make it one of the key places to explore in the city.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Why is Shahi Qila famous in Jaunpur?</p>
                        <p className="mt-2">Shahi Qila is famous for its historic fort architecture, massive gateways, surviving arches, mosque and Turkish-style bath. Built in 1362 by Firoz Shah, the fort stands beside the Gomti River and also offers views across the river and Jaunpur city.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. What is special about Shahi Pul in Jaunpur?</p>
                        <p className="mt-2">Shahi Pul is a historic bridge over the Gomti River built in 1564 on the orders of Mughal emperor Akbar. Its distinctive design includes multiple arches, projecting structures along the bridge and a central platform, making it one of Jaunpur's best-known landmarks.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is Jaunpur worth visiting for history and architecture?</p>
                        <p className="mt-2">Yes, Jaunpur offers a concentrated collection of medieval monuments, particularly from the Sharqi period. Atala Masjid, Jama Masjid, Jhanjhari Masjid, Lal Darwaza Masjid and Shahi Qila provide different examples of the city's architectural heritage, while the Shahi Pul adds a later Mughal-era landmark to the experience.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. How many days are enough to explore Jaunpur?</p>
                        <p className="mt-2">One full day is enough to cover several of Jaunpur's major attractions, while two days allow more relaxed exploration of its monuments, riverfront areas and religious sites. A practical city route can combine Shahi Qila, Atala Masjid, Jama Masjid, Shahi Pul and other nearby historic sites rather than spending the entire trip travelling outside the city.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. How can I reach Jaunpur, Uttar Pradesh?</p>
                        <p className="mt-2">Jaunpur can be reached by train and road, with Jaunpur City and Jaunpur Junction serving the city; the nearest major airport is Lal Bahadur Shastri International Airport near Varanasi. Local transport such as auto-rickshaws and e-rickshaws can be used to reach major attractions from the railway stations.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. What is the best time to visit Jaunpur?</p>
                        <p className="mt-2">The cooler months from October to March are generally the most comfortable time to explore Jaunpur's historic monuments and outdoor attractions. Winter also makes it easier to spend several hours moving between the city's forts, mosques, bridge and riverside areas.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. What can I see in Jaunpur in one day?</p>
                        <p className="mt-2">A one-day Jaunpur itinerary can include Shahi Qila, Atala Masjid, Jama Masjid, Shahi Pul and Jhanjhari Masjid with Sheetla Chaukiya Dham added if time permits. These sites give a compact introduction to Jaunpur's fort architecture, Sharqi monuments, religious heritage and Gomti River landscape.</p>
                    </div>
                </div>

                {/* About the Author */}
                <div className="mt-6 pt-8">
                    <h3 className="text-2xl font-semibold mb-6">About The Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <img
                            src="/Image/atika.jpeg"
                            alt="Atika Bano"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        <p className="text-gray-800 leading-relaxed text-justify text-lg">
                            I am Atika, a media student born in the historic city of Jaunpur. I am fond of travelling and a curious learner of historical monuments. I love writing stories and articles. I enjoy putting my thoughts and observations in words.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jaunpur;