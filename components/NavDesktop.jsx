"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    // { name: 'Contact', path: '/contact' },
]

function NavDesktop() {
    const pathname = usePathname();
    console.log(pathname);


    return (
        <nav className=' flex gap-8'>
            {links.map((link, index) => (
                <Link key={index} href={link.path}
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                        capitalize font-medium hover:text-accent transition-all
                        `
                    }>
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export default NavDesktop