"use client";
import React from "react";
import { Star, ExternalLink, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Shopping() {
  const products = [
    {
      id: 1,
      name: "Apple AirPods Pro (2nd Generation) with MagSafe Charging Case",
      price: "₹22,999",
      oldPrice: "₹26,900",
      discount: "15% OFF",
      partner: "Amazon",
      image: "https://picsum.photos/400/400?random=1",
      rating: 4.8,
      reviews: 2546,
      link: "#",
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch 7 Bluetooth Smartwatch",
      price: "₹18,999",
      oldPrice: "₹24,999",
      discount: "24% OFF",
      partner: "Flipkart",
      image: "https://picsum.photos/400/400?random=2",
      rating: 4.7,
      reviews: 1458,
      link: "#",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: "₹27,999",
      oldPrice: "₹34,999",
      discount: "20% OFF",
      partner: "Amazon",
      image: "https://picsum.photos/400/400?random=3",
      rating: 4.9,
      reviews: 3987,
      link: "#",
    },
    {
      id: 4,
      name: "Apple iPad Air M3 Wi-Fi 128GB",
      price: "₹54,999",
      oldPrice: "₹59,900",
      discount: "8% OFF",
      partner: "Amazon",
      image: "https://picsum.photos/400/400?random=4",
      rating: 4.8,
      reviews: 962,
      link: "#",
    },
    {
      id: 5,
      name: "boAt Airdopes 311 Pro TWS Earbuds",
      price: "₹1,499",
      oldPrice: "₹3,999",
      discount: "63% OFF",
      partner: "Flipkart",
      image: "https://picsum.photos/400/400?random=5",
      rating: 4.5,
      reviews: 18543,
      link: "#",
    },
    {
      id: 6,
      name: "ASUS Vivobook 15 Intel Core i5 Laptop",
      price: "₹49,990",
      oldPrice: "₹61,990",
      discount: "19% OFF",
      partner: "Amazon",
      image: "https://picsum.photos/400/400?random=6",
      rating: 4.6,
      reviews: 2435,
      link: "#",
    },
    {
      id: 7,
      name: "Fire-Boltt Ninja Smart Watch",
      price: "₹1,299",
      oldPrice: "₹4,999",
      discount: "74% OFF",
      partner: "Flipkart",
      image: "https://picsum.photos/400/400?random=7",
      rating: 4.4,
      reviews: 9271,
      link: "#",
    },
    {
      id: 8,
      name: "OnePlus Nord Buds 3",
      price: "₹2,499",
      oldPrice: "₹3,299",
      discount: "24% OFF",
      partner: "Amazon",
      image: "https://picsum.photos/400/400?random=8",
      rating: 4.7,
      reviews: 1743,
      link: "#",
    },
    {
      id: 9,
      name: "Canon EOS R50 Mirrorless Camera",
      price: "₹63,999",
      oldPrice: "₹71,999",
      discount: "11% OFF",
      partner: "Amazon",
      image: "https://picsum.photos/400/400?random=9",
      rating: 4.9,
      reviews: 685,
      link: "#",
    },
    {
      id: 10,
      name: "LG 55-inch 4K Smart TV",
      price: "₹46,999",
      oldPrice: "₹59,990",
      discount: "22% OFF",
      partner: "Flipkart",
      image: "https://picsum.photos/400/400?random=10",
      rating: 4.8,
      reviews: 3821,
      link: "#",
    },
  ];

  const router = useRouter();

  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}

        <div className="mb-10 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              🔥 Trending Deals
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Best Selling Products
            </h2>

            <p className="mt-2 text-gray-600">
              Handpicked deals from our trusted affiliate partners.
            </p>
          </div>

          <button onclick={() => {
            router.push("/shop");
          }} className="rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            View All Products
          </button>
        </div>

        {/* Products */}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  {product.discount}
                </span>

                <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-lg">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Content */}

              <div className="p-4">
                {/* Rating */}

                <div className="mb-3 flex items-center gap-1">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-medium">
                    {product.rating}
                  </span>

                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Title */}

                <h3 className="line-clamp-2 min-h-[48px] font-semibold text-gray-900">
                  {product.name}
                </h3>

                {/* Price */}

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl font-bold text-orange-600">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Partner */}

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    {product.partner}
                  </span>

                  <span className="text-xs text-green-600 font-medium">
                    Verified
                  </span>
                </div>

                {/* Button */}

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  View Deal
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}