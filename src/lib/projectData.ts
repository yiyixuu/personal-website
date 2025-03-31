export type ProjectSlug = keyof typeof projectData;

export function getProjectUrl(slug: ProjectSlug) {
  return `/projects/${slug}`;
}

export const projectData = {
    "matboard-beam-bridge": {
      title: "Matboard Beam Bridge",
      description: "1200mm long bridge made from 1 piece of matboard",
      fullDescription: `
For the [CIV102](https://orientation.engsci.utoronto.ca/civ102-structures-and-materials/) course project, my team and I designed and constructed a 1200mm long bridge using only a single piece of matboard and contact cement.

<iframe 
  src="https://www.youtube.com/embed/KxGPTM63LrI" 
  title="Bridge Testing Video"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
></iframe>

Our bridge:
- Supported a peak moving load of **840 N** (over 180 lbs!!)
- Tied for **first place** in our section based on peak load capacity
- Achieved **third place** overall in the cohort for power-to-weight ratio efficiency

I led the cross-sectional design process, which involved:
- Performing extensive structural calculations
- Iterating through multiple design variations
- Optimizing performance through analytical modeling

Initially attempting to use MATLAB and Python for calculations, I pivoted to Google Sheets for efficiency, which proved effective for our analytical needs. The project showcased practical applications of structural engineering principles and the importance of iterative design optimization.

Below are the detailed structural calculations used to optimize our bridge design, including parameters for each section, stress analysis, and safety factors:

<img src="/images/bridge-calculations.png" alt="Bridge structural calculations spreadsheet showing section parameters, stress analysis, and safety factors" className="rounded-lg border border-zinc-800" />
      `,
      imageUrl: "/images/bridge-group.png",
      technologies: ["Fusion360", "Structural Analysis", "Civil Engineering Calculations", "Google Sheets"],
      role: "Civil Engineer",
      collaborators: [
        {
          name: "Tiago Ferreira",
          link: "https://www.linkedin.com/in/tiago-ferreira-59a664251/"
        },
        {
          name: "Amely Vorontsov",
          link: "https://www.linkedin.com/in/amelyvorontsov/"
        }
      ],
      link: "https://drive.google.com/file/d/1xIALROID6iFDgDUVxBSVGb0973t5O4ST/view?usp=sharing",
      linkText: "View Project Report",
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
      collaborators: [
        {
          name: "Tiago Ferreira",
          link: "https://www.linkedin.com/in/tiago-ferreira-59a664251/"
        },
        {
          name: "Amely Vorontsov",
          link: "https://www.linkedin.com/in/amelyvorontsov/"
        }
      ],
      link: "https://github.com/yourusername/project-two",
      linkText: "View Repository",
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
      collaborators: [
        {
          name: "Tiago Ferreira",
          link: "https://www.linkedin.com/in/tiago-ferreira-59a664251/"
        },
        {
          name: "Amely Vorontsov",
          link: "https://www.linkedin.com/in/amelyvorontsov/"
        }
      ],
      link: "https://github.com/yourusername/project-three",
      linkText: "View Repository",
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
      collaborators: [
        {
          name: "Tiago Ferreira",
          link: "https://www.linkedin.com/in/tiago-ferreira-59a664251/"
        },
        {
          name: "Amely Vorontsov",
          link: "https://www.linkedin.com/in/amelyvorontsov/"
        }
      ],
      link: "https://github.com/yourusername/project-four",
      linkText: "View Repository",
      color: "bg-gray-900",
      featured: true,
    },
  };
  