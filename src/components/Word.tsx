import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { state } from 'src/backend/data'
import { CARD_WIDTH } from 'src/config/constants'
import { urlFor } from '../backend/api'

type Props = {
  word: Word
  index: number
  isActive: boolean
  updateIndex: () => void
}

function Word({ word, index, isActive, updateIndex }: Props) {
  const x = useSharedValue(0)
  const y = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value
      ctx.startY = y.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
      y.value = ctx.startY + event.translationY
    },
    onEnd: _ => {
      if (x.value > 50) {
        runOnJS(updateIndex)()
        x.value = withSpring(1000)
      } else if (x.value < -50) {
        runOnJS(updateIndex)()
        x.value = withSpring(-1000)
      } else if (y.value > 50) {
        runOnJS(updateIndex)()
        y.value = withSpring(1000)
      } else if (y.value < -50) {
        runOnJS(updateIndex)()
        y.value = withSpring(-1000)
      } else {
        x.value = withSpring(0)
        y.value = withSpring(0)
      }
    },
  })

  const animatedStyle = useAnimatedStyle<any>(() => {
    return {
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { rotateZ: withSpring(index % 2 === 0 ? 0.03 : -0.03) },
      ],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle, { zIndex: 200 - index }]}>
        <Text style={{ fontFamily: 'AvocadoCreamy', fontSize: 60, marginBottom: 20 }}>
          {word.word[state.settings.language]}
        </Text>
        <Image
          width={100}
          height={100}
          resizeMode="contain"
          style={{ width: CARD_WIDTH - 70, height: CARD_WIDTH - 70 }}
          source={{ uri: urlFor(word.image).width(CARD_WIDTH).url()! }}
        />
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 3,
  },
})

export default Word
