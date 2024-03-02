 import projectPortfolio from "../../assets/images/projects/projects-portfolio.webp";
 import projectBasicBlog from "../../assets/images/projects/projects-basicblog.webp";
 import projectRandomTimer from "../../assets/images/projects/projects-randomTimer.webp";
 import projectMetallicaCnc from "../../assets/images/projects/projects-metallica.webp";

export const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    imageUrl: `${projectPortfolio}`,
    description:
      "This is my latest project. Portfolio build using React and TailwindCSS. The site was fully designed in Figma and built by myself.",
    githubUrl: "https://github.com/rafalgrzenia/Portfolio",
    websiteUrl: "https://rafalgrzenia.dev/",
    techStack: ["HTML", "SCSS", "JavaScript", "React", "Tailwind", "Vite"],
    priority: "high",
  },
  {
    id: 2,
    title: "Basic Blog",
    imageUrl: `${projectBasicBlog}`,
    description:
      "It is a project of the blog that was built with React Router. It communicates with API to fetch data using the Axios library.",
    githubUrl: "https://github.com/rafalgrzenia/Basic-Blog",
    websiteUrl: "https://rafalgrzenia.github.io/Basic-Blog/",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Axios",
      "React Router",
    ],
  },
  {
    id: 3,
    title: "Random Timer",
    imageUrl: `${projectRandomTimer}`,
    description:
      "Timer was made based on the study on humans, which shows that random interval breaks for 10 seconds, increase learning efficiency.",
    githubUrl: "https://github.com/rafalgrzenia/Random-Timer",
    websiteUrl: "https://rafalgrzenia.github.io/Random-Timer",
    techStack: ["HTML", "SCSS", "JavaScript", "React", "Vite"],
  },
  {
    id: 4,
    title: "Metallica CNC",
    imageUrl: `${projectMetallicaCnc}`,
    description:
      "This is my first project of the website. I build it for CNC company. Site was ment to be easy and kept in minimalistic manner.",
    githubUrl: "https://github.com/rafalgrzenia/Metallica-cnc.pl",
    websiteUrl: "https://metallica-cnc.pl",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];
