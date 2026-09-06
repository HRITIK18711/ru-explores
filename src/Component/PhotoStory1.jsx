import React from "react";
import { Link } from "react-router-dom";

const trending_stories = [
  {slug:"pokhara-nepal-travel-guide",title:"Pokhara Nepal: Best Places, Food & Complete Travel Guide",image:"/Image/01-phewa-lake-pokhara-nepal.jpg"},
  {slug:"mustang-nepal-travel-guide",title:"Mustang Nepal: Complete Travel Guide to Places, Culture & Things to Do",image:"/Image/01-tsarang-chorten-charang-mustang-nepal.jpg"},
  {slug:"patan-nepal-travel-guide",title:"Patan, Nepal: Best Places to Visit, Things to Do & Complete Travel Guide",image:"/Image/01-patan-lalitpur-nepal-aerial-view.jpg"},
  {slug:"pashupatinath-temple-kathmandu-nepal-travel-guide",title:"Pashupatinath Temple, Kathmandu: History, Timings, Entry Fee & Travel Guide",image:"/Image/01-pashupatinath-temple-kathmandu-nepal.jpg"},
  {slug:"kathmandu-nepal-travel-guide",title:"Kathmandu Nepal: Best Places, Shopping, Food, Cafes & Complete Travel Guide",image:"/Image/01-kathmandu-nepal.jpg"},
  {slug:"nagarkot-nepal-travel-guide",title:"Nagarkot, Nepal: Best Places to Visit, Things to Do & Complete Travel Guide",image:"/Image/01-nagarkot-himalayan-view-nepal.jpg"},
  { slug:"bhaktapur-nepal-travel-guide",title:"Bhaktapur, Nepal: Best Places to Visit, Things to Do & Complete Travel Guide",image:"/Image/01-nyatpola-bhairav-temple-bhaktapur-nepal.jpg"},
  { slug:"La Martiniere College Lucknow: History, Architecture, Timings & Visitor Guide",title:"La Martiniere College Lucknow: The School Inside a 200-Year-Old Palace",image:"/Image/la-martiniere-college-lucknow-uttar-pradesh-01.jpg"},
  { slug:"dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide",title:"Dilkusha Kothi Lucknow: History, Architecture & the Story Behind the Palace",image:"/Image/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide-01.jpg"},
  { slug:"old-lucknow-heritage-walk-lucknow-uttar-pradesh-travel-guide",title:"Heritage Walk in Lucknow: Exploring Rumi Darwaza, Chhota Imambara & Husainabad",image:"/Image/01-old-lucknow-heritage-walk.jpg"},
  { slug:"sikandar-bagh-lucknow-uttar-pradesh-travel-guide",title:"Sikandar Bagh Lucknow: History, Battle of 1857, Virangana Uda Devi, Timings & Visitor Guide",image:"/Image/sikandar-bagh-lucknow-uttar-pradesh-01.jpg"},
  { slug:"residency-lucknow-uttar-pradesh-travel-guide",title:"The Residency Lucknow: History, Museum, Timings, Ticket Price & Travel Guide",image:"/Image/residency-lucknow-uttar-pradesh-travel-guide-01.jpg"},
  { slug:"Janeshwar-mishra-park-lucknow-uttar-pradesh-travel-guide",title:"Janeshwar Mishra Park Lucknow: Exploring the City's Largest Green Escape (Timings, Attractions, Boating & Visitor Guide)",image:"/Image/janeshwar-mishra-park-lucknow-uttar-pradesh-travel-guide-01.jpg"},
  { slug:"bara-imambara-lucknow-uttar-pradesh-travel-guide",title:"Bara Imambara, Lucknow: History, Bhool Bhulaiya, Timing, Entry Fee and Complete Travel Guide",image:"/Image/bara-imambara-lucknow-uttar-pradesh-travel-guide-01.jpg"},
  { slug:"pracheen-hanuman-mandir-connaught-place-delhi-travel-guide",title:"Pracheen Hanuman Mandir Delhi – History, Timings & the Soul of Connaught Place",image:"/Image/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide-01.jpg"},
  { slug:"palika-bazaar-connaught-place-new-delhi-travel-guide",title:"Palika Bazaar Delhi – Underground Shopping, Bargaining & the Chaos of Connaught Place",image:"/Image/palika-bazaar-connaught-place-new-delhi-travel-guide-01.jpg"},
  { slug:"tughlaqabad-fort-delhi-travel-guide",title:"Tughlaqabad Fort Delhi – History, Ruins, Mystery & the Story of a Forgotten City",image:"/Image/tughlaqabad-fort-delhi-travel-guide-01.jpg"},
  { slug:"mehrauli-archaeological-park-delhi-travel-guide",title:"Mehrauli Archaeological Park Delhi: History, Monuments, Timings, Entry Fee The Park That Ate a Thousand Years of History",image:"/Image/mehrauli-archaeological-park-delhi-travel-guide-01.jpg"},
  { slug: "jantar-mantar-delhi-travel-guide", title: "Jantar Mantar Delhi - Complete Guide, History, Timings & Things to Do", image: "/Image/jantar-mantar-delhi-travel-guide-01.jpg" },
  { slug: "lajpat-nagar-market-delhi-travel-guide", title: "Lajpat Nagar Market Guide: Shopping, Food, Tips & How to Reach", image: "/Image/lajpat-nagar-market-delhi-01.png" },
  { slug: "sarojini-nagar-market-delhi-travel-guide", title: "Sarojini Nagar Market, Delhi: The Ultimate Budget Shopping Guide", image: "/Image/sarojini-nagar-market-delhi-01.png" },
  { slug:"kedarkantha-trek-uttarakhand-travel-guide",title:"Kedarkantha Trek Uttarakhand – Best Time, Itinerary & Complete Snow Trek Guide",image:"/Image/Kedarkantha-trek-uttarakhand-travel-guide-01.jpg"},
  { slug: "safdarjung-tomb-delhi-travel-guide", title: "Safdarjung’s Tomb: Delhi’s Most Underrated Mughal Monument History, Timings and Travel Guide", image: "/Image/safdarjung-tomb-delhi-travel-guide-01.jpg" },
  { slug: "red-fort-delhi-travel-guide", title: "Red Fort, Delhi: History, Timings, Best Time to Visit & The Story Most People Miss", image: "/Image/red-fort-delhi-01.png" },
  { slug: "chopta-tungnath-chandrashila-trek-uttarakhand-travel-guide", title: "Chopta Tungnath Chandrashila Trek Uttarakhand – Best Time, Itinerary & Travel Guide", image: "/Image/chopta-tungnath-chandrashila-trek-uttarakhand-01.jpg" },
  { slug: "hazrat-nizamuddin-dargah-delhi-travel-guide", title: "Hazrat Nizamuddin Dargah, Delhi: History, Qawwali Timings, Entry & Complete Travel Guide", image: "/Image/hazrat-nizamuddin-dargah-delhi-travel-guide-01.png" },
  { slug: "lotus-temple-delhi-travel-guide", title: "Lotus Temple Delhi: A Silent Escape in the Heart of Chaos–Timings, Entry & Travel Guide", image: "/Image/lotus-temple-delhi-travel-guide-01.png" },
  { slug: "connaught-place-new-delhi-travel-guide", title: "Things to Do in Connaught Place Delhi: Best Places & Food Guide", image: "/Image/connaught-place-new-delhi-travel-guide-01.png" },
  { slug: "qutub-minar-delhi-travel-guide", title: "Qutub Minar Delhi: History, Height, Timings, Entry Fee, How to Reach & Nearby Places", image: "/Image/qutub-minar-delhi-01.png" },
  { slug: "delhi-mysterious-place-travel-guide", title: "Delhi’s Most Mysterious Places People Still Talk About", image: "/Image/mysterious-places-in-delhi-01.png" },
  { slug: "malcha-mahal-delhi-travel-guide", title: "Malcha Mahal Delhi: The Haunted Palace Hidden Inside a Forest (Complete Travel Guide)", image: "/Image/malcha-mahal-delhi-01.png" },
  { slug: "great-buddha-statue-bihar-travel-guide", title: "Great Buddha Statue Bodh Gaya, Bihar: Exploring the 80-Foot Symbol of Peace and Spiritual Calm", image: "/Image/great-buddha-statue-bodh-gaya-bihar-01.png" },
  { slug: "india-gate-delhi-travel-guide", title: "India Gate Delhi Travel Guide: History, Timings, Best Time to Visit & How to Reach", image: "/Image/india-gate-delhi-01.png" },
  { slug: "jama-masjid-delhi-travel-guide", title: "Jama Masjid Delhi Travel Guide: Timings, Entry Fee, History, How to Reach & Nearby Places", image: "/Image/Jama-Masjid-Delhi.jpg" },
  { slug: "mahabodhi-temple-bihar-travel-guide", title: "Mahabodhi Temple, Bodh Gaya Bihar: The Sacred Place Where Lord Buddha Found Enlightenment", image: "/Image/mahabhodi-temple-01.jpg" },
];

export default function TrendingSidebar() {
  return (
    <div className="w-full px-2 ml-2 sm:px-4 md:px-10 mt-25 mb-5">

      <div className="
        w-full max-w-[1320px] mx-auto
        p-4 sm:p-6 rounded-2xl
        
        bg-black/50 backdrop-blur-md
        sm:bg-black/30
        lg:bg-white lg:backdrop-blur-0 lg:shadow-lg
      ">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-white lg:text-black">
          Trending Photo Stories / Articles
        </h2>

        {/* LIST */}
        <div className="h-[570px] overflow-y-auto pr-2">

          {trending_stories.map((item) => (
            <Link to={`/${item.slug}`} key={item.slug}>

              <div className="
                flex items-center gap-4 mb-4 p-2 rounded-lg
                hover:bg-white/10 lg:hover:bg-gray-100
                transition
              ">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[110px] h-[80px] object-cover rounded-md"
                />

                <p className="text-sm sm:text-base font-medium text-white lg:text-black">
                  {item.title}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}