import React from 'react'
import { Text, Image } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
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
  isActive: boolean
  setActiveIndex: (val: number) => void
}

function Word({ word, index, isActive, setActiveIndex }: Props) {
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const scale = useSharedValue(0.9)

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
      if (x.value > 200) {
        x.value = withSpring(1000)
        scale.value = 1
        setActiveIndex(index)
      } else {
        x.value = withSpring(0)
      }
      y.value = withSpring(0)
    },
  })

  const animatedStyle = useAnimatedStyle<any>(() => {
    return {
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { rotateZ: isActive ? 0 : index % 2 === 0 ? 0.03 : -0.03 },
        { scale: scale.value },
      ],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          {
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
            shadowOpacity: 0.22,
            shadowRadius: 10.22,

            elevation: 3,
          },
          animatedStyle,
        ]}
      >
        <Text style={{ fontFamily: 'AvocadoCreamy', fontSize: 60, letterSpacing: 12 }}>
          {word.word}
        </Text>
        <Image
          width={100}
          height={100}
          resizeMode="contain"
          style={{ width: 200, height: 200 }}
          source={{ uri: urlFor(word.image).width(200).url()! }}
        />
      </Animated.View>
    </PanGestureHandler>
  )
}

export default Word
