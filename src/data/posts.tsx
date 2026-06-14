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
    excerpt: "Recognized by ICEM and SPPU coordinators for designing and preparing e-certificates for the Savitribai Phule Pune University-sponsored workshop on Women Empowerment.",
    date: "JUL 15, 2025",
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
          A proud moment: I received a formal Letter of Appreciation from Indira College of Engineering and Management (ICEM) for designing and preparing e-certificates for the Savitribai Phule Pune University (SPPU)-sponsored workshop on Women Empowerment (महिला सबलीकरण व सक्षमीकरण).
        </p>

        <p className="text-muted leading-relaxed mb-6">
          Working under the coordination of Dr. Manjusha Tomar and the guidance of Principal Dr. Nilesh Uke, this project required absolute precision and a quick turnaround. I developed a workflow to handle bulk certificate generation and customization to ensure all attendees received high-quality participation records.
        </p>

        <blockquote className="my-12 pl-8 border-l-2 border-primary text-xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
          &quot;Designing and automating certificates for university-level workshops demands meticulous attention to detail and zero tolerance for data errors.&quot;
        </blockquote>

        <p className="text-muted leading-relaxed mb-6">
          This recognition reinforces the value of building systems that automate manual tasks, allowing academic programs to run smoothly and professionally.
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
