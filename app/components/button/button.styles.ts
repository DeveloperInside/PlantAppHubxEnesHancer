import { StyleSheet } from 'react-native'
import { appStyles, colors, sizes, radiuses, fonts } from 'theme'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: sizes.medium,
    ...radiuses.small,
    ...appStyles.centerItems,
  },
  pressed: {
    backgroundColor: colors.primary_dark,
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: colors.white,
    ...fonts.button,
  },
})
