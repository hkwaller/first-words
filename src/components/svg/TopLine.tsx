import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string
  style: StyleProp<ViewStyle>
}

function TopLine({ color, style }: Props) {
  return (
    <Svg width={104} height={106} viewBox="0 0 104 106" fill="none" style={style}>
      <Path
        d="M17.639-17.734S-1.934 27.8 15.669 43.092c17.604 15.293 58.144-31.645 73.8-25.37 15.656 6.276-6.891 70.31-10.043 77.234"
        stroke={color}
        strokeWidth={14.473}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default TopLine
