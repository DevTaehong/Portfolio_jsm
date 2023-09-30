const testimonials = {
  name: "testimonials",
  title: "Testimonials",
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
      name: "testimonial",
      title: "Testimonial",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};

export default testimonials;
