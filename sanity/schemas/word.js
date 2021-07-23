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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'wordcategory',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      title: `word.${baseLanguage.id}`,
      media: 'image',
      category: 'wordcategory',
    },
  },
}
