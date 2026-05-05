import ProjectsFull from "@/components/Projects";

export const metadata = {
  title: "Projects Dossier | Gaurav Raju Nawale",
  description: "A comprehensive collection of real-world systems, SaaS products, and automated solutions built by Gaurav Raju Nawale.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <ProjectsFull />
    </main>
  );
}
