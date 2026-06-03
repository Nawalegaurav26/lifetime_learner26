import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {};
  }

  const title = post.title;
  const description = post.excerpt;
  const imagePath = post.image || "/gauravnawale.png";
  const imageUrl = `https://gauravnawale.in${imagePath}`;

  return {
    title: `${title} | Gaurav Raju Nawale`,
    description: description,
    openGraph: {
      title: `${title} | Gaurav Raju Nawale`,
      description: description,
      url: `https://gauravnawale.in/posts/${slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Gaurav Raju Nawale`,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function PostDetail({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const { title, date, readTime, category } = post;

  return (
    <main className="pt-32 pb-24 min-h-screen bg-background text-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-[10px] font-black text-muted uppercase tracking-widest hover:text-primary transition-colors mb-12 font-mono"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 border border-primary/20 px-4 py-2 rounded-sm font-mono">
                <Tag size={12} /> {category}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest font-mono">
                <Calendar size={12} /> {date}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest font-mono">
                <Clock size={12} /> {readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight font-mono uppercase mb-16">
              {title}
            </h1>

            <div className="prose prose-invert prose-slate prose-lg max-w-none font-mono">
              {slug === "gate-preparation-effectively" ? (
                <>
                  <div className="my-12 w-full rounded-xl overflow-hidden border border-theme relative aspect-video">
                    <Image 
                      src="/post/gfgtask_gate_01.png" 
                      alt="GATE Preparation"
                      fill
                      className="object-cover" 
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
              ) : post.content ? (
                <>{post.content}</>
              ) : (
                <>
                  <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                    This is a detailed insight into {title.toLowerCase()}. As a Computer Engineering student and founder, 
                    bridging the gap between scalable systems and intelligent automation is at the core of my research.
                  </p>
                  
                  <div className="my-16 aspect-video glass rounded-md border border-theme flex flex-col items-center justify-center text-muted-2 font-bold italic relative overflow-hidden group">
                     <div className="absolute inset-0 subtle-grid opacity-20" />
                     <span className="relative z-10 uppercase tracking-[0.3em] text-[10px]">[ Architectural Schema // Uplink Data ]</span>
                     <div className="absolute top-0 left-0 w-1 h-12 bg-primary/40" />
                     <div className="absolute top-0 left-0 w-12 h-1 bg-primary/40" />
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-20 mb-8 uppercase tracking-tight">Architectural Vision</h2>
                  <p className="text-muted leading-relaxed mb-10">
                    The integration of complex software systems with autonomous intelligence requires a fundamental shift in how we approach scalability. 
                    Our research indicates that the future of distributed systems lies in self-stabilizing networks that prioritize consistency and user-centric design.
                  </p>

                  <blockquote className="my-16 pl-8 border-l-2 border-primary text-2xl font-bold text-foreground italic bg-primary/5 py-8 pr-8 rounded-r-md">
                    &quot;Intelligence is not just about complexity, but about the seamless integration of systems that solve real-world problems.&quot;
                  </blockquote>

                  <p className="text-muted leading-relaxed">
                    By leveraging modern architectural patterns and robust automation frameworks, we can eliminate manual bottlenecks and enable systems to operate at enterprise scale without compromising security or performance.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
