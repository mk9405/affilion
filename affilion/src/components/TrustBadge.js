// import React from 'react'

// export default function TrustBadge() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap items-center justify-center gap-8 border border-gray-100">
//           <div className="flex items-center space-x-2">
//             <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="text-sm font-medium text-gray-700">Honest Reviews</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//             <span className="text-sm font-medium text-gray-700">Trusted Affiliate Links</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//             <span className="text-sm font-medium text-gray-700">Latest Deals</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//             <span className="text-sm font-medium text-gray-700">Transparent Disclosure</span>
//           </div>
//         </div>
//       </div>
//   )
// }

"use client";

import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Tags,
  FileText,
} from "lucide-react";

export default function TrustBadge() {
  const badges = [
    {
      title: "Honest Reviews",
      desc: "Research-based recommendations",
      icon: <BadgeCheck className="w-7 h-7 text-orange-500" />,
    },
    {
      title: "Trusted Affiliate Links",
      desc: "Secure & verified partners",
      icon: <ShieldCheck className="w-7 h-7 text-orange-500" />,
    },
    {
      title: "Latest Deals",
      desc: "Updated offers & discounts",
      icon: <Tags className="w-7 h-7 text-orange-500" />,
    },
    {
      title: "Transparent Disclosure",
      desc: "No hidden commissions",
      icon: <FileText className="w-7 h-7 text-orange-500" />,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Why Trust Affilion?
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Shop with Confidence
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We are committed to providing honest recommendations,
            verified affiliate links, and the latest deals while
            maintaining complete transparency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-orange-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
                <div className="group-hover:text-white [&>svg]:group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-bold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        {/* <div className="mt-10 rounded-2xl bg-orange-500 p-6 text-center text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2">
            Affiliate Disclosure
          </h3>

          <p className="max-w-4xl mx-auto text-orange-100 leading-7">
            Affilion participates in trusted affiliate programs including
            Amazon Associates, Flipkart Affiliate, and other partner
            networks. We may earn a small commission when you purchase
            through our links—at no extra cost to you. Every recommendation
            is based on research, product quality, and value for our users.
          </p>
        </div> */}

      </div>
    </section>
  );
}
