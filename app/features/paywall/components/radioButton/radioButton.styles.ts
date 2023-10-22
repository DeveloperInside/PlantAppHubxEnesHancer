import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  selected: {
    backgroundColor: colors.white,
    padding: sizes.tiny,
    borderWidth: 8,
    borderColor: colors.primary,
    ...radiuses.full
  },
  notSelected: {
    backgroundColor: colors.white + hexTransparencies[8],
    padding: sizes.small,
    ...radiuses.full
  }
})
