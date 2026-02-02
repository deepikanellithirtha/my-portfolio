import { projectsData } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Back Button */}
        <Link href="/" className="text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2 mb-12">
          <span>←</span> Back to Portfolio
        </Link>
        
        {/* Project Visual Header */}
        <div className="w-full h-64 md:h-[400px] bg-slate-900 rounded-3xl mb-12 border border-slate-800 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
          <span className="text-slate-700 font-bold text-xl uppercase tracking-widest z-10">Project Preview Image</span>
          {/* Once you have screenshots, use the Next.js <Image /> component here */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest">
                {project.tech}
              </span>
              <span className="text-slate-500 text-sm font-mono">{project.date}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {project.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                {project.description}
              </p>

              <h3 className="text-2xl font-bold mb-6 text-white">Technical Highlights</h3>
              <ul className="space-y-4 mb-12">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-4 text-slate-300">
                    <span className="text-blue-500 mt-1">✦</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Project Access</h4>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  View Repository <span>↗</span>
                </a>
              </div>

              <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl">
                <p className="text-blue-400 text-sm italic leading-relaxed">
                  "This project demonstrates proficiency in building end-to-end solutions using {project.tech.split('•')[0]}."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}