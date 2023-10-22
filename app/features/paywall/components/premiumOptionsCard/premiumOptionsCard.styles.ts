import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    borderWidth: sizes.pico,
    borderColor: colors.white + hexTransparencies[30],
    backgroundColor: colors.white + hexTransparencies[5],
    paddingVertical: sizes.regular,
    paddingHorizontal: sizes.medium,
    alignItems: 'center',
    ...radiuses.regular
  },
  selected: {
    borderWidth: 1.5,
    borderColor: colors.primary,
  }
})
