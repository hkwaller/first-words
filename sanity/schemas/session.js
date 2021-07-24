export default {
  name: 'session',
  title: 'Session',
  type: 'document',
  fields: [
    {
      name: 'words',
      title: 'Words',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'word' }] }],
    },
    {
      name: 'learnedWords',
      title: 'Learned words',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
