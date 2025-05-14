import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="bg-[#faf7f5] border-b border-[#efe8e2] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-script text-3xl text-[#c9a992]">
          My Journal
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
            All Entries
          </Link>
          <Link href="/contact" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
            Contact
          </Link>
        </nav>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-6 mt-10 text-lg">
              <Link href="/" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
                All Entries
              </Link>
              <Link href="/contact" className="text-[#3c3c3c] hover:text-[#c9a992] transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
