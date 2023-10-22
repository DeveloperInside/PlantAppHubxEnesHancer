import { RadiusesType, SizesType } from './theme.types'

export const sizes = {
  atto: 0.1,
  femto: 0.2,
  pico: 0.5,
  nano: 1,
  micro: 2,
  tiny: 4,
  slim: 6,
  mini: 8,
  xsmall: 10,
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  huge: 24,
  giant: 28,
  massive: 32,
  full: 200,
}

export const radiuses: RadiusesType = {} as RadiusesType

for (const size in sizes) {
  radiuses[size as keyof SizesType] = {
    borderRadius: sizes[size as keyof SizesType],
  }
}