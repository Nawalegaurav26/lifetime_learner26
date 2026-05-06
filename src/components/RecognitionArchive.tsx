"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, Shield, Calendar, Building2, Award } from "lucide-react";
import styles from "./RecognitionArchive.module.css";

function accentVars(color: string): React.CSSProperties {
  return {
    "--accent": color,
    "--accent-hud": `${color}60`,
    "--accent-card": `${color}40`,
    "--accent-bg": `${color}22`,
    "--accent-subtle": `${color}08`,
    "--accent-glow": `${color}15`,
    "--accent-btn": `${color}50`,
    "--accent-tag": `${color}25`,
  } as React.CSSProperties;
}

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

function HudCorners() {
  return (
    <>
      <span className={styles.hudTL} />
      <span className={styles.hudTR} />
      <span className={styles.hudBL} />
      <span className={styles.hudBR} />
    </>
  );
}

/* Card preview — shows image at A4 ratio */
function DocumentPreview({ accentColor, archiveId, imageUrl }: {
  accentColor: string; archiveId: string; imageUrl?: string;
}) {
  return (
    <div className={styles.previewBox} style={accentVars(accentColor)}>
      <HudCorners />
      {imageUrl ? (
        <>
          <div className="relative w-full h-full">
            <Image 
              src={imageUrl} 
              alt={archiveId} 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute top-2 left-2 pointer-events-none">
            <span className={styles.previewBadge}>PREVIEW</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.previewGrid} />
          <div className={styles.scanLine} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <FileText size={24} className={styles.accentTextFaded} />
            <p className={`font-mono text-[10px] tracking-[0.2em] ${styles.accentTextFaded}`}>DOCUMENT PREVIEW</p>
            <p className="font-mono text-[9px] tracking-widest text-slate-600">{`${archiveId} // AWAITING UPLOAD`}</p>
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
    <div className="flex flex-col gap-2" style={accentVars(accentColor)}>
      {hasBoth && (
        <div className="flex gap-1">
          {(["IMAGE", "PDF"] as const).map((tab) => {
            const active = (tab === "PDF") === showPdf;
            return (
              <button key={tab} onClick={() => setShowPdf(tab === "PDF")}
                className={`px-3 py-1 font-mono text-[9px] tracking-[0.18em] uppercase font-semibold transition-all ${active ? styles.tabActive : styles.tabInactive}`}>
                {tab}
              </button>
            );
          })}
          {documentUrl && (
            <a href={documentUrl} download className={`ml-auto px-3 py-1 font-mono text-[9px] tracking-[0.18em] uppercase font-semibold transition-all hover:opacity-80 flex items-center gap-1 ${styles.downloadLink}`}>
              ↓ Download
            </a>
          )}
        </div>
      )}
      <div className={styles.previewBox}>
        <HudCorners />
        {showPdf && documentUrl ? (
          <>
            <iframe src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full" title={archiveId} loading="lazy" />
            <div className="absolute top-2 left-2 pointer-events-none">
              <span className={styles.previewBadge}>PDF VIEW</span>
            </div>
          </>
        ) : imageUrl ? (
          <>
            <div className="relative w-full h-full">
              <Image 
                src={imageUrl} 
                alt={archiveId} 
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 800px"
              />
            </div>
            <div className="absolute top-2 left-2 pointer-events-none">
              <span className={styles.previewBadge}>IMAGE PREVIEW</span>
            </div>
          </>
        ) : documentUrl ? (
          <iframe src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full" title={archiveId} loading="lazy" />
        ) : (
          <>
            <div className={styles.previewGrid} />
            <div className={styles.scanLine} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <FileText size={24} className={styles.accentTextFaded} />
              <p className={`font-mono text-[10px] tracking-[0.2em] ${styles.accentTextFaded}`}>AWAITING UPLOAD</p>
            </div>
          </>
        )}
        <div className="absolute bottom-2 right-2 pointer-events-none">
          <span className="font-mono text-[9px] text-slate-600 tracking-widest">[{archiveId}]</span>
        </div>
      </div>
      {!hasBoth && documentUrl && (
        <a href={documentUrl} download className={`self-start px-3 py-1 font-mono text-[9px] tracking-[0.18em] uppercase font-semibold transition-all hover:opacity-80 flex items-center gap-1 ${styles.downloadLink}`}>
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
      className={`group relative flex flex-col overflow-hidden cursor-pointer ${styles.card}`}
      style={accentVars(rec.accentColor)}
      onClick={() => onOpen(rec)}
    >
      <HudCorners />

      {/* Card header */}
      <div className="flex items-start justify-between px-4 pt-4 pb-3 border-b border-white/[0.04]">
        <span className={`font-mono text-[11px] tracking-[0.15em] ${styles.accentText}`}>
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
          <p className={`text-xs font-medium ${styles.accentText}`}>
            {rec.issuedBy}
          </p>
          <p className="font-mono text-[10px] text-slate-500 tracking-wide">{rec.authority}</p>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{rec.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {rec.tags.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-[9px] px-2 py-0.5 tracking-wider ${styles.cardTag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex gap-2">
            <button
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] font-mono tracking-[0.15em] uppercase font-semibold text-white transition-all hover:opacity-90 ${styles.btnPrimary}`}
              onClick={(e) => { e.stopPropagation(); onOpen(rec); }}
            >
              <ExternalLink size={10} />
              View Record
            </button>
            {rec.letterUrl && (
              <button
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] font-mono tracking-[0.15em] uppercase font-semibold transition-all hover:opacity-80 ${styles.btnOutline}`}
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
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-[9px] font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80 ${styles.btnLinkedIn}`}
                  onClick={(e) => { e.stopPropagation(); window.open(rec.linkedInPostUrl, "_blank"); }}
                >
                  <ExternalLink size={9} />
                  LinkedIn Post
                </button>
              )}
              {rec.linkedInAwardUrl && (
                <button
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-[9px] font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80 ${styles.btnLinkedIn}`}
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
      <div className={`px-4 py-2 flex items-center justify-between border-t ${styles.cardFooter}`}>
        <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600 uppercase">
          {`SYSTEM VERIFIED // ${rec.archiveId} // ${rec.date}`}
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
        className={`fixed inset-0 z-[200] flex items-center justify-center p-4 ${styles.modalOverlay}`}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${styles.modalPanel}`}
          style={accentVars(rec.accentColor)}
        >
          <HudCorners />

          {/* Modal header */}
          <div className="flex items-start justify-between p-6 border-b border-white/[0.05]">
            <div>
              <p className={`font-mono text-[11px] tracking-[0.2em] mb-1 ${styles.accentText}`}>
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
            <div className={`p-4 ${styles.authorityBlock}`}>
              <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase mb-2">
                <Building2 size={9} className="inline mr-1" />
                Issuing Authority
              </p>
              <p className={`text-sm font-semibold ${styles.accentText}`}>
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
                  className={`font-mono text-[10px] px-2 py-1 tracking-wider ${styles.modalTag}`}
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
                      <Image 
                        src={src} 
                        alt={`Gallery ${i + 1}`} 
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${styles.galleryOverlay}`}>
                        <ExternalLink size={14} className={styles.galleryLabel} />
                      </div>
                      <span className={`absolute bottom-1 left-1 font-mono text-[8px] tracking-widest ${styles.galleryLabel}`}>IMG-{String(i + 1).padStart(2, "0")}</span>
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
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80 ${styles.btnLinkedIn}`}
                      onClick={() => rec.linkedInPostUrl && window.open(rec.linkedInPostUrl, "_blank")}
                    >
                      <ExternalLink size={11} />
                      LinkedIn Post
                    </button>
                  )}
                  {rec.linkedInAwardUrl && (
                    <button
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono tracking-[0.12em] uppercase font-semibold transition-all hover:opacity-80 ${styles.btnLinkedIn}`}
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
          <div className="px-6 py-3 border-t border-white/[0.04] flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600 uppercase">
              {`SYSTEM VERIFIED // ${rec.archiveId} // ${rec.date}`}
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
                className={`font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 border border-emerald-400/30 text-emerald-400 ${styles.accessBadge}`}
              >
                ACCESS LEVEL: PUBLIC
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 leading-tight ${styles.gradientTitle}`}>
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
                  className={`flex items-center gap-2 px-3 py-1.5 ${styles.statBadge}`}
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
                className={`${styles.terminalCursor} ml-1`} 
                style={{ '--cursor-opacity': cursorVisible ? 1 : 0 } as React.CSSProperties}
              >
                █
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-100">Institutional Recognition</h2>
            <div className={`mt-3 w-full ${styles.sectionDivider}`} />
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
