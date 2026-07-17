"use client";
import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaTag, FaComment } from 'react-icons/fa'

export default function ContactUs() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-blue-100 p-6">
            <form className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200"
                onSubmit={(e) => { e.preventDefault(); /* handle submit */ }}>
                <h2 className='w-full text-center bg-linear-to-r from-orange-500 to-orange-600 p-3 text-white font-bold rounded-md shadow-sm'>Contact Us</h2>
                <div className="flex justify-between gap-4">
                    <div className="relative  w-[48%] mt-4">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-4 text-orange-500" />
                        <input type="text" name="firstname" required className="w-full pl-10 p-1 mb-3 border border-orange-300 rounded" placeholder='First Name' />
                    </div>
                    <div className="relative w-[48%] mt-4">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-4 text-orange-500" />
                        <input type="text" name="lastname" required className="w-full pl-10 p-1 mb-3 border border-orange-300 rounded" placeholder='Last Name' />
                    </div>
                </div>
                <div className="relative mt-4">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-4 text-slate-400" />
                    <input type="email" name="email" required className="w-full pl-10 p-2 mb-3 border border-slate-200 rounded shadow-sm" placeholder='Email' />
                </div>
                <div className="relative mt-4">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-4 text-slate-400" />
                    <input type="tel" name="phone" pattern="[0-9+() -]{7,}" className="w-full pl-10 p-2 mb-3 border border-slate-200 rounded shadow-sm" placeholder='Phone Number' />
                </div>
                <div className="relative mt-4">
                    <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" name="subject" required className="w-full pl-10 p-2 mb-3 border border-slate-200 rounded shadow-sm" placeholder='Subject' />
                </div>
                <div className="relative mt-4">
                    <FaComment className="absolute left-3 top-3 text-slate-400" />
                    <textarea name="message" rows={6} required className="w-full pl-10 p-2 mb-3 border border-slate-200 rounded shadow-sm" placeholder='Message'></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white p-2 rounded mt-4 hover:bg-orange-700 transition-colors cursor-pointer">Send Message</button>
            </form>
        </div>
    )
}
