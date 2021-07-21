import React from 'react'
import { Text, Image } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { urlFor } from '../backend/api'

type Props = {
  word: Word
  index: number
}

function Word({ word, index }: Props) {
  const x = useSharedValue(0)
  const y = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
      console.log('🚀 ~ file: Word.tsx ~ line 28 ~ Word ~ event.translationX', event.translationX)
    },
    onEnd: _ => {
      if (x.value > 100) {
        x.value = withSpring(1000)
      } else {
        x.value = withSpring(0)
      }
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'purple',
            position: 'absolute',
          },
          animatedStyle,
        ]}
      >
        <Text>{word.word}</Text>
        <Image
          width={100}
          height={100}
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
          source={{ uri: urlFor(word.image).width(150).url()! }}
        />
      </Animated.View>
    </PanGestureHandler>
  )
}
export default Word
