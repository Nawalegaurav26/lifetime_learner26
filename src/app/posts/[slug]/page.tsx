import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
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

  const { title, excerpt: description, category, date } = post;
  const imagePath = post.image || "/gauravnawale.png";
  const imageUrl = `https://www.gauravnawale.in${imagePath}`;

  const isGsaPost = slug === "gsa_june_highlight";
  const canonicalUrl = `https://www.gauravnawale.in/posts/${slug}`;

  const customKeywords = isGsaPost
    ? [
        "Google Student Ambassador",
        "GSA 2026",
        "Team Gemini",
        "Google AI",
        "Gemini",
        "Nano Banana",
        "Lyria",
        "Veo",
        "Student Leadership",
        "Community Building",
        "Indira College of Engineering and Management",
        "ICEM Pune",
        "Gaurav Raju Nawale",
        "Savitribai Phule Pune University",
        "SPPU",
        "AI Student Community"
      ]
    : [title, category, "Gaurav Raju Nawale", "Techfest IIT Bombay", "SaaS Architecture", "Automation"];

  const geoMetadata: Record<string, string> = isGsaPost
    ? {
        "geo.region": "IN-MH",
        "geo.placename": "Pune",
        "geo.position": "18.5204;73.8567",
        "ICBM": "18.5204, 73.8567",
      }
    : {};

  return {
    title: `${title} | Gaurav Raju Nawale`,
    description: description,
    keywords: customKeywords,
    authors: [{ name: "Gaurav Raju Nawale", url: "https://www.gauravnawale.in" }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Gaurav Raju Nawale`,
      description: description,
      url: canonicalUrl,
      siteName: "Gaurav Raju Nawale Portfolio",
      type: "article",
      publishedTime: date,
      authors: ["Gaurav Raju Nawale"],
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
    other: geoMetadata,
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
              href="/#posts"
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
              {post.content}
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.gauravnawale.in/posts/${post.slug}`,
            },
            image: [
              `https://www.gauravnawale.in${post.image || "/gauravnawale.png"}`,
            ],
            datePublished: post.date,
            author: [
              {
                "@type": "Person",
                name: "Gaurav Raju Nawale",
                url: "https://www.gauravnawale.in",
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "Gaurav Raju Nawale",
              logo: {
                "@type": "ImageObject",
                url: "https://www.gauravnawale.in/gauravnawale.png",
              },
            },
            description: post.excerpt,
          }),
        }}
      />
    </main>
  );
}
