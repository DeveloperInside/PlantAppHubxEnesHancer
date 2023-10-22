import { Image } from 'react-native'
import React from 'react'
import { icons } from 'assets'
import { IIcon } from './icon.types'

const Icon = ({ name, size, style }: IIcon) => {
  return (
    <Image
      source={icons[name]}
      style={[{ width: size, height: size, resizeMode: 'contain' }, style]}
    />
  )
}

export default Icon
