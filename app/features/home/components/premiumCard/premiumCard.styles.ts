import { StyleSheet } from 'react-native'
import { colors, radiuses, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.premium_card_bg,
    paddingLeft: sizes.xlarge,
    paddingVertical: sizes.regular,
    overflow: 'hidden',
    ...radiuses.small,
  },
  mail: {
    paddingTop: sizes.medium,
    paddingBottom: sizes.xlarge,
    marginRight: sizes.medium
  },
  gradientBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})
