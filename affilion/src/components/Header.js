import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaSquareInstagram } from 'react-icons/fa6'

export default function Header() {
    return (
        <header className="bg-linear-to-r to-orange-500 text-white shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/Affilion-logo1.png"
                            alt="Affilion Logo"
                            width={350}
                            height={150}
                            className="h-auto w-full max-w-40 sm:max-w-50"
                        />
                    </div>
                    <div className="flex items-center space-x-4 text-2xl">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <BsFacebook color="white" size={32} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <FaSquareInstagram color="white" size={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
