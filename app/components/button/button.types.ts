import { PressableProps, ViewProps } from 'react-native'

export interface IButton extends PressableProps {
  title: string,
  style?: ViewProps['style']
}
