import { ReactNode } from "react";
import Image from "next/image";

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
  content?: ReactNode;
}

export const posts: Post[] = [
  {
    title: "Securing Rank 35 at Techfest, IIT Bombay — Ambassador Update",
    excerpt: "Thrilled to achieve Rank 35 among College Ambassadors for Techfest, IIT Bombay, reaching 1200 points and 57 credits in Asia's largest science and technology festival.",
    date: "JUN 26, 2026",
    readTime: "2 MIN READ",
    category: "COMMUNITY",
    slug: "techfest-iit-bombay-rank-35",
    image: "/post/techfest/techfest_rank_35.png",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/post/techfest/techfest_rank_35.png" 
            alt="Techfest IIT Bombay College Ambassador Rank 35"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          Achieving Rank 35 in the College Ambassador Program for Techfest, IIT Bombay!
        </p>

        <p className="text-muted leading-relaxed mb-6">
          I am excited to share a major milestone in my journey as a College Ambassador for <strong>Techfest, IIT Bombay</strong>—Asia&apos;s largest science and technology festival. Through continuous engagement, community building, and driving tech-focused initiatives, I have secured <strong>CA Rank 35</strong> across the ambassador network.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          My dashboard currently stands at:
        </p>

        <div className="my-10 p-6 bg-surface/30 border border-theme rounded-xl">
          <h4 className="font-mono text-xs text-secondary uppercase tracking-[0.2em] mb-4">◈ Dashboard Metrics</h4>
          <ul className="space-y-3 font-mono text-sm text-muted">
            <li className="flex items-start gap-2">
              <strong className="text-foreground">CA Rank:</strong> <span>35</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-foreground">Total Points:</strong> <span>1200</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-foreground">Credits Earned:</strong> <span>57</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-foreground">CA ID:</strong> <span>CA-052915150550</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-foreground">Next Milestone:</strong> <span>75 points remaining to unlock the Diamond league!</span>
            </li>
          </ul>
        </div>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Representing Techfest on campus is not just about points—it is about bridging the gap between student developers and world-class technological platforms.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          As a representative of <strong>Indira College of Engineering and Management (ICEM), Pune</strong>, my objective has been to encourage students to participate in national hackathons, technical workshops, and science exhibitions. Securing a spot in the top 35 rankings is a testament to the enthusiasm and support of our student community.
        </p>

        <p className="text-muted leading-relaxed mb-8">
          The journey doesn&apos;t stop here. With the Diamond league milestone within reach, I look forward to introducing more technical events, guest lectures, and hands-on developer workshops on campus!
        </p>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>College Ambassador, Techfest IIT Bombay</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "June Highlights — Google Student Ambassador 2026",
    excerpt: "This month has been an incredible journey of learning, creating, leading, and building communities around AI as a Google Student Ambassador representing ICEM Pune.",
    date: "JUN 25, 2026",
    readTime: "3 MIN READ",
    category: "COMMUNITY",
    slug: "gsa_june_highlight",
    image: "/post/june_highlights/image2.jpg",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/post/june_highlights/image2.jpg" 
            alt="June Highlights — Google Student Ambassador 2026 Overview"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          Proudly representing Indira College of Engineering and Management, Pune as a Google Student Ambassador and working towards building a stronger AI-driven student community on campus.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          June 2026 has been an incredible journey of learning, creating, leading, and building communities around artificial intelligence. As a Google Student Ambassador, my goal has been to bridge the gap between complex AI technologies and student developers, making tools like Gemini accessible and exciting for everyone on campus.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Being a Google Student Ambassador is more than representing a program—it&apos;s about creating opportunities, empowering students, and building communities that learn and grow together.&quot;
        </blockquote>

        {/* Section 1: Welcome Kit */}
        <h3 className="text-2xl font-bold text-foreground mb-4 font-mono flex items-center gap-2">
          <span>📦</span> Official Welcome Onboard
        </h3>
        <p className="text-muted leading-relaxed mb-6">
          To kick off this journey, I received the official Google Student Ambassador Welcome Kit! Unboxing the official GSA t-shirt, cap, stickers, and onboarding letter was a moment of pride and excitement, cementing my commitment to leading Team Gemini on campus.
        </p>
        
        <div className="my-8 w-full max-w-xl mx-auto rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/post/june_highlights/image3.jpg" 
            alt="Google Student Ambassador 2026 Welcome Kit"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>

        {/* Section 2: Creative Challenges & Campus Activities */}
        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4 font-mono flex items-center gap-2">
          <span>🎨</span> Creative Challenges &amp; Campus Initiatives
        </h3>
        <p className="text-muted leading-relaxed mb-6">
          Community growth comes from active participation. This month, I had the opportunity to dive deep into creative AI tools and introduce them to my peers through engaging initiatives:
        </p>

        <ul className="space-y-4 mb-8 pl-6 list-disc text-muted">
          <li>
            <strong>Creative Joy Challenge:</strong> Explored the creative boundaries of Google Gemini to design innovative, AI-driven solutions and storytelling models.
          </li>
          <li>
            <strong>Product Trials — Pitch Yourself as a Product:</strong> Organized campus workshops to help students pitch their skillsets with the structure of a product roadmap, aligning human talent with modern technological design.
          </li>
          <li>
            <strong>AI-Powered Community Activities:</strong> Ran hands-on sessions introducing students to Google Gemini, Nano Banana, Veo, and Google Docs integrations.
          </li>
        </ul>

        {/* Section 3: Campus Anthem Battle */}
        <div className="my-12 p-6 md:p-8 bg-surface/30 border border-theme rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-mono flex items-center gap-2">
            <span>🎤</span> Campus Anthem Battle: Music Night with Lyria
          </h3>
          <p className="text-muted leading-relaxed mb-6">
            One of the most exciting highlights was organizing the <strong>Campus Anthem Battle</strong> under the theme <em>&quot;Make Your Album: Build It. Band It. Become a Legend.&quot;</em> This event challenged student teams to turn their unique campus stories, humors, and struggles into soundtracks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-muted text-sm space-y-3 font-mono">
              <p className="text-foreground font-semibold">How It Works:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Form a band of 1-3 students.</li>
                <li>Open Nano Banana to generate a creative band poster.</li>
                <li>Open Google Lyria and write a short brief to generate a custom anthem.</li>
                <li>Pitch the band and play the track in 60 seconds.</li>
                <li>Audience votes: <em>&quot;This Slaps&quot;</em> vs. <em>&quot;This Flops&quot;</em>!</li>
              </ol>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mt-4">
                <span className="text-secondary font-bold">💡 AI Stack:</span> Gemini, Nano Banana, and Lyria.
              </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden border border-theme">
              <Image 
                src="/post/june_highlights/image4.jpg" 
                alt="Campus Anthem Battle Event Flyer"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Section 4: AI Explorations & Community Connections */}
        <h3 className="text-2xl font-bold text-foreground mt-12 mb-4 font-mono flex items-center gap-2">
          <span>🌍</span> Community Connections &amp; Workshops
        </h3>
        <p className="text-muted leading-relaxed mb-6">
          Leading others requires continuous self-improvement. Throughout June, I attended several leadership, content creation, and community-building workshops to refine my skills. Moreover, connecting with fellow Google Student Ambassadors across Maharashtra and India created a collaborative learning environment where we shared event strategies and student success stories.
        </p>

        {/* Section 5: Official GSA Credentials */}
        <div className="my-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-4 font-mono">🆔 Google Student Ambassador ID Card</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-muted leading-relaxed mb-4">
                Official registration card for the program, designating placement within <strong>#TeamGemini</strong> as a student leader at ICEM Pune.
              </p>
              <ul className="space-y-2 font-mono text-sm text-muted">
                <li><strong className="text-foreground">Name:</strong> Gaurav Raju Nawale</li>
                <li><strong className="text-foreground">GID:</strong> 7979</li>
                <li><strong className="text-foreground">Region:</strong> India (Maharashtra)</li>
                <li><strong className="text-foreground">Core pillars:</strong> Learn, Connect, Create, Impact</li>
              </ul>
            </div>
            <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden border border-theme">
              <Image 
                src="/post/june_highlights/image1.jpg" 
                alt="Gaurav Nawale GSA Card GID: 7979"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        <p className="text-muted leading-relaxed mb-8">
          The journey is just beginning. With more workshops, events, and AI hackathons planned for the upcoming semesters, I am excited to collaborate with the student body, push technological boundaries, and make ICEM Pune a hub for next-generation AI innovation! ✨
        </p>

        {/* LinkedIn Reference */}
        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/posts/nawalegaurav26_junehighlights-googlestudentambassador-activity-7475578345540460546-uYcx" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>Google Student Ambassador 2026</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Google Student Ambassadors Welcome Kit 2026",
    excerpt: "Excited to receive the Google Student Ambassadors (GSA) Welcome Kit for 2026! A proud moment to be part of the Team Gemini.",
    date: "JUN 20, 2026",
    readTime: "2 MIN READ",
    category: "COMMUNITY",
    slug: "google-student-ambassador-welcome-kit-2026",
    image: "/post/gsa_welcome_kit.jpg",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/post/gsa_welcome_kit.jpg" 
            alt="Google Student Ambassadors Welcome Kit 2026"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          Thrilled to receive the official Google Student Ambassadors Welcome Kit!
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Being part of the Google Student Ambassadors program for 2026 and representing Team Gemini is an incredible opportunity. It&apos;s a proud moment to contribute to this vibrant community, learn about cutting-edge AI technologies, and share them with the student developer ecosystem.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Community building and continuous learning are at the heart of technological advancement.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-8">
          Looking forward to the amazing journey ahead with the GSA program, collaborating with talented peers, and driving innovation!
        </p>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/posts/nawalegaurav26_teamgemini-googlestudentambassador-gsa2026-share-7473988400589750272-dqxr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>Google Student Ambassador 2026</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "College Ambassador — Techfest, IIT Bombay",
    excerpt: "Delighted to officially continue my journey with Techfest, IIT Bombay, as a College Ambassador for the upcoming edition of Asia's largest science and technology festival.",
    date: "JUN 15, 2026",
    readTime: "3 MIN READ",
    category: "ENGINEERING",
    slug: "techfest-iit-bombay-ambassador",
    image: "/post/techfest/techfest_ambassador_banner.jpg",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/post/techfest/techfest_ambassador_banner.jpg" 
            alt="Techfest IIT Bombay College Ambassador"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          Officially Continue My Journey with Techfest, IIT Bombay!
        </p>

        <p className="text-muted leading-relaxed mb-6">
          I am delighted to share that I have officially received my College Ambassador Offer Letter from Techfest, IIT Bombay for the upcoming edition of the festival.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Being associated with Techfest has been an incredible learning experience. The journey has provided opportunities to interact with students from across the country, develop leadership and communication skills, participate in impactful initiatives, and contribute to one of the most prestigious student-driven technology festivals in the world.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Receiving this offer letter is not just a recognition of past efforts but also a motivation to continue promoting innovation, technology, entrepreneurship, and student engagement within my campus and beyond.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          I would like to express my sincere gratitude to the entire Techfest team for their trust and support. I am excited to continue this journey and make a meaningful impact as a representative of this incredible platform.
        </p>

        {/* Team Mention Section */}
        <div className="my-10 p-6 bg-surface/30 border border-theme rounded-xl">
          <h4 className="font-mono text-xs text-secondary uppercase tracking-[0.2em] mb-4">◈ Techfest Team Acknowledgments</h4>
          <ul className="space-y-3 font-mono text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="text-primary">▪</span>
              <span><strong>Prince Bhati</strong> – Media &amp; Publicity Manager, Techfest IIT Bombay</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▪</span>
              <span><strong>Prakhar Gupta</strong> – Media &amp; Publicity Manager, Techfest IIT Bombay</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▪</span>
              <span><strong>Siddhi Jain</strong> – Events Manager, Techfest IIT Bombay</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▪</span>
              <span><strong>Avichal Rajpoot</strong> – Event Head, Techfest IIT Bombay</span>
            </li>
          </ul>
          <p className="text-xs text-muted-2 mt-4 italic">
            Their dedication and vision continue to make Techfest a platform where students can learn, lead, innovate, and grow beyond the classroom.
          </p>
        </div>

        {/* Offer Letter & Dashboard Showcase */}
        <div className="my-12">
          <h3 className="text-lg font-bold text-foreground mb-6 font-mono">◈ Official Verification &amp; Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-theme bg-surface/50">
              <Image 
                src="/post/techfest/techfest_offer_letter.png" 
                alt="Techfest IIT Bombay Offer Letter" 
                fill 
                className="object-contain p-2" 
              />
            </div>
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-theme bg-surface/50">
              <Image 
                src="/post/techfest/techfest_dashboard.png" 
                alt="Techfest Ambassador Dashboard" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        <p className="text-muted leading-relaxed mb-6">
          Proud to represent Indira College of Engineering and Management (ICEM), Pune as a College Ambassador for Techfest, IIT Bombay. 🚀
        </p>

        <p className="text-foreground font-bold mb-8">
          Looking forward to another year of learning, leadership, innovation, and growth.
        </p>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7470875695355940864/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>College Ambassador, Techfest IIT Bombay</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Helping Engineering Students Prepare for GATE More Effectively",
    excerpt: "Preparing for GATE is not just about studying hard—it's about studying smart, staying consistent, and following the right roadmap.",
    date: "JUN 03, 2026",
    readTime: "3 MIN READ",
    category: "ENGINEERING",
    slug: "gate-preparation-effectively",
    image: "/post/gfgtask_gate_01.png",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/post/gfgtask_gate_01.png" 
            alt="GATE Preparation"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          As a GeeksforGeeks Campus Mantri, I regularly come across learning resources that can help students grow academically and professionally.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Recently, I explored the GATE preparation courses available on GeeksforGeeks. For engineering students aspiring to pursue higher studies, research opportunities, or careers in Public Sector Undertakings (PSUs), GATE remains one of the most important examinations.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          What I found valuable about these courses is their structured learning approach, comprehensive subject coverage, practice-oriented content, and flexibility that allows students to learn at their own pace.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Preparing for GATE is not just about studying hard—it&apos;s about studying smart, staying consistent, and following the right roadmap.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          Starting early can significantly improve your understanding of core concepts and boost confidence before the examination.
        </p>

        <p className="text-muted leading-relaxed mb-8">
          If you&apos;re planning to appear for GATE in the future, I encourage you to explore the available resources and begin building a strong foundation today.
        </p>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 Explore GATE Courses:</h3>
          <a href="https://www.geeksforgeeks.org/courses/category/gate" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            https://www.geeksforgeeks.org/courses/category/gate
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <p className="text-muted leading-relaxed mb-6 italic">
            As a Campus Mantri, I am always happy to share opportunities, resources, and learning platforms that can help students advance in their academic and professional journeys.
          </p>
          <p className="text-foreground font-bold mb-4">Let&apos;s keep learning, building, and growing together.</p>
          
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>GeeksforGeeks Campus Mantri</span>
            <span>Founder, CertiOwn</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Letter of Appreciation — CertiOwn",
    excerpt: "Honored to receive a formal Letter of Appreciation from Academic Council Chairman Dr. Nilesh Uke for the design and implementation of CertiOwn.",
    date: "NOV 14, 2025",
    readTime: "2 MIN READ",
    category: "SYSTEMS",
    slug: "certiown-appreciation-letter",
    image: "/Recognitions/Letter of Appreciation — CertiOwn Platform.jpg",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/Recognitions/Letter of Appreciation — CertiOwn Platform.jpg" 
            alt="Letter of Appreciation — CertiOwn"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          I am deeply honored to receive a formal Letter of Appreciation from Dr. Nilesh Uke, Member – Academic Council & Chairman, Board of Studies (Computer Engineering), Savitribai Phule Pune University (SPPU), for the successful implementation of CertiOwn.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          CertiOwn is an in-house Certificate Management System built to address the administrative inefficiencies and security concerns associated with manual certificate issuance, verification, and distribution.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;The appreciation recognizes the system&apos;s contribution to streamlining certificate issuance, ensuring efficiency, professionalism, security, and high-quality certificate design aligned with academic standards.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          By digitalizing the process, we have enabled the institution to manage certificates with speed, reliability, and security, creating a seamless experience for coordinators and students alike.
        </p>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/posts/nawalegaurav26_certiown-certiown-lifetimeabrlearner-activity-7411789703307513856-2V-y/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>Founder, CertiOwn</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Letter of Appreciation — SPPU Workshop E-Certificates",
    excerpt: "Grateful to ICEM and Savitribai Phule Pune University (SPPU) for recognizing my contribution in automating certificate generation via CertiOwn for the Women Empowerment workshop.",
    date: "JUL 28, 2025",
    readTime: "2 MIN READ",
    category: "ENGINEERING",
    slug: "sppu-workshop-ecertificates",
    image: "/Recognitions/Letter of Appreciation — SPPU Workshop.jpg",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/Recognitions/Letter of Appreciation — SPPU Workshop.jpg" 
            alt="Letter of Appreciation — SPPU Workshop"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          🌟 Honored to Receive a Letter of Appreciation! 🌟
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Grateful to Indira College of Engineering and Management (ICEM) for recognizing my contribution through <strong>CertiOwn</strong> — my in-house certificate generation and automation platform — in designing and preparing e-certificates for participants of the &quot;Women Empowerment &amp; Sensitization&quot; workshop, organized by ICEM and sponsored by Savitribai Phule Pune University (SPPU).
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Using CertiOwn, I was able to ensure timely, accurate, and professional delivery of participation certificates, making the process seamless and efficient.
        </p>

        <div className="my-10 p-6 bg-surface/30 border border-theme rounded-xl">
          <h4 className="font-mono text-xs text-secondary uppercase tracking-[0.2em] mb-4">◈ Official Appreciation Record</h4>
          <blockquote className="pl-6 border-l-2 border-secondary text-muted leading-relaxed italic my-4 font-mono text-sm">
            &quot;On behalf of the Indira College of Engineering and Management (ICEM), we would like to extend our heartfelt appreciation to Mr. Gaurav Raju Nawale (Second Year B.Tech. Computer Engineering Student) for your dedicated efforts in designing and preparing the e-certificates for the participants of the workshop on &#x27;महिला सबलीकरण व सक्षमीकरण&#x27;, organized by ICEM and sponsored by Savitribai Phule Pune University (SPPU).<br/><br/>
            Your prompt and meticulous work ensured the timely and professional delivery of participation certificates, significantly contributing to the successful execution of the event. The attention to detail and quality you brought to this task reflect your commitment and professionalism, and we are truly grateful for your valuable support.&quot;
          </blockquote>
        </div>

        <p className="text-muted leading-relaxed mb-6">
          A heartfelt thanks to Dr. Manjusha Tomar (ICC Coordinator) and Dr. Nilesh Uke (Principal) for their trust and encouragement. 🙏
        </p>

        <p className="text-muted leading-relaxed mb-8">
          Looking forward to leveraging CertiOwn for more impactful institutional initiatives in the future!
        </p>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/posts/nawalegaurav26_letterofappreciation-certiown-recognition-activity-7362129907407077376-U5DJ" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>Founder, CertiOwn</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Certificate of Appreciation — CertiOwn System",
    excerpt: "A milestone from B.Tech first year: building an in-house secure certificate generation, verification, and bulk distribution system for ICEM.",
    date: "APR 20, 2025",
    readTime: "3 MIN READ",
    category: "SYSTEMS",
    slug: "certificate-of-appreciation-certiown-system",
    image: "/Recognitions/Certificate of Appreciation — CertiOwn System.jpg",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/Recognitions/Certificate of Appreciation — CertiOwn System.jpg" 
            alt="Certificate of Appreciation — CertiOwn System"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          Reflecting on a key milestone from my B.Tech first year: I designed and built CertiOwn — an in-house platform to streamline secure certificate generation, verification, and bulk distribution at Indira College of Engineering and Management (ICEM).
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Developed under the mentorship of Dr. Poorna Shankar (HOD, Basic Engineering Science), CertiOwn resolved a major bottleneck in how college events managed participation and merit certificates. Rather than manual editing and insecure mailing, the platform provides automated, secure mailing, role-based administration, and public verification.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;True learning happens when you identify a real inefficiency in your immediate environment and build a scalable solution to solve it.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          Receiving a Certificate of Appreciation for this project was a huge motivation, marking the start of ICEM&apos;s administrative digital transformation and the beginning of CertiOwn as a scalable SaaS product.
        </p>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/posts/nawalegaurav26_certificateofappreciation-webdevelopment-activity-7362128837503078401-6C4d" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>Founder, CertiOwn</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Best Library User Award 2025",
    excerpt: "Honored to be recognized as the Best Student of Library by the Library Department of ICEM, emphasizing the value of consistent learning and seeking knowledge.",
    date: "MAY 10, 2025",
    readTime: "2 MIN READ",
    category: "ENGINEERING",
    slug: "best-library-user-award-2025",
    image: "/Recognitions/Best Library User Award 2025.png",
    content: (
      <>
        <div className="my-12 w-full rounded-xl overflow-hidden border border-theme">
          <Image 
            src="/Recognitions/Best Library User Award 2025.png" 
            alt="Best Library User Award 2025"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-contain" 
          />
        </div>
        
        <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
          I am incredibly proud to have been awarded the Best Student of Library Award 2025 by the Library Department of ICEM and Principal Dr. Nilesh Uke.
        </p>

        <p className="text-muted leading-relaxed mb-6">
          For me, a library is more than a room full of books—it is an infinite portal of knowledge, engineering theories, and inspiration. Spending countless hours exploring literature, programming manuals, and systems design guides helped me build the foundation of a lifetime learner.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Consistent learning, dedication, and the habit of seeking knowledge always pay off.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          This recognition is a powerful reminder to stay curious, keep exploring, and maintain a growth mindset in every engineering endeavor.
        </p>

        {/* Ceremony Gallery */}
        <div className="my-12">
          <h3 className="text-lg font-bold text-foreground mb-4 font-mono">◈ Ceremony Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-theme">
              <Image 
                src="/Recognitions/Best Library User Award 2025 image2.jpg" 
                alt="Award Ceremony 1" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-theme">
              <Image 
                src="/Recognitions/Best Library User Award 2025 image3.jpg" 
                alt="Award Ceremony 2" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-theme">
              <Image 
                src="/Recognitions/Best Library User Award 2025 image4.jpg" 
                alt="Award Ceremony 3" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>

        <div className="mb-12 p-6 bg-surface/50 border border-theme rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3 font-mono">🔗 LinkedIn Post Reference:</h3>
          <a href="https://www.linkedin.com/posts/nawalegaurav26_bestuser-beststudent-libraryaward-activity-7375802475032883200-0H5E" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline break-all">
            View LinkedIn Post &amp; Community Discussion
          </a>
        </div>

        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col gap-1 font-mono text-sm text-muted-2">
            <span className="text-foreground font-bold">— Gaurav Raju Nawale</span>
            <span>Founder, CertiOwn</span>
            <span>Student Developer &amp; Entrepreneur</span>
            <a href="https://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  }
];
