import { icons } from 'assets'
import { ImageProps } from 'react-native'

export interface IIcon {
  name: keyof typeof icons
  size: number
  style?: ImageProps['style']
}
