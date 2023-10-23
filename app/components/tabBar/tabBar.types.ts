import { icons } from 'assets'

export interface ITabButton {
  icon: keyof typeof icons
  title: string
  selected?: boolean
  onPress?: () => void
}
