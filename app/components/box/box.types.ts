import { ViewProps } from 'react-native'

export interface IBox extends ViewProps {
  space?: number
  row?: boolean
  color?: string
  px?: number
  py?: number
  p?: number
  m?: number
  mx?: number
  my?: number
  radius?: number
}
