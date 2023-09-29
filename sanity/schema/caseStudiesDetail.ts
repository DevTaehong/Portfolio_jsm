const caseStudiesDetail = {
  name: "caseStudiesDetail",
  title: "Case Studies Detail",
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

export default caseStudiesDetail;
