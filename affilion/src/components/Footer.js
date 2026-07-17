import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaSquareInstagram } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image src="/Affilion-logo.png" alt="Affilion Logo" width={350} height={150} className="mb-4" />
            <p className="text-gray-400 text-sm">Your trusted source for the best deals and discounts across all major e-commerce platforms.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="/hot-deals" className="hover:text-white transition-colors">Hot Deals</a></li>
              <li><a href="/coupons" className="hover:text-white transition-colors">Coupons</a></li>
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold mb-4">Our Partners</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Amazon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flipkart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meesho</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clickbank</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CJ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hostinger</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bluehost</a></li>
              <li><a href="#" className="hover:text-white transition-colors">More</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            {/* <p className="text-gray-400 text-sm mb-4">Get the best deals delivered to your inbox</p> */}
            {/* <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-r-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div> */}
            <div className="flex items-center space-x-4 text-2xl">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <BsFacebook color="white" size={32} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <FaSquareInstagram color="white" size={32} />
              </Link>
            </div>
          </div>

          <div>
            <h4></h4>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            <strong className='text-gray-300'>Affiliate Disclosure:</strong> Affilion participates in various affiliate marketing programs, including the Amazon Associates Program, Flipkart Affiliate Program, and others. We may earn commissions when you purchase products through our links, at no additional cost to you. Our recommendations are based on thorough research and genuine value for our users. We only promote products we believe will benefit our audience.
          </p>
          <p className="text-gray-400 text-sm text-center font-semibold mt-4">
            © 2026 Affilion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
