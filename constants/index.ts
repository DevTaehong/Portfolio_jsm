import {
  adrian,
  test,
  test2,
  morrent,
  jobit,
  hipnode,
  filmpire,
  morrentProblemStatementImage,
  morrentFigmaDesign,
} from "@/public";
import {
  AnalyticsSEOIcon,
  BackEndIcon,
  FrontEndIcon,
  WebOptimizationIcon,
} from "@/components/svg/serviceIProvide";
import {
  HTMLIcon,
  ExpressIcon,
  FramerMotionIcon,
  GitHubIcon,
  JSIcon,
  MongoDBIcon,
  MUIIcon,
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  SASSIcon,
  CSSIcon,
  GitIcon,
} from "@/components/svg/skills";
import {
  Slack,
  Firefox,
  DigitalOcean,
  Mailchimp,
} from "@/components/svg/workExperience";

export const projectDetails: {
  [key: string]: {
    type: string;
    name: string;
    description: string;
    image: string;
    myRole: string;
    startDate: string;
    endDate: string;
    techStack: React.FC<{ isCaseDetailPage: boolean }>[];
    demoSite: string;
    sourceCode: string;
    learnings: string[];
    detail: string;
    problemStatement: string;
    problemStatementImage: string;
    figmaDesignImage: string;
    challenges: string[];
  };
} = {
  morrent: {
    type: "WEB DEV PROJECT",
    name: "Morrent",
    description: `A Car Rental Website`,
    image: morrent,
    myRole: "Software Developer",
    startDate: "08/08/2023",
    endDate: "03/09/2023",
    techStack: [
      ReactIcon,
      NextJSIcon,
      TailwindIcon,
      MongoDBIcon,
      TypeScriptIcon,
      HTMLIcon,
      CSSIcon,
      GitIcon,
      GitHubIcon,
      FramerMotionIcon,
    ],
    demoSite: "https://morrent.vercel.app/",
    sourceCode: "https://github.com/DevTaehong",
    detail:
      "Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.  My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles. Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.",
    problemStatement:
      "One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.",
    problemStatementImage: morrentProblemStatementImage,
    figmaDesignImage: morrentFigmaDesign,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.",
      "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
    ],
  },
  jobit: {
    type: "WEB DEV PROJECT",
    name: "Jobit",
    description: `Job Finding Application`,
    image: jobit,
    myRole: "Software Developer",
    startDate: "08/08/2023",
    endDate: "03/09/2023",
    techStack: [
      ReactIcon,
      NextJSIcon,
      TailwindIcon,
      MongoDBIcon,
      TypeScriptIcon,
      HTMLIcon,
      CSSIcon,
      GitIcon,
      GitHubIcon,
      FramerMotionIcon,
    ],
    demoSite: "https://morrent.vercel.app/",
    sourceCode: "https://github.com/DevTaehong",
    detail:
      "Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.  My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles. Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.",
    problemStatement:
      "One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.",
    problemStatementImage: morrentProblemStatementImage,
    figmaDesignImage: morrentFigmaDesign,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.",
      "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
    ],
  },
  hipnode: {
    type: "WEB DEV PROJECT",
    name: "HipNode",
    description: `Social Platform for Developers`,
    image: hipnode,
    myRole: "Software Developer",
    startDate: "08/08/2023",
    endDate: "03/09/2023",
    techStack: [
      ReactIcon,
      NextJSIcon,
      TailwindIcon,
      MongoDBIcon,
      TypeScriptIcon,
      HTMLIcon,
      CSSIcon,
      GitIcon,
      GitHubIcon,
      FramerMotionIcon,
    ],
    demoSite: "https://morrent.vercel.app/",
    sourceCode: "https://github.com/DevTaehong",
    detail:
      "Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.  My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles. Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.",
    problemStatement:
      "One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.",
    problemStatementImage: morrentProblemStatementImage,
    figmaDesignImage: morrentFigmaDesign,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.",
      "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
    ],
  },
  filmpire: {
    type: "WEB DEV PROJECT",
    name: "Morrent",
    description: `A Car Rental Website`,
    image: filmpire,
    myRole: "Software Developer",
    startDate: "08/08/2023",
    endDate: "03/09/2023",
    techStack: [
      ReactIcon,
      NextJSIcon,
      TailwindIcon,
      MongoDBIcon,
      TypeScriptIcon,
      HTMLIcon,
      CSSIcon,
      GitIcon,
      GitHubIcon,
      FramerMotionIcon,
    ],
    demoSite: "https://morrent.vercel.app/",
    sourceCode: "https://github.com/DevTaehong",
    detail:
      "Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.  My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles. Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.",
    problemStatement:
      "One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.",
    problemStatementImage: morrentProblemStatementImage,
    figmaDesignImage: morrentFigmaDesign,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.",
      "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
    ],
  },
};

export const companies = [Slack, Firefox, DigitalOcean, Mailchimp];

export const serviceIcons = [
  AnalyticsSEOIcon,
  FrontEndIcon,
  BackEndIcon,
  WebOptimizationIcon,
];

export const techSkills = [
  JSIcon,
  ReactIcon,
  ReduxIcon,
  NextJSIcon,
  TypeScriptIcon,
  HTMLIcon,
  CSSIcon,
  SASSIcon,
  MUIIcon,
  TailwindIcon,
  FramerMotionIcon,
  GitIcon,
  GitHubIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
];

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
  },
  {
    name: "JobIT",
    description: "A Job Finding Application",
    techStack: ["ReactJS, Next.js", "Redux Toolkit, Tailwind"],
    image: jobit,
  },
  {
    name: "HipNode",
    description: "A Social Media Application",
    techStack: ["ReactJS, Next.js", "Node.js, MongoDB"],
    image: hipnode,
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
