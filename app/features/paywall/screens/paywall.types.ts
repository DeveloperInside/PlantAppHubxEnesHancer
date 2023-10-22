import { icons } from 'assets'

export interface ICardConfigure {
  icon: keyof typeof icons
  title: string
  subtitle: string
}
