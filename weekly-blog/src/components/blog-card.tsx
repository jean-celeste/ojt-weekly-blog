import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/types"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className={`group relative overflow-hidden transition-all duration-300 ${featured ? "bg-[#faf7f5] p-4 shadow-sm" : "bg-white p-3 shadow-sm"}`}
      >
        <div className="relative">
          {/* Decorative tape elements for scrapbook feel */}
          <div className="tape tape-left"></div>
          <div className="tape tape-right"></div>

          <div className="overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={400}
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-4 text-center">
            <h3 className="font-serif text-xl md:text-2xl text-[#3c3c3c] mb-2 group-hover:text-[#c9a992] transition-colors">
              {post.title}
            </h3>
            <p className="text-[#6b6b6b] text-sm mb-4">{post.date}</p>
            <div className="uppercase text-xs tracking-wider text-[#c9a992] font-medium">LEARN MORE</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
