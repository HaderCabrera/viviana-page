'use client'
import { usePathname } from 'next/navigation'
import NavBar from './Navbar'

export default function ClientNavBar() {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')
  
  if (isDashboard) {
    return null
  }
  
  return <NavBar />
}