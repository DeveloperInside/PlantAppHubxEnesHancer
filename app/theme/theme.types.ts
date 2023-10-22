import { colors } from 'theme'
import { sizes } from './sizes'

export type SizesType = typeof sizes
export type RadiusesType = {
  [key in keyof SizesType]: { borderRadius: SizesType[key] }
}

export type ColorsType = keyof typeof colors