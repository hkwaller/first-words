import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { state } from 'src/backend/data'
import AnimalButton from 'src/components/AnimalButton'
import BackButton from 'src/components/BackButton'
import { BodyText } from 'src/components/styled'
import BottomLine from 'src/components/svg/BottomLine'
import TopLine from 'src/components/svg/TopLine'
import { animals, colors } from 'src/config/constants'
import LanguageSelector from '../start/components/LanguageSelector'

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <TopLine style={[styles.line, styles.topLine]} color={colors.lightBlue} />
      <BottomLine style={[styles.line, styles.bottomLine]} color={colors.lightPink} />
      <BackButton />
      <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 50 }}>
        <LanguageSelector />
        <View style={styles.animalWrapper}>
          <BodyText style={{ marginTop: 40 }}>Hvilket dyr vil du være?</BodyText>
          <View style={styles.animalContainer}>
            {animals.map(animal => {
              return <AnimalButton key={animal.name} {...{ animal }} />
            })}
          </View>
        </View>
        <BodyText style={{ marginTop: 40 }}>Byttet navn siden sist?</BodyText>
        <TextInput
          placeholder="Hva heter barnet?"
          style={styles.input}
          placeholderTextColor="gray"
          value={state.settings.name}
          onChangeText={text => {
            state.settings.name = text
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    paddingTop: 40,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
  },
  topLine: {
    right: 20,
    top: 0,
  },
  bottomLine: {
    left: 20,
    bottom: 0,
  },
  animalWrapper: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingBottom: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: 'white',
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 4,
    fontSize: 24,
    width: '100%',
  },
})

export default view(Settings)
