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
  Definition,
  Design,
  Planning,
  Development,
  Deployment,
} from "@/components/svg/myProcess";
import { FooterGitHubIcon, LinkedInIcon } from "@/components/svg/footer";
import { Call, Email } from "@/components/svg/contact";

export const myProcess = [
  Definition,
  Design,
  Planning,
  Development,
  Deployment,
];

export const myProcessText = [
  "Definition",
  "Design",
  "Planning",
  "Development",
  "Deployment",
];

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

export const heroText = ["Case", "Studies"];

export const links = [
  {
    link: "https://www.linkedin.com/in/taehong/",
    icon: LinkedInIcon,
  },
  {
    link: "https://github.com/DevTaehong",
    icon: FooterGitHubIcon,
  },
];

export const emailPhoneNumber = [
  {
    title: "Phone Number",
    icon: Call,
    numberOrEmail: "+1 (782) 234-7489",
  },
  {
    title: "Email Address",
    icon: Email,
    numberOrEmail: "minth1123@icloud.com",
  },
];

export const inputFields = [
  {
    label: "What's your name?",
    id: "name",
    name: "name",
    type: "text",
    maxLength: 50,
    required: true,
  },
  {
    label: "What's your email?",
    id: "email",
    name: "email",
    type: "email",
    maxLength: 500,
    required: true,
  },
  {
    label: "Write something about your project goals and time frame",
    id: "goalsTimeFrame",
    name: "goalsTimeFrame",
    type: "text",
    maxLength: 500,
    required: true,
    isTextArea: true,
  },
  {
    label: "How to react out",
    id: "howToReactOut",
    name: "howToReactOut",
    type: "text",
    maxLength: 500,
    pattern: "^(?:\\d{10}|\\w+@\\w+\\.\\w{2,3})$",
    required: true,
  },
];

export const sortOrder: {
  [key: string]: number;
} = {
  Hipnode: 1,
  Morent: 2,
  JobIt: 3,
  Filmpire: 4,
};

export const sortedExperience: { [key: string]: number } = {
  "Software Developer - March 2024 - Present": 1,
  "Software Developer - April 2022 - May 2022": 2,
};

export const techStackIcons: {
  [key: string]: React.FC<{ isCaseDetailPage: boolean }>;
} = {
  HTML: HTMLIcon,
  Express: ExpressIcon,
  "Framer Motion": FramerMotionIcon,
  GitHub: GitHubIcon,
  JavaScript: JSIcon,
  MongoDB: MongoDBIcon,
  MUI: MUIIcon,
  "Next.js": NextJSIcon,
  "Node.js": NodeIcon,
  React: ReactIcon,
  "Redux Toolkit": ReduxIcon,
  "Tailwind CSS": TailwindIcon,
  TypeScript: TypeScriptIcon,
  SASS: SASSIcon,
  CSS: CSSIcon,
  Git: GitIcon,
};

export const companyPositions: { [key: string]: number } = {
  "": 0,
  "Koii network": 200.5,
  "Nova Scotia Community College": 401,
};
