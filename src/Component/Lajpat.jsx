import React from "react";

const SectionImage = ({ src, source = "Wikipedia / Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="lajpat nagar market"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const Lajpat = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Lajpat Nagar Market Guide: Shopping, Food, Tips & How to Reach
        </h1>

        <p className="text-gray-600 mb-2 font-semibold">
          Published On: 02 May, 2026
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        {/* INTRO IMAGE */}
        <SectionImage src="/Image/lajpat-nagar-market-delhi-01.png" />

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          There are some places in Delhi that you plan to visit and then there are markets like Lajpat Nagar Market that you simply walk in and get pulled into.
        </p>

        <p className="text-gray-700 mb-6">
          Located in South Delhi, this market has grown from a residential shopping hub into one of the city’s busiest retail destinations. It’s especially known for ethnic wear, fabrics, accessories and everyday fashion, making it a go-to spot for everything from wedding shopping to quick wardrobe updates.
        </p>

        <p className="text-gray-700 mb-6">
          The moment you step in, the pace changes. Narrow lanes packed with shops, vendors calling out deals, racks of clothes spilling onto the streets - it’s busy, loud and constantly moving. Bargaining is part of the process, and so is browsing through more than you planned.
        </p>

        <p className="text-gray-700 mb-6">
          What makes Lajpat Nagar Market stand out is the mix. You’ll find traditional suits and dupattas alongside trendy streetwear and street food stalls next to branded stores. It’s not just a market for one kind of shopper - it works for everyone, whether you’re here for something specific or just exploring. And that’s usually how it begins. You come in looking for one thing, and somewhere between the crowds and the colours, you end up staying longer than you expected.
        </p>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          History of Lajpat Nagar Market: From Refugee Colony to Shopping Hub
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-02.png" />

        <p className="text-gray-700 mb-6">
          Lajpat Nagar, as a neighbourhood, was established in the late 1940s and early 1950s, soon after India’s independence. It was developed as a resettlement colony for refugees from West Punjab (now in Pakistan) following the Partition of 1947. Over time, it grew into one of South Delhi’s most densely populated and commercially active areas.
        </p>

        <p className="text-gray-700 mb-6">
          The market itself developed alongside the residential colony, initially serving the daily needs of local families. Unlike planned commercial hubs, it evolved organically - small shops, local vendors and street stalls gradually expanding as demand increased.
        </p>

        <p className="text-gray-700 mb-6">
          Lajpat Nagar Market’s identity was shaped by its strong connection to Punjabi refugee culture. This influence is still visible today in the kind of products sold, especially ethnic wear, fabrics, tailoring services and wedding shopping essentials. The market became known as a reliable place for affordable traditional clothing, particularly salwar suits, dupattas and dress materials.
        </p>

        <p className="text-gray-700 mb-6">
          By the 1980s and 1990s, as Delhi expanded and consumer demand grew, the market transformed into a major retail hub. It began attracting shoppers from across the city, not just nearby residents. The rise of ready-made garments, branded outlets and street shopping further diversified its offerings.
        </p>

        <p className="text-gray-700 mb-6">
          Today, Lajpat Nagar Market stands as a blend of traditional and modern retail, where long-established family-run shops exist alongside newer stores and street vendors. Its growth reflects how Delhi’s markets have evolved - shaped by migration, demand and changing lifestyles, rather than a fixed plan.
        </p>

        {/* SHOPPING */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What to Buy in Lajpat Nagar Market (Complete Shopping Guide)
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-03.png" />

        <div className="space-y-4 text-gray-700 mb-6">
          <p><b>Ethnic Wear:</b> Kurtis, suit sets, dupattas, sarees, lehengas - everything from daily wear to wedding outfits.</p>
          <p><b>Western Wear:</b> Tops, dresses, jeans, co-ord sets, oversized tees for everyday fashion.</p>
          <p><b>Footwear:</b> Juttis, kolhapuris, flats and heels in both traditional and modern styles.</p>
          <p><b>Bags & Accessories:</b> Slings, totes, clutches, sunglasses, belts and more.</p>
          <p><b>Jewellery:</b> Artificial jewellery - oxidized, festive and minimal styles.</p>
          <p><b>Fabrics & Custom Stitching:</b> Wide variety of fabrics with tailoring options.</p>
          <p><b>Home Decor:</b> Cushions, curtains, wall hangings and decorative items.</p>
          <p><b>Festive Items:</b> Lights, diyas and decorations during festivals.</p>
        </div>

        {/* SPECIAL */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Makes This Place Special?
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-04.png" source="Delhi Tourism" />

        <p className="text-gray-700 mb-6">
          The defining strength of Lajpat Nagar Market lies in its balance. 
          Unlike high-end retail centres or purely budget street markets, 
          it occupies a middle ground that appeals to a wide range of shoppers. 
          The market offers a combination of fixed-price showrooms, street stalls 
          with negotiable pricing and export surplus stores that often carry good-quality products at reasonable rates.
        </p>
        <p className="text-gray-700 mb-6">
          This diversity is reflected in its price range, which remains accessible without being excessively low:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Tops: ₹200–₹500</li>
          <li>Kurtis: ₹300–₹1000</li>
          <li>Juttis: ₹300–₹800</li>
          <li>Accessories: ₹50–₹200</li>
        </ul>

        <p className="text-gray-700 mb-6">
          An important aspect of shopping here is that prices are not always fixed, 
          particularly at street stalls. The final cost often depends on the buyer’s 
          approach to bargaining, making negotiation an integral part of the shopping experience.
        </p>

        {/* FOOD */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Best Street Food in Lajpat Nagar Market You Must Try
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-05.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><b>Momos (don’t miss this)</b> – Best at Dolma Aunty Momo and Vicky's Marinated Momo</li>
          <li><b>Chole Bhature</b> – A proper Delhi classic at Bikanervala</li>
          <li><b>Ram Ladoo</b> – Simple but addictive at Lajpat Wale Ram Ladoo</li>
          <li><b>Kebabs & Rolls</b> – Quick, filling options at spots like Food Bus Of India</li>
          <li><b>Parathas</b> – Famous stuffed parathas at Moolchand Parantha (nearby)</li>
          <li><b>Chaat (Gol Gappe, Aloo Tikki, Papdi)</b> - Best enjoyed from the busiest street stalls</li>
          <li><b>Kulfi & Falooda</b> - Perfect sweet break after all the spice</li>
          <li><b>Fresh Juices & Shakes</b> - Easy refreshment while walking through the market</li>
        </ul>

        {/* TIPS */}
        {/* SMART SHOPPING TIPS */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  Smart Shopping Tips
</h2>

<SectionImage
  src="/Image/lajpat-nagar-market-delhi-06.png"
  source="Hindustan Times"
/>

<p className="text-gray-700 mb-6">
  Understanding how to shop is just as important as knowing what to buy. In markets like Lajpat Nagar Market, prices are flexible and your approach can directly affect what you pay.
</p>

<div className="space-y-4 text-gray-700 mb-6">

  <p>
    <span className="font-bold">Start with a lower offer:</span> Begin bargaining at around 40–50% of the quoted price to leave room for negotiation.
  </p>

  <p>
    <span className="font-bold">Compare before buying:</span> Check 2–3 shops for the same item, prices and quality can vary a lot.
  </p>

  <p>
    <span className="font-bold">Stay neutral while browsing:</span> Avoid showing too much excitement early, it can lead to higher quotes.
  </p>

  <p>
    <span className="font-bold">Check quality carefully:</span> Look for defects, stitching issues, zips and fabric quality before finalizing.
  </p>

  <p>
    <span className="font-bold">Know the “fair price” range:</span> Having a rough idea of pricing helps you bargain more confidently.
  </p>

  <p>
    <span className="font-bold">Carry small cash & UPI backup:</span> Cash can help in negotiation but UPI is widely accepted too.
  </p>

  <p>
    <span className="font-bold">Shop at the right time:</span> Weekdays are usually less crowded and offer better deals, while visiting early in the day gives you access to fresher stock.
  </p>

  <p>
    <span className="font-bold">Dress light & stay comfortable:</span> You’ll walk a lot, comfortable clothing and footwear make a difference.
  </p>

  <p>
    <span className="font-bold">Keep your belongings secure:</span> The market gets crowded, use a crossbody bag or keep essentials close.
  </p>

</div>

        {/* HOW TO REACH */}
        {/* HOW TO REACH */}
<h2 className="text-2xl font-bold mt-10 mb-4">
  How to Reach Lajpat Nagar Market
</h2>

<SectionImage
  src="/Image/lajpat-nagar-market-delhi-07.png"
  source="DMRC"
/>

<div className="space-y-4 text-gray-700 mb-6">

  <p>
    <span className="font-bold">By Metro:</span> Nearest station is Lajpat Nagar Metro Station (Violet & Pink Line). The market is just a short walk from there.
  </p>

  <p>
    <span className="font-bold">By Bus:</span> DTC buses frequently connect the area with nearby stops, including Lajpat Nagar and Ashram.
  </p>

  <p>
    <span className="font-bold">By Road:</span> Autos and cabs are easily available for a direct drop, while parking for private vehicles is limited, especially on weekends.
  </p>

</div>

        {/* NEARBY */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Nearby Places to Visit
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-08.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><b>Lotus Temple</b> - A quiet and peaceful place, perfect when you want a break from the crowd(~5.8 km) </li>
          <li><b>ISKCON Temple Delhi</b> - Calm, spiritual and a nice place to slow down(~3 km)</li>
          <li><b>Nehru Place</b> - Busy market for electronics and gadgets (~4.6 km)</li>
          <li><b>Humayun’s Tomb</b> - Beautiful historic site, great for a relaxed visit(~2.8 km)</li>
        </ul>

        {/* CONCLUSION */}
        
          <p className="text-gray-700 mb-4">
            Lajpat Nagar Market is not the kind of place you visit once and forget. You walk in thinking you’ll “just look around” but somewhere between the shops and the crowds that plan quietly changes.
          </p>

          <p className="text-gray-700 mb-4">
            You bargain more than you expected, pick up things you didn’t plan to buy and still leave feeling like you got a good deal.
          </p>

          <p className="text-gray-800 font-medium">
            Because it’s not just about what you buy — it’s about how you shop.
          </p>
          <p>
            The experience stays with you shaping the way you approach markets long after you’ve left. 
            And that’s the real takeaway - what starts as “just looking” rarely stays that way.
          </p>

     

        {/* FAQ */}
        {/* FAQ */}
<h2 className="text-2xl font-bold mt-10 mb-6">
  Frequently Asked Questions (FAQs) about Lajpat Nagar Market
</h2>

<div className="space-y-5 text-gray-700">

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      1. What is Lajpat Nagar Market famous for?
    </p>
    <p>
      Affordable fashion, ethnic wear, footwear, bags, and street shopping.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      2. What are the timings?
    </p>
    <p>
      Around 10:30 AM – 9:00 PM (mostly closed on Mondays).
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      3. Which is the nearest metro station?
    </p>
    <p>
      Lajpat Nagar Metro Station - just a short walk away.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      4. Is it budget-friendly?
    </p>
    <p>
      Yes, it’s known for cheap to mid-range shopping with bargaining options.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      5. What can I buy here?
    </p>
    <p>
      Clothes, accessories, shoes, jewellery, fabrics, home décor.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      6. Can I bargain here?
    </p>
    <p>
      Yes, especially in street stalls and small shops.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-md">
    <p className="font-bold mb-1">
      7. Is it worth visiting?
    </p>
    <p>
      Absolutely - great mix of variety, style, and budget shopping in one place.
    </p>
  </div>

</div>

        {/* AUTHOR */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="/Image/kritisingh.jpg"
              alt="Kriti Singh"
              className="w-40 h-40 object-cover rounded-md"
            />

            <p className="text-gray-800 leading-relaxed">
Kriti Singh began writing out of curiosity but it soon became her way of observing and making sense of the world around her. Originally from Bihar and now living in Delhi for her studies, her perspective is shaped by both, where rooted culture meets the fast pace of city life. She finds stories in everyday spaces, from crowded streets to familiar food corners, not to romanticize them but to understand and capture them as they are. Her writing reflects this in-between space, personal yet grounded, thoughtful yet unfiltered. She doesn’t claim expertise but writes with honesty, clarity and a sharp eye for detail.            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lajpat;