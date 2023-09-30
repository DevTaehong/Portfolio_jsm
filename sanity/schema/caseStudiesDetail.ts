const caseStudiesDetail = {
  name: "caseStudiesDetail",
  title: "Case Studies Detail",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "myRole",
      title: "My Role",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "string",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "string",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      description:
        "Only accept: React, TypeScript, Next.js, MongoDB, CSS, HTML, JavaScript, Tailwind CSS, Git, GitHub, Framer Motion, Redux Toolkit, Node.js, Express, MUI, SASS",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "demoSite",
      title: "Demo Site",
      type: "string",
    },
    {
      name: "sourceCode",
      title: "Source Code",
      type: "string",
    },
    {
      name: "learnings",
      title: "Learnings",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "detail",
      title: "Detail",
      type: "text",
      rows: 12,
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "text",
      rows: 10,
    },
    {
      name: "problemStatementImage",
      title: "Problem Statement Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "figmaDesignImage",
      title: "Figma Design Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default caseStudiesDetail;
