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
          Being part of the Google Student Ambassadors program for 2026 and representing Team Gemini is an incredible opportunity. It's a proud moment to contribute to this vibrant community, learn about cutting-edge AI technologies, and share them with the student developer ecosystem.
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
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
            <a href="http://www.gauravnawale.in" className="text-primary hover:underline mt-2">🌐 www.gauravnawale.in</a>
          </div>
        </div>
      </>
    )
  }
];
