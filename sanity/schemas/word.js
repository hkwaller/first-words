import { baseLanguage } from "./schema";

export default {
  name: "word",
  title: "Word",
  type: "document",
  fields: [
    {
      name: "word",
      title: "Word",
      type: "localeString",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: `word.${baseLanguage.id}`,
      media: "image",
    },
  },
};
