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

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Lajpat Nagar Market Guide: Shopping, Food, Tips & How to Reach
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 02 May, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-01.png" />

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
          What makes Lajpat Nagar Market stand out is the mix. You’ll find traditional suits and dupattas alongside trendy streetwear and street food stalls next to branded stores. It’s not just a market for one kind of shopper - it works for everyone.
        </p>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          History of Lajpat Nagar Market: From Refugee Colony to Shopping Hub
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-02.png" />

        <p className="text-gray-700 mb-6">
          Lajpat Nagar was established in the late 1940s and early 1950s after independence as a resettlement colony for refugees following the Partition of 1947.
        </p>

        <p className="text-gray-700 mb-6">
          The market evolved organically with small shops, vendors and street stalls expanding over time as demand increased.
        </p>

        <p className="text-gray-700 mb-6">
          Its identity was shaped by Punjabi refugee culture, visible in ethnic wear, fabrics and wedding shopping essentials.
        </p>

        <p className="text-gray-700 mb-6">
          By the 1980s–90s, it became a major retail hub attracting shoppers from across Delhi.
        </p>

        {/* SHOPPING */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What to Buy in Lajpat Nagar Market (Complete Shopping Guide)
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-03.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><b>Ethnic Wear:</b> Kurtis, suit sets, sarees, lehengas</li>
          <li><b>Western Wear:</b> Dresses, jeans, co-ords</li>
          <li><b>Footwear:</b> Juttis, kolhapuris, flats</li>
          <li><b>Bags & Accessories:</b> Slings, totes, belts</li>
          <li><b>Jewellery:</b> Oxidized, festive, minimal</li>
          <li><b>Fabrics:</b> Custom stitching options</li>
          <li><b>Home Decor:</b> Cushions, curtains</li>
          <li><b>Festive Items:</b> Lights, diyas</li>
        </ul>

        {/* SPECIAL */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Makes This Place Special?
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-04.png" />

        <p className="text-gray-700 mb-6">
          The market offers a balance of fixed-price shops and bargaining stalls with affordable pricing:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Tops: ₹200–₹500</li>
          <li>Kurtis: ₹300–₹1000</li>
          <li>Juttis: ₹300–₹800</li>
          <li>Accessories: ₹50–₹200</li>
        </ul>

        {/* FOOD */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Best Street Food in Lajpat Nagar Market You Must Try
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-05.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Momos – Dolma Aunty & Vicky’s</li>
          <li>Chole Bhature – Bikanervala</li>
          <li>Ram Ladoo</li>
          <li>Kebabs & Rolls</li>
          <li>Parathas – Moolchand</li>
          <li>Chaat</li>
          <li>Kulfi & Falooda</li>
          <li>Juices & Shakes</li>
        </ul>

        {/* TIPS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Smart Shopping Tips
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-06.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Start bargaining at 40–50%</li>
          <li>Compare multiple shops</li>
          <li>Check quality carefully</li>
          <li>Carry cash + UPI</li>
          <li>Visit weekdays</li>
          <li>Stay comfortable</li>
          <li>Keep belongings secure</li>
        </ul>

        {/* HOW TO REACH */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How to Reach Lajpat Nagar Market
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-07.png" source="DMRC" />

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Metro: Lajpat Nagar (Violet & Pink Line)</li>
          <li>Bus: DTC buses available</li>
          <li>Road: Autos & cabs (limited parking)</li>
        </ul>

        {/* NEARBY */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Nearby Places to Visit
        </h2>

        <SectionImage src="/Image/lajpat-nagar-market-delhi-08.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Lotus Temple</li>
          <li>ISKCON Temple Delhi</li>
          <li>Nehru Place</li>
          <li>Humayun’s Tomb</li>
        </ul>

        {/* CONCLUSION */}
        <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            Lajpat Nagar Market is not the kind of place you visit once and forget. You walk in thinking you’ll “just look around” but end up staying longer.
          </p>

          <p className="text-gray-800 font-medium">
            It’s not just about shopping — it’s about the experience.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50">
            <h3 className="font-semibold">What is it famous for?</h3>
            <p>Affordable fashion & street shopping</p>
          </div>

          <div className="p-4 bg-gray-50">
            <h3 className="font-semibold">Timings?</h3>
            <p>10:30 AM – 9:00 PM (Closed Monday)</p>
          </div>

          <div className="p-4 bg-gray-50">
            <h3 className="font-semibold">Nearest metro?</h3>
            <p>Lajpat Nagar Metro Station</p>
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
              Kriti Singh writes with honesty and clarity, capturing everyday life between rooted culture and city pace.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lajpat;