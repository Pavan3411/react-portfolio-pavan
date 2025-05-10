import project1 from "../assets/projects/project-1n.png";
import project2 from "../assets/projects/project-2n.png";
import project4 from "../assets/projects/project-4n.png";
import project5 from "../assets/projects/image.png";
export const HERO_CONTENT = `I'm a passionate full stack developer focused on building interactive, user-friendly web applications. I specialize in modern technologies like React, TypeScript, Next.js, Node.js, Express.js, MongoDB, and MySQL. My journey began with a curiosity for how the web works, and has since evolved into a drive to craft clean, scalable, and impactful digital experiences. Outside of development, I stay active and continuously explore the latest in tech to stay ahead of the curve.`;

export const ABOUT_TEXT = `As a dedicated full stack developer, I enjoy designing and developing robust, user-centric applications. My technical toolkit includes React, TypeScript, Next.js, Node.js, Express.js, MongoDB, and MySQL. I'm driven by a deep curiosity for technology and a commitment to continuous learning. Whether working on collaborative projects or exploring new ideas on my own, I strive to write clean code and deliver polished user experiences. Beyond coding, I stay active and enjoy exploring emerging tech trends.`;

export const EXPERIENCES = [
  {
    year: "10/2024 - 04/2025",
    role: "Frontend Developer Intern",
    company: "Bharti Soft Tech Pvt. Ltd.",
    location: "Vadodara",
    description:
      "Contributed to a B2B product platform using React.js, Redux, and Tailwind CSS. Improved performance with code-splitting, integrated APIs with caching, and accelerated UI development using Material UI and Shadcn components.",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
    ],
  },{
    year: "02/2024 - 04/2024",
    role: "Full Stack Developer Intern",
    company: "Enlighten Infosystem",
    description:
      "Developed user interfaces with React.js and built RESTful APIs using Node.js and MySQL. Created the SportSpark app for real-time sports updates with mentor guidance.",
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MySQL",
      "Express.js",
      "Tailwind CSS",
    ],
  }
];

export const PROJECTS = [
  {
    title: "Food Delivery Website- Eatsify",
    image: project1,
    description:
      "EatSify is a user-friendly food delivery app offering features like user authentication, cart management, order tracking, and an admin panel for efficient product, order, and user management.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "CSS", "Stripe"],
    link: "https://eatsify-food-delivery-frontend.onrender.com/"
  },
  {
    title: "Podcast Platform - VoiceCast",
    image: project4,
    description:
      "A podcasting platform featuring text-to-voice technology and AI-generated podcast thumbnails.",
    technologies: ["Next.js", "Convex", "Clerk", "OpenAi"],
    link: "https://voicecast-99.vercel.app/sign-in?redirect_url=https%3A%2F%2Fvoicecast-99.vercel.app%2Fpodcasts%2Fj977gemv6rz2skg2a1ewh17j0d6ts170"
  },
  {
    title: "Sports Website-SportSpark",
    image: project2,
    description:
      "A sports update platform showcasing upcoming matches, major events, and live video highlights using simulated API responses.",
    technologies: ["React", "Node.js", "Express.js", "MySql"],
    
    github: "https://github.com/Pavan3411/SportSpark" 
  },
  {
    title: "Customer-Centric B2B Product Platform",
    image: project5,
    description:
      "Contributed to a Buyer Side B2B Product Platform built with React.js and Tailwind CSS. Integrated backend APIs and implemented full flow for modules like product requirements, RFQs, quotes, orders, payments, notifications, login, and address management.",
    technologies: ["React", "Tailwind CSS", "Redux", "REST APIs"],
    github: "https://github.com/nimishavyas-blitznet/FBI-frontend"
    
  }
  
];

export const CONTACT = {
  address: "VADODARA, GUJARAT ",
  phoneNo: "+91 9328496120 ",
  email: "sutharpavan9153@gmail.com",
  copyright: "Copyright ©️. Made by ❤️ Pavan Suthar"
};
