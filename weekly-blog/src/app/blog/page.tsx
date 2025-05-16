import { blogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#3c3c3c] mb-4">Weekly Journal Entries</h1>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto">
            Browse through all my weekly adventures, thoughts, and experiences during my OJT at DOST V
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
