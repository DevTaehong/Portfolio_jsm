const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt", type: "string" },
        { name: "srcDark", title: "Dark Mode Image", type: "image" },
        {
          name: "srcLightHover",
          title: "Light Mode Hover Image",
          type: "image",
        },
        { name: "srcDarkHover", title: "Dark Mode Hover Image", type: "image" },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};

export default experience;
