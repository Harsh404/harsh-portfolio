// src/app/projects/page.tsx
import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects — Harsh Rai',
  description: 'A showcase of my featured web projects.',
};

export default function ProjectsPage() {
  return (
    <section className="projects-page container">
      <h1>My Projects</h1>
      <p className="intro">
        Here are a few highlights—click through for live demos, code, and notes on what I learned.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
