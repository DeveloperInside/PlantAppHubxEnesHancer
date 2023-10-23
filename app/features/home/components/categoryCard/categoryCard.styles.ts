import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    width: 158,
    height: 152,
    overflow: 'hidden',
    backgroundColor: colors.category_card_bg,
    borderWidth: sizes.pico,
    borderColor: colors.category_card_stroke + hexTransparencies[18],
    ...radiuses.small,
  },
  content: {
    flex: 1,
    padding: sizes.medium,
  },
})
