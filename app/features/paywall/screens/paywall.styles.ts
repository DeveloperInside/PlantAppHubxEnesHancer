import { StyleSheet } from 'react-native'
import { colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  close: {
    padding: 8,
    alignSelf: 'flex-end',
    overflow: 'hidden',
    marginTop: sizes.mini,
    marginRight: sizes.medium,
    ...radiuses.full,
  },
  closeWrapper: {
    backgroundColor: colors.black,
    opacity: 0.4,
    ...StyleSheet.absoluteFillObject,
  },
  subheader: {
    opacity: 0.7,
  },
  upperContainer: {
    flex: 1,
    paddingLeft: sizes.huge,
    justifyContent: 'flex-end',
  },
})
