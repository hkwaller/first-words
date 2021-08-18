import { token } from '../../token'
import imageUrlBuilder from '@sanity/image-url'
import { Category as CategoryType, Word as WordType } from './types'

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '7n5vqeel',
  dataset: 'production',
  apiVersion: '2021-07-19',
  token: token,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getCategories() {
  const query = '*[_type == "category"]{...}'
  const categories = await client.fetch(query).then((categories: CategoryType[]) => {
    return categories.map((c: CategoryType) => {
      return {
        title: c.title,
        _id: c._id,
      }
    })
  })

  return categories
}

export async function getWords() {
  const query = '*[_type == "word"]{_id, word, image, category->{_id}}'
  const words = await client.fetch(query).then((words: WordType[]) => words)
  const fixWords = words.filter((w: WordType) => !!w.category)
  const shuffledWords = shuffle(fixWords)

  return shuffledWords
}

export function shuffle(array: WordType[]) {
  var currentIndex = array.length,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export function shuffleLetters(array: string[]) {
  var currentIndex = array.length,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export function getUnusedWords(array: WordType[], wordsLearnt: string[]) {
  const filteredWords = array.filter(word => {
    if (wordsLearnt.indexOf(word._id) === -1) return word
  })

  return filteredWords
}
