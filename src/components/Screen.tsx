import React, { ReactNode } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'src/config/constants'
import BackButton from './BackButton'
import BottomLine from './svg/BottomLine'
import TopLine from './svg/TopLine'

type Props = {
  children: ReactNode
  button?: ReactNode
}

function Screen({ children, button }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom, paddingTop: insets.top }]}>
      <TopLine style={[styles.line, styles.topLine]} color={colors.lightBlue} />
      <BottomLine style={[styles.line, styles.bottomLine]} color={colors.lightPink} />
      <BackButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: SCREEN_WIDTH - 40,
          height: SCREEN_HEIGHT,
          marginTop: 50,
        }}
      >
        {children}
      </ScrollView>

      <View style={[styles.buttonContainer, { bottom: insets.bottom }]}>
        {button ? button : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: SCREEN_WIDTH,
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
})

export default Screen
