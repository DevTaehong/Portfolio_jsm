import { adrian, test, test2, morrent, jobit, hipnode } from "@/public";

export const jobs = [
  {
    company: "Slack",
    description: "Product Design - 4 Years Experience",
  },
  {
    company: "Firefox",
    description: "Sr. UI Design - 4 Years Experience",
  },
  {
    company: "Digital Ocean",
    description: "UI & Motion Designer - 4 Years Experience",
  },
  {
    company: "Mailchimp",
    description: "UI Designer - 4 Years Experience",
  },
];

export const testimonialsData = [
  {
    name: "— Adrian Hajdin",
    testimonial:
      "I have had the pleasure of working with Adrian as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. ",
    title: "Founder & CEO at JS Mastery",
    picture: adrian,
  },
  // NOTE - Add real people testimonial data
  {
    name: "- Jane Smith",
    testimonial: "I love the design and functionality of this website.",
    title: "Full-stack developer",
    picture: test,
  },
  {
    name: "- Test",
    testimonial: "Test Test Test Test",
    title: "Software developer",
    picture: test2,
  },
];

export const projects = [
  {
    name: "Morrent",
    description: `A Car Rental Application`,
    techStack: ["ReactJS, Next.js", "Tailwind, MongoDB"],
    image: morrent,
    color: "bg-morrent",
  },
  {
    name: "JobIT",
    description: "A Job Finding Application",
    techStack: ["ReactJS, Next.js", "Redux Toolkit, Tailwind"],
    image: jobit,
    color: "bg-jobit",
  },
  {
    name: "Hipnode",
    description: "A Social Media Application",
    techStack: ["ReactJS, Next.js", "Node.js, MongoDB"],
    image: hipnode,
    color: "bg-hipnode",
  },
];

export const services = [
  {
    service: "Analytics & SEO",
    description:
      "Implement tracking & analytics tools to monitor website performance & improve SEO.",
  },
  {
    service: "Front-End Dev",
    description:
      "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
  },
  {
    service: "Back-End Dev",
    description:
      "Back-end includes building the server-side functionality that powers websites & applications.",
  },
  {
    service: "Web Optimization",
    description:
      "Web optimization focuses on improving website performance for a smoother user experience",
  },
];
