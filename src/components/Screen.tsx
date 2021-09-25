import React, { ReactNode } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
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
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopLine style={[styles.line, styles.topLine]} color={colors.lightBlue} />
      <BottomLine style={[styles.line, styles.bottomLine]} color={colors.lightPink} />
      <BackButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 200 }}
        contentContainerStyle={{
          width: SCREEN_WIDTH,
          marginTop: 50,
          paddingBottom: 300,
          paddingHorizontal: 20,
        }}
      >
        {children}
      </ScrollView>

      <View style={[styles.buttonContainer, { bottom: Math.max(insets.bottom, 20) }]}>
        {button ? button : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
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
