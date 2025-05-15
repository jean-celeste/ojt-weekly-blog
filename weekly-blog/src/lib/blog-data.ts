import type { BlogPost } from "./types"

export const blogPosts: BlogPost[] = [
  {
    slug: "week-1-coastal-adventures",
    title: "Week 1: Stepping Into My DOST Internship",
    date: "2025-03-02",
    category: "Deployment",
    excerpt: "First day as a DOST intern",
    content: 
      `My internship at the Department of Science and Technology (DOST) officially began this week, and the experience so far has been both eye-opening and exciting. From day one, we were welcomed warmly during the flag ceremony, where all interns were formally introduced to the DOST employees. It was a meaningful moment that set the tone for the weeks ahead — professional, structured, but full of learning opportunities.

      Soon after settling in, we got hands-on with real technical work. One of our first tasks was assisting with network-related chores, where we learned and practiced cabling and crimping. It felt good to step away from purely theoretical knowledge and apply what we’ve learned in school to real-world setups — managing cables, preparing lines, and physically working with hardware.

      [IMAGE_1]

      Midweek, we were divided into groups and assigned various projects. I was initially placed in a team with Steve and Don, and our task was to create a functional dashboard using Microsoft Excel. This required planning out how to present data clearly and effectively — a challenge that involved not just technical skills but also coordination and attention to detail.

      Aside from the group task, I was also individually assigned to help with the installation of STARBOOKS. For context, STARBOOKS (Science and Technology Academic and Research-Based Openly Operated KioskS) is one of DOST-STII’s key programs. It provides offline access to thousands of science and technology resources, making it an invaluable tool for students, teachers, and researchers, especially in underserved or remote communities. Being part of the team that deploys such a vital educational tool gave me a deeper appreciation of how tech can directly serve the public good.

      [IMAGE_2]

      However, just as I was beginning to settle into the Excel dashboard project, I was reassigned to a new project that aligned with another pressing need — the digitization of DOST’s Customer Satisfaction Feedback (CSF) system. It’s a completely different challenge that involves process understanding, user experience, and eventually, system development. To begin our research, we interviewed Ma’am Dyn and Ma’am Che, who shared insights about the current CSF workflow and the pain points they hope to address. This will guide our design and implementation as we work on improving their current feedback collection method.

      Overall, this first week has shown me just how dynamic an IT role can be, especially in a government institution like DOST. I’ve learned that being adaptable is just as important as being skilled, and that real growth happens when you step into unfamiliar territory and figure things out as you go. Whether it's working with wires or designing a digital solution, every task contributes to the bigger picture — and I’m excited to keep learning, contributing, and growing in the weeks ahead.`,
    coverImage: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=500&width=700", "/placeholder.svg?height=500&width=700"],
    imageCaptions: [
      "Sunrise view from my coastal retreat - perfect for water signs",
      "City lights of Barcelona - ideal for fire signs seeking energy",
    ],
  },
  {
    slug: "week-2-blogging-journey",
    title: "Week 2: Turning Ideas into Action",
    date: "2025-03-09",
    category: "Tech",
    excerpt: "Week 2 turned blueprints into buttons and plans into progress.",
    content: 
    `Week 2 was a busy but productive one for the CSF and ARTA projects. We finally wrapped up the PRD (Product Requirements Document), which basically means we’ve nailed down what the system should do and how it should work. Having this finalized gives us a clear path moving forward and helps keep everyone on the same page.

    We also took time to finalize the UI/UX design. After a few rounds of feedback and tweaks, the design is looking a lot cleaner and more user-friendly—especially for both kiosk and mobile use. It’s exciting to see the system take shape visually.

    [IMAGE_1]

    Outside of development, we handled some tech support stuff too. That included troubleshooting PCs and installing the STARBOOKS system, which helps expand access to science and tech resources in the field. It’s great to know the work we do behind the scenes is supporting broader digital services.

    We also had a couple of important meetings this week. One was a unit meeting and progress update with Ma’am Sheen to check on where we’re at and what’s next. We also met with end users of the CSF system to get their feedback and make sure the system is actually helpful and easy to use for them.

    [IMAGE_2]
    
    Lastly, we kicked off frontend development for the ARTA system. We’re using React with Vite and TailwindCSS, which makes things faster and keeps the design consistent. We’ve already started building out the forms and making sure everything works well on different screens.

    Overall, Week 2 felt like a big step forward. There’s still a lot to do, but with the plans in place and the frontend underway, we’re definitely gaining momentum. Looking forward to what Week 3 brings!`,
    coverImage: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=500&width=700", "/placeholder.svg?height=500&width=700"],
    imageCaptions: [
      "My workspace while writing my first blog posts",
      "Planning content calendar for the upcoming month",
    ],
  },
  {
    slug: "week-3-bucket-list",
    title: "Travel Bucket List for 2025",
    date: "2025-01-19",
    category: "Travel",
    excerpt: "The top destinations and experiences I'm planning to check off my bucket list this year.",
    content: `As the new year unfolds, I've been reflecting on the places and experiences that are calling to my soul. Creating a travel bucket list isn't just about ticking off famous landmarks – it's about identifying the experiences that will truly enrich your life and expand your understanding of the world. This week, I'm sharing my personal bucket list for 2025, along with the thoughtful process behind each choice. Topping my list is witnessing the Northern Lights in Iceland, a natural phenomenon that has captivated my imagination since childhood. The ephemeral dance of colors across the Arctic sky represents nature's most spectacular light show, and I plan to experience it from a glass-roofed cabin in the wilderness. Next is immersing myself in the ancient traditions of Kyoto during cherry blossom season, when the city transforms into a pink wonderland and centuries-old customs come alive. I'm also drawn to the untamed wilderness of Patagonia, where I hope to complete the challenging Torres del Paine W Trek, pushing my physical limits while surrounded by some of the most dramatic landscapes on Earth. These destinations aren't random choices – each represents a different facet of what travel means to me: natural wonder, cultural immersion, and personal challenge.`,
    coverImage: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=500&width=700", "/placeholder.svg?height=500&width=700"],
    imageCaptions: ["My vision board for 2025 travel goals", "Map marking all the destinations on my bucket list"],
  },
  {
    slug: "week-4-packing-essentials",
    title: "Minimalist Packing: What I Actually Use On Every Trip",
    date: "2025-01-26",
    category: "Travel Tips",
    excerpt: "The essential items that make it into my suitcase every time, no matter the destination.",
    content: `After years of overpacking and lugging heavy suitcases through airports and train stations, I've finally mastered the art of minimalist packing. This week, I'm sharing the core items that earn their place in my luggage for every single trip, regardless of destination or duration. The foundation of my travel wardrobe is a capsule collection of mix-and-match pieces in neutral colors, allowing for maximum outfit combinations with minimal items. I've found that three tops, two bottoms, one dress, and one light jacket can create enough outfits for a week when chosen thoughtfully. Beyond clothing, I've identified the true essentials that enhance every travel experience: a compact camera that captures better memories than my phone, a lightweight journal for documenting thoughts and experiences in real-time, and a versatile scarf that serves as a blanket, pillow, or style accessory depending on the need. Perhaps surprisingly, I always pack a small collection of favorite teas – having this familiar comfort available regardless of where I am provides a sense of home and routine that helps me stay grounded while exploring new places. The most valuable lesson I've learned is that experiences, not possessions, are the true souvenirs of travel.`,
    coverImage: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=500&width=700", "/placeholder.svg?height=500&width=700"],
    imageCaptions: ["My perfectly packed suitcase before departure", "Essential items laid out before packing"],
  },
  {
    slug: "week-5-solo-travel",
    title: "What Solo Travel Taught Me About Myself",
    date: "2025-02-02",
    category: "Personal Growth",
    excerpt: "Reflections on how traveling alone has changed my perspective and built confidence.",
    content: `My first solo trip three years ago was born of necessity rather than choice – plans fell through, but I decided to go anyway. What began as an intimidating prospect quickly transformed into one of the most empowering experiences of my life. This week, I'm reflecting on the profound lessons that solo travel continues to teach me about myself and my place in the world. The most immediate lesson was self-reliance – when you're alone in an unfamiliar place, every decision, from navigating public transportation to choosing where to eat, falls squarely on your shoulders. This responsibility, while occasionally overwhelming, builds a confidence that extends far beyond travel situations. I've also discovered the joy of complete freedom – the ability to follow my curiosity without compromise, changing plans on a whim or spending hours in a museum that captures my interest. Perhaps most valuably, solo travel has taught me to enjoy my own company and thoughts, a skill that serves as a foundation for contentment in all areas of life. There's a special kind of magic in sitting alone at a café in a foreign city, observing local life unfold around you while being completely present in your own experience.`,
    coverImage: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=500&width=700", "/placeholder.svg?height=500&width=700"],
    imageCaptions: [
      "Self-portrait during my first solo adventure",
      "Journaling at a café in Paris, reflecting on my journey",
    ],
  },
  {
    slug: "week-6-sustainable-travel",
    title: "Small Changes for More Sustainable Travel",
    date: "2025-02-09",
    category: "Sustainability",
    excerpt: "Practical ways I'm reducing my environmental impact while still exploring the world.",
    content: `As awareness of climate change and environmental degradation grows, I've been increasingly conscious of the impact my travel habits have on the planet. This week, I'm sharing the practical changes I've implemented to make my adventures more sustainable without sacrificing the joy of exploration. The most significant shift has been in how I choose destinations and plan itineraries – opting for fewer, longer trips rather than frequent short getaways reduces my carbon footprint from air travel while actually allowing for deeper cultural immersion. I've also embraced slow travel, using trains and buses for regional exploration rather than domestic flights or private cars. These overland journeys, while requiring more time, often become memorable adventures in themselves and reveal landscapes and communities I would have missed from the air. In daily travel habits, I've adopted a zero-waste kit including a reusable water bottle, coffee cup, utensils, and shopping bag – small items that collectively prevent significant plastic waste over the course of a trip. Perhaps most importantly, I've become more intentional about where my travel dollars go, choosing locally-owned accommodations and businesses that demonstrate environmental responsibility and contribute to community wellbeing.`,
    coverImage: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=500&width=700", "/placeholder.svg?height=500&width=700"],
    imageCaptions: [
      "My zero-waste travel essentials packed and ready",
      "Taking the scenic train instead of flying - worth the extra time",
    ],
  },
]
