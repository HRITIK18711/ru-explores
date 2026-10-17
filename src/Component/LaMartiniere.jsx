import React from "react";

const SectionImage = ({ src, source }) => (
  <div className="my-6">
    <img src={src} className="w-full h-[420px] object-cover rounded-lg" alt="La Martiniere College Lucknow" />
    <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
  </div>
);

const LaMartiniere = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          La Martiniere College Lucknow: The School Inside a 200-Year-Old Palace
        </h1>
        <p className="text-lg text-gray-600 font-medium mb-4">
          (La Martiniere College Lucknow: History, Architecture, Timings & Visitor Guide)
        </p>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 5 June, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Saniya Mishra</span>
        </p>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-01.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          A palace is probably the last thing you expect to find inside a school campus. The moment Constantia comes into view, it is easy to mistake it for a royal palace or a grand European estate. The towering columns, sweeping staircases, ornamental statues and vast lawns create an impression that is very different from what most people think about school. It is only after looking a little closer that you realize this building has been educating generations of students for more than two centuries.
        </p>

        <p className="mb-6 text-gray-700">
          That makes La Martiniere one of the most fascinating landmarks in Lucknow. While the city is known for its Nawabi monuments, La Martiniere tells a completely different story. It begins with Claude Martin, takes you inside Constantia and ends with one of India's most remarkable educational institutions.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Man Who Dreamed of Constantia
        </h2>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-02.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Born in Lyon, France, in 1735, Claude Martin arrived in India as a young soldier with the French East India Company at a time when European powers were competing for influence across the country. As political fortunes changed, Martin entered the service of the British East India Company and gradually made Lucknow his home. Martin was a man of endless curiosity. He was deeply interested in architecture, engineering, astronomy, botany, science and art. He collected rare books, scientific instruments and works of art, experimented with new ideas and invested in businesses across Awadh. His interests stretched far beyond the battlefield and they eventually helped him build both immense wealth and an extraordinary reputation.
        </p>

        <p className="mb-4 text-gray-700">
          Lucknow gave Claude Martin the opportunity to turn those ideas into reality. During the late eighteenth century, the city was flourishing under the Nawabs of Awadh and had become one of the finest centres of art, culture and architecture in India. Inspired by the city and its people, Martin began work on a residence unlike anything that existed in Lucknow. He named it Constantia.
        </p>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-03.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          The palace reflected the man who built it. European in appearance but shaped by Indian influences, Constantia brought together Martin's love for architecture, engineering and design in a way that few buildings of its time could match. It was ambitious, unconventional and impossible to ignore. Claude Martin never married and had no children. So, he decided that his fortune should help educate future generations. In his will, he directed that schools be established from his estate, ensuring that his life's work would continue long after he was gone. That single decision laid the foundation for La Martiniere schools in Lucknow, Kolkata and Lyon in France, ensuring that Claude Martin's legacy would continue through education.
        </p>

        <p className="mb-6 text-gray-700">
          Claude Martin died in 1800 before Constantia could become the institution it is today. In accordance with his wishes, he was buried inside the palace he had spent years creating. His tomb remains there, making La Martiniere one of the very few educational institutions in the world where the founder rests within the same building that continues to preserve his legacy.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Constantia: The Palace That Became a School
        </h2>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-04.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Claude Martin did not build Constantia as a school. It was planned as his residence, a place where his ideas, interests and achievements could take shape in stone. Every part of the building reflected the life he had built in Lucknow and the vision he wanted to leave behind. Construction of Constantia began during the final years of the eighteenth century. By then, he had established himself as one of the city's most successful Europeans and wanted to build a home that reflected his lifelong interest in architecture, engineering, science and art.
        </p>

        <p className="mb-4 text-gray-700">
          The building that rose over the years looked very different from the Nawabi monuments of Lucknow. Inspired by European country houses and adapted to suit the climate of northern India, Constantia introduced an architectural style that was rarely seen in the city. Grand terraces, towering columns, ornamental statues and open grounds gave the palace a distinct identity that continues to draw attention even today.
        </p>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-05.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Constantia was also where Claude Martin spent the final years of his life. His library contained rare books, scientific instruments and valuable collections gathered over decades. His fascination with engineering, astronomy and new inventions found a place inside the palace, making it much more than a private residence.
        </p>

        <p className="mb-6 text-gray-700">
          More than two centuries later, Claude Martin's vision continues to shape the lives of thousands of students studying in the schools established through his will. Every school day, students walk through corridors that were once designed as the residence of a French adventurer whose greatest legacy turned out to be education.
        </p>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Exploring Constantia
        </h2>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-06.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Constantia has enough open space around it. The lawns keep the building away from everything else, leaving the entire façade in view. The broad staircase, tall columns, long terraces and statues along the roof come together to create a picture that is difficult to ignore. Wherever you look, another detail catches your attention.
        </p>

        <p className="mb-4 text-gray-700">
          The front of Constantia is only one side of the story. Walk around the building and the view keeps changing. The terraces appear longer, sculptures become more visible and decorative carvings begin to fill spaces that looked plain from a distance. The balance in the design becomes clearer because no single side of the palace looks exactly like the other. Unlike the Nawabi monuments found across Lucknow, Constantia follows a European architectural style that was thoughtfully adapted to suit the climate of northern India, giving the building an identity unlike any other landmark in the city.
        </p>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-07.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-6 text-gray-700">
          The campus has several details that are easy to miss if all your attention stays on the building. Historic cannons still remain on the grounds, quietly recalling another chapter of Constantia's past. Not far from them stands The Lat, a tall memorial column surrounded by an artificial lake. It has become one of the most recognizable landmarks within the campus.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Hidden Treasures Inside Constantia
        </h2>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-08.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          As you step inside Constantia, the story takes a different turn. Claude Martin's tomb is probably the first thing to surprise you. It is inside Constantia itself, exactly where he wanted to be buried. It feels unusual because the building is still full of students, classrooms and everyday school life. There are not many places where the founder still remains a part of the institution he created.
        </p>

        <p className="mb-4 text-gray-700">
          The next stop is the museum. By this point, you probably have the same question, who exactly was Claude Martin? The museum answers that through his paintings, letters, scientific instruments, personal belongings and other collections preserved over the years. You also find exhibits that trace the history of La Martiniere College and its journey over more than two centuries.
        </p>

        <p className="mb-4 text-gray-700">
          The library is another place that reflects Claude Martin's love for learning. Its shelves hold rare books collected over generations while the beautiful Wedgwood-inspired ceiling probably makes you look up before looking at the books. It is a quiet reminder of how much Claude Martin valued learning.
        </p>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-09.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Not far from the library is the chapel. The colourful stained-glass windows, carved wooden interiors and historic pipe organ have been preserved with great care. The chapel continues to be used for important school services and ceremonies, keeping one of Constantia's oldest traditions alive. The atmosphere inside the chapel feels completely different from the rest of the campus. You may find yourself spending a few quiet minutes here without even realizing it.
        </p>

        <p className="mb-6 text-gray-700">
          One last discovery waits beneath the palace. Roman-style baths run below Constantia, built with terracotta water pipes and a carefully planned drainage system. The Roman-style baths show the level of planning that went into Constantia long before modern construction techniques became common.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          La Martiniere and the Revolt of 1857
        </h2>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-10.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Constantia had already become the home of La Martiniere College when the Revolt of 1857 reached Lucknow. The building soon found itself at the centre of the conflict. Its elevated position and strong construction made it an important defensive post during the Siege of Lucknow and Constantia was used as the Martiniere Post.
        </p>

        <p className="mb-4 text-gray-700">
          Students, teachers and staff became part of the Defence of the Martiniere Post. A total of 67 boys, 8 members of the staff and one former student assisted in defending the post. Several students, many of them teenagers, carried messages, helped the defenders and took on responsibilities far beyond their age. Even during the siege, lessons continued whenever circumstances allowed, reflecting the college's determination to keep education alive. The building itself suffered damage during the fighting but it remained standing through one of the most difficult chapters in Lucknow's history.
        </p>

        <p className="mb-4 text-gray-700">
          Some members of La Martiniere received the Indian Mutiny Medal with the clasp "Defence of Lucknow" for their service and the college went on to receive an honour that no other school in the world shares. It was awarded the Royal Battle Honour "Defence of Lucknow" in recognition of its role during the events of 1857.
        </p>

        <p className="mb-4 text-gray-700">
          That honour also gave the college the right to carry its own regimental-style battle flag, known as the Colour. Unlike an ordinary school flag, it carries the La Martiniere coat of arms, an image of the Lucknow Residency and the words "Defence of Lucknow, 1857". The original Battle Colour is still preserved by the college and remains one of La Martiniere's proudest symbols.
        </p>

        <p className="mb-6 text-gray-700">
          The story of 1857 is still preserved within the campus. The museum displays photographs, records and other historical objects connected with that period, allowing you to see how the college became part of one of the defining moments in India's history. The Memorial Hall also preserves the memory of former students who served in different wars, connecting today's campus with generations of its past.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Planning Your Visit to La Martiniere College
        </h2>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-11.jpg"
          source="YouTube/Sixty and Travelling"
        />

        <p className="mb-4 text-gray-700">
          Before planning your visit, remember that La Martiniere College is a working school and not a tourist monument. While visitors are generally allowed to explore parts of the campus, entry is subject to the college's security rules and may vary depending on school activities taking place that day. Carrying a valid photo ID is always a good idea, and it is best to cooperate with the security staff at the entrance.
        </p>

        <p className="mb-4 text-gray-700">
          There is no entry fee to visit the campus, but permission may be required if you plan to enter certain buildings or take professional photographs. If photography is your main purpose, it is advisable to seek approval from the college authorities in advance.
        </p>

        <p className="mb-4 text-gray-700">
          The college campus is open from 8:00 AM to 6:00 PM. Morning hours are usually the most comfortable for exploring the grounds, especially during summer, when Lucknow can become quite hot. Spending 60 to 90 minutes is usually enough to walk around the campus, admire Constantia and visit the museum if it is open.
        </p>

        <p className="mb-6 text-gray-700">
          La Martiniere College is located on Kalidas Marg, about 3 km from Hazratganj and around 6 km from Charbagh Railway Station. The nearest metro station is Hazratganj Metro Station from where you can easily hire an auto-rickshaw, book a cab or even enjoy a short drive to the campus. The college is also well connected to Chaudhary Charan Singh International Airport, which is about 15 km away.
        </p>

        <SectionImage
          src="/Image/la-martiniere-college-lucknow-uttar-pradesh-12.jpg"
          source="YouTube"
        />

        <p className="mb-4 text-gray-700">
          It is easy to understand why La Martiniere College is one of Lucknow's best-known landmarks. Every part of the campus adds something new to the story. Constantia impresses with its architecture, the museum introduces you to Claude Martin, the chapel and library preserve centuries of tradition and the events of 1857 remind you that this is much more than an ordinary school.
        </p>

        <p className="mb-4 text-gray-700">
          The most interesting part is that none of this belongs to the past alone. Every morning, students walk through the same gates, climb the same staircases and attend classes inside the same palace that Claude Martin built over two centuries ago. Today, the palace continues to fulfil the purpose Claude Martin imagined for his legacy to educate future generations.
        </p>

        <p className="mb-6 text-gray-700">
          If you are planning to explore Lucknow beyond its Nawabi monuments, make sure La Martiniere College is on your list. You will return with a better understanding of the city, a fascinating story about Claude Martin and memories of one of the most remarkable educational institutions in India.
        </p>

        {/* FAQs */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Frequently Asked Questions (FAQs) about La Martinière College Lucknow
        </h2>

        <div className="space-y-4 text-gray-700">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="font-bold text-black">1. Why is La Martinière College Lucknow famous?</p>
            <p className="mt-2">
              La Martinière College is famous for its magnificent Constantia building, its founder Claude Martin, and its unique history. It is one of India's oldest and most prestigious schools and is believed to be the only school in the world to receive the Royal Battle Honour "Defence of Lucknow" for its role during the Revolt of 1857.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="font-bold text-black">2. Can visitors enter La Martinière College in Lucknow?</p>
            <p className="mt-2">
              Yes, visitors can generally explore parts of the La Martinière College campus. However, it is a working educational institution, so entry depends on school activities and security regulations. Some areas may require prior permission, especially for photography or organised visits.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="font-bold text-black">3. What is Constantia at La Martinière College?</p>
            <p className="mt-2">
              Constantia is the historic palace that houses La Martinière College in Lucknow. It was built by French adventurer Claude Martin in the late eighteenth century as his residence and later became the home of the college according to his will. Today, it remains one of Lucknow's finest examples of European-inspired architecture.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="font-bold text-black">4. Where is Claude Martin buried?</p>
            <p className="mt-2">
              Claude Martin is buried inside Constantia, the main building of La Martinière College. His tomb remains one of the college's most remarkable attractions and makes La Martinière one of the few educational institutions in the world where the founder rests within the same building that continues to serve its original educational purpose.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="font-bold text-black">5. What are the visiting timings of La Martinière College?</p>
            <p className="mt-2">
              La Martinière College is generally open to visitors from 8:00 AM to 6:00 PM, although access may vary depending on school activities and special events. Morning and late afternoon are usually the best times to explore the campus comfortably.
            </p>
          </div>
        </div>

        {/* About Author */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/Image/saniya.jpeg"
              alt="Saniya Mishra"
              className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md flex-shrink-0"
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

export default LaMartiniere;