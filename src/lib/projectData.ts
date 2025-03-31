export type ProjectSlug = keyof typeof projectData;

export function getProjectUrl(slug: ProjectSlug) {
  return `/projects/${slug}`;
}

export const projectData = {
    "project-one": {
      title: "aaaaaa",
      description: "A showcase of modern web development.",
      fullDescription:
        "A detailed description of Project One. This is where you can write about the project's goals, challenges, and outcomes in detail.",
      imageUrl:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=870&auto=format&fit=crop",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      role: "Lead Developer",
      duration: "3 months",
      link: "https://github.com/yourusername/project-one",
      color: "bg-indigo-950",
      featured: true,
    },
    "project-two": {
      title: "Project Two",
      description: "Pushing design boundaries with innovation.",
      fullDescription:
        "A detailed description of Project Two. Explain the project's background, your approach, and the final results.",
      imageUrl:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      role: "Machine Learning Engineer",
      duration: "6 months",
      link: "https://github.com/yourusername/project-two",
      color: "bg-zinc-900",
      featured: true,
    },
    "project-three": {
      title: "Project Three",
      description: "Seamless user experiences through code.",
      imageUrl:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=962&auto=format&fit=crop",
      fullDescription:
        "A detailed description of Project Three. Share the development process and key features.",
      technologies: ["React Native", "Firebase", "Node.js"],
      role: "Full Stack Developer",
      duration: "4 months",
      link: "https://github.com/yourusername/project-three",
      color: "bg-blue-950",
      featured: true,
    },
    "project-four": {
      title: "Project Four",
      description: "Innovative solutions for modern problems.",
      imageUrl:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop",
      fullDescription:
        "A detailed description of Project Four. Discuss the challenges and solutions implemented.",
      technologies: ["Vue.js", "Django", "PostgreSQL"],
      role: "Backend Developer",
      duration: "5 months",
      link: "https://github.com/yourusername/project-four",
      color: "bg-gray-900",
      featured: true,
    },
  };
  