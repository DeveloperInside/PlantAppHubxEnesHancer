import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { colors, fonts, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.small,
    paddingHorizontal: sizes.medium,
  },
  wrapper: {
    backgroundColor: colors.white + hexTransparencies[85],
    borderWidth: sizes.femto,
    overflow: 'hidden',
    ...radiuses.small,
  },
  input: {
    flex:1,
    ...fonts.paragraph
  },
})
