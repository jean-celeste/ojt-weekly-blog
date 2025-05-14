import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { type BlogPost } from "@/lib/types"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post: BlogPost) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#faf7f5] py-12 px-4">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#6b6b6b] hover:text-[#c9a992] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all entries
        </Link>

        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3c3c3c] mb-4">{post.title}</h1>

          <div className="flex items-center justify-center space-x-4 text-[#6b6b6b]">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        <div className="relative mb-12 max-w-3xl mx-auto">
          <div className="polaroid mx-auto">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="blog-content">
          <p className="text-lg font-medium text-[#3c3c3c] mb-6">{post.excerpt}</p>

          <div className="space-y-6">
            <p>{post.content.slice(0, 300)}</p>

            <div className="flex justify-center gap-6 my-10">
              <div className="polaroid rotate-1">
                <Image
                  src={post.images[0] || "/placeholder.svg"}
                  alt="Blog image 1"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <p className="text-center text-sm mt-2 text-[#6b6b6b]">{post.imageCaptions[0]}</p>
              </div>
            </div>

            <p>{post.content.slice(300, 600)}</p>

            <div className="flex justify-center gap-6 my-10">
              <div className="polaroid-reverse">
                <Image
                  src={post.images[1] || "/placeholder.svg"}
                  alt="Blog image 2"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <p className="text-center text-sm mt-2 text-[#6b6b6b]">{post.imageCaptions[1]}</p>
              </div>
            </div>

            <p>{post.content.slice(600)}</p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-[#e5d9d0]">
          <h3 className="font-serif text-2xl text-center mb-8">You Might Also Enjoy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter((relatedPost: BlogPost) => relatedPost.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost: BlogPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-white p-3 shadow-sm">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={400}
                      height={300}
                      className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-3 text-center">
                      <h4 className="font-serif text-lg text-[#3c3c3c] group-hover:text-[#c9a992] transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-[#6b6b6b] text-sm">{formatDate(relatedPost.date)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </main>
  )
}
