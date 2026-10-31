import React from "react";

const SectionImage = ({ src, source, alt = "All Saints Garrison Church Lucknow" }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt={alt} />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const GarissonChurch = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    All Saints Garrison Church Lucknow: History, Architecture & Visitor Guide
                </h1>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Syed Adliya Ghayas</span>
                </p>

                <h3 className="text-xl font-bold mb-3 text-black">The Red-Brick Heritage: All Saints Garrison Church Lucknow</h3>

                <SectionImage
                    src="/Image/01-all-saints-garrison-church.jpg"
                    source="Wikimedia Commons"
                    alt="All Saints Garrison Church Lucknow"
                />

                <p className="mb-4 text-gray-700">
                    The red-brick walls and tall tower of All Saints Garrison Church catch the eye as soon as you reach the church in Lucknow Cantonment. A walk around the compound brings you more details of large windows, Gothic-inspired features and an old structure that still carries the essence of its time.
                </p>

                <p className="mb-6 text-gray-700">
                    The church has been part of Lucknow Cantonment for more than a century, beginning with the original church completed in 1908. Its connection with the military community is also visible in some of its unusual details. A visit here is less about simply looking at an old church and more about noticing the building closely from its tower and brickwork to the details inside. For those exploring Lucknow beyond its better-known landmarks, All Saints Garrison Church offers another side of the city to discover.
                </p>

                {/* What Makes All Saints Garrison Church Unique */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    What Makes All Saints Garrison Church Unique
                </h2>

                <SectionImage
                    src="/Image/02-all-saints-unique-architecture.jpg"
                    source="lucknow.nic.in"
                    alt="All Saints Garrison Church Unique Features"
                />

                <p className="mb-4 text-gray-700">
                    There is more to notice at All Saints Garrison Church than its red-brick exterior. The church grew with the British Cantonment in Lucknow and was built to serve the Christian community and soldiers living there. That military connection is still one of the most interesting parts of the building. The architecture catches attention as soon as you look closely. Its design was inspired by Magdalen College, Oxford, and the tall tower above the western entrance gives the church a strong presence.
                </p>

                <p className="mb-6 text-gray-700">
                    The most unexpected detail is inside the wooden pews. Look at the upper part of the benches and you will find small niches made for keeping guns. These were probably meant for soldiers who were on duty or returning from duty, so they could attend prayers while keeping their weapons with them. It says a lot about the church's connection with military life. There is also a large quadrangle with seating around the church. Another detail worth looking for is the message above the western entrance, asking people to say a prayer before leaving.
                </p>

                {/* History of All Saints Garrison Church */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    History of All Saints Garrison Church
                </h2>

                <SectionImage
                    src="/Image/03-history-of-garrison-church.jpg"
                    source="lucknow.nic.in"
                    alt="History of All Saints Garrison Church"
                />

                <p className="mb-4 text-gray-700">
                    When you look at All Saints Garrison Church today, it is easy to assume that the large building has always stood here in its present form. The story is a little different. The original church on this site was built in 1860 at government expense but it was much smaller than the one seen today. As Lucknow Cantonment grew and more Christian troops became part of the community, the old church eventually became too small.
                </p>

                <p className="mb-4 text-gray-700">
                    By 1908, plans were made for a much larger church. The design was prepared by British engineer Jones Ransom who later returned to England. The work was completed by Lishman under the supervision of architect John Baggs and the new building came to be known as All Saints New Garrison Church.
                </p>

                <p className="mb-6 text-gray-700">
                    The present building still has a link with the earlier 1860 church, a stone on the grounds marks the place associated with the altar of the original building. It is a small detail but it helps put the history of the site into perspective.
                </p>

                {/* Exploring the Architecture */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Exploring the Architecture of All Saints Garrison Church
                </h2>

                <SectionImage
                    src="/Image/04-garrison-church-architecture.jpg"
                    source="Wikimedia Commons"
                    alt="Architecture of All Saints Garrison Church"
                />

                <p className="mb-4 text-gray-700">
                    The church becomes more interesting the closer you look at it. The main entrance is on the western side, with a tall tower rising above it. The tower houses the church bell and is one of the first details you notice around the building. The church also has a large quadrangle with seating areas, giving the complex a much bigger scale than you might expect from the outside.
                </p>

                <p className="mb-4 text-gray-700">
                    Inside, the most unusual detail is found in the wooden benches. Each bench has a small niche on the upper back for keeping guns. The District Lucknow website explains that these were probably meant for soldiers who were on duty or returning from duty, allowing them to attend prayers with their weapons. It is one of those details that make you look at the church a little differently once you notice it.
                </p>

                <p className="mb-4 text-gray-700">
                    The church's architecture was inspired by Magdalen College, Oxford. The original design was later altered during construction, including changes to the height of the tower and the size of the side walls. These details are easy to miss when simply passing the church, but they add another layer to its design.
                </p>

                <p className="mb-6 text-gray-700">
                    The large quadrangle, tall tower and gun niches in the benches are therefore worth looking out for during a visit. They tell you more about the building than simply describing it as an old church.
                </p>

                {/* What Remains Today */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    What Remains Today at All Saints Garrison Church
                </h2>

                <SectionImage
                    src="/Image/05-church-interior-today.jpg"
                    source="Wikipedia"
                    alt="All Saints Garrison Church Today"
                />
                
                <p className="mb-6 text-gray-700">
                    All Saints Garrison Church is still used for worship today. Sunday services continue here, so you may find the church being used by the congregation rather than simply preserved as a heritage building. The church is under the Diocese of Lucknow, Church of North India. If you are going to visit the church, this is worth keeping in mind that it remains an active worship place, so access to some areas can depend on services and other church activities.
                </p>

                {/* Planning Your Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Planning Your Visit
                </h2>

                <SectionImage
                    src="/Image/06-visiting-garrison-church.jpg"
                    source="lucknow.nic.in"
                    alt="Planning a visit to Garrison Church"
                />

                <p className="mb-4 text-gray-700">
                    The best time to visit All Saints Garrison Church is from October to March, as these are the cooler months more comfortable for exploring Lucknow.
                </p>
                <p className="mb-4 text-gray-700">
                    You can reach the church at 209, Mahatma Gandhi Road, Lucknow Cantonment. From Charbagh Railway Station, it can be reached by road. For people arriving by air, Amausi Airport is the nearest airport. Auto-rickshaws and app-based cabs are convenient options for reaching the Cantonment area.
                </p>
                <p className="mb-6 text-gray-700">
                    Since it is an active worship place, the entry is free for all. The church holds Sunday services led by the Presbyter Incharge.
                </p>

                {/* Nearby Places to Visit */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Nearby Places to Visit around All Saints Garrison Church
                </h2>

                <p className="mb-6 text-gray-700">
                    Once the church visit is over, there are a couple of historic places nearby that can easily be added to the same outing.
                </p>

                <h4 className="font-semibold text-black mb-1">Dilkusha Kothi</h4>
                <SectionImage
                    src="/Image/07-dilkusha-kothi-lucknow.jpg"
                    source="Rohit Upadhyay"
                    alt="Dilkusha Kothi Lucknow"
                />
                <p className="mb-6 text-gray-700">
                    Dilkusha Kothi is a good next stop. The remains of the palace lie in the middle of a large green area and walking around the old ruins gives you a very different view of Lucknow's past. Built by Saadat Ali Khan as a hunting lodge and royal retreat, the palace later became part of the city's colonial-era history as well.
                </p>

                <h4 className="font-semibold text-black mb-1">La Martiniere College</h4>
                <SectionImage
                    src="/Image/08-la-martiniere-college.jpg"
                    source="YouTube/Sixty and Travelling"
                    alt="La Martiniere College Lucknow"
                />
                <p className="mb-6 text-gray-700">
                    La Martiniere College is another place worth seeing from this side of Lucknow. The main building Constantia was originally built as the country residence of Major General Claude Martin. Its unusual architecture, grand staircase, old chapel and other historic details make it one of the city's most distinctive heritage buildings.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    FAQs about All Saints Garrison Church Lucknow
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">1. Where is All Saints Garrison Church located in Lucknow?</p>
                        <p className="mt-2">All Saints Garrison Church is located at 209, Mahatma Gandhi Road, Lucknow Cantonment, Uttar Pradesh.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">2. Who designed All Saints Garrison Church in Lucknow?</p>
                        <p className="mt-2">The larger church planned in 1908 was designed by British engineer Jones Ransom. After he returned to England, the work was completed by Lishman under the supervision of architect John Baggs, according to the District Lucknow website.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">3. What is special about All Saints Garrison Church?</p>
                        <p className="mt-2">The church is known for its colonial-era history, connection with the Lucknow Cantonment, architecture inspired by Magdalen College, Oxford, and unusual niches built into its wooden pews for keeping guns.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">4. Is photography allowed inside the church?</p>
                        <p className="mt-2">Photography rules may vary. Visitors should follow the instructions of the church authorities and avoid disturbing worship or religious activities.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">5. Why are there gun niches in the pews of All Saints Garrison Church?</p>
                        <p className="mt-2">The upper backs of the church benches have niches for keeping guns. The District Lucknow website says these were probably intended for soldiers who were on duty or returning from duty, allowing them to attend prayers with their weapons.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">6. Is All Saints Garrison Church still used for worship?</p>
                        <p className="mt-2">Yes. All Saints Garrison Church remains an active place of worship under the Diocese of Lucknow, Church of North India, with church services held every Sunday.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">7. What architectural style is All Saints Garrison Church known for?</p>
                        <p className="mt-2">The official District Lucknow website describes its architecture as being inspired by Magdalen College, Oxford. Other heritage sources classify the building within the broader colonial architectural tradition.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">8. Is there an entry fee for All Saints Garrison Church Lucknow?</p>
                        <p className="mt-2">The official District Lucknow tourism page does not list an entry fee for the church. Visitors should follow any arrangements or instructions provided at the church when they arrive.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">9. How can you reach All Saints Garrison Church from Charbagh?</p>
                        <p className="mt-2">The church can be reached by road from Charbagh, which is the railway station. Auto-rickshaws and cabs can be used to travel to the Cantonment area.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="font-bold text-black">10. When can visitors attend prayer services at All Saints Garrison Church?</p>
                        <p className="mt-2">Sunday is the main day to keep in mind because the church holds its regular service on Sunday. The official District Lucknow page does not specify the service time, so it is better to confirm the current timing before visiting.</p>
                    </div>
                </div>

                {/* About the Author */}
                <div className="mt-6 pt-8">
                    <h3 className="text-2xl font-semibold mb-6">About The Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <img
                            src="/Image/syed-adliya-ghayas.jpeg"
                            alt="Syed Adliya Ghayas"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        <p className="text-gray-800 leading-relaxed text-justify text-lg">
                            A curious and creative media student. I am also a proud kid who grew up adapting to new places, people and experiencing the heritage. My love for exploring new places, learning about it and writing has taught me to find beauty in change. Through writing it has always been my way of expressing my experiences. I continue learning, finding meaning in the world around me.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GarissonChurch;