const caseStudiesProjects = {
  name: "caseStudiesProjects",
  title: "Case Studies Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};

export default caseStudiesProjects;
