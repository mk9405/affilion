"use client";

import React, { useMemo, useState } from 'react'

export default function Shop() {
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, brand: 'Brand A', category: 'Clothing' },
        { id: 2, name: 'Product 2', price: 49.99, brand: 'Brand B', category: 'Electronics' },
        { id: 3, name: 'Product 3', price: 19.99, brand: 'Brand A', category: 'Clothing' },
        { id: 4, name: 'Product 4', price: 39.99, brand: 'Brand C', category: 'Home' },
        { id: 5, name: 'Product 5', price: 59.99, brand: 'Brand B', category: 'Electronics' },
        { id: 6, name: 'Product 6', price: 24.99, brand: 'Brand C', category: 'Home' },
        { id: 7, name: 'Product 7', price: 12.99, brand: 'Brand A', category: 'Accessories' },
        { id: 8, name: 'Product 8', price: 89.99, brand: 'Brand D', category: 'Electronics' },
        { id: 9, name: 'Product 9', price: 14.99, brand: 'Brand A', category: 'Accessories' },
        { id: 10, name: 'Product 10', price: 44.99, brand: 'Brand C', category: 'Clothing' },
        { id: 11, name: 'Product 11', price: 74.99, brand: 'Brand D', category: 'Home' },
        { id: 12, name: 'Product 12', price: 5.99, brand: 'Brand B', category: 'Accessories' },
    ]

    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedBrand, setSelectedBrand] = useState('All')
    const [maxPrice, setMaxPrice] = useState('')

    const categories = useMemo(
        () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
        [products]
    )

    const brands = useMemo(
        () => ['All', ...Array.from(new Set(products.map((p) => p.brand)))],
        [products]
    )

    const filtered = useMemo(() => {
        return products.filter((p) => {
            if (selectedCategory !== 'All' && p.category !== selectedCategory) return false
            if (selectedBrand !== 'All' && p.brand !== selectedBrand) return false
            if (maxPrice !== '' && p.price > parseFloat(maxPrice)) return false
            return true
        })
    }, [products, selectedCategory, selectedBrand, maxPrice])

    return (
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <aside className="w-full rounded bg-white p-4 shadow md:w-64">
                    <h3 className="mb-2 font-semibold">Category</h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded px-3 py-1 ${selectedCategory === cat ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <h3 className="mt-4 mb-2 font-semibold">Brand</h3>
                    <div className="flex flex-wrap gap-2">
                        {brands.map((b) => (
                            <button
                                key={b}
                                onClick={() => setSelectedBrand(b)}
                                className={`rounded px-3 py-1 ${selectedBrand === b ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
                            >
                                {b}
                            </button>
                        ))}
                    </div>

                    <h3 className="mt-4 mb-2 font-semibold">Max Price</h3>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="e.g. 50"
                        className="w-full rounded border px-2 py-1"
                    />

                    <button
                        onClick={() => {
                            setSelectedCategory('All')
                            setSelectedBrand('All')
                            setMaxPrice('')
                        }}
                        className="mt-4 w-full rounded bg-gray-200 px-4 py-2"
                    >
                        Reset Filters
                    </button>
                </aside>

                <div className="flex-1">;
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filtered.map((product, index) => (
                            <div
                                key={`${product.id}-${product.name}-${index}`}
                                className="flex h-full flex-col rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
                            >
                                <div className="flex h-48 items-center justify-center rounded-md bg-linear-to-br from-orange-100 to-yellow-50 text-4xl text-orange-500">
                                    🛍️
                                </div>
                                <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
                                <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
                                <p className="text-sm text-gray-500">{product.brand} • {product.category}</p>
                                <button className="mt-4 w-full rounded bg-orange-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-600">
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
