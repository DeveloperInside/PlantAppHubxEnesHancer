import { Text } from 'react-native'
import React from 'react'
import { ITypo } from './typo.types'
import { colors, fonts } from 'theme'

const Typo = ({ variant='paragraph', color, opacity, center, style, children, ...rest }: ITypo) => {
  return (
    <Text
      style={[
        {
          opacity: opacity ?? 1,
          color: color ?? colors.text,
          textAlign: center ? 'center' : 'auto',
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
