import Link from "next/link"
import { Instagram, Twitter, Facebook, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f3ece7] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-script text-2xl text-[#c9a992] mb-4">My Journal</h3>
            <p className="text-[#6b6b6b]">
              A personal scrapbook documenting my weekly adventures, thoughts, and experiences.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                  All Entries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#6b6b6b] hover:text-[#c9a992] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5d9d0] mt-8 pt-8 text-center text-[#6b6b6b]">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-[#c9a992]" /> © {new Date().getFullYear()} My Weekly Journal
          </p>
        </div>
      </div>
    </footer>
  )
}
