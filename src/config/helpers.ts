import AsyncStorage from '@react-native-async-storage/async-storage'

export async function save(key: string, value: string) {
  await AsyncStorage.setItem(key, value)
}

export async function getValueFor(key: string) {
  let result = await AsyncStorage.getItem(key)
  if (result) {
    console.log("🔐 Here's your value 🔐 \n" + result)
    return result
  } else {
    console.log('No values stored under that key.')
    return undefined
  }
}
