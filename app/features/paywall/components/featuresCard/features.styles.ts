import { StyleSheet } from 'react-native'
import { colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    width: 156,
    overflow: 'hidden',
    ...radiuses.regular,
  },
  blurView: {
    padding: sizes.medium,
  },
  overlay: {
    backgroundColor: colors.primary,
    opacity: 0.1,
    ...StyleSheet.absoluteFillObject,
  },
  iconContainer: {
    flexDirection: 'row',
    padding: sizes.mini,
    overflow: 'hidden',
    ...radiuses.mini,
  },
  iconOverlay: {
    backgroundColor: colors.black,
    opacity: 0.24,
    ...StyleSheet.absoluteFillObject,
  },
})
