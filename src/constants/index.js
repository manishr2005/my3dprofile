import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3D Artist",
      icon: web,
    },
    {
      title: "2D Artist",
      icon: mobile,
    },
    {
      title: "3D Animator",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "St. Claret School",
      company_name: "High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2009 - April 2021",
      points: [
        "I began my schooling around 2009 and spent my early years discovering my interest in art and science.",
        "During my high school years, I explored 3D Art and animation, which sparked my passion for interactive storytelling.",
        "After completing 12th in 2023 and I’m now in my 3rd year of university, focusing on 3D art and animation.",
        
      ],
    },
    {
      title: "St. Joseph's University",
      company_name: "Undergraduate",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023 - going",
      points: [
        "Practicing Media studies and Media law of the Industry.",
        "Working in academic Projects based on 3D and 2D artworks.",
        "Developing story-telling skills in script and story writing and also developing in communication skills.",
        "Started on developing the skill-set on 3D animation.",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Manish's work in character design shows impressive understanding of interactive storytelling and visual dynamics.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "He seamlessly combines technical skills and artistic vision to create engaging 3D environments and animations.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He has a strong eye for 3D animation and consistently brings creative ideas to life in his projects.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Game Asset",
      description:
        "A Game cup scuplted and painted in Blender and retopogized for game engine.",
      tags: [
        {
          name: "Scuplting",
          color: "blue-text-gradient",
        },
        {
          name: "Asset Design",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/manishr2005",
    },
    {
      name: "Product Ad",
      description:
        "Perfume Ad animation created and animated in blender.",
      tags: [
        {
          name: "Product Ad",
          color: "blue-text-gradient",
        },
        {
          name: "3D Animation",
          color: "green-text-gradient",
        },
        {
          name: "Cycles",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/manishr2005",
    },
    {
      name: "Illustration",
      description:
        "A 2D illustration work done for my friend's project",
      tags: [
        {
          name: "2D sketch",
          color: "blue-text-gradient",
        },
        {
          name: "Character pose",
          color: "green-text-gradient",
        },
        {
          name: "Illustration",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/manishr2005",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };