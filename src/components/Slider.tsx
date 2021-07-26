import { view } from '@risingstack/react-easy-state'
import React, { useState } from 'react'
import { View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { state } from 'src/backend/data'
import { SCREEN_WIDTH } from 'src/config/constants'
import PigWithSign from './PigWithSign'

type Props = {}

function Slider(props: Props) {
  const width = SCREEN_WIDTH - 100
  const step = width / state.words.length
  const [number, setNumber] = useState(state.settings.preferredAmountWords)
  const x = useSharedValue((width / step) * state.settings.preferredAmountWords)
  const wordsCount = useSharedValue(state.words.length)

  function updateState(currentNumber: number) {
    state.settings.preferredAmountWords = currentNumber
  }

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      if (ctx.startX + event.translationX > width) return

      x.value = Math.min(Math.max(1, ctx.startX + event.translationX))
      runOnJS(setNumber)(Math.min(wordsCount.value, Math.max(1, Math.round(x.value / step))))
    },
    onEnd: _ => {
      runOnJS(updateState)(Math.min(wordsCount.value, Math.max(1, Math.round(x.value / step))))
    },
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
          height: 4,
          position: 'absolute',
          width: SCREEN_WIDTH - 100,
          top: 30,
        }}
      />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={animatedStyle}>
          <PigWithSign number={number} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
export default view(Slider)
