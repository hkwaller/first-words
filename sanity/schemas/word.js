import { baseLanguage } from './schema'

export default {
  name: 'word',
  title: 'Word',
  type: 'document',
  fields: [
    {
      name: 'word',
      title: 'Word',
      type: 'localeString',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: `category.title.${baseLanguage.id}`, direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: `word.${baseLanguage.id}`,
      category: `category.title.${baseLanguage.id}`,
      media: 'image',
    },
    prepare(selection) {
      const { title, category, media } = selection
      return {
        title: title,
        subtitle: category,
        media: media,
      }
    },
  },
}
