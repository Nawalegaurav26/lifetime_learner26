"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, Shield, Calendar, Building2, Award } from "lucide-react";

interface Recognition {
  id: string;
  archiveId: string;
  title: string;
  issuedBy: string;
  authority: string;
  description: string;
  date: string;
  status: "VERIFIED" | "OFFICIAL" | "ARCHIVED";
  statusColor: string;
  accentColor: string;
  category: string;
  imageUrl?: string;
  documentUrl?: string;
  letterUrl?: string;
  linkedInPostUrl?: string;
  linkedInAwardUrl?: string;
  galleryImages?: string[];
  tags: string[];
}

const recognitions: Recognition[] = [
  {
    id: "rec-001",
    archiveId: "REC-001",
    title: "Letter of Appreciation — CertiOwn",
    issuedBy: "Dr. Nilesh Uke",
    authority: "Member – Academic Council & Chairman, Board of Studies (Computer Engineering), Savitribai Phule Pune University (SPPU)",
    description:
      "Received a formal Letter of Appreciation for the successful design, development, and implementation of CertiOwn – Certificate Management System. The appreciation recognizes the system's contribution to streamlining certificate issuance, ensuring efficiency, professionalism, security, and high-quality certificate design aligned with academic and institutional standards.",
    date: "14 NOV 2025",
    status: "VERIFIED",
    statusColor: "text-emerald-400",
    accentColor: "#10b981",
    category: "INSTITUTIONAL-REC",
    imageUrl: "/Recognitions/Letter of Appreciation — CertiOwn Platform.jpg",
    documentUrl: "/Recognitions/Letter of Appreciation — CertiOwn Platform.pdf",
    letterUrl: undefined,
    linkedInPostUrl: "https://www.linkedin.com/posts/nawalegaurav26_certiown-certiown-lifetimeabrlearner-activity-7411789703307513856-2V-y/",
    linkedInAwardUrl: "https://www.linkedin.com/in/nawalegaurav26/overlay/Honor/1877047431/treasury?profileId=ACoAAFKay4MBXSZX3hwJjIAPHTCop7RAuNnmuls",
    tags: ["CertiOwn", "SPPU", "Certificate Systems", "14 Nov 2025"],
  },
  {
    id: "rec-002",
    archiveId: "REC-002",
    title: "Letter of Appreciation — E-Certificate Generation for SPPU-Sponsored Workshop",
    issuedBy: "Dr. Manjusha Tomar & Dr. Nilesh Uke",
    authority: "ICC Coordinator & Principal, Indira College of Engineering and Management",
    description:
      "Received a formal Letter of Appreciation from Indira College of Engineering and Management for designing and preparing e-certificates for a Savitribai Phule Pune University (SPPU)-sponsored workshop on ‘महिला सबलीकरण व सक्षमीकरण’ (Women Empowerment and Strengthening). The project required meticulous attention to detail and timely execution, ensuring smooth delivery of participation certificates to all attendees.",
    date: "JUL 2025",
    status: "OFFICIAL",
    statusColor: "text-sky-400",
    accentColor: "#38bdf8",
    category: "WORKSHOP-CONTRIB",
    imageUrl: "/Recognitions/Letter of Appreciation — SPPU Workshop.jpg",
    documentUrl: "/Recognitions/Letter of Appreciation — SPPU Workshop.pdf",
    letterUrl: undefined,
    linkedInPostUrl: "https://www.linkedin.com/posts/nawalegaurav26_letterofappreciation-certiown-recognition-activity-7362129907407077376-U5DJ",
    tags: ["SPPU", "ICEM", "E-Certificate", "Women Empowerment", "Jul 2025"],
  },
  {
    id: "rec-003",
    archiveId: "REC-003",
    title: "Certificate of Appreciation — CertiOwn System",
    issuedBy: "Dr. Poorna Shankar",
    authority: "Head of Department, Basic Engineering Science, ICEM",
    description:
      "As a first-year B.Tech Computer Engineering student at ICEM, identified a critical inefficiency in certificate management and built CertiOwn — an in-house platform for secure certificate generation, verification, and bulk distribution. Developed under the guidance of Dr. Poorna Shankar, CertiOwn features role-based access control, automated email delivery, and secure public verification. This initiative significantly reduced administrative workload and advanced ICEM's digital transformation.",
    date: "APR 2025",
    status: "ARCHIVED",
    statusColor: "text-violet-400",
    accentColor: "#8b5cf6",
    category: "INSTITUTIONAL-REC",
    imageUrl: "/Recognitions/Certificate of Appreciation — CertiOwn System.jpg",
    documentUrl: "/Recognitions/Certificate of Appreciation — CertiOwn System.pdf",
    letterUrl: undefined,
    linkedInPostUrl: "https://www.linkedin.com/posts/nawalegaurav26_certificateofappreciation-webdevelopment-activity-7362128837503078401-6C4d",
    linkedInAwardUrl: "https://media.licdn.com/dms/image/v2/D562DAQGFRNQTOcbD6A/profile-treasury-image-shrink_160_160/B56ZiudiFIH0Ak-/0/1755273638696?e=1778702400&v=beta&t=YynlNX--JJdAu3-hpoZW5h7hEOHfqA6FJ4HdKZ8q0X4",
    tags: ["ICEM", "CertiOwn", "Dr. Poorna Shankar", "Apr 2025"],
  },
  {
    id: "rec-004",
    archiveId: "REC-004",
    title: "Best Library User Award 2025",
    issuedBy: "Library Head & Dr. Nilesh Uke",
    authority: "Principal, Indira College of Engineering and Management (ICEM)",
    description:
      "Honored to be recognized as the Best Student of Library by the Library Department of ICEM. This award is not just a certificate — it's a reminder that consistent learning, dedication, and the habit of seeking knowledge always pay off.",
    date: "MAY 2025",
    status: "VERIFIED",
    statusColor: "text-amber-400",
    accentColor: "#f59e0b",
    category: "ACADEMIC-AWARD",
    imageUrl: "/Recognitions/Best Library User Award 2025.png",
    documentUrl: "/Recognitions/Best Library User Award 2025.pdf",
    letterUrl: undefined,
    linkedInPostUrl: "https://www.linkedin.com/posts/nawalegaurav26_bestuser-beststudent-libraryaward-activity-7375802475032883200-0H5E",
    linkedInAwardUrl: "https://www.linkedin.com/in/nawalegaurav26/overlay/Honor/779076056/treasury/?profileId=ACoAAFKay4MBXSZX3hwJjIAPHTCop7RAuNnmuls",
    galleryImages: [
      "/Recognitions/Best Library User Award 2025 image2.jpg",
      "/Recognitions/Best Library User Award 2025 image3.jpg",
      "/Recognitions/Best Library User Award 2025 image4.jpg",
    ],
    tags: ["ICEM", "Library Award", "Academic Excellence", "May 2025"],
  },
];

const statusConfig = {
  VERIFIED: { dot: "bg-emerald-400", glow: "shadow-[0_0_8px_#10b981]", border: "border-emerald-400/30" },
  OFFICIAL: { dot: "bg-sky-400", glow: "shadow-[0_0_8px_#38bdf8]", border: "border-sky-400/30" },
  ARCHIVED: { dot: "bg-violet-400", glow: "shadow-[0_0_8px_#8b5cf6]", border: "border-violet-400/30" },
};

function HudCorners({ color = "rgba(59,130,246,0.6)" }: { color?: string }) {
  return (
    <>
      {/* Top-left */}
      <span className="absolute top-0 left-0 w-4 h-4 pointer-events-none" style={{ borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      {/* Top-right */}
      <span className="absolute top-0 right-0 w-4 h-4 pointer-events-none" style={{ borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
      {/* Bottom-left */}
      <span className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none" style={{ borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      {/* Bottom-right */}
      <span className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none" style={{ borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
    </>
  );
}

/* Card preview — shows image at A4 ratio */
function DocumentPreview({ accentColor, archiveId, imageUrl }: {
  accentColor: string; archiveId: string; imageUrl?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden bg-[#010f1f] border border-white/5" style={{ aspectRatio: "210/297" }}>
      <HudCorners color={`${accentColor}60`} />
      {imageUrl ? (
        <>
          <img src={imageUrl} alt={archiveId} className="w-full h-full object-contain" />
          <div className="absolute top-2 left-2 pointer-events-none">
            <span className="font-mono text-[9px] tracking-[0.2em] px-1.5 py-0.5" style={{ background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}40` }}>PREVIEW</span>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(${accentColor}22 1px, transparent 1px), linear-gradient(90deg, ${accentColor}22 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div className="absolute left-0 right-0 h-[1px] opacity-60 animate-[archiveScan_3s_linear_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <FileText size={24} style={{ color: accentColor }} className="opacity-40" />
            <p className="font-mono text-[10px] tracking-[0.2em] opacity-40" style={{ color: accentColor }}>DOCUMENT PREVIEW</p>
            <p className="font-mono text-[9px] tracking-widest text-slate-600">{archiveId} // AWAITING UPLOAD</p>
          </div>
        </>
      )}
      <div className="absolute bottom-2 right-2 pointer-events-none">
        <span className="font-mono text-[9px] text-slate-600 tracking-widest">[{archiveId}]</span>
      </div>
    </div>
  );
}

/* Modal preview — A4 ratio, toggles between image and PDF */
function ModalDocumentPreview({ accentColor, archiveId, imageUrl, documentUrl }: {
  accentColor: string; archiveId: string; imageUrl?: string; documentUrl?: string;
}) {
  const [showPdf, setShowPdf] = useState(false);
  const hasBoth = !!(imageUrl && documentUrl);

  return (
    <div className="flex flex-col gap-2">
      {hasBoth && (
        <div className="flex gap-1">
          {(["IMAGE", "PDF"] as const).map((tab) => {
            const active = (tab === "PDF") === showPdf;
            return (
              <button key={tab} onClick={() => setShowPdf(tab === "PDF")}
                className="px-3 py-1 font-mono text-[9px] tracking-[0.18em] uppercase font-semibold transition-all"
                style={active ? { background: accentColor, color: "#fff" } : { border: `1px solid ${accentColor}50`, color: accentColor }}>
                {tab}
              </button>
            );
          })}
          {documentUrl && (
            <a href={documentUrl} download className="ml-auto px-3 py-1 font-mono text-[9px] tracking-[0.18em] uppercase font-semibold transition-all hover:opacity-80 flex items-center gap-1"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#94a3b8" }}>
              ↓ Download
            </a>
          )}
        </div>
      )}
      <div className="relative w-full overflow-hidden bg-[#010f1f] border border-white/5" style={{ aspectRatio: "210/297" }}>
        <HudCorners color={`${accentColor}60`} />
        {showPdf && documentUrl ? (
          <>
            <iframe src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full" title={archiveId} loading="lazy" />
            <div className="absolute top-2 left-2 pointer-events-none">
              <span className="font-mono text-[9px] tracking-[0.2em] px-1.5 py-0.5" style={{ background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}40` }}>PDF VIEW</span>
            </div>
          </>
        ) : imageUrl ? (
          <>
            <img src={imageUrl} alt={archiveId} className="w-full h-full object-contain" />
            <div className="absolute top-2 left-2 pointer-events-none">
              <span className="font-mono text-[9px] tracking-[0.2em] px-1.5 py-0.5" style={{ background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}40` }}>IMAGE PREVIEW</span>
            </div>
          </>
        ) : documentUrl ? (
          <iframe src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full" title={archiveId} loading="lazy" />
        ) : (
          <>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(${accentColor}22 1px, transparent 1px), linear-gradient(90deg, ${accentColor}22 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
            <div className="absolute left-0 right-0 h-[1px] opacity-60 animate-[archiveScan_3s_linear_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <FileText size={24} style={{ color: accentColor }} className="opacity-40" />
              <p className="font-mono text-[10px] tracking-[0.2em] opacity-40" style={{ color: accentColor }}>AWAITING UPLOAD</p>
            </div>
          </>
        )}
        <div className="absolute bottom-2 right-2 pointer-events-none">
          <span className="font-mono text-[9px] text-slate-600 tracking-widest">[{archiveId}]</span>
        </div>
      </div>
      {!hasBoth && documentUrl && (
        <a href={documentUrl} download className="self-start px-3 py-1 font-mono text-[9px] tracking-[0.18em] uppercase font-semibold transition-all hover:opacity-80 flex items-center gap-1"
          style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#94a3b8" }}>
          ↓ Download PDF
        </a>
      )}
    </div>
  );
}



function ArchiveCard({
  rec,
  index,
  onOpen,
}: {
  rec: Recognition;
  index: number;
  onOpen: (rec: Recognition) => void;
}) {
  const status = statusConfig[rec.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden cursor-pointer"
      style={{
        background: "rgba(18, 33, 49, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${rec.accentColor}40`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${rec.accentColor}10`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
      onClick={() => onOpen(rec)}
    >
      <HudCorners color={`${rec.accentColor}40`} />

      {/* Card header */}
      <div className="flex items-start justify-between px-4 pt-4 pb-3 border-b border-white/[0.04]">
        <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: rec.accentColor }}>
          {rec.archiveId}
        </span>
        <div className={`flex items-center gap-1.5 px-2 py-1 border ${status.border} rounded-none`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${status.glow} animate-pulse`} />
          <span className={`font-mono text-[9px] tracking-[0.2em] ${rec.statusColor} font-semibold`}>
            {rec.status}
          </span>
        </div>
      </div>

      {/* Document preview */}
      <div className="px-4 py-3">
        <DocumentPreview
          accentColor={rec.accentColor}
          archiveId={rec.archiveId}
          imageUrl={rec.imageUrl}
        />
      </div>

      {/* Card body */}
      <div className="px-4 pb-4 flex flex-col gap-3 flex-1">
        <h3 className="text-sm font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors">
          {rec.title}
        </h3>

        <div className="flex flex-col gap-1">
          <p className="font-mono text-[9px] tracking-[0.18em] text-slate-500 uppercase">Issued by:</p>
          <p className="text-xs font-medium" style={{ color: rec.accentColor }}>
            {rec.issuedBy}
          </p>
          <p className="font-mono text-[10px] text-slate-500 tracking-wide">{rec.authority}</p>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{rec.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {rec.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] px-2 py-0.5 tracking-wider text-slate-500"
              style={{ border: `1px solid ${rec.accentColor}25`, color: rec.accentColor, opacity: 0.7 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex gap-2">
            <button
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] font-mono tracking-[0.15em] uppercase font-semibold text-white transition-all hover:opacity-90"
              style={{ background: rec.accentColor }}
              onClick={(e) => { e.stopPropagation(); onOpen(rec); }}
            >
              <ExternalLink size={10} />
              View Record
            </button>
            {rec.letterUrl && (
              <button
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] font-mono tracking-[0.15em] uppercase font-semibold transition-all hover:opacity-80"
                style={{ border: `1px solid ${rec.accentColor}50`, color: rec.accentColor, background: "transparent" }}
                onClick={(e) => { e.stopPropagation(); window.open(rec.letterUrl, "_blank"); }}
              >
                <FileText size={10} />
                View Letter
              </button>
            )}
          </div>
          {(rec.linkedInPostUrl || rec.linkedInAwardUrl) && (
            <div className="flex gap-2">
              {rec.linkedInPostUrl && (
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-[9px] font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80"
                  style={{ border: `1px solid #0a66c233`, color: "#0a66c2", background: "#0a66c210" }}
                  onClick={(e) => { e.stopPropagation(); window.open(rec.linkedInPostUrl, "_blank"); }}
                >
                  <ExternalLink size={9} />
                  LinkedIn Post
                </button>
              )}
              {rec.linkedInAwardUrl && (
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-[9px] font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80"
                  style={{ border: `1px solid #0a66c233`, color: "#0a66c2", background: "#0a66c210" }}
                  onClick={(e) => { e.stopPropagation(); window.open(rec.linkedInAwardUrl, "_blank"); }}
                >
                  <Award size={9} />
                  LinkedIn Award
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="px-4 py-2 flex items-center justify-between border-t"
        style={{ borderColor: "rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.2)" }}
      >
        <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600 uppercase">
          SYSTEM VERIFIED // {rec.archiveId} // {rec.date}
        </span>
        <span className="font-mono text-[8px] text-slate-700 tracking-widest opacity-40">
          ICEM // GRN // PORTFOLIO
        </span>
      </div>
    </motion.div>
  );
}

function DetailModal({ rec, onClose }: { rec: Recognition; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const status = statusConfig[rec.status];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: "rgba(5, 20, 36, 0.92)", backdropFilter: "blur(12px)" }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          style={{
            background: "rgba(12, 24, 38, 0.98)",
            border: `1px solid ${rec.accentColor}40`,
            boxShadow: `0 0 60px ${rec.accentColor}15`,
          }}
        >
          <HudCorners color={rec.accentColor} />

          {/* Modal header */}
          <div className="flex items-start justify-between p-6 border-b border-white/[0.05]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] mb-1" style={{ color: rec.accentColor }}>
                SYS.NAV // ARCHIVE-03 // {rec.archiveId}
              </p>
              <h2 className="text-lg font-bold text-slate-100 leading-tight max-w-md">{rec.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="ml-4 mt-0.5 text-slate-500 hover:text-slate-200 transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal body */}
          <div className="p-6 flex flex-col gap-6">
            {/* Status + date row */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className={`flex items-center gap-2 px-3 py-1.5 border ${status.border}`}>
                <span className={`w-2 h-2 rounded-full ${status.dot} ${status.glow} animate-pulse`} />
                <span className={`font-mono text-[10px] tracking-[0.2em] ${rec.statusColor} font-semibold`}>
                  {rec.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar size={12} />
                <span className="font-mono text-[11px] tracking-wider">{rec.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Award size={12} />
                <span className="font-mono text-[11px] tracking-wider">{rec.category}</span>
              </div>
            </div>

            {/* Document preview - modal */}
            <ModalDocumentPreview
              accentColor={rec.accentColor}
              archiveId={rec.archiveId}
              imageUrl={rec.imageUrl}
              documentUrl={rec.documentUrl}
            />

            {/* Authority */}
            <div
              className="p-4 border-l-2"
              style={{ borderColor: rec.accentColor, background: `${rec.accentColor}08` }}
            >
              <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase mb-2">
                <Building2 size={9} className="inline mr-1" />
                Issuing Authority
              </p>
              <p className="text-sm font-semibold" style={{ color: rec.accentColor }}>
                {rec.issuedBy}
              </p>
              <p className="font-mono text-[11px] text-slate-400 mt-0.5 tracking-wide">{rec.authority}</p>
            </div>

            {/* Description */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase mb-2">
                <Shield size={9} className="inline mr-1" />
                Record Summary
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">{rec.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {rec.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-1 tracking-wider"
                  style={{ border: `1px solid ${rec.accentColor}30`, color: rec.accentColor }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Photo gallery — ceremony images */}
            {rec.galleryImages && rec.galleryImages.length > 0 && (
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase mb-2">
                  ◈ Ceremony Gallery
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {rec.galleryImages.map((src, i) => (
                    <div key={i} className="relative overflow-hidden border border-white/5 aspect-square group cursor-pointer"
                      onClick={() => window.open(src, "_blank")}>
                      <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: `${rec.accentColor}22` }}>
                        <ExternalLink size={14} style={{ color: rec.accentColor }} />
                      </div>
                      <span className="absolute bottom-1 left-1 font-mono text-[8px] tracking-widest" style={{ color: rec.accentColor }}>IMG-{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3">
              {(rec.linkedInPostUrl || rec.linkedInAwardUrl) && (
                <div className="flex gap-3">
                  {rec.linkedInPostUrl && (
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80"
                      style={{ border: "1px solid #0a66c250", color: "#0a66c2", background: "#0a66c210" }}
                      onClick={() => rec.linkedInPostUrl && window.open(rec.linkedInPostUrl, "_blank")}
                    >
                      <ExternalLink size={11} />
                      LinkedIn Post
                    </button>
                  )}
                  {rec.linkedInAwardUrl && (
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80"
                      style={{ border: "1px solid #0a66c250", color: "#0a66c2", background: "#0a66c210" }}
                      onClick={() => rec.linkedInAwardUrl && window.open(rec.linkedInAwardUrl, "_blank")}
                    >
                      <Award size={11} />
                      LinkedIn Award
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Modal footer */}
          <div
            className="px-6 py-3 border-t flex items-center justify-between"
            style={{ borderColor: "rgba(255,255,255,0.04)" }}
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
              SYSTEM VERIFIED // {rec.archiveId} // {rec.date}
            </span>
            <span className="font-mono text-[8px] text-slate-700 tracking-widest opacity-50">
              ICEM // GRN // PORTFOLIO
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function RecognitionArchive() {
  const [activeModal, setActiveModal] = useState<Recognition | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timer = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes archiveScan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes archivePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <section className="min-h-screen section-gap relative overflow-hidden" aria-label="Recognitions">
        {/* Background scanning line */}
        <div className="scanline" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* ── PAGE HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Breadcrumb label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.25em] text-sky-400 uppercase">
                SYS.NAV // ARCHIVE-03
              </span>
              <span className="w-8 h-px bg-sky-400/40" />
              <span
                className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 border border-emerald-400/30 text-emerald-400"
                style={{ boxShadow: "0 0 8px rgba(16,185,129,0.15)" }}
              >
                ACCESS LEVEL: PUBLIC
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Recognitions
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 max-w-2xl text-base leading-relaxed mb-8">
              Verified institutional recognitions, technical appreciations, and documented milestones
              representing real-world engineering contributions and system development work.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { label: "04 ENTRIES", icon: "▣" },
                { label: "100% VERIFIED", icon: "✓" },
                { label: "INSTITUTIONAL GRADE", icon: "◈" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{ border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.05)" }}
                >
                  <span className="text-primary text-xs">{stat.icon}</span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── SECTION HEADER ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-primary/70 uppercase">
                SECTION :: INSTITUTIONAL-REC
              </span>
              <span
                className="font-mono text-primary text-sm"
                style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
              >
                █
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-100">Institutional Recognition</h2>
            <div
              className="mt-3 h-px w-full"
              style={{
                background: "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(6,182,212,0.2), transparent)",
              }}
            />
          </motion.div>

          {/* ── CARDS GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((rec, i) => (
              <ArchiveCard key={rec.id} rec={rec} index={i} onOpen={setActiveModal} />
            ))}
          </div>

          {/* ── ARCHIVE FOOTER ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-6 border-t border-white/[0.04] flex items-center justify-between flex-wrap gap-4"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
              ARCHIVE-03 :: RECOGNITION RECORDS :: GAURAV RAJU NAWALE // GRN-2025
            </p>
            <p className="font-mono text-[10px] tracking-[0.15em] text-slate-700">
              SYS.STATUS: ONLINE // RECORDS: 04 / 04 // INTEGRITY: 100%
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {activeModal && (
        <DetailModal rec={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
