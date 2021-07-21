import { token } from '../../token'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '7n5vqeel',
  dataset: 'production',
  apiVersion: '2021-07-19',
  token: token,
  useCdn: false,
})

const baseLanguage = 'no'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getWords() {
  const query = '*[_type == "word"]{...}'

  return await client.fetch(query).then(words => {
    return words.map((w: Word) => {
      return {
        word: w.word[baseLanguage],
        _id: w._id,
        image: w.image,
      }
    })
  })
}
