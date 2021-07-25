import React, { useState } from 'react'
import { View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { SCREEN_WIDTH } from 'src/config/constants'
import PigWithCard from './PigWithCard'

type Props = {}

function Slider(props: Props) {
  const x = useSharedValue(0)
  const [number, setNumber] = useState(10)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      if (ctx.startX + event.translationX < 0 || ctx.startX + event.translationX > 200) return
      x.value = ctx.startX + event.translationX
      runOnJS(setNumber)(Math.floor(x.value))
    },
    onEnd: _ => {},
  })

  const animatedStyle = useAnimatedStyle<any>(() => {
    return {
      transform: [{ translateX: x.value }],
    }
  })

  return (
    <View>
      <View
        style={{
          backgroundColor: 'black',
          height: 8,
          position: 'absolute',
          width: SCREEN_WIDTH - 100,
          top: 30,
        }}
      />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={animatedStyle}>
          <PigWithCard number={number} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
export default Slider
