import Image from 'next/image'
import Link from 'next/link'
import React, { lazy } from 'react'

const Navbar = () => {
    const links = [
        {
            href: "/founders",
            title: "Founders"
        },
        {
            href: "/guide",
            title: "Guide"
        },
        {
            href: "/pricing",
            title: "Pricing"
        },
        {
            href: "/login",
            title: "Log In"
        },

    ]
    return (
        <div className='flex items-center justify-between'>
            <Link href="/">
                <Image
                    draggable={false}
                    loading="lazy"
                    src="/logo.svg"
                    height={50}
                    width={65}
                    alt="logo " />
            </Link>
            <div className='flex items-center gap-5'>
                {links.map((link, idx) => (
                    <Link key={idx} href={link.href}
                        className='text-sm text-neutral-800 font-medium hover:text-neutral-600 transition
                        duration-200'
                    >{link.title}</Link>
                ))}
                <button className='text-sm bg-blue-500 rounded-lg font-medium  text-white py-2 px-4 shadow-lg text-shadow-md'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar