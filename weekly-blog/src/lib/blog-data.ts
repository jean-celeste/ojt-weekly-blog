import fs from "fs";
import path from "path";
import type { BlogPost } from "./types";

function getImagesForWeek(weekFolder: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", weekFolder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp|svg)$/i.test(file))
    .map((file) => `/images/${weekFolder}/${file}`);
}

export const blogPosts: BlogPost[] = [
  {
    slug: "week-1",
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
    coverImage: "/images/week1/1740837742333.jpeg",
    images: getImagesForWeek("week1"),
    imageCaptions: [
      "After duty ride home",
      "",
      "",
      "",
      "",
      "",
      "",
      "Eyy, teamwork haha",
    ],
  },
  {
    slug: "week-2",
    title: "Week 2: Turning Ideas into Action",
    date: "2025-03-09",
    category: "Tech",
    excerpt: "Week 2 turned blueprints into buttons and plans into progress.",
    content: 
    `Week 2 marked an important transition from planning to hands-on development. We focused on finalizing core documents, refining UI/UX elements, and kicking off early coding work—laying a solid foundation for the weeks ahead.

    We started the week by finalizing the Product Requirements Document (PRD) for both the CSF and ARTA systems. This gave us a clear structure and direction as we moved forward with implementation. Alongside documentation, we wrapped up the UI/UX designs and engaged in team discussions to align visuals with functionality.

    We also tackled some essential technical tasks, including PC troubleshooting and STARBOOKS installation, to ensure a smooth development environment and access to learning resources.
    
    [IMAGE_6]
    
    Midweek, we had a Unit Meeting and Progress Report with Ma’am Sheen to sync up on our progress. This was followed by a focused End-User Meeting for the CSF system with Ma’am Dyn and Ma’am Che. During this session, we walked through the prototype, gathered their feedback, and asked important clarifying questions to ensure that our direction meets their needs.
    
    [IMAGE_2]

    On the development side, we began frontend test coding for the ARTA system using React with Vite and TailwindCSS. It was exciting to see early versions of the interface come to life.

    Toward the end of the week, Ma’am Jane and Sir Davie visited our team to check in on the project. Their visit provided encouragement and reinforced the value of the work we’re doing.

    [IMAGE_1]
    
    All in all, Week 2 was a productive blend of finalizing plans, early development, and collaborative feedback—setting a strong pace for the project moving forward.`,
    coverImage: "/images/week2/IMG20250306171242.jpg",
    images: getImagesForWeek("week2"),
    imageCaptions: [
      "Thank you for visiting po!",
      "",
    ],
  },
  {
    slug: "week-3",
    title: "Week 3: Finalizing ARTA’s Blueprint and Boosting Team Safety",
    date: "2025-01-19",
    category: "OJT",
    excerpt: "Week 3 focused on wrapping up ARTA’s ERD, setting up key systems, and keeping the team safe with an earthquake drill.",
    content: 
    `Week 3 was all about diving deep into the ARTA system’s design and pushing the project forward. We started by initializing the Entity-Relationship Diagram (ERD) for ARTA, which laid the groundwork for understanding the data structure and how everything connects. This work continued throughout the week, refining and expanding the ERD until we reached finalization—giving us a solid blueprint for the backend.

    [IMAGE_1]

    Along the way, we had a productive project meeting with Ma’am Ma. Theresa Alcantara (Ma’am Tere for short), Assistant Regional Director for Technical Operations. The meeting helped clarify priorities and ensure everyone is aligned moving forward.

    In addition to design, meetings, and safety preparations, we completed important technical tasks such as PC installation to set up the necessary hardware environment for development and testing.

    [IMAGE_2]

    Aside from project work, we also conducted an earthquake drill to promote safety and preparedness within the team.

    Overall, Week 3 was a focused sprint on ARTA’s architecture and infrastructure. With the ERD finalized, systems set up, and safety practiced, we’re well positioned to start deeper development soon.`,
    coverImage: "/images/week3/IMG20250313150937.jpg",
    images: getImagesForWeek("week3"),
    imageCaptions: ["Meeting w/Ma'am Tere!", "", "#EarthquakeDrill"],
  },
  {
    slug: "week-4",
    title: "Week 4: Frontend Focus, Tech Migration, and Fond Farewells",
    date: "2025-01-26",
    category: "Dev",
    excerpt: "Week 4 brought steady frontend progress, a major tech stack migration to Next.js, and a heartfelt farewell to Sir Vince from the MIS unit.",
    content: 
    `Week 4 was a busy and productive week with a strong focus on frontend development, specifically on the user side of the project. We kicked things off with a meeting with Ma’am Sheen to review our progress and plan the upcoming tasks. After that, we dived into coding, steadily building and refining the user interface to make sure it’s smooth, responsive, and easy to navigate. The frontend work continued throughout the week with consistent momentum.

    An interesting highlight was getting a chance to observe a server upgrade in action. Seeing the process firsthand gave us valuable insights into backend maintenance and how infrastructure upgrades can help keep our systems running smoothly and securely.

    [IMAGE_5]

    One of the biggest shifts this week was our tech stack migration. We started moving from our previous setup using React with Vite and Express to Next.js. This change is expected to improve our development workflow and enhance the app’s performance, giving us more flexibility and better tools for building out the frontend.

    [IMAGE_2]

    On a more personal note, we also held a small farewell gathering for Sir Vince, who will be leaving the MIS unit. It was a heartfelt send-off where we celebrated his contributions and wished him the best in his future endeavors.

    All in all, Week 4 was a blend of solid technical progress and meaningful team moments, setting a positive tone for the coming weeks.`,
    coverImage: "/images/week4/486670963_1709349266671196_3884478776614334995_n.jpg",
    images: getImagesForWeek("week4"),
    imageCaptions: ["My perfectly packed suitcase before departure", "Essential items laid out before packing"],
  },
  {
    slug: "week-5",
    title: "Week 5: Code, Care, and Closing March with Good Vibes",
    date: "2025-01-26",
    category: "End-of-March",
    excerpt: "From frontend builds to free massages, Week 5 balanced dev work with well-deserved Women’s Month treats.",
    content: 
    `As March came to a close, Week 5 brought a productive mix of backend setup, frontend progress, and a few hands-on activities that added some variety to our daily tasks.

    We kicked off the week by revising the ERD and setting up the database structure, ensuring everything was aligned with the system’s updated requirements. On the frontend side, we continued refining the user interface while also initializing and building out the admin side. Watching both views come together made the system feel much more complete.

    This week, we also began installing STARBOOKS. However, the installation was delayed due to time constraints—the process takes around three hours, and with a 3PM start time on the first day and our 6PM end-of-day schedule, we had to postpone and continue it the following day.
    
    [IMAGE_10]
    
    Outside of our technical responsibilities, we also had the chance to work on our intern IDs. We observed how Sir Guff took our ID photos and assisted with cutting and laminating—simple but satisfying tasks that gave us a nice break from our screens.

    And since this week also marked the end of Women’s Month, DOST treated everyone with some well-deserved pampering: free massage, nail care, haircuts, and food. We were lucky enough to experience and enjoy these perks too—a small but meaningful celebration that brought good vibes to the workplace.
    
    [IMAGE_3]

    Overall, Week 5 was a well-rounded mix of development work, hands-on experience, and even a little self-care—closing March with solid progress and renewed energy.`,
    coverImage: "/images/week5/480919906_620972230639136_7809691770265638180_n.jpg",
    images: getImagesForWeek("week5"),
    imageCaptions: ["My perfectly packed suitcase before departure", "Essential items laid out before packing"],
  },
];
