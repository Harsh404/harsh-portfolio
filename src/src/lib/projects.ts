// src/lib/projects.ts
export interface Project {
    slug: string;
    title: string;
    summary: string;
    imageUrl: string;
    repoUrl: string;
    liveUrl: string;
    techStack: string[];
  }
  
  const projects: Project[] = [
    {
      slug:   'portfolio',
      title:  'Personal Portfolio',
      summary:
        'My developer portfolio built with Next.js, TypeScript, Framer Motion & Three.js.',
      imageUrl: '/harsh-pic.jpg',
      repoUrl:   'https://github.com/Harsh404/harsh-portfolio',
      liveUrl:   'https://harsh-portfolio-opal.vercel.app/',
      techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Three.js'],
    },
  ];
  
  export default projects;
  