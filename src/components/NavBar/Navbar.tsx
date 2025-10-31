'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import * as motion from "motion/react-client"
import MobileMenu from './MobileMenu'
import MarcaBlanca from '@/assets/marcaBlanca.png';
import Marca2 from '@/assets/marca2.png';

// Menús estáticos
const allMenuItems = [
    { id: "home", label: "Home" },
    { id: "servicios", label: "Servicios" },
    { id: "testimonios", label: "Testimonios" },
    { id: "por-que-elegirnos", label: "Por Qué Elegirnos" },
    { id: "contacto", label: "Contacto" },
]

export default function NavBar() {
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const [selectedTab, setSelectedTab] = useState(allMenuItems[0])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`
        fixed top-0 z-40 w-full
        transition-all duration-300
        ${scrolled
                    ? 'bg-background border-b border-border backdrop-blur-none shadow-sm'
                    : 'backdrop-blur-md bg-background/10 border-none'
                }
      `}
        >
            <div className='container flex h-16 items-center justify-between py-2 px-4 md:px-6 w-full'>
                {/* Logo - Cambia con scroll */}
                <div className='flex items-center gap-2'>
                    <Link href='/' className='flex items-center relative'>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: scrolled ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 ${scrolled ? 'pointer-events-none' : ''}`}
                        >
                            <Image
                                src={MarcaBlanca}
                                alt="logo"
                                width={180}
                                height={48}
                                className='h-12 w-auto object-contain'
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scrolled ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${!scrolled ? 'pointer-events-none' : ''}`}
                        >
                            <Image
                                src={Marca2}
                                alt="logo"
                                width={180}
                                height={48}
                                className='h-12 w-auto object-contain'
                                priority
                            />
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <MobileMenu />

                {/* Navegación con animación */}
                <nav className='hidden md:flex items-center gap-2 lg:gap-6'>
                    <ul className='flex gap-2 lg:gap-6 items-center list-none p-0 m-0'>
                        {allMenuItems.map((item) => (
                            <motion.li
                                key={item.id}
                                initial={true}
                                className='relative cursor-pointer flex justify-center items-center px-2 py-1 select-none'
                                onClick={() => setSelectedTab(item)}
                            >
                                <Link
                                    href={`#${item.id}`}
                                    className={`
                    text-sm font-bold
                    hover:text-bg-personal2 hover:font-black
                    transition-all duration-300 ease-in-out
                    ${scrolled ? 'text-foreground' : 'text-white'}
                  `}
                                >
                                    {item.label}
                                </Link>
                                {item === selectedTab ? (
                                    <motion.div
                                        layoutId="underline"
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${scrolled ? 'bg-primary' : 'bg-white'
                                            }`}
                                    />
                                ) : null}
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Acciones */}
                <div className='flex items-center gap-2'>
                    <div className={`transition-colors duration-300 ${scrolled ? 'text-muted-foreground' : 'text-white/50'
                        }`}>|</div>
                    <Button
                        type="button"
                        size="lg"
                        className='px-4 font-bold bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-md transition-all duration-200'
                        onClick={() => router.push('/signup')}
                    >
                        SignUp
                    </Button>
                </div>
            </div>
        </header>
    )
}