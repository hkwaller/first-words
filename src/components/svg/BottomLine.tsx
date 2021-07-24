import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string
  style: StyleProp<ViewStyle>
}

function BottomLine({ color = '#F3AECE', style }: Props) {
  return (
    <Svg width={104} height={106} viewBox="0 0 104 106" fill="none" style={style}>
      <Path
        d="M19.527 123.069s-20.95-44.916-3.82-60.738c17.13-15.821 59.08 29.86 74.537 23.112 15.458-6.75-9.028-70.068-12.388-76.892"
        stroke={color}
        strokeWidth={14.473}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default BottomLine
