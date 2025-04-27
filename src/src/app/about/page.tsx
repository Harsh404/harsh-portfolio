// src/app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="about container">
        
      {/* Heading */}
      <h1>About Me</h1>

      {/* Profile intro */}
      <div className="profile">
        <Image
          src="/harsh-pic.jpg"
          alt="harsh-pic"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="bio">
          <p>
            I’m <strong>Harsh Rai</strong>, a full-stack engineer focused on building
            performant, accessible web applications. I love solving
            challenging problems with clean, maintainable code.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring the Himalayas,
            reading sci-fi, or contributing to open-source.
          </p>
        </div>
      </div>

      {/* Skills */}
      <h2>Core Skills</h2>
      <ul className="skills-list">
        <li>Next.js & React</li>
        <li>TypeScript</li>
        <li>Node.js & Express</li>
        <li>PostgreSQL & Prisma</li>
        <li>Three.js & WebGL</li>
        <li>CI/CD (GitHub Actions, Vercel)</li>
      </ul>

    </section>
  );
}
