"use client";

import { ArrowUpRight } from "lucide-react";

export default function Category() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
    },
    {
      id: 3,
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
    },
    {
      id: 4,
      name: "Gaming",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    },
    {
      id: 5,
      name: "Home",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500",
    },
    {
      id: 6,
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
    },
    {
      id: 7,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
    },
    {
      id: 8,
      name: "Watches",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    },
    {
      id: 9,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 10,
      name: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8875?w=500",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Browse Categories
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Shop by Category
          </h1>

          <p className="mt-3 text-gray-500">
            Find products from your favorite categories.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">
                  {category.name}
                </h3>

                <div className="rounded-full bg-orange-100 p-2 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}