import { TextProps } from 'react-native'
import { fonts } from 'theme'

type VariantProps = keyof typeof fonts

export interface ITypo extends TextProps {
  variant: VariantProps
  color?: string
}
