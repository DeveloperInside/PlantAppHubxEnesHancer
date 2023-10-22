import { View } from 'react-native'
import React from 'react'
import { IBox } from './box.types'

const Box = ({
  space,
  row,
  radius,
  flex,
  p,
  px,
  py,
  m,
  mx,
  my,
  color,
  style,
  children,
  ...rest
}: IBox) => {
  return (
    <View
      style={[
        {
          gap: space,
          flex: flex,
          flexDirection: row ? 'row' : 'column',
          padding: p,
          paddingHorizontal: px,
          paddingVertical: py,
          margin: m,
          marginHorizontal: mx,
          marginVertical: my,
          borderRadius: radius,
          backgroundColor: color || 'transparent',
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  )
}

export default Box
