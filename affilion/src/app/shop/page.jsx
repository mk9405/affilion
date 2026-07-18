"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Shop() {
    const products = [
        { id: 1, name: "Product 1", price: 29.99, brand: "Brand A", category: "Clothing" },
        { id: 2, name: "Product 2", price: 49.99, brand: "Brand B", category: "Electronics" },
        { id: 3, name: "Product 3", price: 19.99, brand: "Brand A", category: "Clothing" },
        { id: 4, name: "Product 4", price: 39.99, brand: "Brand C", category: "Home" },
        { id: 5, name: "Product 5", price: 59.99, brand: "Brand B", category: "Electronics" },
        { id: 6, name: "Product 6", price: 24.99, brand: "Brand C", category: "Home" },
        { id: 7, name: "Product 7", price: 12.99, brand: "Brand A", category: "Accessories" },
        { id: 8, name: "Product 8", price: 89.99, brand: "Brand D", category: "Electronics" },
        { id: 9, name: "Product 9", price: 14.99, brand: "Brand A", category: "Accessories" },
        { id: 10, name: "Product 10", price: 44.99, brand: "Brand C", category: "Clothing" },
        { id: 11, name: "Product 11", price: 74.99, brand: "Brand D", category: "Home" },
        { id: 12, name: "Product 12", price: 5.99, brand: "Brand B", category: "Accessories" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    const categories = useMemo(
        () => ["All", ...new Set(products.map((p) => p.category))],
        []
    );

    const brands = useMemo(
        () => ["All", ...new Set(products.map((p) => p.brand))],
        []
    );

    const filtered = useMemo(() => {
        return products.filter((p) => {
            if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
            if (selectedBrand !== "All" && p.brand !== selectedBrand) return false;
            if (maxPrice && p.price > parseFloat(maxPrice)) return false;
            return true;
        });
    }, [selectedCategory, selectedBrand, maxPrice]);

    const router = useRouter();

    return (
        <section className=" h-full w-full relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-4 rounded-lg bg-white p-4 shadow-sm">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="rounded border px-3 py-2"
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>

                <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="rounded border px-3 py-2"
                >
                    {brands.map((b) => (
                        <option key={b}>{b}</option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-32 rounded border px-3 py-2"
                />

                <button
                    onClick={() => {
                        setSelectedCategory("All");
                        setSelectedBrand("All");
                        setMaxPrice("");
                    }}
                    className="rounded bg-gray-100 px-4 py-2 hover:bg-gray-200"
                >
                    Reset
                </button>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filtered.map((product) => (
                    <div
                        key={product.id}
                        className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        {/* Badge */}
                        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white shadow">
                            Hot
                        </span>

                        {/* Image */}
                        <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-yellow-50">
                            <div className="text-5xl transition-transform duration-500 group-hover:scale-110">
                                🛍️
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-4 space-y-1">
                            <h2 className="text-base font-semibold text-gray-800 group-hover:text-orange-500 transition">
                                {product.name}
                            </h2>

                            <p className="text-xs text-gray-500">
                                {product.brand} • {product.category}
                            </p>

                            {/* Price */}
                            <p className="mt-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>

                        {/* Button */}
                        <button  onClick={() => {
                            router.push(`/product/${product.id}`)
                        }} className="mt-4 w-full cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95">
                            View Deal →
                        </button>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}