export default {
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    {
      name: "words",
      title: "Words",
      type: "array",
      of: [{ type: "word" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
