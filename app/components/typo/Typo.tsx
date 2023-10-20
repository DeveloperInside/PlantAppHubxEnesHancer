import { Text } from 'react-native'
import React from 'react'
import { ITypo } from './typo.types'
import { colors, fonts } from 'theme'

const Typo = ({ variant, color, style, children, ...rest }: ITypo) => {
  return (
    <Text
      style={[
        {
          color: color ?? colors.text,
          ...fonts[variant],
        },
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  )
}

export default Typo
