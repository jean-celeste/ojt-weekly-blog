import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/lib/blog-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-[#3c3c3c]">My Weekly Journal</h1>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            A scrapbook of memories, adventures, and reflections captured week by week
          </p>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3c3c3c]">
              <span className="font-script text-[#c9a992] mr-3">featured</span> FROM THE BLOG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Entries */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#3c3c3c]">Recent Weekly Entries</h2>
            <div className="w-24 h-1 bg-[#c9a992] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-[#f3ece7]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#3c3c3c] mb-4">Stay Updated</h2>
          <p className="text-[#6b6b6b] mb-6">Subscribe to receive notifications when I post new weekly entries</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-[#d3c5bb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9a992]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#c9a992] text-white rounded-md hover:bg-[#b89582] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
