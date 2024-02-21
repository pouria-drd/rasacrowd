"use client";

import { usePathname } from 'next/navigation';

import Link from "next/link"
import Image from 'next/image';
import RasaIcon from "./icons/RasaIcon.png"

const Navbar = () => {
    const router = usePathname();

    return (
        <nav className="fixed z-[1000] bg-white font-vazir text-sm text-gray-800
         left-0 shadow-sm
        w-full py-4">

            <div className='grid grid-cols-12 w-full sm:w-3/5 px-4 mx-auto'>
                <div className="flex items-center justify-center gap-10 col-span-8 col-start-3">
                    <Link href={""} className={`${router == "/persist" ? "active" : 'nav-link'}`} >
                        پیگیری
                    </Link>

                    <Link href={""} className={`${router == "/edit" ? "active" : 'nav-link'}`} >
                        ویرایش
                    </Link>

                    <Link href={"/"} className={`${router == "/" ? "active" : 'nav-link'}`} >
                        خانه
                    </Link>
                </div>

                <div className='flex justify-end
            col-span-1 col-start-12'>
                    <Link href={""}>
                        <Image className="w-8" src={RasaIcon} alt="RasaIcon" loading='lazy' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar