export default {
  name: 'sessionWord',
  title: 'Session word',
  type: 'object',
  fields: [
    {
      name: 'word',
      title: 'Word',
      type: 'reference',
      to: [{ type: 'word' }],
    },
    {
      name: 'timesLearnt',
      title: 'Times learnt',
      type: 'number',
    },
    {
      name: 'hasLearnt',
      title: 'Has learnt',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: `title.en`,
    },
  },
}
