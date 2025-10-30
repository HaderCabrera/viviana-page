'use client'

import { useEffect, useState } from "react";

import { styles } from "@/styles";
import { navLinks } from "@/constants";
import { logo, menu, close, logo2, marca1, marca2 } from "@/assets";
import Link from "next/link";
import Image from "next/image";
import SharedLayoutAnimation from "@/components/NavBar/MotionNavBar"

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-0 h-[60px] fixed top-0 z-20 ${scrolled ? "bg-background" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    href="#"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image
                        src={scrolled ? marca1 : marca2}
                        alt='logo'
                        className='w-auto h-6 object-contain'
                    />
                </Link>

                <SharedLayoutAnimation />

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Image

                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;