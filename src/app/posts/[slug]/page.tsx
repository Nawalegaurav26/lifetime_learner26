import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const description = `Detailed technical insight and architectural vision for ${title.toLowerCase()}.`;

  return {
    title: `${title} | Gaurav Raju Nawale`,
    description: description,
    openGraph: {
      title: `${title} | Gaurav Raju Nawale`,
      description: description,
      url: `https://gauravnawale.com/posts/${slug}`,
      type: "article",
      images: [
        {
          url: "/portfolio_v3.png",
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
      images: ["/portfolio_v3.png"],
    },
  };
}

export default async function PostDetail({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="pt-32 pb-24 min-h-screen bg-slate-950 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-primary transition-colors mb-12 font-mono"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 border border-primary/20 px-4 py-2 rounded-sm font-mono">
                <Tag size={12} /> Technology
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                <Calendar size={12} /> May 2024
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                <Clock size={12} /> 10 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-[1.1] tracking-tight font-mono uppercase mb-16">
              {title}
            </h1>

            <div className="prose prose-invert prose-slate prose-lg max-w-none font-mono">
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                This is a detailed insight into {title.toLowerCase()}. As a Computer Engineering student and founder, 
                bridging the gap between scalable systems and intelligent automation is at the core of my research.
              </p>
              
              <div className="my-16 aspect-video glass rounded-md border border-white/5 flex flex-col items-center justify-center text-slate-600 font-bold italic relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
                 <span className="relative z-10 uppercase tracking-[0.3em] text-[10px]">[ Architectural Schema // Uplink Data ]</span>
                 <div className="absolute top-0 left-0 w-1 h-12 bg-primary/40" />
                 <div className="absolute top-0 left-0 w-12 h-1 bg-primary/40" />
              </div>

              <h2 className="text-2xl font-bold text-slate-100 mt-20 mb-8 uppercase tracking-tight">Architectural Vision</h2>
              <p className="text-slate-400 leading-relaxed mb-10">
                The integration of complex software systems with autonomous intelligence requires a fundamental shift in how we approach scalability. 
                Our research indicates that the future of distributed systems lies in self-stabilizing networks that prioritize consistency and user-centric design.
              </p>

              <blockquote className="my-16 pl-8 border-l-2 border-primary text-2xl font-bold text-slate-200 italic bg-primary/5 py-8 pr-8 rounded-r-md">
                &quot;Intelligence is not just about complexity, but about the seamless integration of systems that solve real-world problems.&quot;
              </blockquote>

              <p className="text-slate-400 leading-relaxed">
                By leveraging modern architectural patterns and robust automation frameworks, we can eliminate manual bottlenecks and enable systems to operate at enterprise scale without compromising security or performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
