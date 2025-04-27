// src/components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

export default function ProjectCard({
  title,
  summary,
  imageUrl,
  repoUrl,
  liveUrl,
  techStack,
}: Project) {
  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="card-image-wrapper">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="tech-stack">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="card-cta">
          <Link href={liveUrl} className="btn-primary" target="_blank">
            Live Demo
          </Link>
          <Link href={repoUrl} className="btn-secondary" target="_blank">
            View Code
          </Link>
        </div>
      </div>
    </motion.article>
  );
}