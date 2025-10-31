"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../ui/sheet"
import { FaAlignJustify } from "react-icons/fa"

// Menús estáticos
const menuItems = [
  { id: "home", label: "Home" },
  { id: "servicios", label: "Servicios" },
  { id: "testimonios", label: "Testimonios" },
  { id: "por-que-elegirnos", label: "Por Qué Elegirnos" },
  { id: "contacto", label: "Contacto" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  
  const handleLinkClick = () => {
    setOpen(false)
  }
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
          <FaAlignJustify className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Site navigation menu with links to different sections
        </SheetDescription>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-bold">Menu</span>
          </div>
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-base font-medium px-3 py-2 rounded-md hover:bg-muted"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}