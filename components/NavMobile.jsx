"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { links } from './NavDesktop';
import { CiMenuFries } from "react-icons/ci";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from './ui/scroll-area';


function NavMobile() {
    const pathname = usePathname();
    console.log(pathname);



    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className='text-accent text-[32px]' />
            </SheetTrigger>
            <SheetContent className="flex flex-col p-0">
                <ScrollArea className="h-full w-full m-0 p-6 border ">

                    {/* Logo */}
                    <Link href="/">

                        <div className='mt-32 text-center text-3xl'>
                            Ronald
                            <span className="text-accent">.</span>
                            Ris
                        </div>
                    </Link>

                    {/* nav */}

                    <nav className='flex flex-col mt-16'>


                        {links.map((link, index) => (
                            <Link key={index} href={link.path}

                                className={`
                                ${link.path == pathname && "text-accent border-b-2 border-accent"}
                                capitalize font-medium hover:text-accent transition-all
                                `}
                            >
                                {link.name}
                            </Link>
                        ))}


                    </nav>

                </ScrollArea>
            </SheetContent>
        </Sheet >

        // <nav className=' flex gap-8'>
        //     {links.map((link, index) => (
        //         <Link key={index} href={link.path}
        //             className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
        //                 capitalize font-medium hover:text-accent transition-all
        //                 `
        //             }>
        //             {link.name}
        //         </Link>
        //     ))}
        // </nav>
    )
}

export default NavMobile