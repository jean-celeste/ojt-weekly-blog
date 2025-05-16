import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  // Helper function to get a sortable Date object from the date string
  const getSortableDate = (dateStr: string): Date => {
    // Example dateStr: "May. 5-9, 2025" or "Feb. 24-28, 2025"
    const parts = dateStr.split(', '); // e.g., ["May. 5-9", "2025"]
    if (parts.length < 2) return new Date(0); // Invalid format

    const year = parts[1];
    // Handles "May. 5-9" -> "May. 5" or "Feb. 24" (from "Feb. 24-28")
    const monthAndStartDayPart = parts[0].split('-')[0].trim(); 
    
    // Extracts "May" from "May." and "5" from "May. 5"
    // Assumes format like "Mon. Day" e.g. "May. 5"
    const monthMatch = monthAndStartDayPart.match(/^([A-Za-z]+)\.?/); // Matches month abbreviation at the start
    const dayMatch = monthAndStartDayPart.match(/(\d+)$/); // Matches day at the end of the part

    const month = monthMatch ? monthMatch[1] : '';
    const day = dayMatch ? dayMatch[1] : '';
    
    if (month && day && year) {
      const parsedDate = new Date(`${month} ${day}, ${year}`);
      return isNaN(parsedDate.getTime()) ? new Date(0) : parsedDate;
    }
    // Fallback for unparseable dates
    return new Date(0); 
  };

  // Sort blog posts by the start date of their range in descending order (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return getSortableDate(b.date).getTime() - getSortableDate(a.date).getTime();
  });

  // Featured posts: first 3 from the original list
  const featuredPosts = blogPosts.slice(0, 3);

  // Recent entries: 3 latest posts based on the (start) date
  const recentBlogEntries = sortedPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-[#3c3c3c]">My Journey as a DOST Intern</h1>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            A blog/scrapbook of memories, adventures, and reflections captured week by week
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
            {featuredPosts.map((post) => (
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
            {recentBlogEntries.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
