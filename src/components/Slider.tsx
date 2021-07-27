import { view } from '@risingstack/react-easy-state'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated'
import { state } from 'src/backend/data'
import { SCREEN_WIDTH } from 'src/config/constants'
import { save } from 'src/config/helpers'
import PigWithSign from './PigWithSign'

type Props = {}

function Slider(props: Props) {
  const width = SCREEN_WIDTH - 100
  const step = width / state.words.length
  const [number, setNumber] = useState(state.settings.preferredAmountWords || 10)
  const x = useSharedValue(0)
  const wordsCount = useSharedValue(state.words.length)

  useEffect(() => {
    x.value = withDelay(
      200,
      withSpring(Math.min(state.words.length * step, (width / step) * number)),
    )
  }, [])

  function updateState(currentNumber: number) {
    state.settings.preferredAmountWords = currentNumber
    save('settings', JSON.stringify(state.settings))
  }

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      if (ctx.startX + event.translationX > width) return

      x.value = Math.min(Math.max(1, ctx.startX + event.translationX))
      ctx.updatedValue = Math.min(wordsCount.value, Math.max(1, Math.round(x.value / step)))
      runOnJS(setNumber)(ctx.updatedValue)
    },
    onEnd: (_, ctx) => {
      runOnJS(updateState)(ctx.updatedValue)
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
          height: 5,
          position: 'absolute',
          width: SCREEN_WIDTH - 100,
          top: 30,
          borderRadius: 20,
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
