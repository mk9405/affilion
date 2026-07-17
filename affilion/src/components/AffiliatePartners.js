import {
  ShieldCheck,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";

export default function TrustedPartners() {
  const partners = [
    {
      name: "Amazon",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Flipkart",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Meesho",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Hostinger",
      color: "bg-gray-100 text-gray-700",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-600 font-semibold">
            <ShieldCheck className="w-5 h-5" />
            Trusted Shopping Partners
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-5">
            Shop with Confidence
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
            We partner with trusted online retailers to recommend genuine
            products. Every recommendation is carefully researched to help you
            make informed buying decisions.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
                <ShoppingBag className="w-8 h-8 text-orange-500 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {partner.name}
              </h3>

              <span
                className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium ${partner.color}`}
              >
                Verified Partner
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}