import { StyleSheet } from 'react-native'
import { colors, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 0,
    right:0,
    backgroundColor: colors.primary,
    borderTopRightRadius: sizes.regular,
    borderBottomLeftRadius: sizes.xlarge,
    paddingVertical: sizes.tiny,
    paddingLeft: sizes.small,
    paddingRight: sizes.xsmall,
  },
})
