import { TouchableOpacityProps } from 'react-native'

export interface IPremiumOptionsCard extends TouchableOpacityProps {
  isSelected?: boolean
  badgeText?: string
  title: string
  desc: string
}
