import { Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './button.styles'
import { IButton } from './button.types'

const Button = ({ title, ...rest }: IButton) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Button
