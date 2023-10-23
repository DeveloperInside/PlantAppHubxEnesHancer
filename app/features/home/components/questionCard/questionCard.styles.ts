import { StyleSheet } from 'react-native'
import { radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    overflow: 'hidden',
    ...radiuses.small,
  },
  content: {
    flex: 1,
    padding: sizes.regular,
    justifyContent: 'flex-end',
  },
})
