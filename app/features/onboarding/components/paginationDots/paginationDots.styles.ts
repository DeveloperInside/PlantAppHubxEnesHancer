import { StyleSheet } from 'react-native'
import { appStyles, colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    gap: sizes.mini,
    ...appStyles.rowCenter,
  },
  dot: {
    backgroundColor: colors.text,
    opacity: 0.25,
    width: sizes.slim,
    height: sizes.slim,
    ...radiuses.full,
  },
  dotSelected: {
    opacity: 1,
    width: sizes.xsmall,
    height: sizes.xsmall,
    ...radiuses.full,
  },
})
