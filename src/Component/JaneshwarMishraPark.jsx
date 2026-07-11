import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const JaneshwarMishraPark = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Janeshwar Mishra Park Lucknow: Exploring the City's Largest Green Escape (Timings, Attractions, Boating & Visitor Guide)
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 15 May, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Saniya Mishra</span>
                </p>

                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-01.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    Most travellers arrive Lucknow looking for the city's famous landmarks like Bara & Chota Imambara, Rumi Darwaza, old markets and the stories that have shaped Lucknow for centuries. Green spaces usually sit much lower on the list. That changes quickly when you step into Janeshwar Mishra Park. Spread across a vast stretch of Gomti Nagar, the park feels surprisingly detached from the city around it. A few minutes after entering, the traffic fades into the background. The roads give way to walking trails, lakes replace concrete and the skyline opens up in a way that is difficult to find elsewhere in Lucknow.
                </p>

                <p className="mb-4 text-gray-700">
                    What surprised me wasn't the size of the park. It was how quickly the city seemed to disappear. What stays with you is the sense of space. Children run across the open lawns, cyclists ride into the distance, morning walkers follow their daily routines and groups of friends gather by the water as the evening light softens. Everyone enjoys the park in their own way, yet it never feels crowded like many large public spaces do.
                </p>

                <p className="mb-6 text-gray-700">
                    For some, Janeshwar Mishra Park is where the day begins. For others, it is a place to slow down and relax. Over time, it has become one of the few places in Lucknow where people do not come to see something specific, but simply to enjoy being outdoors.
                </p>

                {/* Attractions */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Exploring the Park: Attractions You Shouldn't Miss
                </h2>

                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-02.jpg"
                    source="News18 Hindi"
                />

                <p className="mb-4 text-gray-700">
                    Janeshwar Mishra Park is often introduced as one of Asia's largest urban parks, but its size is only part of the story. What makes people return isn't the number of acres or the length of its walking tracks. It's the variety of experiences packed into one place. A morning here feels completely different from an evening. One person comes to run, another to photograph the sunset, while someone else is simply looking for a quiet corner beside the lake.
                </p>

                <p className="mb-6 text-gray-700">
                    The park reveals itself gradually. Instead of presenting one grand attraction, it offers a series of spaces that invite you to slow down and explore.
                </p>

                <h4 className="font-semibold text-black mb-1">The Giant Tricolour</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-03.jpg"
                    source="Jony Kumar Singh Vlogs"
                />
                <p className="mb-6 text-gray-700">
                    One of the first landmarks to catch your attention is the towering Indian National Flag. Rising 207 feet above the park, it dominates the skyline and can be seen from several locations within the complex. On breezy evenings, the Tricolour becomes impossible to ignore, drawing people towards it almost instinctively. By sunset, when the sky begins changing colours, it also becomes one of the most photographed spots in the park.
                </p>

                <h4 className="font-semibold text-black mb-1">The MiG-21 and Vijayanta Tank</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-04.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    Not many public parks greet you with military exhibits, which is exactly why these displays stand out. Near the entrance, a retired MiG-21 fighter aircraft and Vijayanta battle tank offer a glimpse into India's military history. Children are often the first to rush towards them, while aviation enthusiasts and photographers usually spend a little longer taking in the details. They add an unexpected dimension to a park otherwise known for its greenery.
                </p>

                <h4 className="font-semibold text-black mb-1">Lakes, Bridges and Boating</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-05.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-4 text-gray-700">
                    Water shapes much of the landscape here. A network of interconnected lakes winds through the park, crossed by elegant bridges that offer some of the best viewpoints. Walking along these paths, you'll often see cyclists passing by, families enjoying the breeze and photographers waiting for the light to soften.
                </p>
                <p className="mb-6 text-gray-700">
                    If you want to see the park from a different perspective, take a boat ride across the lake. The boats move at an unhurried pace, making it one of the most relaxing ways to spend time here. Late afternoon and sunset are particularly rewarding, when the water reflects the changing colours of the sky.
                </p>

                <h4 className="font-semibold text-black mb-1">Musical Fountain and Laser Show</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-06.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    As daylight fades, Janeshwar Mishra Park takes on a different character. The musical fountain and laser show becomes the centre of attention, drawing families, children and groups of friends towards the performance area. Water, lights and music come together to create an evening spectacle that has become one of the park's biggest attractions. If you're planning your visit for the first time, staying until after sunset is well worth it.
                </p>

                <h4 className="font-semibold text-black mb-1">More Than Just a Park</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-07.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-6 text-gray-700">
                    There's plenty to do beyond walking. Dedicated cycling tracks weave through the park, while open-air gyms remain busy with fitness enthusiasts throughout the day. Children have their own play areas, the Jurassic Park zone brings life-sized dinosaur models into the mix and the 5D motion theatre offers a fun indoor break from the outdoors. That balance is what makes Janeshwar Mishra Park different. It isn't a place built around a single highlight. Instead, it gives everyone a chance to enjoy the space in their own way, whether that's walking, cycling, boating, photographing the sunset or simply taking a break from the pace of the city.
                </p>

                {/* History */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    The Story Behind Janeshwar Mishra Park
                </h2>

                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-08.jpg"
                    source="Rohit Upadhyay"
                />

                <p className="mb-4 text-gray-700">
                    Janeshwar Mishra Park takes its name from Shri Janeshwar Mishra, a veteran politician from Uttar Pradesh who was widely known for his simplicity and close association with socialist ideals. Often referred to as "Chhote Lohia", he remained a respected public figure throughout his political career. The park was developed in his memory, but its purpose extended beyond creating a memorial. As Lucknow expanded eastwards and Gomti Nagar emerged as one of the city's fastest-growing areas, there was a growing need for a large public space where people could walk, exercise, relax and spend time outdoors. The idea was to create a park that would serve everyone, regardless of age or background.
                </p>
                <p className="mb-4 text-gray-700">
                    The park was developed with inspiration from London’s famous Hyde Park. The idea was to create a large public space where people from different backgrounds could come together and enjoy nature within the city.
                </p>
                <p className="mb-6 text-gray-700">
                    Over the years, the park has become woven into the daily rhythm of Lucknow. For some people, it is part of a morning routine. For others, it is a weekend destination, a fitness space, a photography spot or simply a place to sit beside the water after a long day. That everyday connection is perhaps the most important part of its story. The park was built for people and that is exactly how it continues to be used.
                </p>

                {/* Guide */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit: When to Go and How Much Time to Keep
                </h2>

                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-09.jpg"
                    source="Rohit Upadhyay"
                />

                <h4 className="font-semibold text-black mb-1">What Is the Best Time to Visit?</h4>
                <p className="mb-6 text-gray-700">
                    The most pleasant months to visit are between October and March, when Lucknow's weather becomes cooler and more comfortable for outdoor activities. During winter, the lawns are greener, long walks become enjoyable and the lakes often look particularly beautiful in the soft morning light. The post-monsoon months also bring fresh greenery, making the park appear more vibrant than it does during peak summer.
                </p>

                <h4 className="font-semibold text-black mb-1">Morning or Evening?</h4>
                <p className="mb-6 text-gray-700">
                    Both offer very different experiences. Morning is ideal for those who enjoy peaceful surroundings. Walkers, runners, cyclists, yoga groups and birdwatchers dominate the park during these hours. The air feels fresher, the pathways are quieter and the lakeside areas remain relatively uncrowded. Evening, however, is when the park feels most alive. Families arrive with children, groups of friends gather near the water, cyclists fill the tracks and the boating area becomes increasingly active. As sunset approaches, the lakes begin reflecting the changing colours of the sky while the giant Tricolour stands out prominently against the horizon. If you're visiting for the first time, evening usually offers the most complete experience.
                </p>

                <h4 className="font-semibold text-black mb-1">Weekdays or Weekends?</h4>
                <p className="mb-6 text-gray-700">
                    Weekdays are generally quieter and more relaxed. People who enjoy photography, birdwatching or long uninterrupted walks may prefer these days because the park feels less crowded. Weekends bring a different energy altogether. The lawns become busier, boating activity increases, children's play areas remain occupied and popular attractions such as the Jurassic Park zone and musical fountain attract larger crowds. Neither is necessarily better, it simply depends on the type of experience you're looking for.
                </p>

                <h4 className="font-semibold text-black mb-1">How Much Time Should You Keep?</h4>
                <p className="mb-6 text-gray-700">
                    The answer depends on your plans. If your goal is to take a walk, see the major attractions and enjoy a few photographs, one to two hours will usually be enough. However, if you want to explore the park properly, try boating, visit the Jurassic Park zone, spend time around the lakes, watch the musical fountain and simply enjoy the atmosphere without rushing, setting aside three to four hours is a far better idea. Many local residents spend entire evenings here without ever feeling bored.
                </p>

                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-10.jpg"
                    source="Rohit Upadhyay"
                />

                <h4 className="font-semibold text-black mb-1">Who Will Enjoy Janeshwar Mishra Park?</h4>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Families looking for an outdoor outing</li>
                    <li>Couples searching for scenic walking spaces</li>
                    <li>Cyclists and runners</li>
                    <li>Fitness enthusiasts</li>
                    <li>Birdwatchers</li>
                    <li>Photographers</li>
                    <li>Students and young travellers</li>
                    <li>Anyone looking to spend time outdoors away from traffic and noise</li>
                </ul>

                <h4 className="font-semibold text-black mb-1">Is It Worth Visiting If You Are in Lucknow for a Short Trip?</h4>
                <p className="mb-6 text-gray-700">
                    If your schedule is extremely limited and your priority is Lucknow's historic landmarks, places like Bara Imambara, Chota Imambara, Rumi Darwaza and the Residency should naturally come first. However, if you have already explored the city's major monuments or simply want to experience a more contemporary side of Lucknow, Janeshwar Mishra Park is absolutely worth including in your itinerary. It offers something that the city's heritage attractions cannot: space, greenery, recreation and a chance to see how modern Lucknow spends its leisure time. In many ways, the park is less about sightseeing and more about experiencing a different rhythm of the city.
                </p>

                {/* Logistics */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Timings, Entry Fee and Visitor Information
                </h2>

                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-11.jpg"
                    source="Rohit Upadhyay"
                />

                <h4 className="font-semibold text-black mb-2">Park Timings</h4>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Details</th>
                                <th className="border p-3 text-left">Timings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3">Opening Time</td>
                                <td className="border p-3">6:00 AM</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Closing Time</td>
                                <td className="border p-3">8:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-6 text-gray-700">The park is open throughout the week, including weekends and public holidays.</p>

                <h4 className="font-semibold text-black mb-2">Entry Fee</h4>
                <p className="mb-6 text-gray-700">General Entry: ₹15 per person and free entry for children under 3 years.</p>

                <h4 className="font-semibold text-black mb-2">Activity Charges</h4>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Boating (Gondola Ride): ₹100 per person</li>
                    <li>Boating (Paddle Boat): ₹50 per person</li>
                    <li>Jurassic Park: ₹120 per person above 13 years and ₹90 for children 4-12 years</li>
                    <li>5D Motion Chair Experience: ₹100 per person</li>
                    <li>Laser Show: ₹50 per person</li>
                    <li>Single-Seater Cycle (30 Minutes): ₹30</li>
                    <li>Double-Seater Cycle (30 Minutes): ₹60</li>
                </ul>
                <p className="mb-6 text-gray-700">
                    People planning to experience multiple attractions should budget accordingly, as these charges are separate from the park entry ticket. Do not fall into the trap of online tickets. The best option is to purchase tickets at the park only. These prices may vary as per the park’s management.
                </p>

                <h4 className="font-semibold text-black mb-2">Facilities Available</h4>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Dedicated parking areas</li>
                    <li>Walking and jogging tracks</li>
                    <li>Cycling tracks</li>
                    <li>Bicycle rental services</li>
                    <li>Public washrooms</li>
                    <li>Drinking water facilities</li>
                    <li>Children's play zones</li>
                    <li>Open-air gym</li>
                    <li>Seating areas throughout the park</li>
                    <li>Food and refreshment kiosks</li>
                </ul>
                <p className="mb-6 text-gray-700">Because of these facilities, many people comfortably spend three to four hours inside the park without needing to leave.</p>

                <h4 className="font-semibold text-black mb-1">Visitor Tip</h4>
                <p className="mb-6 text-gray-700">
                    If you're visiting for the first time, consider arriving in the late afternoon and staying until evening. This allows you to explore the park during daylight, enjoy boating on the lake, witness sunset view and experience the laser show after dark, all in a single visit.
                </p>

                {/* How to Reach */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How to Reach Janeshwar Mishra Park
                </h2>
                <p className="mb-4 text-gray-700">
                    Located in Gomti Nagar, one of Lucknow's most developed neighbourhood, Janeshwar Mishra Park is well connected to the rest of the city by road and metro. Whether you're arriving by train, flight or local transport, reaching the park is fairly straightforward.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li><strong>By Metro:</strong> The nearest metro station to Janeshwar Mishra Park is Indira Nagar Metro Station, from where you can hire an auto-rickshaw or cab to reach the park. As Lucknow Metro continues to expand, it's advisable to check the latest route map before travelling.</li>
                    <li><strong>By Train:</strong> If you're arriving by train, Lucknow Charbagh Railway Station is approximately 12–15 kilometres from the park. Travel time usually ranges between 30 and 45 minutes, depending on traffic conditions.</li>
                    <li><strong>By Air:</strong> The Chaudhary Charan Singh International Airport is located around 25–30 kilometres from Janeshwar Mishra Park. Travellers can reach the park by taxi, app-based cab services or a combination of metro and road transport.</li>
                    <li><strong>By Road:</strong> The park is situated along the Gomti Nagar extension area and enjoys excellent road connectivity. You can easily reach the park through private vehicles, app-based cab services, auto-rickshaws, or local taxis.</li>
                </ul>

                <h4 className="font-semibold text-black mb-1">Parking Facilities</h4>
                <p className="mb-4 text-gray-700">
                    If you are arriving by private vehicle, you need not worry about parking. The park offers dedicated parking areas that can accommodate both two-wheelers and four-wheelers. Parking availability is generally sufficient, although weekends and public holidays tend to be busier.
                </p>
                <h4 className="font-semibold text-black mb-1">Location</h4>
                <p className="mb-6 text-gray-700">
                    Janeshwar Mishra Park, Gomti Nagar, Lucknow, Uttar Pradesh
                </p>

                {/* Nearby Places */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Places to Explore Nearby Janeshwar Mishra Park
                </h2>
                <p className="mb-6 text-gray-700">
                    One of the advantages of visiting Janeshwar Mishra Park is its location in Gomti Nagar, one of Lucknow's most vibrant and rapidly developing neighbourhoods. The area offers a mix of riverside attractions, architectural landmarks, shopping destinations and food hubs, making it easy to plan an entire day around your visit. Most of these attractions are within a 10–20 minute drive of the park.
                </p>

                <h4 className="font-semibold text-black mb-1">Dr. Bhimrao Ambedkar Memorial Park</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-12.jpg"
                    source="Rajeeb Dutta (Wikipedia)"
                />
                <p className="mb-6 text-gray-700">
                    Located just a short drive away, Dr. Bhimrao Ambedkar Memorial Park is one of Lucknow's most impressive modern landmarks. Built primarily from red sandstone, the memorial is known for its grand architecture, vast open plazas and monumental design. While Janeshwar Mishra Park is all about greenery and recreation, Dr. Bhimrao Ambedkar Memorial Park offers a completely different experience centred around architecture and public spaces. Together, the two parks showcase two very different sides of modern Lucknow.
                </p>

                <h4 className="font-semibold text-black mb-1">Gomti Riverfront and Marine Drive</h4>
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-13.jpg"
                    source="Wikimedia Commons"
                />
                <p className="mb-6 text-gray-700">
                    If you enjoy spending time near the water, the Gomti Riverfront is a natural extension of your visit. The landscaped promenade, cycling tracks, fountains and river views make it one of the city's most popular evening destinations. Nearby, Marine Drive comes alive after sunset as people gather to enjoy the riverside atmosphere, city lights and street food stalls. Many locals combine Janeshwar Mishra Park and Marine Drive into the same evening outing.
                </p>

                <h4 className="font-semibold text-black mb-1">Chatori Gali & Food Valley</h4>
                <p className="mb-6 text-gray-700">
                    No exploration of Lucknow feels complete without food. Located within convenient reach of the park, Chatori Gali and Food Valley have become one of the city's most popular food streets. From local chaat and kebabs to modern snacks and desserts, it offers a chance to experience. Whether you're looking for a quick snack, a family dinner or a late-evening coffee, these places provide plenty of options.
                </p>

                <h4 className="font-semibold text-black mb-1">Lulu Mall and Phoenix Palassio</h4>
                <p className="mb-6 text-gray-700">
                    If shopping and entertainment are part of your travel plans, both Lulu Mall and Phoenix Palassio are worth considering. Lulu Mall, one of India's largest shopping malls offers a massive selection of brands, restaurants, entertainment zones and family-friendly activities. Phoenix Palassio, meanwhile, is known for its premium shopping experience, elegant interiors and diverse dining options. Both malls provide an excellent indoor alternative during hot summer afternoons or rainy days.
                </p>

                <h4 className="font-semibold text-black mb-2">Suggested Half-Day Itinerary</h4>
                <p className="mb-4 text-gray-700">Janeshwar Mishra Park → Gomti Riverfront → Marine Drive → Chatori Gali</p>

                <h4 className="font-semibold text-black mb-2">Suggested Full-Day Itinerary</h4>
                <p className="mb-6 text-gray-700">Ambedkar Memorial Park → Janeshwar Mishra Park → Gomti Riverfront → Marine Drive → Chatori Gali → Lulu Mall or Phoenix Palassio</p>

                {/* Conclusion */}
                <SectionImage
                    src="/Image/Janeshwar-mishra-park-lucknow-travel-guide-14.jpg"
                    source="Rohit Upadhyay"
                />
                <p className="mb-4 text-gray-700">
                    Lucknow is often introduced through its monuments. People arrive expecting grand gateways, historic Imambaras, royal architecture and stories from the Nawabi era. Those places deserve their reputation. They are an essential part of the city's identity.
                </p>
                <p className="mb-6 text-gray-700">
                    Janeshwar Mishra Park tells a different story. Here, there are no centuries-old structures competing for attention. Instead, there are lakes, open skies, cycling tracks, quiet walking paths and enough space to slow down for a while. It is a place where families spend weekends together, fitness enthusiasts begin their mornings, photographers wait for the perfect sunset and people discover a side of Lucknow that rarely appears in history books. Perhaps that is what makes the park memorable.
                </p>
                <p className="mb-6 text-gray-700">
                    And in a world where most attractions are measured by how quickly they can be seen, Janeshwar Mishra Park remains a place best appreciated slowly. If you want to experience a more relaxed, contemporary side of Lucknow, this is one destination that deserves a place on your itinerary.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Frequently Asked Questions (FAQs) about Janeshwar Mishra Park Lucknow
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. What is Janeshwar Mishra Park famous for?</p>
                        <p className="mt-2">Janeshwar Mishra Park is known for its vast size, scenic lakes, gondola boating, cycling tracks, giant Indian National Flag, MiG-21 fighter aircraft, T-72 battle tank, Jurassic Park and musical fountain show. It is one of Lucknow's most popular recreational spaces and attracts people of all age groups.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Where is Janeshwar Mishra Park located?</p>
                        <p className="mt-2">The park is located in Gomti Nagar, Lucknow, Uttar Pradesh. Its central location and excellent road connectivity make it easily accessible from different parts of the city.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What are the timings of Janeshwar Mishra Park?</p>
                        <p className="mt-2">The park generally opens at 6:00 AM and remains accessible until 8:00 PM. Visitors should verify current timings before travelling, as schedules may occasionally change.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. What is the entry fee for Janeshwar Mishra Park?</p>
                        <p className="mt-2">The general entry fee is ₹15 per person, making it one of the most affordable attractions in Lucknow.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Is boating available at Janeshwar Mishra Park?</p>
                        <p className="mt-2">Yes. Visitors can enjoy gondola-style boating on the park's lakes. The boating charge is approximately ₹50 per person for paddle boats and remains one of the most popular activities inside the park.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. What is the ticket price for Jurassic Park?</p>
                        <p className="mt-2">The Jurassic Park attraction generally charges ₹120 per person. The area features life-sized dinosaur installations and is especially popular with children and families.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. Is cycling available inside the park?</p>
                        <p className="mt-2">Yes. Visitors can rent bicycles and explore dedicated cycling tracks spread across the park. Current cycle rental charges are: Single-Seater Cycle (30 Minutes): ₹30, Double-Seater Cycle (30 Minutes): ₹60.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. What is the charge for the 5D Motion Chair Experience?</p>
                        <p className="mt-2">The 5D Motion Chair Experience generally costs ₹100 per person and offers an immersive entertainment experience suitable for both children and adults.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. Is there a laser show at Janeshwar Mishra Park?</p>
                        <p className="mt-2">Yes. The park hosts a laser and water-screen show during evening hours. The ticket price is generally ₹50 per person, although timings and schedules may vary.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. How much time is needed to explore Janeshwar Mishra Park?</p>
                        <p className="mt-2">Most visitors spend between two and four hours inside the park. However, if you plan to enjoy boating, cycling, the Jurassic Park zone and the laser show, you may easily spend an entire evening here.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">11. What is the best time to visit Janeshwar Mishra Park?</p>
                        <p className="mt-2">The most pleasant time to visit is between October and March when the weather is cooler. Evening hours are particularly popular because visitors can enjoy sunset views, boating and the laser show during a single visit.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">12. Which is the nearest metro station to Janeshwar Mishra Park?</p>
                        <p className="mt-2">Indira Nagar Metro Station is among the nearest metro stations to the park. From there, visitors can take an auto-rickshaw or cab to reach the entrance.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">13. Is Janeshwar Mishra Park suitable for families?</p>
                        <p className="mt-2">Absolutely. The park is one of the most family-friendly attractions in Lucknow. Children's play zones, boating facilities, open lawns, Jurassic Park and recreational spaces make it ideal for visitors of all ages.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">14. Is photography allowed inside the park?</p>
                        <p className="mt-2">Yes. Photography is permitted throughout most areas of the park. Popular photography spots include the giant Tricolour, lakes, bridges, MiG-21 aircraft, T-72 tank, boating area and sunset viewpoints.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">15. Can food be carried inside Janeshwar Mishra Park?</p>
                        <p className="mt-2">Visitors generally carry light snacks and refreshments during their visit, although it is advisable to follow current park regulations. Food kiosks and refreshment counters are also available within the premises.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">16. Is Janeshwar Mishra Park worth visiting?</p>
                        <p className="mt-2">Yes. While Lucknow is famous for its historical monuments, Janeshwar Mishra Park offers a completely different experience. Its lakes, boating facilities, cycling tracks, themed attractions, and open spaces make it one of the best places in the city to relax and spend time outdoors.</p>
                    </div>
                </div>

                {/* About Author */}
                <div className="mt-6 pt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <img
                            src="/Image/saniya.jpeg"
                            alt="Saniya Mishra"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        <p className="text-gray-800 leading-relaxed text-justify text-lg">
                            A curious and creative psychology and media student, I am also a proud fauji kid who grew up adapting to new places, people, and experiences. My love for travelling has taught me to find beauty in change, while writing has always been my way of expressing emotions and preserving memories. Through theatre, storytelling, and everyday moments, I continue learning, growing, and finding meaning in the world around me.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JaneshwarMishraPark;